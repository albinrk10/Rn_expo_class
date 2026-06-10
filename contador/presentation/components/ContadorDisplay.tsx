
import { View, Text, StyleSheet } from 'react-native';
import React from 'react'

interface DisplayProps{
    titulo:string;
    valor: number;
}


export default function ContadorDisplay({titulo,valor}:DisplayProps) {
  return (
    <View style={styles.caja} >
      <Text style={styles.textoTitulo}>{titulo}</Text>
      <Text style={styles.textoValor}>{valor}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  caja:{padding:20 , alignItems:'center'},
  textoTitulo:{fontSize:20 ,color: '#838282'},
  textoValor:{fontSize:48,fontWeight:'bold',color:'#e42020'}
})