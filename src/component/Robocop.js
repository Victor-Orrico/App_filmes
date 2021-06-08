import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';

export default function Robocop ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Robocop.png')} style={styles.imagem2}/>
            <Text style={styles.descricao}>
                Policial é morto em combate e transformado por cientistas da empresa que dirige a força policial em um ciborgue ultrassofisticado
            </Text>
            <Text style={styles.add}>Adicionar a sua lista</Text>
            <Text style={styles.play}>Play</Text>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.botaoTexto}> Home </Text> 
            </TouchableOpacity>
        </View>
    );
}