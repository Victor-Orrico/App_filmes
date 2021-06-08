import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Menu from './DrawerMenu'
import Lista from './MinhaLista'

const Tab = createBottomTabNavigator();

export default function TabMenu() {
  return (
      <Tab.Navigator tabBarOptions={{activeTintColor: 'black', inactiveTintColor: '#C99E8A', showIcon: true, activeBackgroundColor: '#C99E8A', labelStyle: {fontSize:15}}}>
        <Tab.Screen name='Menu' component={Menu}  options={() => ({
        tabBarIcon: () => (
          <Image
            source={require('../image/HomeIcon.png')}
            style={{ height: 25, width: 25 }}
          />
        )
      })}/>
        <Tab.Screen name='Minha Lista' component={Lista} options={() => ({
        tabBarIcon: () => (
          <Image
            source={require('../image/ListaIcon.png')}
            style={{ height: 30, width: 30 }}
          />
        )
      })}/>
      </Tab.Navigator>
  );
}