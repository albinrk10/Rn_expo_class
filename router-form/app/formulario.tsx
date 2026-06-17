import { router } from 'expo-router';
import { useState } from 'react'
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'


export default function formulario() {
    //paso 1
    const [nombre, setNombre] = useState('');
    const [error, setError] = useState('');

    //validacion

    const validar = () => {
        if (nombre.trim().length === 0) {
            setError('El nombre no puede estar vacio')
            return false;
        }
        if(nombre.length < 3){
            setError('Minimo 3 caracteres')
            return false;
        }
        setError('');
        return true;

    };

    const hadleEnviar= () => {
        if(validar()){
         Alert.alert('Listo', `Hola, ${nombre}`);
        }
    };




    return (
        <View className='
        flex-1 bg-white px-6 pt-10
        '>
            <Text className='
            text-2xl font-bold mb-6
            '>Formulario + Validacion</Text>
            
            <Text className='
            text-gray-700 font-semibold mb-2
            '>Nombre</Text>

            <TextInput
             className={`border rounded-xl px-4 py-3 text-base ${
                error ? 'border-red-500' : 'border-gray-300'
             }`}
             placeholder='Escribe tu nombre'
             value={nombre}
             onChangeText={setNombre}
            />

            {error !== "" && <Text className='
            text-red-500 mt-2'>{error}</Text>}
            
            <TouchableOpacity
            className='bg-blue-600 rounded-xl py-4 mt-6'
            onPress={hadleEnviar}
            >
             <Text
             className='text-white font-bold text-center'
             >Enviar</Text>
            </TouchableOpacity>

            <Text
            className='
            bg-gray-800 text-white text-center py-3 rounded-xl mt-4'
            onPress={() => router.back()}
            >
             Volver
            </Text>






        </View>
    )
}