import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SolicitudLocal } from '../../domain/models/SolicitudLocal';
import { solicitudRepository } from '../../infrastructure/repositories/solicitudRepository';
import { AppButton } from '../components/AppButton';
import { AppInput } from '../components/AppInput';
import { SolicitudCard } from '../components/SolicitudCard';
import { StateMessage } from '../components/StateMessage';

export function SolicitudesScreen() {
  const db = useSQLiteContext();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [solicitudes, setSolicitudes] = useState<SolicitudLocal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cargarSolicitudes = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await solicitudRepository.listar(db);
      setSolicitudes(data);
    } catch (e) {
      console.log('[APP ERROR] cargarSolicitudes', e);
      setError('No se pudieron cargar las solicitudes.');
    } finally {
      setLoading(false);
    }
  };

  const crearSolicitud = async () => {
    if (!titulo.trim() || !descripcion.trim()) {
      setError('Completa título y descripción.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      await solicitudRepository.crear(db, {
        titulo: titulo.trim(),
        descripcion: descripcion.trim(),
      });

      setTitulo('');
      setDescripcion('');
      await cargarSolicitudes();
    } catch (e) {
      console.log('[APP ERROR] crearSolicitud', e);
      setError('No se pudo guardar la solicitud.');
    } finally {
      setLoading(false);
    }
  };

  const cambiarEstado = async (solicitud: SolicitudLocal) => {
    await solicitudRepository.cambiarEstado(db, solicitud);
    await cargarSolicitudes();
  };

  const eliminarSolicitud = async (id: number) => {
    await solicitudRepository.eliminar(db, id);
    await cargarSolicitudes();
  };

  useEffect(() => {
    cargarSolicitudes();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-4">
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          SEMANA 9 · SQLITE LOCAL
        </Text>
        <Text className="mt-1 text-3xl font-black text-slate-900">Persistencia local</Text>
        <Text className="mt-1 text-slate-500">
          Los datos se guardan en SQLite y no se pierden al cerrar la app.
        </Text>

        <View className="mt-5 rounded-3xl border border-slate-200 bg-white p-5">
          <AppInput label="Título" onChangeText={setTitulo} placeholder="Ej. Vacunación" value={titulo} />
          <AppInput
            label="Descripción"
            onChangeText={setDescripcion}
            placeholder="Ej. Registrar vacuna anual"
            value={descripcion}
          />

          {error && <StateMessage message={error} type="error" />}

          <View className="mt-4">
            <AppButton
              disabled={loading}
              onPress={crearSolicitud}
              title={loading ? 'Guardando...' : 'Guardar en SQLite'}
            />
          </View>
        </View>

        <Text className="mb-3 mt-5 text-lg font-black text-slate-900">
          Solicitudes guardadas
        </Text>

        <FlatList
          data={solicitudes}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <SolicitudCard
              solicitud={item}
              onCambiarEstado={cambiarEstado}
              onEliminar={eliminarSolicitud}
            />
          )}
          ListEmptyComponent={
            <Text className="mt-8 text-center text-slate-500">
              Todavía no hay solicitudes guardadas.
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
