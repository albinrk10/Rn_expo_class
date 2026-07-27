import * as Location from 'expo-location';

import { Ubicacion } from '../../domain/models/Ubicacion';

export const locationService = {
  async obtenerUbicacionActual(): Promise<Ubicacion> {
    console.log('locationService.obtenerUbicacionActual()');
    // TODO 1:
    // Pedir permiso con Location.requestForegroundPermissionsAsync().
    const { status } = await Location.requestForegroundPermissionsAsync();

    // TODO 2:
    // Si el permiso no fue aceptado, lanzar un error.
    if (status !== 'granted') {
      console.log('Permiso de ubicacion denegado.');
      throw new Error('Permiso de ubicacion denegado.');
    } 

    // TODO 3:
    // Obtener la posicion actual con Location.getCurrentPositionAsync().
     const location = await Location.getCurrentPositionAsync({}); 
    // TODO 4:
    // Retornar un objeto con latitude y longitude.
    const  ubicacion ={
      latitude: -12.0464,
      longitude: -77.0428,
    };
      console.log('Ubicacion obtenida:', location);
      return ubicacion;
  },
};
