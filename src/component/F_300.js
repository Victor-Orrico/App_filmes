import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';

export default function F_300 ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/300.png')} style={styles.imagem2}/>
            <Text style={styles.descricao}>
                Na batalha de Thermopylae, Leônidas, rei da cidade grega de Sparta, lidera seu guerreiros em desvantagem contra o massivo exército persa.
            </Text>
            <Text style={styles.add}>Adicionar a sua lista</Text>
            <Text style={styles.play}> Play </Text>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.botaoTexto}> Home </Text> 
            </TouchableOpacity>
        </View>
    );
}