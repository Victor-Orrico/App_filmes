import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Text, View, Button, Alert, TouchableOpacity, Image} from 'react-native';
import styles from './src/style/style';
import Apresentacao from './src/component/Apresentacao';

export default class App extends Component {
  state={meuEstado:'Estado inicial'}
  atualizarEstado=()=>{
    this.setState({
      meuEstado: this.state.meuEstado ? '':'Estado final'
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <Apresentacao meuEstado={this.state.meuEstado} atualizarEstado={this.atualizarEstado}></Apresentacao>
      </View>

    /* <View style={styles.container}>
      Aula 5 - teste
      <TouchableOpacity style={styles.botao} onPress={this.atualizarEstado}>
          <Text> Botão de teste </Text>
        </TouchableOpacity>
        <Text> {this.state.meuEstado} </Text>

        Primeiro teste
        <Button title="Clique aqui!" color="#f194ff" onPress={()=>Alert.alert('Clicado!')}></Button>
        <Text style={styles.texto}>Minha primeira aplicação</Text>
        <Text style={styles.legenda}>Testando reative native</Text>
        <StatusBar style="auto" />
      </View>*/
    );
  }
}