import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Index from '../telas/index/index';
import Login from '../telas/login';
import TimeLine from '../telas/timeLine/index';

const Tab = createBottomTabNavigator();
export default function AppRotas() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{ 
                tabBarStyle: { 
                    backgroundColor: '#FFB2F2', 
                    height: '10%', 
                } 
        }}>
          <Tab.Screen name="Home" component={TimeLine} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

