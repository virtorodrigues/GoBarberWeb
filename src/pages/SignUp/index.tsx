import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './style';

import logo from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string().required('E-mail obrigatório').email('Digíte um e-mail válido.'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);

    }

    console.log(data);
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
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