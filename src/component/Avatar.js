import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';

export default function Avatar ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Avatar.png')} style={styles.imagem2}/>
            <Text style={styles.descricao}> Avatares são corpos biológicos controlados pela mente humana que se movimentam livremente em Pandora.</Text>
            <Text style={styles.add}>Adicionar a sua lista</Text>
            <Text style={styles.play}> Play </Text>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.botaoTexto}> Home </Text> 
            </TouchableOpacity>
        </View>
    );
}