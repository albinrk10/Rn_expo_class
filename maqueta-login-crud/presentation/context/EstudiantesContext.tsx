import { Estudiante, EstudianteFormData } from "@/domain/entities/Estudiante";
import { createContext, PropsWithChildren, useContext, useEffect, useReducer } from "react";
import { estudiantesReducer } from '../reducers/estudiantesReducer';

interface EstudiantesContextValue {
    estudiantes: Estudiante[];

    agregarEstudiante: (datos: EstudianteFormData) => void;
    actualizarEstudiante: (id: string, datos: EstudianteFormData) => void;
    eliminarEstudiante: (id: string) => void;
    buscarEstudiante: (id: string) => Estudiante | undefined;

}

const datosIniciales: Estudiante[] = [
    { id: '1', nombre: 'Juan Perez', correo: 'juan@idat.edu.pe', carrera: 'Desarrollo de Sistemas' },
    { id: '2', nombre: 'Maria Lopez', correo: 'maria@idat.edu.pe', carrera: 'Diseño Gráfico' },
]

const EstudiantesContext = createContext<EstudiantesContextValue | undefined>(undefined);

export function EstudiantesProvider({ children }: PropsWithChildren) {

    const [estudiantes, dispatch] = useReducer(estudiantesReducer, []);

    useEffect(() => {
        dispatch({ type: 'CARGAR', payload: datosIniciales });
    }, []);


    const agregarEstudiante = (datos: EstudianteFormData) => {
        const nuevo: Estudiante = { id: Date.now().toString(), ...datos };
        dispatch({ type: 'CREAR', payload: nuevo });
    }



    const actualizarEstudiante = (id: string, datos: EstudianteFormData) => {
        dispatch({ type: 'ACTUALIZAR', payload: { id, ...datos } })
    }

    const eliminarEstudiante = (id: string) => {
        dispatch({ type: 'ELIMINAR', payload: id });
    }

    const buscarEstudiante = (id: string) =>
        estudiantes.find((estudiante) => estudiante.id === id);




    return (
        <EstudiantesContext.Provider 
        value={{ estudiantes, agregarEstudiante, actualizarEstudiante, eliminarEstudiante, buscarEstudiante }}>
            {children}
        </EstudiantesContext.Provider>
    );




}


export function useEstudiantes() {
    const context = useContext(EstudiantesContext);
    if (!context) {
        throw new Error('useEstudiantes debe utilizarse dentro de EstudiantesProvider');
    }
    return context;
}