import React, { useCallback, useRef } from 'react';

import {
  FiMail, FiLock, FiArrowRight, FiUser, FiCompass, FiMapPin, FiArrowLeft,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import Button from '../../components/Button';
import Input from '../../components/Input';
import logo from '../../assets/logotrip.svg';
import api from '../../services/api';

import {
  Container,
  Content,
  Background,
  Header,
  AnimationContainer,
} from './styles';

interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    uf: string;
    city: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(

    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatorio'),
          email: Yup.string().required('E-mail obrigatorio').email('Digite um e-mail valido'),
          password: Yup.string().min(6, 'No minimo 6 digitos'),
          uf: Yup.string().required('UF obrigatoria'),
          city: Yup.string().required('Cidade obrigatoria'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);
        toast.success('Cadastro realizado com sucesso!', { autoClose: 2000 });

        history.push('/profile');
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);

        toast.error('Ocorreu um erro ao realizar o cadastro no Bora!', { autoClose: 2000 });
      }
    }, [history],
  );

  return (
    <Container>
      <Background />
      <Content>
        <Header>
          <h1>Bora</h1>
          <img src={logo} alt="logo" />
        </Header>

        <AnimationContainer>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Tenha experiências únicas</h1>

            <Input icon={FiUser} name="name" placeholder="Nome" />
            <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />
            <Input icon={FaWhatsapp} name="whatsapp" placeholder="Whatsapp" />
            <Input icon={FiLock} name="password" type="password" placeholder="Senha" />
            <Input icon={FiCompass} name="uf" placeholder="UF" />
            <Input icon={FiMapPin} name="city" placeholder="Cidade" />

            <Button icon={FiArrowRight} type="submit">
              <span><FiArrowRight size={20} /></span>
              <strong>Entrar</strong>
            </Button>

          </Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para o logon
          </Link>
        </AnimationContainer>
      </Content>

    </Container>
  );
};

export default SignIn;
