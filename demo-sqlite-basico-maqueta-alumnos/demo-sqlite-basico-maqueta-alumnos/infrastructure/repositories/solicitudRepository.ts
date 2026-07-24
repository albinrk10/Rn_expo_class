import { SQLiteDatabase } from "expo-sqlite";
import { CrearSolicitudDto, SolicitudLocal } from '../../domain/models/SolicitudLocal';

export const solicitudRepository= {

  async listar(db: SQLiteDatabase): Promise<SolicitudLocal[]>{
    console.log('[SQL SELECT] Listando solicitudes');

    return db.getAllAsync<SolicitudLocal>(`
      SELECT id, titulo, descripcion, estado, fechaRegistro
      FROM solicitudes
      ORDER BY id DESC;
    `);

  },

  async crear(db: SQLiteDatabase, dto: CrearSolicitudDto): Promise<void>{
    console.log('[SQL INSERT] Creando solicitud',dto);

    await db.runAsync(
    `
    INSERT INTO solicitudes ( titulo, descripcion, estado, fechaRegistro)
    VALUES(?, ?, 'PENDIENTE', ?);
    `,
    [dto.titulo,dto.descripcion,new Date().toISOString()],
    );
  },
  
  async cambiarEstado(db: SQLiteDatabase, solicitud: SolicitudLocal): Promise<void>{
    const nuevoEstado = solicitud.estado  === 'PENDIENTE' ? 'FINALIZADO' : 'PENDIENTE';

    console.log('[SQL UPDATE] Cambiando estado', {
      id: solicitud.id,
      nuevoEstado,
    })

    await db.runAsync(
      `
      UPDATE solicitudes
      SET estado = ?
      WHERE id = ?;
      `,
      [nuevoEstado, solicitud.id]
    );

  },

  async eliminar(db: SQLiteDatabase, id: number): Promise<void>{
    console.log('[SQL DELETE] Eliminando solicitud', { id });
    
    await db.runAsync(
      `
      DELETE FROM solicitudes
      WHERE id = ?;
      `,
      [id]
    ) 
  }


 



}