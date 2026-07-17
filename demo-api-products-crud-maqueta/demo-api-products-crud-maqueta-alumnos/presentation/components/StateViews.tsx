import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

export function LoadingView() {
  return (
    <View className="items-center rounded-2xl bg-white p-6">
      <ActivityIndicator size="large" color="#4f46e5" />
      <Text className="mt-3 font-bold text-slate-600">Cargando datos desde la API...</Text>
    </View>
  );
}

interface ErrorViewProps {
  mensaje: string;
  onReintentar: () => void;
}

export function ErrorView({ mensaje, onReintentar }: ErrorViewProps) {
  return (
    <View className="items-center rounded-2xl bg-rose-50 p-6">
      <Text className="text-4xl">⚠️</Text>
      <Text className="mt-3 text-center font-bold text-rose-700">{mensaje}</Text>
      <TouchableOpacity className="mt-4 rounded-xl bg-rose-600 px-5 py-3" onPress={onReintentar}>
        <Text className="font-extrabold text-white">Reintentar GET</Text>
      </TouchableOpacity>
    </View>
  );
}
