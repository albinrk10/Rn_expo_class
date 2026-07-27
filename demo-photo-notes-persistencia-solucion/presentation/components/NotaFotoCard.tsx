import { Image, Text, TouchableOpacity, View } from 'react-native';

import { NotaFoto } from '../../domain/models/NotaFoto';

type Props = {
  nota: NotaFoto;
  onEliminar: (id: number) => void;
};

export function NotaFotoCard({ nota, onEliminar }: Props) {
  return (
    <View className="mb-4 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {nota.fotoUri ? (
        <Image className="h-40 w-full" resizeMode="cover" source={{ uri: nota.fotoUri }} />
      ) : (
        <View className="h-28 items-center justify-center bg-slate-100">
          <Text className="font-bold text-slate-400">Sin foto</Text>
        </View>
      )}

      <View className="p-4">
        <Text className="text-lg font-black text-slate-900">{nota.titulo}</Text>
        <Text className="mt-1 text-slate-600">{nota.descripcion}</Text>
        <Text className="mt-2 text-xs text-slate-400">
          {new Date(nota.fechaRegistro).toLocaleString()}
        </Text>

        <TouchableOpacity
          activeOpacity={0.85}
          className="mt-4 rounded-2xl bg-red-50 px-4 py-3"
          onPress={() => onEliminar(nota.id)}
        >
          <Text className="text-center font-black text-red-600">Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

