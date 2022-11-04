/* eslint-disable no-console */
import React, { useState } from 'react';
import { Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import storage from '@react-native-firebase/storage';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Photo } from '../../components/Photo';

import { Container, Content, Progress, Transferred } from './styles';

export function Upload() {
  const [image, setImage] = useState('');
  const [bytesTransferred, setBytesTransferred] = useState('');
  const [progress, setProgress] = useState(0);

  async function handlePickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }

  async function handleUpload() {
    if (!image) {
      return Alert.alert('Escolha uma foto');
    }

    const fileName = new Date().getTime();
    const MIME = image.match(/\.(?:.(?!\.))+$/);
    const reference = storage().ref(`/images/${fileName}${MIME}`);

    /*
    reference
      .putFile(image)
      .then(() => Alert.alert('Upload concluído'))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
     */
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
  }

  return (
    <Container>
      <Header title="Upload de Fotos" />

      <Content>
        <Photo uri={image} onPress={() => handlePickImage()} />

        <Button title="Fazer upload" onPress={() => handleUpload()} />

        <Progress>{String(progress)}%</Progress>

        <Transferred>{bytesTransferred}</Transferred>
      </Content>
    </Container>
  );
}
