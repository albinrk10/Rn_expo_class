# Maqueta — Context API + CRUD en memoria

Proyecto para trabajar en clase paso a paso.
Este proyecto es una maqueta inicial para una clase de React Native. El objetivo es que los estudiantes aprendan a gestionar un estado global implementando un CRUD (Crear, Leer, Actualizar, Eliminar) que funciona en memoria, utilizando la Context API y el hook `useReducer`.

Esta maqueta ya tiene la interfaz lista, pero todavía no tiene conectado:
La aplicación cuenta con una interfaz de usuario pre-construida para listar, crear y editar productos, pero la lógica de estado no está conectada.

- Context API real.
- Provider global.
- `useReducer`.
- CRUD en memoria.
## Ejecutar el proyecto

1.  Abre una terminal en la raíz del proyecto.
2.  Instala las dependencias:
    ```bash
    npm install
    ```
3.  Inicia el servidor de desarrollo de Expo:
    ```bash
    npm start
    ```
4.  Escanea el código QR con la aplicación Expo Go en tu teléfono (Android o iOS) o ejecuta la aplicación en un emulador de Android o simulador de iOS.

## ¿Qué ya está listo?

## Ejecutar

```bash
npm install
npm start
```

## Qué ya está listo

- Pantalla principal en `app/index.tsx`.
- Formulario visual.
- Lista con `FlatList`.
- Tarjeta de producto.
- Entidad `Producto`.
- Archivos preparados para Context y reducer.

## Qué deben implementar en clase
## ¿Qué se debe implementar en clase?

1. Crear el `ProductosProvider`.
2. Conectar `useReducer`.
3. Implementar las funciones `crear`, `actualizar` y `eliminar`.
4. Envolver la app con el Provider en `app/_layout.tsx`.
5. Consumir `useProductos()` desde `app/index.tsx`.
6. Conectar el formulario con `crear` y `actualizar`.
7. Conectar el botón eliminar con `eliminar`.
8. Completar el reducer con `spread`, `map` y `filter`.
1.  Crear el `ProductosProvider`.
2.  Conectar `useReducer`.
3.  Implementar las funciones `crear`, `actualizar` y `eliminar`.
4.  Envolver la app con el Provider en `app/_layout.tsx`.
5.  Consumir `useProductos()` desde `app/index.tsx`.
6.  Conectar el formulario con `crear` y `actualizar`.
7.  Conectar el botón eliminar con `eliminar`.
8.  Completar el reducer con `spread`, `map` y `filter`.

## Archivos principales

```text
app/_layout.tsx                         Aquí se agregará el Provider
app/index.tsx                           Pantalla principal
domain/entities/Producto.ts             Entidad del dominio
presentation/context/ProductosContext.tsx Context API pendiente de implementar
presentation/reducers/productosReducer.ts Reducer pendiente de completar
presentation/hooks/useProductoForm.ts   Estado local del formulario
presentation/components/ProductoForm.tsx Formulario visual
presentation/components/ProductoItem.tsx Tarjeta visual
```
