import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Linking } from 'react-native';

import { Ubicacion } from '../../domain/models/EvidenciaDispositivo';

export const deviceService = {
  async tomarFoto(): Promise<string | null> {
    console.log('[DEVICE REQUEST] Permiso de cámara');

    const permiso = await ImagePicker.requestCameraPermissionsAsync();
    if (!permiso.granted) {
      throw new Error('Permiso de cámara denegado.');
    }

    console.log('[DEVICE OPEN] Cámara');
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (result.canceled) {
      console.log('[DEVICE CANCEL] Cámara cancelada');
      return null;
    }

    console.log('[DEVICE RESPONSE] Foto capturada', result.assets[0].uri);
    return result.assets[0].uri;
  },

  async seleccionarImagen(): Promise<string | null> {
    console.log('[DEVICE REQUEST] Permiso de galería');

    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiso.granted) {
      throw new Error('Permiso de galería denegado.');
    }

    console.log('[DEVICE OPEN] Galería');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (result.canceled) {
      console.log('[DEVICE CANCEL] Galería cancelada');
      return null;
    }

    console.log('[DEVICE RESPONSE] Imagen seleccionada', result.assets[0].uri);
    return result.assets[0].uri;
  },

  async obtenerUbicacionActual(): Promise<Ubicacion> {
    console.log('[GPS REQUEST] Permiso de ubicación');

    const permiso = await Location.requestForegroundPermissionsAsync();
    if (permiso.status !== 'granted') {
      throw new Error('Permiso de ubicación denegado.');
    }

    console.log('[GPS REQUEST] Obteniendo ubicación actual');
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    const ubicacion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    console.log('[GPS RESPONSE]', ubicacion);
    return ubicacion;
  },

  async abrirMapa(ubicacion: Ubicacion): Promise<void> {
    const url = `https://www.google.com/maps/search/?api=1&query=${ubicacion.latitude},${ubicacion.longitude}`;

    console.log('[MAP OPEN]', url);
    await Linking.openURL(url);
  },
};
