import * as SQLite from 'expo-sqlite';

import { NotaFoto } from '../../domain/models/NotaFoto';

let database: SQLite.SQLiteDatabase | null = null;

async function obtenerConexion() {
  if (!database) {
    database = await SQLite.openDatabaseAsync('notas_foto.db');
  }

  return database;
}

export const notasDatabase = {
  async inicializar() {
    const db = await obtenerConexion();

    // Esta tabla guarda solo texto y la ruta de la imagen.
    // La imagen como archivo no se mete dentro de SQLite.
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS notas_foto (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        fotoUri TEXT,
        fechaRegistro TEXT NOT NULL
      );
    `);

    console.log('[DB INIT] Tabla notas_foto lista');
  },

  async listar(): Promise<NotaFoto[]> {
    const db = await obtenerConexion();

    const notas = await db.getAllAsync<NotaFoto>(
      'SELECT id, titulo, descripcion, fotoUri, fechaRegistro FROM notas_foto ORDER BY id DESC;'
    );

    console.log('[DB SELECT] Notas recuperadas', notas.length);
    return notas;
  },

  async crear(data: Omit<NotaFoto, 'id'>): Promise<void> {
    const db = await obtenerConexion();

    await db.runAsync(
      `INSERT INTO notas_foto (titulo, descripcion, fotoUri, fechaRegistro)
       VALUES (?, ?, ?, ?);`,
      [data.titulo, data.descripcion, data.fotoUri, data.fechaRegistro]
    );

    console.log('[DB INSERT] Nota guardada', data);
  },

  async eliminar(id: number): Promise<void> {
    const db = await obtenerConexion();

    await db.runAsync('DELETE FROM notas_foto WHERE id = ?;', [id]);

    console.log('[DB DELETE] Nota eliminada', id);
  },
};

