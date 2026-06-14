|                               |                               |
|:-----------------------------:|:-----------------------------:|
| <a target="_blank" href="https://reactnative.dev/">  <img src="https://reactnative.dev/img/header_logo.svg" width="180" alt="React Native Logo"></a> | <a target="blank"  href="https://docs.expo.dev/"> <img src="https://www.svgrepo.com/show/330397/expo.svg" width="180" alt="Expo Logo"></a> |
| [Docs React Native](https://reactnative.dev/) | [Docs Expo](https://docs.expo.dev/) |



# Curso de React Native - Expo

Esta guía reúne las instalaciones recomendadas para el curso de React Native con Expo. La idea es que cada alumno pueda seguir los pasos en orden, verificar que todo quedó listo y evitar errores comunes desde el inicio.

## 📦 Proyectos del Curso

En este repositorio contamos con 3 proyectos principales. A continuación se explica brevemente para qué sirve cada uno y cómo puedes iniciarlos en tu computadora.

### 1. `contador`
- **¿Para qué sirve?** Es una aplicación básica construida con **Expo** y utiliza **Expo Router** para el manejo de rutas y navegación. Como su nombre indica, probablemente es una app interactiva de contador.
- **¿Qué vas a aprender aquí?** Ideal para dar los primeros pasos en React Native, entender la estructura de carpetas de Expo Router y manejar el estado básico (state) en React.

### 2. `first_nativewind`
- **¿Para qué sirve?** Es un proyecto que integra **NativeWind** (que nos permite usar Tailwind CSS en React Native).
- **¿Qué vas a aprender aquí?** Perfecto para aprender a dar estilos a tus aplicaciones móviles de manera rápida y moderna usando las clases utilitarias de Tailwind, combinadas con la navegación de Expo Router.

### 3. `my-expo-app`
- **¿Para qué sirve?** Es un proyecto base (boilerplate) también configurado con **NativeWind**, pero que añade configuraciones avanzadas para mantener un código limpio y ordenado utilizando herramientas como **ESLint** y **Prettier**.
- **¿Qué vas a aprender aquí?** Te servirá como base sólida para iniciar proyectos escalables y profesionales asegurando buenas prácticas y un código uniforme.

---

## 🚀 ¿Cómo iniciar cualquiera de estos 3 proyectos?

Sigue estos 3 sencillos pasos para levantar cualquiera de los proyectos:

### Paso 1: Abre la terminal en la carpeta del proyecto
Primero debes ubicarte dentro de la carpeta del proyecto que quieres ejecutar. En tu terminal (o consola de VS Code), escribe `cd` seguido del nombre del proyecto.
Por ejemplo, si quieres iniciar el contador:
```bash
cd contador
```

### Paso 2: Instala las dependencias
Antes de correr el proyecto, necesitas descargar todas las librerías necesarias. Ejecuta el siguiente comando (solo es necesario hacerlo la primera vez):
```bash
npm install
```

### Paso 3: Inicia el servidor de Expo
Una vez que termine la instalación, levanta el proyecto ejecutando:
```bash
npm start
# o también puedes usar: npx expo start
```

### Paso 4: ¡Visualiza la App!
Cuando ejecutes el comando anterior, verás un código QR en tu terminal. Tienes varias opciones:
- **En tu celular físico:** Abre la app de **Expo Go**, escanea el código QR y la app cargará en tu celular.
- **En un Emulador:** Presiona la tecla `a` en tu terminal para abrirlo en el emulador de Android, o la tecla `i` para abrirlo en el simulador de iOS (solo en Mac).

*(Nota: Repite estos mismos pasos si deseas iniciar `first_nativewind` o `my-expo-app`, cambiando el nombre de la carpeta en el Paso 1).*

---

## Antes de empezar con las instalaciones

1. Verifica que tu computadora tenga conexión a internet estable.
2. Cierra programas que puedan bloquear instalaciones, como antivirus o instaladores viejos.
3. Si ya tenías herramientas instaladas, revisa que estén actualizadas antes de comenzar.

## Orden recomendado de instalación general

### 1. Instala Visual Studio Code

1. Entra a [Visual Studio Code](https://code.visualstudio.com/).
2. Descarga la versión correspondiente a tu sistema operativo.
3. Ejecuta el instalador y termina el proceso con la configuración por defecto.
4. Abre VS Code para confirmar que inicia correctamente.

### 2. Instala Git

1. Descarga Git desde [git-scm.com](https://git-scm.com/).
2. Instálalo con la configuración sugerida por el instalador.
3. Abre una terminal y confirma que Git responde correctamente.
4. Configura tus datos personales una sola vez:

```bash
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```

### 3. Instala Node.js

1. Descarga Node desde [nodejs.org/es](https://nodejs.org/es/).
2. Elige la versión LTS, que es la más estable para el curso.
3. Completa la instalación.
4. Verifica que Node y npm queden disponibles en la terminal.
5. Para saber si se instaló correctamente, abre la terminal y ejecuta `node -v` y `npm -v`.
6. Si ambos comandos muestran un número de versión, la instalación fue correcta.

### 4. Instala Postman

1. Descarga Postman desde [postman.com/downloads](https://www.postman.com/downloads/).
2. Instálalo normalmente.
3. Ábrelo al menos una vez para confirmar que funciona.
4. Más adelante lo usaremos para probar servicios y APIs.

### 5. Instala Android Studio

1. Descarga Android Studio desde [developer.android.com/studio](https://developer.android.com/studio).
2. Instálalo con los componentes recomendados.
3. Abre Android Studio y deja que termine de preparar el entorno.
4. Si vas a usar emulador, verifica que tenga instalado un dispositivo virtual Android.
5. Si tu PC es lenta o no soporta bien los emuladores, puedes usar [Vysor](https://www.vysor.io/) como alternativa.
6. Con Vysor puedes conectar tu celular por cable USB y usarlo para probar la aplicación directamente en tu dispositivo.
7. Para que funcione correctamente, activa las opciones de desarrollador y la depuración USB en tu teléfono.
8. Comprueba que el sistema reconozca el dispositivo antes de continuar con el curso.

### 6. Instala Xcode solo en Mac

1. Si usas macOS, descarga [Xcode](https://apps.apple.com/ca/app/xcode/id497799835).
2. Instálalo desde la App Store.
3. Ábrelo una vez para completar la configuración inicial.
4. Este paso no aplica en Windows.

### 7. Instala Expo Go

Expo Go sirve para probar aplicaciones del curso directamente desde el celular.

1. En Android, instala [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent).
2. En iPhone, instala [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779).
3. Inicia sesión si la app lo solicita.
4. Ten el teléfono listo para escanear códigos QR cuando trabajemos con proyectos Expo.



## Extensiones recomendadas para VS Code

Instala estas extensiones para trabajar más rápido y con menos errores:

1. [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens): muestra errores y advertencias directamente en el código.
2. [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets): agrega atajos útiles para React.
3. [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets): ofrece plantillas rápidas para componentes.
4. [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag): cierra etiquetas automáticamente.
5. [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype): ayuda a convertir JSON en código.
6. [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): mejora el autocompletado de Tailwind CSS.
7. [Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize): muestra colores directamente en el editor.

## Revisión final

Antes de empezar a programar, confirma lo siguiente:

1. VS Code abre sin problemas.
2. Git reconoce tu nombre y correo.
3. Node.js responde en la terminal.
4. Postman abre correctamente.
5. Android Studio o Xcode están listos según tu sistema operativo.
6. Si no usarás emulador, Vysor está instalado y tu celular se conecta por cable USB.
7. Expo Go está instalado en el celular.
8. Las extensiones de VS Code ya están instaladas.
