<p align="center" >
  <img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="100" />
</p>

<h1 align="center">
  🚀Storage🚀
</h1>

<p align="center" >
  <img alt="Repository size" src="https://img.shields.io/badge/Mobile-react--native-blue?style=for-the-badge">

  <img alt="Repository size" src="https://img.shields.io/npm/types/typescript?style=for-the-badge">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/glaulher/react-native_Ignite?style=for-the-badge">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
</p>

---

## 📋 Sobre

<img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="22" /> Storage, Fundamentos do Firebase, Ignite (Rocketseat) - React Native.

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

https://rnfirebase.io/storage/usage



Instalação das bibliotecas para utilizar o firebase storage:

```shell

# Install the storage module

$ yarn add @react-native-firebase/storage

```

---
Para enviar:

```shell

 if (!image) {
      return Alert.alert('Escolha uma foto');
    }

    const fileName = new Date().getTime();
    const MIME = image.match(/\.(?:.(?!\.))+$/);
    const reference = storage().ref(`/images/${fileName}${MIME}`);
    const uploadTask = reference.putFile(image);

    uploadTask.on('state_changed', taskSnapshot => {
      const percent = (
        (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
        100
      ).toFixed(0);
      setProgress(Number(percent));

      setBytesTransferred(
        `${taskSnapshot.bytesTransferred} transferido de ${taskSnapshot.totalBytes}`,
      );

      uploadTask
        .then(async () => {
          const imageUrl = await reference.getDownloadURL();

          if (taskSnapshot.state === 'success') {
            console.log(imageUrl);
            setImage('');
            return Alert.alert('Upload concluído com sucesso!');
          }
          return undefined;
        })
        .catch(error => console.error(error));
    });
    return undefined;

```
Para listar:
```shell
  storage()
      .ref('images')
      .list()
      .then(result => {
        const files: FileProps[] = [];

        result.items.forEach(file => {
          files.push({
            name: file.name,
            path: file.fullPath,
          });
        });
        setPhotos(files);
      });
```

Para deletar:
```shell
   storage()
      .ref(path)
      .delete()
      .then(() => {
        Alert.alert('Imagem excluída com sucesso!');
        fetchImages();
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
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
