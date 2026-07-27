import { Image, Text, TouchableOpacity, View } from 'react-native';

import { EvidenciaDispositivo } from '../../domain/models/EvidenciaDispositivo';

type Props = {
  evidencia: EvidenciaDispositivo;
  onAbrirMapa: (evidencia: EvidenciaDispositivo) => void;
  onEliminar: (id: string) => void;
};

export function EvidenciaCard({ evidencia, onAbrirMapa, onEliminar }: Props) {
  return (
    <View className="mb-3 rounded-3xl border border-slate-200 bg-white p-4">
      {evidencia.fotoUri ? (
        <Image className="h-44 w-full rounded-2xl bg-slate-100" source={{ uri: evidencia.fotoUri }} />
      ) : (
        <View className="h-24 items-center justify-center rounded-2xl bg-slate-100">
          <Text className="font-bold text-slate-400">Sin foto</Text>
        </View>
      )}

      <Text className="mt-3 text-lg font-black text-slate-900">{evidencia.titulo}</Text>
      <Text className="mt-1 text-xs text-slate-400">
        {new Date(evidencia.fechaRegistro).toLocaleString()}
      </Text>

      {evidencia.ubicacion && (
        <Text className="mt-2 text-slate-500">
          Lat: {evidencia.ubicacion.latitude.toFixed(5)} | Lng:{' '}
          {evidencia.ubicacion.longitude.toFixed(5)}
        </Text>
      )}

      <View className="mt-4 flex-row gap-2">
        <TouchableOpacity
          className={`flex-1 rounded-2xl p-3 ${
            evidencia.ubicacion ? 'bg-indigo-600' : 'bg-slate-300'
          }`}
          disabled={!evidencia.ubicacion}
          onPress={() => onAbrirMapa(evidencia)}
        >
          <Text className="text-center font-extrabold text-white">Abrir mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-2xl bg-red-500 px-4 py-3"
          onPress={() => onEliminar(evidencia.id)}
        >
          <Text className="font-extrabold text-white">Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
