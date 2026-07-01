# Demo Menu GET Básico

Proyecto React Native + Expo para explicar consumo básico de endpoint.

Endpoint usado:

```text
https://platziblog-124e6-default-rtdb.firebaseio.com/Menu/.json
```

La app muestra el mismo menú usando dos formas:

- `fetch`
- `axios`

## Ejecutar

```bash
npm install
npm start
```

## Archivos principales

```text
domain/entities/Comida.ts       Modelo de datos
services/menuApi.ts             GET con fetch y GET con Axios
presentation/components/ComidaCard.tsx
app/index.tsx                   Pantalla principal
```

## Idea para clase

Primero explicar `fetch`:

```ts
const response = await fetch(URL);
const data = await response.json();
```

Luego explicar Axios:

```ts
const response = await axios.get(URL);
const data = response.data;
```

La diferencia importante:

```text
fetch viene nativo.
Axios es una librería muy usada en proyectos laborales.
```
