# Semana 10 - Demo Expo Maps Maqueta Alumnos

Proyecto base para completar en clase.

## Objetivo

Mostrar Google Maps dentro de la app, colocar un marcador y centrar el mapa usando la ubicacion actual del dispositivo.

## Librerias

```bash
npx expo install expo-maps expo-location
```

## Ejecutar dependencias

```bash
npm install
```

## Importante

```txt
expo-maps no funciona en Expo Go.
Para probarlo se necesita development build o APK.
```

## Como trabajar con npm run start

Para acomodar la interfaz, pueden ejecutar:

```bash
npm run start
```

Si abren la app con Expo Go, veran un recuadro llamado:

```txt
MODO MAQUETA
```

Eso es normal. Sirve para diseñar la pantalla sin sacar APK a cada cambio.

Cuando quieran ver Google Maps real, deben generar e instalar el APK release.

## Generar APK release

```bash
npx expo prebuild --platform android --clean
cd android
.\gradlew.bat assembleRelease
```

El APK queda en:

```txt
android\app\build\outputs\apk\release\app-release.apk
```

## Que deben completar

Archivo:

```txt
infrastructure/services/locationService.ts
```

Completar:

```txt
1. Solicitar permiso de ubicacion.
2. Obtener la ubicacion actual.
3. Retornar latitude y longitude.
```

Archivo:

```txt
presentation/screens/MapaScreen.tsx
```

Completar:

```txt
1. Guardar la ubicacion obtenida.
2. Mover la camara del mapa con setCameraPosition.
3. Verificar que el marcador cambie de posicion.
```

## API Key

Para Android, la key se configura en `app.json`, dentro de `android.config.googleMaps.apiKey`:

```json
"android": {
  "config": {
    "googleMaps": {
      "apiKey": "TU_GOOGLE_MAPS_API_KEY"
    }
  }
}
```

No subir claves reales a repositorios publicos sin restricciones.
