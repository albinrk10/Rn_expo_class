import * as ImagePicker from 'expo-image-picker';

export const fotoService = {
  async tomarFoto(): Promise<string | null> {
    console.log('[CAMERA REQUEST] Solicitando permiso de camara');

    const permiso = await ImagePicker.requestCameraPermissionsAsync();
    if (!permiso.granted) {
      throw new Error('Permiso de camara denegado.');
    }

    console.log('[CAMERA OPEN] Abriendo camara');
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (result.canceled) {
      console.log('[CAMERA CANCEL] Usuario cancelo la camara');
      return null;
    }

    console.log('[CAMERA RESPONSE] URI de foto', result.assets[0].uri);
    return result.assets[0].uri;
  },

  async seleccionarDeGaleria(): Promise<string | null> {
    console.log('[GALLERY REQUEST] Solicitando permiso de galeria');

    const permiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permiso.granted) {
      throw new Error('Permiso de galeria denegado.');
    }

    console.log('[GALLERY OPEN] Abriendo galeria');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    });

    if (result.canceled) {
      console.log('[GALLERY CANCEL] Usuario cancelo la galeria');
      return null;
    }

    console.log('[GALLERY RESPONSE] URI de imagen', result.assets[0].uri);
    return result.assets[0].uri;
  },
};

