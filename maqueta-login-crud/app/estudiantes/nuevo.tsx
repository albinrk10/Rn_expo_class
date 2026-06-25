import { router } from 'expo-router';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { EstudianteForm } from '../../presentation/components/estudiantes/EstudianteForm';
import { useEstudiantes } from '../../presentation/context/EstudiantesContext';

export default function NuevoEstudianteRoute() {
  
  const { agregarEstudiante } = useEstudiantes();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 bg-slate-100">
      <ScrollView contentContainerClassName="flex-grow px-6 pb-10 pt-16">
        <Text className="text-sm font-bold uppercase tracking-widest text-indigo-600">Create</Text>
        <Text className="mb-6 text-3xl font-black text-slate-900">Nuevo estudiante</Text>
        <View className="rounded-3xl bg-white p-7 shadow-lg shadow-slate-200">
          <EstudianteForm
            submitLabel="Registrar estudiante"
            onSubmit={(datos) => {
              // El formulario valida; esta pantalla decide guardar y navegar.
              agregarEstudiante(datos);
              Alert.alert('Registro creado', 'El estudiante se guardó en memoria.');
              router.back();
            }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
