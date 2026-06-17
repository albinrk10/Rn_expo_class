import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { Alert } from 'react-native';

export const useRegisterForm = () => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [errors, setErrors] = useState<{
    nombre?: string;
    email?: string;
    password?: string;
    confirmar?: string;
  }>({});

 useEffect(() =>{
  if(email.length >0 && !email.includes('@')){
    setErrors((prev) => ({...prev, email: 'Formato de correo invalido '}))
  }else{
    setErrors((prev) => ({...prev, email: undefined}))
  }
 },[email]);

 const validar = (): boolean => {
  const e:typeof errors ={};

  if(nombre.trim().length === 0) e.nombre = 'Tu nombre es requerido';
  if(!email.includes('@')) e.email= 'Formato de correo invalido';
  if(password.length < 6) e.password = 'La contraseña requiere minimo de 6 caracteres';
  if(password !== confirmar) e.confirmar = 'Las contraseñas no coinciden';

  setErrors(e);
  return Object.keys(e).length ===0;
 }

 

  const handleRegistro = () => {
    if(!validar()) return;

    Alert.alert(
      'Registro completado!🎈🎆',
      `Bienvenido a la comunidad ${nombre}`,
      [
        {
          text : 'Ir al login',
          onPress:() => router.replace('/login')
        }
      ]
    )
    
  
    
  };

  return {
    nombre, setNombre,
    email, setEmail,
    password, setPassword,
    confirmar, setConfirmar,
    errors, handleRegistro
  };
};
