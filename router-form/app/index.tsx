
import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View className ="
    flex-1 items-center justify-center bg-white px-6">

      <Text className='
      text-2xl font-bold mb-8
      '>Rutas con Expo</Text>
       
       <Link href="/estilos" className=' 
       bg-blue-600 text-white px-6 py-3 rounded-xl mb-4
       ' >
        Ir a NativeWind
       </Link>

       <Link href="/formulario" className=' 
       bg-red-500 text-white px-6 py-3 rounded-xl mb-4
       ' >
        Ir a Formulario
       </Link>

    </View>
  )
}