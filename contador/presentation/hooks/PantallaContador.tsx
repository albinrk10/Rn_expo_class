
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native';
import ContadorDisplay from '../components/ContadorDisplay';
import ContadorBoton from '../components/ContadorBoton';

export default function PantallaContador() {

  const [clics, setClics] = useState<number>(0)


  useEffect(() => {
    if (clics === 10) {
      Alert.alert('!Felicidades!', 'Has llegado a los 10 clics.');
    }
  }, [clics])

  return (
    <View style={styles.contenedor}>
      <ContadorDisplay titulo={'Numero de clics'} valor={clics} />

      {/* <Button
        title='Sumar clic'
        onPress={() => setClics(clics +1)}
        color="#e42020"

      /> */}
      <ContadorBoton
        titulo={'Sumar clic'}
        color={"#e42020"}
        alPresionar={() => setClics(clics +1) }
        icono='✨'
      />
      <View style={{ height: 20 }} />

      {/* <Button
        title='Restar clic'
        color="#20e44a"
        onPress={()=> setClics(clics -1)}
      /> */}
      <ContadorBoton
        titulo={'Restar clic'}
        color={'#20e44a'}
        alPresionar={() => setClics(clics - 1)}
        icono='🎇'
      />
    </View>
  )
}


const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f4f4'
  }
})