import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../style/style';

export default function Atomica ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Atomica.png')} style={styles.imagem2}/>
            <Text style={styles.descricao}> 
                Lorraine Broughton, uma espiã do MI6, é enviada para Berlim durante a Guerra Fria para investigar o assassinato de um oficial. 
            </Text>
            <Text style={styles.add}>Adicionar a sua lista</Text>
            <Text style={styles.play}> Play </Text>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigation.navigate('Home')}}>
                <Text style={styles.botaoTexto}> Home </Text> 
            </TouchableOpacity>
        </View>
    );
}