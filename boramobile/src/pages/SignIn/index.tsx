import React, { useCallback, useRef } from 'react';
import { View, Image, ScrollView,KeyboardAvoidingView, Platform, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/AuthContext';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';


import Input from '../../components/Input';
import Button from '../../components/Button';

import { 
    Container, 
    Header, 
    Title, 
    MiddleTitle,
    MiddleTitleDown, 
    BottomTitle, 
    AlignContainer,
    MiddleContainer,
    ForgotPassword,
    ForgotPasswordText

} from './styles';

interface SignInFormData {
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const { signIn } = useAuth();

    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

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
    
              
          } catch (err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
    
            Alert.alert('Erro na autenticacao', 'Ocorreu um erro ao realizar o login no Bora!')
          }
        }, [signIn],
      );

    return (
      <>
        <KeyboardAvoidingView 
          style={{ flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
        >
          <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1}}>
            <Container>
          
              <Header>
                <Title>Bora</Title>
                <Image source={logoImg} />
              </Header>
  
              <MiddleContainer>
                <MiddleTitle>Faça viagens </MiddleTitle>
                <MiddleTitleDown>memoraveis </MiddleTitleDown>
  
              </MiddleContainer>
              <View>
                <BottomTitle>Conheca pessoas, divida o momento.</BottomTitle>
              </View>
  
              <AlignContainer>

                <Form ref={formRef} onSubmit={handleSubmit}>

                  <Input 
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    name="email" 
                    icon="mail" 
                    placeholder="E-mail"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        passwordInputRef.current?.focus();
                    }}
                  />
                  <Input 
                    ref={passwordInputRef}
                    secureTextEntry
                    name="password" 
                    icon="lock" 
                    placeholder="Senha"
                    returnKeyType="send"
                    onSubmitEditing={
                        () => {formRef.current?.submitForm()
                    }
}
                  />
                  <Button icon="arrow-right" onPress={() => formRef.current?.submitForm()}>Entrar</Button>
                </Form>
                
                <ForgotPassword onPress={() => {formRef.current?.submitForm()}}>
                  <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ForgotPassword>


              </AlignContainer>

          
  
            </Container>

            {/* <CreateAccontButton onPress={() => navigation.navigate('SignUp')}>
              <Icon name="log-in" size={20} color="#6c63ef" />
              <CreateAccontButtonText>
                Criar conta
              </CreateAccontButtonText>
            </CreateAccontButton> */}
          </ScrollView>
        </KeyboardAvoidingView>
      </>

    );
};

export default SignIn;