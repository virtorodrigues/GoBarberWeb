import React from 'react';
import SignIn from './pages/SignIn';
//import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
