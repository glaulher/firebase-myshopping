<p align="center" >
  <img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="100" />
</p>

<h1 align="center">
  🚀Cloud Firestore🚀
</h1>

<p align="center" >
  <img alt="Repository size" src="https://img.shields.io/badge/Mobile-react--native-blue?style=for-the-badge">

<img alt="Repository size" src="https://img.shields.io/npm/types/typescript?style=for-the-badge">

<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/glaulher/react-native_Ignite?style=for-the-badge">

<img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
</p>

---

## 📋 Sobre

<img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="22" /> Cloud Firestore, Fundamentos do Firebase, Ignite (Rocketseat) - React Native.

---

## 📂 Como rodar este projeto

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com), [NodeJs](https://nodejs.org/en/) e [Android Studio](https://developer.android.com/studio) Instalado em seu computador.

### 🌀 Clonando o repositório

```bash
# Clone este repositório
$ git clone https://github.com/glaulher/firebase-myshopping.git

# Acesse a pasta do projeto no terminal/cmd
$ cd firebase-myshopping
```

### 🎲 Rodando a Aplicação

```bash
# Instale as dependências
$ yarn install ou npm install

# Execute o projeto
$ npx expo start
```

✔️ Notas:

Instalação das bibliotecas para utilizar o firebase/auth:

```shell
$ npx expo install @react-native-firebase/app

# Install the authentication module
$ yarn add @react-native-firebase/auth
```

Autenticação anônima - o usuário realiza a autenticação sem criar uma conta, apps de menu de restaurantes por exemplo, seriam um bom caso de uso para este tipo de autenticação.

```javascript
   async function handleSignInAnonymously() {
    const { user } = await auth().signInAnonymously();
    // eslint-disable-next-line no-console
    console.log(user);
  } 
```



---

Para criar com e-mail e senha:

```shell

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

```

Para logar com e-mail e senha:

```javascript
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
  
```

Para realizar logout:

```javascript
  function handleLogout() {
    auth().signOut();
  }
```

Para realizar  a troca da senha:

```javascript
   function handleForgotPassword() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          'Enviamos um link no seu e-mail para redefinir a sua senha.',
        ),
      );
  }

```



## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org)

---

## 🧑 Autor

<img style="border-radius: 75px;" src="https://glaulher.github.io/assets/img/sample/avatar.jpeg" width="150px;" alt=""/>
 <h4>Glaulher Medeiros</h4>

<p align="left">
<span style="inline-block;">
  <a href="https://www.linkedin.com/in/glaulher-medeiros-03799967/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" ></a>
</span>
<span style="inline-block;">
  <a href="https://glaulher.github.io/" target="_blank"><img src="https://img.shields.io/badge/github.io-gray?style=for-the-badge&logo=github&logoColor=white" ></a>
</span>

<span style="inline-block;">
  <a href="https://terminaldopenguin.blogspot.com/" target="_blank"><img src="https://img.shields.io/badge/blog-orange?style=for-the-badge&logo=blogger&logoColor=white"></a>
</span>
</p>

---

## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](https://github.com/glaulher/react-native_Ignite/blob/main/LICENSE) para saber mais.
