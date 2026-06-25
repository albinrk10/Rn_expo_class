import { Estudiante } from "@/domain/entities/Estudiante";

export type EstudianteAction =
  | { type: 'CARGAR'; payload: Estudiante[] }
  | { type: 'CREAR'; payload: Estudiante }
  | { type: 'ACTUALIZAR'; payload: Estudiante }
  | { type: 'ELIMINAR'; payload: string };

// TODO 9 - Implementar el reducer en clase.

export function estudiantesReducer(
    state: Estudiante[],
     action: EstudianteAction
    ): Estudiante[] {
  switch (action.type) {
    case 'CARGAR':
      return action.payload;
    case 'CREAR':
      // Completar con spread:
     
      return [...state, action.payload];

    case 'ACTUALIZAR':
      // Completar con map:
   
      return state.map((estudiante) =>
       estudiante.id === action.payload.id ? action.payload : estudiante
      );

    case 'ELIMINAR':
      // Completar con filter:
      
      return state.filter((estudiante)=> estudiante.id !== action.payload);

    default:
      return state;
  }
}
