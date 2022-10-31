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

Instalação das bibliotecas para utilizar o firebase:

```shell

$ npx expo install @react-native-firebase/app

$ yarn add @react-native-firebase/firestore

```
Algumas opções para utilizar com o firebase na utilização da query:

```shell
.where('quantity','==',1) // busca os itens onde as quantidades são iguais a 1
.limit(3) // limita a quantidade de retorno
.orderBy('quantity', 'asc') // por ordem asc ou desc
.startAt (2) // não lista quiantidade menor que 2
.endAt(3) // não lista com quantidade maior que 3
.startAfter(3) // se usado a lista inicia a partir do 4
.endBefore(5) // se usado, lista abaixo de 5
.get()  // Para buscar apenas uma vez

```

---
Para listar:

```shell
 const subscribe = firestore()
      .collection('products')
      .orderBy('description', 'asc')
      // Para ficar observando as alterações:
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setProducts(data);
      });
    // Limpa ao desmontar o componente
    return () => subscribe();
```
Para deletar:
```shell
  firestore()
  .collection('products')
  .doc(data.id)
  .delete();
```

Para atualizar(neste exemplo, está sendo mudado o estado de done na tabela):
```shell
  firestore()
  .collection('products')
  .doc(data.id)
  .update({
      done: !data.done,
    });
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
