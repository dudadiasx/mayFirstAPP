import React from 'react';
import { NavigationContainer } from '@react-navigation/native';



import RotaStack from './src/rotas/stackRotas';
import RotaTab from './src/rotas/tabRotas';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RotaStack />
      </NavigationContainer>
    </>
  )
}

