import {createAppContainer, StackRouter} from 'react-navigation';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/component/Login'
import TabMenu from './src/component/TabMenu'

const Pilha = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Login'>
        <Pilha.Screen name='Login' options={{title:'Bem-vindo(a) a Movieflix', 
        headerStyle: {backgroundColor: '#C99E8A'}, headerTitleStyle: { fontWeight:'bold'}}} component={Login} />
        <Pilha.Screen name='TabMenu' options={{title:'Movieflix', 
        headerStyle: {backgroundColor: '#C99E8A'}, headerTitleStyle: { fontWeight:'bold'}}} component={TabMenu} />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}