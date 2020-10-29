import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/AuthContext';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { Container, Content, Background } from './style';

import logo from '../../assets/logo.svg';
import getValidationErrors from '../../utils/getValidationErrors';

interface SigInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: SigInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digíte um e-mail válido.'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({ email: data.email, password: data.password });

    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }

  }, [signIn]);
  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>
          <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
          <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
          <Button type="submit">Entrar</Button>
          <a href="/">Esqueci minha senha</a>
        </Form>

        <a href="/">
          <FiLogIn /> Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  )
}

export default SignIn;