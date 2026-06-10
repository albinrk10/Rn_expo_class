import { Button } from 'react-native'
import React from 'react'


interface BotonProps{
    titulo:string;
    color:string;
    alPresionar:() => void;
    icono?:string
}
export default function ContadorBoton(
    {
        titulo,
        color,
        alPresionar,
        icono
    }: BotonProps
) {
const textoFinal =icono ? `${icono} ${titulo}` :titulo;
  return (
   <Button
   title={textoFinal}
   onPress={alPresionar}
   color={color}
   />
  )
}