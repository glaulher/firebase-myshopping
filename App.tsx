/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import * as Font from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';

import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...MaterialIcons.font,
          Roboto_400Regular,
          Roboto_500Medium,
        });
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      {!isLoadingComplete ? isLoadingComplete : <Routes />}
    </ThemeProvider>
  );
}
