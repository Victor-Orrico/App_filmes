import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#14243C',
      //backgroundColor: '#48d1cc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botao:{
      backgroundColor: '#C99E8A',
      alignItems:'center',
      padding: 10,
      marginTop: 20,
      borderRadius: 10,
    },
    botaoTexto:{
      color:'#14243C',
      fontSize: 20,
      textAlign: 'center',
    },
    welcome:{
      color: '#ffffff',
      fontSize: 23,
      textAlign: 'center',
      padding: 10,
    },
    titulo:{
      color: '#ffffff',
      fontSize: 25,
      textAlign: 'center',
      padding: 5,
      opacity: 0.5,
      textDecorationLine: 'underline'
    },
    texto: {
      color:'#C99E8A',
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
    },
    descricao:{
      color: '#C99E8A',
      fontSize: 20,
      textAlign: 'center',
      padding: 5,
      fontStyle: 'italic'
    },
    play:{
      color: '#C99E8A',
      fontSize: 25,
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
    },
    add:{
      color: '#C99E8A',
      fontSize: 20,
      textAlign: 'center',
      padding: 10,
      textDecorationLine: 'underline',
    },
    imagem:{
      width: 150,
      height: 200,
      marginTop: 30
    },
    imagem2:{
      width: 240,
      height: 300,
      marginBottom: 10,
    },
    caixa:{
      width: 200,
      backgroundColor: '#fff',
      fontSize: 15,
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      color:'#14243C',
    },
  });

  export default styles;