# Semana 9 - Demo SQLite Básico Maqueta Alumnos

Proyecto maqueta para completar persistencia local con SQLite en React Native + Expo.

## Objetivo

Entender el flujo:

```txt
Formulario -> SQLite INSERT -> SQLite SELECT -> Lista -> UPDATE/DELETE
```

## ¿Qué debe completar el alumno?

Archivos principales:

```txt
infrastructure/database/database.ts
infrastructure/repositories/solicitudRepository.ts
```

## Estructura

```txt
app/                 rutas de Expo Router
domain/              modelos de datos
infrastructure/      SQLite y repositorio
presentation/        pantalla y componentes UI
```

## Ejecutar

```bash
npm install
npm start
```

## Flujo esperado

1. Crear la tabla `solicitudes`.
2. Insertar una solicitud.
3. Listar solicitudes guardadas.
4. Cambiar estado `PENDIENTE` / `FINALIZADO`.
5. Eliminar una solicitud.
