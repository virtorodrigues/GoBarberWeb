import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Button from '../../components/Button';


import { Container, Content, Background } from './style';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="user-name" type="text" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="text" placeholder="Email" icon={FiMail} />
          <Input name="password" type="password" placeholder="Senha" icon={FiLock} />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft /> Voltar para login
        </a>
      </Content>

    </Container>
  )
}

export default SignUp;