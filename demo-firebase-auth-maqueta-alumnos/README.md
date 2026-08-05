# Demo Firebase Auth - Maqueta alumnos

Objetivo: completar login, registro, logout y pantalla protegida con Firebase Authentication.

## Pasos

1. Instalar dependencias:

```bash
npm install
npx expo start -c
```

2. Crear proyecto en Firebase Console.
3. Activar Authentication con correo/contraseña.
4. Copiar las credenciales en:

```txt
infrastructure/firebase/firebaseConfig.ts
```

5. Completar:

```txt
infrastructure/services/authService.ts
```

6. Ejecutar:

```bash
npm run start
```

## Lo que debe implementar el alumno

- Pegar `firebaseConfig` real.
- Revisar `authService.ts`.
- Entender `createUserWithEmailAndPassword`.
- Entender `signInWithEmailAndPassword`.
- Entender `signOut`.
- Entender `onAuthStateChanged`.
- Probar Login -> Home.
- Probar Crear cuenta -> Home.
- Probar Cerrar sesión -> Login.

## Flujo esperado

```txt
LoginScreen
  ├─ Crear cuenta
  │    └─ RegisterScreen
  │         └─ Firebase crea usuario
  │              └─ HomeScreen
  └─ Iniciar sesión
       └─ Firebase valida usuario
            └─ HomeScreen
```

## Logs que debe observar el alumno

```txt
[FIREBASE CONFIG]
[UI LOGIN]
[AUTH LOGIN]
[UI REGISTER]
[AUTH REGISTER]
[AUTH SESSION]
[AUTH LOGOUT]
```

El estudiante debe mirar la consola antes de mirar solo la interfaz.

## NativeWind

La maqueta usa NativeWind para que el código visual sea más corto.

Si se cambia configuración visual, reiniciar con:

```bash
npx expo start -c
```
