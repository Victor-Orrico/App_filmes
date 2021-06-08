import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';

export default function Tomb ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Tombraider.png')} style={styles.imagem2}/>
            <Text style={styles.descricao}>
                Explorando impérios perdidos, descobrindo tesouros preciosos, punindo vilões em combates mortais tudo faz parte do dia-a-dia da aventureira Lara Croft.
            </Text>
            <Text style={styles.add}>Adicionar a sua lista</Text>
            <Text style={styles.play}>Play</Text>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.botaoTexto}> Home </Text> 
            </TouchableOpacity>
        </View>
    );
}