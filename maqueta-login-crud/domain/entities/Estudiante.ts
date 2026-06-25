

export interface Estudiante {
 id:string;
 nombre:string;
 correo:string;
 carrera:string;
}

export type EstudianteFormData = Omit<Estudiante, 'id'>;