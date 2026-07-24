# Semana 7 - OAuth2 token opaco maqueta alumnos

Maqueta para completar en clase:

```txt
Login OAuth2 -> access_token opaco -> refresh_token -> endpoint protegido /books
```

## Ejecutar

```bash
npm install
npm start
```

## Archivos que deben completar

```txt
infrastructure/api/oauthApi.ts
infrastructure/api/booksApi.ts
presentation/context/AuthContext.tsx
```

## Qué deben implementar

- POST OAuth2 con `grant_type=password`.
- Guardar `access_token` y `refresh_token`.
- Agregar `Authorization: Bearer TOKEN` con interceptor.
- Consumir `/books`.
- Usar refresh token si la API responde 401.

## Importante

El `client_secret` está visible solo por ser demo educativa. En producción debe protegerse en un backend.
