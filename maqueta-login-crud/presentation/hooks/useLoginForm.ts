import { useState } from 'react';
import { router } from 'expo-router';
import { Alert } from 'react-native';

export const useLoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validar = (): boolean => {
    const e:{email?: string; password?: string} ={};

    if(!email.includes('@')){
      e.email ="El correo debe contener un @"
    }
    if(password.length <6){
      e.password ='La contraseña debe tener inimo 6 caracteres';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleLogin=() => {
    if(!validar()) return;

    if(email === 'admin@edu.pe' && password === 'admin123'){
      router.replace('/home')
    }else{
      Alert.alert('Error de Acceso', 'El usuario o contraseña son incorrectos.')
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errors,
    handleLogin
  };
};
