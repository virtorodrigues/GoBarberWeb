import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Content, Background } from './style';

import logo from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="" />

      <form action="">
        <h1>Faça seu login</h1>
        <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
        <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit">Entrar</Button>
        <a href="/">Esqueci minha senha</a>
      </form>

      <a href="/">
        <FiLogIn /> Criar conta
      </a>
    </Content>

    <Background />
  </Container>
)

export default SignIn;