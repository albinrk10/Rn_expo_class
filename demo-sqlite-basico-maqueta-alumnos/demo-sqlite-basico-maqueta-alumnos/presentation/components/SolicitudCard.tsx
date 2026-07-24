import { Text, TouchableOpacity, View } from 'react-native';

import { SolicitudLocal } from '../../domain/models/SolicitudLocal';

type Props = {
  solicitud: SolicitudLocal;
  onCambiarEstado: (solicitud: SolicitudLocal) => void;
  onEliminar: (id: number) => void;
};

export function SolicitudCard({ solicitud, onCambiarEstado, onEliminar }: Props) {
  const finalizado = solicitud.estado === 'FINALIZADO';

  return (
    <View className="mb-3 rounded-3xl border border-slate-200 bg-white p-4">
      <View className="flex-row items-start justify-between gap-3">
        <View className="flex-1">
          <Text className="text-lg font-black text-slate-900">{solicitud.titulo}</Text>
          <Text className="mt-1 text-slate-500">{solicitud.descripcion}</Text>
          <Text className="mt-2 text-xs text-slate-400">
            {new Date(solicitud.fechaRegistro).toLocaleString()}
          </Text>
        </View>

        <Text
          className={`rounded-full px-3 py-1 text-xs font-black ${
            finalizado ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
          }`}
        >
          {solicitud.estado}
        </Text>
      </View>

      <View className="mt-4 flex-row gap-2">
        <TouchableOpacity
          className="flex-1 rounded-2xl bg-indigo-600 p-3"
          onPress={() => onCambiarEstado(solicitud)}
        >
          <Text className="text-center font-extrabold text-white">
            {finalizado ? 'Marcar pendiente' : 'Finalizar'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded-2xl bg-red-500 px-4 py-3"
          onPress={() => onEliminar(solicitud.id)}
        >
          <Text className="font-extrabold text-white">Eliminar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
