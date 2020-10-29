import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';


interface AuthContextProps {
  user: object;
  signOut(): void;
  signIn(credentials: AuthUserProps): Promise<void>;
}

interface AuthUserProps {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;

  });

  const signIn = useCallback(async ({ email, password }: AuthUserProps): Promise<void> => {
    const authUser = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = authUser.data;

    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthState)

  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      { children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be  used within an AuthProvider');
  }

  return context;
};