//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../style/style';

// create a component
const Apresentacao=(props)=> {
    return (
        <Text style={styles.botaoTexto} onPress={props.atualizarEstado}> {props.meuEstado} </Text>
    )
}

state={meuEstado:'Entrar'}
    atualizarEstado=()=>{
      this.setState({
        meuEstado: this.state.meuEstado='Bem vindo ao aplicativo do maior do Nordeste'
      })
    }

//make this component available to the app
export default Apresentacao;