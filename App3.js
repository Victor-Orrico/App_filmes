import {createAppContainer, StackRouter} from 'react-navigation';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/component/Login'
import Menu from './src/component/Menu'

const Pilha = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator initialRouteName='Login'>
        <Pilha.Screen name='Login' component={Login} />
        <Pilha.Screen name='Menu' component={Menu} />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}

/*
var Link = React.createClass({
  getInitialState: function(){
    return {hover: false}
  },
  toggleHover: function(){
    this.setState({hover: !this.state.hover})
  },
  render: function() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {backgroundColor: 'red'}
    } else {
      linkStyle = {backgroundColor: 'blue'}
    }
    return(
      <div>
        <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
      </div>
    )
}

const MainNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      header: null,
    },
    
  },
  Home: {
    screen: Home,
    navigationOptions:{
      headerTitle: 'Home',
      tabBarLabel: 'Você está na HomePage'
    }
  }
});

export default createAppContainer(MainNavigation); */