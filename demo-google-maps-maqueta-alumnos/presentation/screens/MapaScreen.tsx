import { useRef, useState } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Ubicacion } from '../../domain/models/Ubicacion';
import { locationService } from '../../infrastructure/services/locationService';
import { InfoCard } from '../components/InfoCard';

declare const require: any;

const UBICACION_INICIAL: Ubicacion = {
  latitude: -12.0464,
  longitude: -77.0428,
};

// NOTA PARA EL ALUMNO:
// expo-maps no funciona en Expo Go porque necesita codigo nativo.
// Para que puedan acomodar la pantalla con "npm run start",
// en Expo Go mostramos una maqueta visual del mapa.
// Cuando generen el APK, se cargara Google Maps real.
const ESTA_EN_EXPO_GO = Constants.appOwnership === 'expo';
const GoogleMapsModule =
  !ESTA_EN_EXPO_GO && Platform.OS === 'android' ? require('expo-maps').GoogleMaps : null;

export function MapaScreen() {
  const mapRef = useRef<any>(null);
  const [ubicacion, setUbicacion] = useState<Ubicacion>(UBICACION_INICIAL);
  const [loading, setLoading] = useState(false);

  const centrarEnMiUbicacion = async () => {
    try {
      setLoading(true);

      // TODO 1:
      // Llamar al servicio locationService.obtenerUbicacionActual().
      const nuevaUbicacion = await locationService.obtenerUbicacionActual();

      // TODO 2:
      // Guardar la nueva ubicacion en el estado.
      setUbicacion(nuevaUbicacion);
     
     mapRef.current?.setCameraPosition({
        coordinates: nuevaUbicacion,
        zoom: 16,
     });

      // TODO 3:
      // Usar mapRef.current?.setCameraPosition para mover la camara del mapa.
    } catch (error) {
      const message = error instanceof Error ? error.message : 'No se pudo obtener la ubicacion.';
      Alert.alert('Ubicacion', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1">
        <View className="px-5 pb-4 pt-4">
          <Text className="text-xs font-extrabold tracking-widest text-indigo-600">
            SEMANA 10 · GOOGLE MAPS
          </Text>
          <Text className="mt-1 text-3xl font-black text-slate-900">Mapa dentro de la app</Text>
          <Text className="mt-1 text-slate-500">
            Completa la ubicacion GPS y mueve el mapa usando expo-maps.
          </Text>
        </View>

        <View className="mx-5 h-[430px] overflow-hidden rounded-[32px] border border-slate-200 bg-white">
          {GoogleMapsModule ? (
            <GoogleMapsModule.View
              ref={mapRef}
              style={StyleSheet.absoluteFill}
              cameraPosition={{
                coordinates: UBICACION_INICIAL,
                zoom: 14,
              }}
              markers={[
                {
                  coordinates: ubicacion,
                  title: 'Ubicacion actual',
                  snippet: 'Coordenada seleccionada en la demo',
                },
              ]}
            />
          ) : (
            <View className="flex-1 items-center justify-center bg-slate-100 px-8">
              <Text className="mb-2 text-center text-xs font-black tracking-widest text-indigo-600">
                MODO MAQUETA
              </Text>
              <Text className="text-center font-bold text-slate-700">
                En Expo Go se muestra esta maqueta para poder acomodar la interfaz.
              </Text>
              <Text className="mt-2 text-center text-sm text-slate-500">
                Para ver Google Maps real, genera e instala el APK release.
              </Text>
            </View>
          )}
        </View>

        <View className="gap-4 px-5 pt-5">
          <InfoCard
            title="Coordenadas"
            description={`Latitud: ${ubicacion.latitude.toFixed(5)} | Longitud: ${ubicacion.longitude.toFixed(5)}`}
          />

          <TouchableOpacity
            activeOpacity={0.85}
            className="rounded-2xl bg-indigo-600 px-5 py-4"
            disabled={loading}
            onPress={centrarEnMiUbicacion}
          >
            <Text className="text-center text-base font-black text-white">
              {loading ? 'Obteniendo ubicacion...' : 'Centrar en mi ubicacion'}
            </Text>
          </TouchableOpacity>

          <Text className="text-center text-xs leading-5 text-slate-500">
            Recuerda: expo-maps no corre en Expo Go. Usar development build o APK.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
