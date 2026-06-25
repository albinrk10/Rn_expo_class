import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { EstudianteCard } from '../../presentation/components/estudiantes/EstudianteCard';
import { useEstudiantes } from '../../presentation/context/EstudiantesContext';

export default function EstudiantesRoute() {

  const { estudiantes, eliminarEstudiante } = useEstudiantes();

  
  const [busqueda, setBusqueda] = useState('');
  const [carreraFiltro, setCarreraFiltro] = useState('TODAS');

  
  const carreras = ['TODAS', ...new Set(estudiantes.map((item) => item.carrera))];

  
  const estudiantesFiltrados = estudiantes.filter((estudiante) => {
    const texto = busqueda.trim().toLowerCase();
    const coincideTexto =
      estudiante.nombre.toLowerCase().includes(texto) ||
      estudiante.correo.toLowerCase().includes(texto);
    const coincideCarrera =
      carreraFiltro === 'TODAS' || estudiante.carrera === carreraFiltro;

    return coincideTexto && coincideCarrera;
  });


  const confirmarEliminacion = (id: string, nombre: string) => {
    Alert.alert('Eliminar estudiante', `¿Deseas eliminar a ${nombre}?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Eliminar', style: 'destructive', onPress: () => eliminarEstudiante(id) },
    ]);
  };

  return (
    <View className="flex-1 bg-slate-50 px-6 pt-16">
      <View className="mb-6 flex-row items-center justify-between">
        <View>
          <Text className="text-sm font-bold uppercase tracking-widest text-indigo-600">Semana 5</Text>
          <Text className="text-3xl font-black text-slate-900">Estudiantes</Text>
          <Text className="mt-1 text-slate-500">{estudiantes.length} registros en memoria</Text>
        </View>
        <TouchableOpacity accessibilityLabel="Agregar estudiante" className="rounded-2xl bg-indigo-600 p-4" onPress={() => router.push('/estudiantes/nuevo')}>
          <Ionicons name="add" size={26} color="white" />
        </TouchableOpacity>
      </View>

     
      <View className="mb-3 flex-row items-center rounded-2xl border border-slate-200 bg-white px-4">
        <Ionicons name="search" size={20} color="#64748b" />
        <TextInput
          className="h-14 flex-1 px-3 text-base text-slate-800"
          placeholder="Buscar por nombre o correo"
          value={busqueda}
          onChangeText={setBusqueda}
          autoCapitalize="none"
        />
      </View>

     
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4 max-h-12"
        contentContainerStyle={{ gap: 8 }}
      >
        {carreras.map((carrera) => {
          const seleccionado = carreraFiltro === carrera;
          return (
            <TouchableOpacity
              key={carrera}
              className={`rounded-full px-4 py-2 ${seleccionado ? 'bg-indigo-600' : 'bg-slate-200'}`}
              onPress={() => setCarreraFiltro(carrera)}
            >
              <Text className={seleccionado ? 'font-bold text-white' : 'font-semibold text-slate-600'}>
                {carrera}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

   
      <FlatList
        
        data={estudiantesFiltrados}

       
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32, flexGrow: 1 }}
       
        renderItem={({ item }) => (
          <EstudianteCard
            estudiante={item}
           
            onEditar={() => router.push({ pathname: '/estudiantes/[id]', params: { id: item.id } })}
            onEliminar={() => confirmarEliminacion(item.id, item.nombre)}
          />
        )}
       
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center pb-24">
            <Text className="text-6xl">📭</Text>
            <Text className="mt-4 text-xl font-bold text-slate-700">Sin resultados</Text>
            <Text className="mt-2 text-center text-slate-500">Cambia el texto o el filtro seleccionado.</Text>
          </View>
        }
      />
    </View>
  );
}
