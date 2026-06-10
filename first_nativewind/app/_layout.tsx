import 'react-native-reanimated';
import "../global.css"
import { useColorScheme } from '@/hooks/use-color-scheme';
import { View, Text } from 'react-native';

//en el archivo de  tailwind.config.js par que  funcione 
//  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

export default function RootLayout() {


  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Bienvenido a nativewind!!!
      </Text>
    </View>
  );
}
