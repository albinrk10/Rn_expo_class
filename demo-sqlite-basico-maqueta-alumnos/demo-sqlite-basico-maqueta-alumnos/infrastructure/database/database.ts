import { SQLiteDatabase } from "expo-sqlite";

export async function inicializarBaseDatos(db:SQLiteDatabase){

  console.log('[DB INIT] Creando tabla solicitudes si no exite');

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    
    Create TABLE IF NOT EXISTS solicitudes(
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     titulo TEXT NOT NULL,
     descripcion TEXT NOT NULL,
     estado TEXT NOT NULL DEFAULT 'PENDIENTE',
     fechaRegistro TEXT NOT NULL
    );
     
    `
  );




} 