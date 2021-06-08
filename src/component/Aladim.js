import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';

export default function Aladim ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Aladim.png')} style={styles.imagem2}/>
            <Text style={styles.descricao}> Um jovem humilde descobre uma lâmpada mágica, com um gênio que pode lhe conceder desejos. </Text>
            <Text style={styles.add}>Adicionar a sua lista</Text>
            <Text style={styles.play}>Play</Text>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.botaoTexto}> Home </Text> 
            </TouchableOpacity>
        </View>
    );
}