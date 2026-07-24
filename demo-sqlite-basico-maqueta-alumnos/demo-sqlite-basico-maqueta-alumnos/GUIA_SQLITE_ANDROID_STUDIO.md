# Guía: Cómo visualizar la base de datos SQLite de Expo en Android Studio

Esta guía te enseñará paso a paso cómo inspeccionar los datos que guardas en tu aplicación de React Native (Expo) utilizando la herramienta nativa de Android Studio.

## Requisitos previos
1. Tener la aplicación corriendo en el emulador de Android.
2. Tener Android Studio abierto (no es necesario abrir un proyecto en específico, la pantalla de inicio o cualquier proyecto vacío funciona).
3. Haber realizado al menos una operación de inserción (INSERT) en la aplicación para que la base de datos se haya creado.

---

## Pasos para ver la base de datos en tiempo real

### Paso 1: Abrir la herramienta "App Inspection"
1. Con tu emulador encendido y la app en pantalla, ve a la ventana de **Android Studio**.
2. En el menú superior, navega a: **View** -> **Tool Windows** -> **App Inspection**.
3. *Nota:* También puedes encontrar esta opción en la barra de herramientas que normalmente se ubica en la parte inferior de Android Studio.

### Paso 2: Seleccionar el proceso de tu aplicación
1. En la parte superior de la ventana de "App Inspection", verás un menú desplegable para seleccionar el dispositivo y el proceso.
2. Selecciona tu emulador actual (Ej. *Pixel 9 Pro*).
3. Selecciona el proceso correspondiente a Expo. Si estás usando Expo Go, el proceso se llamará **`host.exp.exponent`**. Si es una aplicación compilada (standalone), busca el nombre del paquete de tu app (Ej. `com.tuusuario.tuapp`).

### Paso 3: Abrir el "Database Inspector"
1. Una vez seleccionado el proceso, verás tres pestañas en esa ventana. Haz clic en la pestaña que dice **Database Inspector**.
2. En el panel lateral izquierdo de esta pestaña, aparecerá una lista de bases de datos. 
3. Busca el nombre de tu base de datos (por ejemplo, **`semana9_solicitudes.db`**) y haz clic en la flecha a su lado para desplegar su contenido.

### Paso 4: Visualizar los datos
1. Al desplegar la base de datos, verás las tablas que has creado (como la tabla **`solicitudes`**).
2. Haz **doble clic sobre el nombre de la tabla**.
3. ¡Listo! En el panel derecho se abrirá una vista tipo hoja de cálculo (Excel) donde podrás ver todas las columnas y los registros guardados en vivo.

---

## 💡 Tips Adicionales

- **Live Updates:** Si marcas la casilla que dice "Live updates" (ubicada arriba de la tabla que acabas de abrir), verás que si agregas un nuevo registro desde tu emulador, la tabla en Android Studio se actualizará de forma instantánea sin necesidad de recargar.
- **Consultas SQL en vivo:** Si quieres practicar SQL, puedes presionar el botón **"Open New Query Tab"** (Suele tener el ícono de una base de datos con una lupa) para escribir y ejecutar sentencias `SELECT`, `UPDATE` o `DELETE` manualmente contra tu aplicación en ejecución.

---
**Nota técnica sobre archivos `-wal` y `-shm`:**
Si alguna vez intentas extraer el archivo físico de la base de datos desde el *Device File Explorer*, asegúrate de copiar también los archivos que terminan en `.db-wal` y `.db-shm`. Expo SQLite usa el modo WAL (Write-Ahead Logging) por defecto para mayor rendimiento, lo que significa que los datos más recientes viven temporalmente en el archivo `-wal` antes de guardarse definitivamente en el `.db`.
