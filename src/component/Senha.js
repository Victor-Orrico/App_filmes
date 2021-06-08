//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../style/style';

// create a component
const Senha=(props)=> {
    return (
        <Text style={styles.texto} onPress={props.semSenha}> Esqueceu sua senha? Clique aqui </Text>
    )
}
//make this component available to the app
export default Senha;