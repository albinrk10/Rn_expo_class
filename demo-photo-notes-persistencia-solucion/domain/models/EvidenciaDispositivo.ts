export type Ubicacion = {
  latitude: number;
  longitude: number;
};

export type EvidenciaDispositivo = {
  id: string;
  titulo: string;
  fotoUri: string | null;
  ubicacion: Ubicacion | null;
  fechaRegistro: string;
};
