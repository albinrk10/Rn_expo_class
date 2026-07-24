import '../global.css';

import { SQLiteProvider } from 'expo-sqlite';
import { Stack } from 'expo-router';

import { inicializarBaseDatos } from '../infrastructure/database/database';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="semana9_solicitudes.db" onInit={inicializarBaseDatos}>
      <Stack screenOptions={{ headerShown: false }} />
    </SQLiteProvider>
  );
}
