import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import TimeLine from '../telas/timeLine/index';



const Tab = createBottomTabNavigator();        

export default function RotaTab() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { 
            backgroundColor: '#FFB2F2', 
            height: '7%', 
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused 
                ? 'person' 
                : 'person-outline';
            } else if (route.name === 'Vender') {
              iconName = focused 
                ? 'add' 
                : 'add-outline';
            } else if (route.name === 'Chat') {
              iconName = focused 
                ? 'chatbubble' 
                : 'chatbubble-outline';
            }  

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'gray',
        })}
      > 
        <Tab.Screen name="Chat" component={TimeLine} options={{ headerShown: false }}/>   
        <Tab.Screen name="Home" component={TimeLine} options={{ headerShown: false }}/>
        <Tab.Screen name="Vender" component={TimeLine} options={{ headerShown: false}}/>
        <Tab.Screen name="Perfil" component={TimeLine} options={{ headerShown: false }}/>
      </Tab.Navigator>
  );
}


      

