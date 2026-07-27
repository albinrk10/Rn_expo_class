import { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EvidenciaDispositivo, Ubicacion } from '../../domain/models/EvidenciaDispositivo';
import { deviceService } from '../../infrastructure/services/deviceService';
import { AppButton } from '../components/AppButton';
import { AppInput } from '../components/AppInput';
import { EvidenciaCard } from '../components/EvidenciaCard';
import { StateMessage } from '../components/StateMessage';

export function EvidenciasScreen() {
  const [titulo, setTitulo] = useState('');
  const [fotoUri, setFotoUri] = useState<string | null>(null);
  const [ubicacion, setUbicacion] = useState<Ubicacion | null>(null);
  const [evidencias, setEvidencias] = useState<EvidenciaDispositivo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ejecutar = async (accion: () => Promise<void>) => {
    try {
      setLoading(true);
      setError(null);
      await accion();
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Ocurrió un error.';
      console.log('[APP ERROR]', e);
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const tomarFoto = () =>
    ejecutar(async () => {
      const uri = await deviceService.tomarFoto();
      if (uri) setFotoUri(uri);
    });

  const seleccionarImagen = () =>
    ejecutar(async () => {
      const uri = await deviceService.seleccionarImagen();
      if (uri) setFotoUri(uri);
    });

  const obtenerUbicacion = () =>
    ejecutar(async () => {
      const data = await deviceService.obtenerUbicacionActual();
      setUbicacion(data);
    });

  const guardarEvidencia = () => {
    if (!titulo.trim()) {
      setError('Escribe un título para la evidencia.');
      return;
    }

    const nuevaEvidencia: EvidenciaDispositivo = {
      id: String(Date.now()),
      titulo: titulo.trim(),
      fotoUri,
      ubicacion,
      fechaRegistro: new Date().toISOString(),
    };

    console.log('[APP SAVE] Evidencia en memoria', nuevaEvidencia);
    setEvidencias((actual) => [nuevaEvidencia, ...actual]);
    setTitulo('');
    setFotoUri(null);
    setUbicacion(null);
    setError(null);
  };

  const abrirMapa = (evidencia: EvidenciaDispositivo) => {
    if (!evidencia.ubicacion) return;
    deviceService.abrirMapa(evidencia.ubicacion);
  };

  const eliminarEvidencia = (id: string) => {
    setEvidencias((actual) => actual.filter((item) => item.id !== id));
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 px-5 pt-4">
        <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
          SEMANA 10 · DISPOSITIVO + BUILD
        </Text>
        <Text className="mt-1 text-3xl font-black text-slate-900">Evidencias móviles</Text>
        <Text className="mt-1 text-slate-500">
          Cámara/galería, GPS y apertura de mapa con coordenadas.
        </Text>

        <View className="mt-5 rounded-3xl border border-slate-200 bg-white p-5">
          <AppInput
            label="Título de evidencia"
            onChangeText={setTitulo}
            placeholder="Ej. Evidencia de visita"
            value={titulo}
          />

          {fotoUri && <Image className="mb-4 h-40 w-full rounded-2xl" source={{ uri: fotoUri }} />}

          {ubicacion && (
            <Text className="mb-4 rounded-2xl bg-indigo-50 p-3 text-center font-bold text-indigo-700">
              GPS: {ubicacion.latitude.toFixed(5)}, {ubicacion.longitude.toFixed(5)}
            </Text>
          )}

          {error && <StateMessage message={error} type="error" />}

          <View className="mt-4 gap-3">
            <View className="flex-row gap-3">
              <View className="flex-1">
                <AppButton disabled={loading} onPress={tomarFoto} title="Tomar foto" />
              </View>
              <View className="flex-1">
                <AppButton
                  disabled={loading}
                  onPress={seleccionarImagen}
                  title="Galería"
                  variant="secondary"
                />
              </View>
            </View>

            <AppButton
              disabled={loading}
              onPress={obtenerUbicacion}
              title={loading ? 'Procesando...' : 'Obtener GPS'}
              variant="secondary"
            />

            <AppButton onPress={guardarEvidencia} title="Guardar evidencia" />
          </View>
        </View>

        <Text className="mb-3 mt-5 text-lg font-black text-slate-900">Evidencias</Text>

        <FlatList
          data={evidencias}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <EvidenciaCard evidencia={item} onAbrirMapa={abrirMapa} onEliminar={eliminarEvidencia} />
          )}
          ListEmptyComponent={
            <Text className="mt-8 text-center text-slate-500">
              Todavía no hay evidencias guardadas.
            </Text>
          }
        />
      </View>
    </SafeAreaView>
  );
}
