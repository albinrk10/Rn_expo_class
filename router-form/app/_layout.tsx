
import 'react-native-reanimated';
import "../global.css"
import { View , Text} from 'react-native';

export default function RootLayout() {
 
  return (
     <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}
