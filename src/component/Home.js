import React, { Component } from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../style/style';

var estado={filme: ''}

export default function Home ({route,navigation}) {
  const {nome} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Seja Bem-vindo(a), {nome}! </Text>
      <Text style={styles.welcome}> Filme em Destaque! </Text>
      <Image source={require('../image/Aladim.png')} style={styles.imagem}/>
      <Text style={styles.titulo} onPress={()=>{navigation.navigate('Aladim')}}>Aladim</Text>
      <Text style={styles.texto}> Qual filme gostaria de ver? </Text>
      <TextInput style={styles.caixa} placeholder={'Digite'} onChangeText={text => estado.filme = text}/>
      <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate(estado.filme)}}>
        <Text style={styles.botaoTexto}> Ir </Text> 
      </TouchableOpacity>
    </View>
  );
}