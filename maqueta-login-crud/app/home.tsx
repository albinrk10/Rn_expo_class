import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


export default function HomeRoute() {
  const handleLogout = () => {
   
    router.replace('/login');
  };

  return (
    <View className="flex-1 bg-slate-50 px-6 pt-16">
      {/* Header del Home */}
      <View className="flex-row justify-between items-center mb-8">
        <Text className="text-3xl font-extrabold text-indigo-700">Panel 🏠</Text>
        <TouchableOpacity
          className="bg-rose-100 px-5 py-2 rounded-xl"
          onPress={handleLogout}
        >
          <Text className="text-rose-600 font-bold">Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center">

        <View className="bg-white rounded-3xl p-10 shadow-lg shadow-indigo-100 items-center w-full mb-8">
          <View className="w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-6">
            <Text className="text-4xl">✅</Text>
          </View>
          <Text className="text-2xl font-black text-slate-800 text-center">
            ¡Lo lograste! 🎉
          </Text>
          <Text className="text-slate-500 text-center mt-3 text-base">
            Bienvenido al panel de control.
          </Text>
        </View>

        <TouchableOpacity
          className="bg-indigo-600 px-6 py-3 rounded-xl mb-6"
          onPress={() => router.push('/estudiantes')}
        >
          <Text className="text-white font-bold text-lg">Ir a Estudiantes</Text>
        </TouchableOpacity>

    
        <View className="flex-row gap-4 w-full">
          <View className="flex-1 bg-white shadow-sm rounded-2xl p-5 items-center border border-slate-100">
            <Text className="text-3xl mb-2">🪝</Text>
            <Text className="text-slate-700 font-bold">Hooks</Text>
          </View>
          <View className="flex-1 bg-white shadow-sm rounded-2xl p-5 items-center border border-slate-100">
            <Text className="text-3xl mb-2">🧩</Text>
            <Text className="text-slate-700 font-bold">UI</Text>
          </View>
          <View className="flex-1 bg-white shadow-sm rounded-2xl p-5 items-center border border-slate-100">
            <Text className="text-3xl mb-2">🚀</Text>
            <Text className="text-slate-700 font-bold">Router</Text>
          </View>
        </View>

      </View>
    </View>
  );
}
