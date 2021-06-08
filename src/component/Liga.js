import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';

export default function Liga ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Liga.png')} style={styles.imagem2}/>
            <Text style={styles.descricao}>Batman e Mulher-Maravilha buscam e recrutam com agilidade um time de meta-humanos</Text>
            <Text style={styles.add}>Adicionar a sua lista</Text>
            <Text style={styles.play}>Play</Text>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.botaoTexto}> Home </Text> 
            </TouchableOpacity>
        </View>
    );
}