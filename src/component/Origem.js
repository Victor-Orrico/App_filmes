import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';

export default function Origem ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Origem.png')} style={styles.imagem2}/>
            <Text style={styles.descricao}>Dom Cobb é um ladrão com a rara habilidade de roubar segredos do inconsciente, obtidos durante o estado de sono.</Text>
            <Text style={styles.add}>Adicionar a sua lista</Text>
            <Text style={styles.play}>Play</Text>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.botaoTexto}> Home </Text> 
            </TouchableOpacity>
        </View>
    );
}