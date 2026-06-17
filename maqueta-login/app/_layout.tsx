import 'react-native-reanimated';
import "../global.css"
import { Stack } from 'expo-router';



export default function RootLayout() {
  

  return (
     //hola mundo
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="registro" />
      <Stack.Screen name="home" />
    </Stack>
  );
}
