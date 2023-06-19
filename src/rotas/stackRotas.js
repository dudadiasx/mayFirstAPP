import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from '../telas/index';
import RotaTab from './tabRotas';
import Login from '../telas/login/index'
import SaibaMais from '../telas/saibaMais';


const Stack = createNativeStackNavigator();
export default function RotaStack() {
    return (
        <Stack.Navigator >
          <Stack.Screen 
            name='Index'
            component={Index}
            options={{
              title: "", headerShown: false
            }}
          />
          <Stack.Screen 
            name='Login'
            component={Login}
            options={{
              title: "", headerShown: false
            }}
          />
          <Stack.Screen 
            name='TimeLineStack' 
            component={RotaTab} 
            options={{
                title: "", headerShown: false
              }}
            />
          <Stack.Screen 
            name='SaibaMais' 
            component={SaibaMais} 
            options={{
                title: "", headerShown: false
              }}
            />
        </Stack.Navigator>
    );
}  