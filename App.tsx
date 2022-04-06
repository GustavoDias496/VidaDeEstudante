import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import  theme  from './src/global/styles/theme';
import { useFonts, Syne_400Regular } from '@expo-google-fonts/syne';
import { ReemKufi_400Regular } from '@expo-google-fonts/reem-kufi';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [fontsLoaded] = useFonts({Syne_400Regular, ReemKufi_400Regular})

  if(! fontsLoaded){
    return <AppLoading/>;
  }

  return (  
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" />
      <Home />
    </ThemeProvider>
  );

  
}