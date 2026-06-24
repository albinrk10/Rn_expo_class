import { createContext, PropsWithChildren, useContext, useReducer } from 'react';
import { Producto, ProductoFormData } from '../../domain/entities/Producto';
import { productosReducer } from '../reducers/productosReducer';

// TODO 2 - Definir el contrato del Context.

interface ProductosContextValue {
  productos: Producto[];
  crear: (datos: ProductoFormData) => void;
  actualizar: (id: string, datos: ProductoFormData) => void;
  eliminar: (id: string) => void;
}

// TODO 3 - Crear el Context.

const ProductosContext = createContext<ProductosContextValue | undefined>(undefined);

// TODO 4 - Implementar el Provider en clase.

export function ProductosProvider({ children }: PropsWithChildren) {

  const [productos, dispatch] = useReducer(productosReducer, [
    { id: '1', nombre: 'Teclado', precio: 85 },
    { id: '2', nombre: 'Mouse', precio: 50 },
  ]);

  const crear = (datos: ProductoFormData) => {
    dispatch({ type: 'CREAR', payload: { id: Date.now.toString(), ...datos } })
  }

  const actualizar = (id: string, datos: ProductoFormData) => {
    dispatch({ type: 'ACTUALIZAR', payload: { id, ...datos } })
  }

  const eliminar = (id: string) => {
    dispatch({ type: 'ELIMINAR', payload: id });
  }





  return (
    <ProductosContext.Provider value={{ productos, crear, actualizar, eliminar }}>
      {children}
    </ProductosContext.Provider>
  );

}

// TODO 7 - Usar este hook cuando el Provider ya esté implementado.

export function useProductos() {
  const context = useContext(ProductosContext);
  if (!context) {
    throw new Error('useProductos debe utilizarse dentro de ProductosProvider');
  }
  return context;
}
