# Semana 10 - Ejercicio 3: Notas con foto y persistencia

Solucion docente para explicar persistencia local usando una foto tomada con camara o seleccionada desde galeria.

## Objetivo

Crear una app basica que permita:

```txt
1. Escribir titulo y descripcion.
2. Tomar una foto o seleccionar una imagen de galeria.
3. Mostrar preview de la imagen.
4. Guardar la nota en SQLite.
5. Recuperar las notas al reiniciar la app.
6. Eliminar una nota guardada.
```

## Librerias usadas

```bash
npx expo install expo-image-picker expo-sqlite
```

## Idea clave para explicar

```txt
La imagen NO se guarda dentro de SQLite.
SQLite guarda la ruta de la imagen: fotoUri.
Luego React Native usa esa URI para mostrar el preview con <Image />.
```

## Flujo de la app

```txt
Usuario escribe nota
        ↓
Toma foto o selecciona de galeria
        ↓
La app obtiene una fotoUri
        ↓
Se guarda titulo, descripcion, fotoUri y fecha en SQLite
        ↓
Al reiniciar, la app lee SQLite y muestra las notas
```

## Estructura importante

```txt
domain/models/NotaFoto.ts
infrastructure/database/notasDatabase.ts
infrastructure/services/fotoService.ts
presentation/screens/NotasFotoScreen.tsx
presentation/components/NotaFotoCard.tsx
```

## Archivos para explicar en clase

### 1. Modelo

```txt
domain/models/NotaFoto.ts
```

Define la estructura:

```txt
id, titulo, descripcion, fotoUri, fechaRegistro
```

### 2. Servicio de foto

```txt
infrastructure/services/fotoService.ts
```

Explica:

```txt
requestCameraPermissionsAsync
launchCameraAsync
requestMediaLibraryPermissionsAsync
launchImageLibraryAsync
```

### 3. Base de datos

```txt
infrastructure/database/notasDatabase.ts
```

Explica:

```txt
openDatabaseAsync
CREATE TABLE
INSERT
SELECT
DELETE
```

### 4. Pantalla

```txt
presentation/screens/NotasFotoScreen.tsx
```

Explica:

```txt
useState para formulario
useEffect para cargar data inicial
Image para preview
FlatList para listar notas
```

## Como probar persistencia

```txt
1. Ejecutar la app.
2. Registrar una nota con foto.
3. Cerrar o recargar la app.
4. Verificar que la nota vuelve a aparecer.
```

## Ejecutar

```bash
npm install
npm run start
```

Este ejercicio si puede trabajarse con Expo Go porque usa librerias compatibles con Expo.

