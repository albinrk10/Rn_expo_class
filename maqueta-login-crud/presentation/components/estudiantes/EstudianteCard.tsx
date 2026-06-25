import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { Estudiante } from '../../../domain/entities/Estudiante';

interface EstudianteCardProps {
 
  estudiante: Estudiante;

 
  onEditar: () => void;
  onEliminar: () => void;
}


export function EstudianteCard({ estudiante, onEditar, onEliminar }: EstudianteCardProps) {
  return (
    <View className="mb-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
      <View className="flex-row items-start justify-between">
        <View className="mr-3 flex-1">
          <Text className="text-xl font-extrabold text-slate-800">{estudiante.nombre}</Text>
          <Text className="mt-1 text-slate-500">{estudiante.correo}</Text>
          <Text className="mt-3 self-start rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-700">
            {estudiante.carrera}
          </Text>
        </View>
        <View className="flex-row gap-2">
   
          <TouchableOpacity accessibilityLabel={`Editar a ${estudiante.nombre}`} className="rounded-xl bg-amber-100 p-3" onPress={onEditar}>
            <Ionicons name="pencil" size={20} color="#b45309" />
          </TouchableOpacity>

          <TouchableOpacity accessibilityLabel={`Eliminar a ${estudiante.nombre}`} className="rounded-xl bg-rose-100 p-3" onPress={onEliminar}>
            <Ionicons name="trash" size={20} color="#e11d48" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

