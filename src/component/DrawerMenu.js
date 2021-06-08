import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Aladim from './Aladim';
import Avatar from './Avatar';
import Atomica from './Atomica';
import Liga from './Liga';
import F_300 from './F_300';
import Origem from './Origem';
import Robocop from './Robocop';
import Tomb from './TombRaider';
import Home from './Home';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='300' component={F_300} />
        <Drawer.Screen name='Aladim' component={Aladim} />
        <Drawer.Screen name='Atomica' component={Atomica} />
        <Drawer.Screen name='Avatar' component={Avatar} />
        <Drawer.Screen name='Liga da Justiça' component={Liga} />
        <Drawer.Screen name='Origem' component={Origem} />
        <Drawer.Screen name='Robocop' component={Robocop} />
        <Drawer.Screen name='Tomb Raider' component={Tomb} />
      </Drawer.Navigator>
  );
}