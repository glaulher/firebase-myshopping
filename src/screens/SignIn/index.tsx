import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

import { Container, Account, Title, Subtitle } from './styles';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*   async function handleSignInAnonymously() {
    const { user } = await auth().signInAnonymously();
    // eslint-disable-next-line no-console
    console.log(user);
  } */

  async function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert('Usuário criado com sucesso'))
      .catch(error => {
        // console.log(error.code);

        switch (error.code) {
          case 'auth/email-already-in-use':
            return Alert.alert(
              'E-mail não disponível. Escolha outro e-mail para cadastrar!',
            );

          case 'auth/invalid-email':
            return Alert.alert('E-mail inválido!');

          case 'auth/weak-password':
            return Alert.alert('A senha deve ter no mínimo 6 dígitos');

          default:
            return Alert.alert(
              'Houve uma falha contate o administrador do sistema',
            );
        }
      });
  }

  function handleSignInWithEmailAndPassword() {
    auth()
      .signInWithEmailAndPassword(email, password)
      // eslint-disable-next-line no-console
      .then(({ user }) => console.log(user))

      .catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            return Alert.alert(
              'E-mail não disponível. Escolha outro e-mail para cadastrar!',
            );

          case 'auth/invalid-email':
            return Alert.alert('E-mail inválido!');

          case 'auth/weak-password':
            return Alert.alert('A senha deve ter no mínimo 6 dígitos');

          case '[auth/user-not-found] ':
            return Alert.alert('Usuário não cadastrado!');

          default:
            return Alert.alert(
              'Houve uma falha contate o administrador do sistema',
            );
        }
      });
  }

  function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          'Enviamos um link no seu e-mail para redefinir a sua senha.',
        ),
      );
  }

  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder="e-mail"
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Input placeholder="senha" onChangeText={setPassword} secureTextEntry />

      <Button
        title="Entrar"
        onPress={() => handleSignInWithEmailAndPassword()}
      />

      <Account>
        <ButtonText
          title="Recuperar senha"
          onPress={() => handleForgotPassword()}
        />
        <ButtonText
          title="Criar minha conta"
          onPress={() => handleCreateUserAccount()}
        />
      </Account>
    </Container>
  );
}
