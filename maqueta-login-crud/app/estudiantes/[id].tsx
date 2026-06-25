import { router, useLocalSearchParams } from 'expo-router';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { EstudianteForm } from '../../presentation/components/estudiantes/EstudianteForm';
import { useEstudiantes } from '../../presentation/context/EstudiantesContext';

export default function EditarEstudianteRoute() {
  
  const { id } = useLocalSearchParams<{ id: string }>();

 
  const { buscarEstudiante, actualizarEstudiante } = useEstudiantes();
  const estudiante = buscarEstudiante(id);

  if (!estudiante) {
    return <View className="flex-1 items-center justify-center bg-slate-50 px-6"><Text className="text-5xl">🔎</Text><Text className="mt-4 text-xl font-bold text-slate-800">Estudiante no encontrado</Text></View>;
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 bg-slate-100">
      <ScrollView contentContainerClassName="flex-grow px-6 pb-10 pt-16">
        <Text className="text-sm font-bold uppercase tracking-widest text-amber-600">Update</Text>
        <Text className="mb-6 text-3xl font-black text-slate-900">Editar estudiante</Text>
        <View className="rounded-3xl bg-white p-7 shadow-lg shadow-slate-200">
          <EstudianteForm
            
            initialValues={estudiante}
            submitLabel="Guardar cambios"
            onSubmit={(datos) => {
              actualizarEstudiante(id, datos);
              Alert.alert('Registro actualizado', 'Los cambios se guardaron en memoria.');
              router.back();
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
