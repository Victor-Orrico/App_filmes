import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../style/style';


export default function Lista ({navigation}){
    return (
        <View style={styles.container}>
            <Image source={require('../image/Aladim.png')} style={styles.imagem}/>
            <Text style={styles.titulo} onPress={()=>{navigation.navigate('Aladim')}}>Aladim</Text>
            <Image source={require('../image/Avatar.png')} style={styles.imagem}/>
            <Text style={styles.titulo} onPress={()=>{navigation.navigate('Avatar')}}>Avatar</Text>
        </View>
    );
}