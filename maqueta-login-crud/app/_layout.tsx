import 'react-native-reanimated';
import "../global.css"
import { Stack } from 'expo-router';
import { EstudiantesProvider } from '@/presentation/context/EstudiantesContext';



export default function RootLayout() {
  

  return (
     //hola mundo
    <EstudiantesProvider>
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="registro" />
      <Stack.Screen name="home" />

      <Stack.Screen name="estudiantes/index" />
      <Stack.Screen name="estudiantes/nuevo" />
      <Stack.Screen name="estudiantes/[id]" />
    </Stack>
    </EstudiantesProvider>
  );
}
