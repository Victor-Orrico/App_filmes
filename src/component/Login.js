import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from '../style/style';
import Senha from './Senha';

semSenha=()=>{
  Alert.alert("Na verdade, você não precisa de senha.","Por enquanto somos um free app!")
}

state={ nome: ''}

export default function Login ({navigation}){
  return (
    <View style={styles.container}>
      <Image source={require('../image/letraM.png')} style={styles.imagem}/>
      <TextInput style={styles.caixa} placeholder={'Digite seu usuario'} onChangeText={text => this.state.nome = text}/>
      <TextInput style={styles.caixa} placeholder={'Insira sua senha'} secureTextEntry={true} />
      <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('TabMenu',{screen: 'Menu', params:{screen: 'Home', params:{'nome': this.state.nome}}})}}>
        <Text style={styles.botaoTexto}> Entrar </Text> 
      </TouchableOpacity>
      <Senha semSenha={semSenha}></Senha> 
    </View>
  );
}