import React, { useCallback, useRef } from 'react';

import {
  FiMail, FiLock, FiArrowRight, FiLogIn,
} from 'react-icons/fi';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';

import 'react-toastify/dist/ReactToastify.css';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../assets/logotrip.svg';

import {
  Container,
  Content,
  Background,
  Header,
  AnimationContainer,
} from './styles';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(

    async (data: SignInFormData) => {
      try {
          formRef.current?.setErrors({});
          const schema = Yup.object().shape({
            email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail valido'),
            password: Yup.string().required('Senha obrigatoria'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          await signIn({
            email: data.email,
            password: data.password,
          });

          history.push('/dashboard');
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        toast.error('Ocorreu um erro ao realizar o login no Bora!', { autoClose: 2000 });
      }
    }, [history, signIn],
  );

  return (
    <Container>
      <Content>
        <Header>
          <h1>Bora</h1>
          <img src={logo} alt="logo" />
        </Header>

        <AnimationContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça viagens memoraveis</h1>

            <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />
            <Input icon={FiLock} name="password" type="password" placeholder="Senha" />

            <Button icon={FiArrowRight} type="submit">
              <span><FiArrowRight size={20} /></span>
              <strong>Entrar</strong>
            </Button>

            <a href="/forgot-password">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>

        </AnimationContainer>

      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
