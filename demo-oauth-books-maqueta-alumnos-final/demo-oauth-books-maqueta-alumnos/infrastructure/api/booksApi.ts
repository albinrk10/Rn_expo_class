import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { Book, normalizeBook } from '../../domain/models/Book';
import { oauthConfig } from '../config/oauthConfig';
import { oauthApi } from './oauthApi';
import { tokenStore } from '../session/tokenStore';

type RetryConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

export const booksApi = axios.create({
  baseURL: oauthConfig.booksBaseUrl,
});

booksApi.interceptors.request.use((config) => {
  const token = tokenStore.getAccessToken();

  // TODO 6:
  // Si hay token, agregar:
  // config.headers.Authorization = `Bearer ${token}`;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log('[API REQUEST] Books endpoint', {
    method: config.method?.toUpperCase(),
    url: config.url,
    Authorization: token ? `Bearer ${token}` : 'SIN TOKEN',
  });

  return config;
});

booksApi.interceptors.response.use(
  (response) => {
    console.log('[API RESPONSE] Books endpoint', {
      status: response.status,
      url: response.config.url,
    });
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryConfig | undefined;

    console.log('[API ERROR] Books endpoint', {
      status: error.response?.status,
      url: originalRequest?.url,
    });

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = tokenStore.getRefreshToken();
      if (!refreshToken) {
        return Promise.reject(error);
      }

      console.log('[TODO INTERCEPTOR] Renovar token y reintentar request original');
      const newSession = await oauthApi.refresh(refreshToken);
      tokenStore.setTokens(newSession.accessToken, newSession.refreshToken);

      // TODO 7:
      // Llamar oauthApi.refresh(refreshToken)
      // Guardar nuevos tokens en tokenStore
      // Actualizar Authorization del request original
      // Retornar booksApi(originalRequest)

      originalRequest.headers.Authorization = `Bearer ${newSession.accessToken}`;

      console.log('[Interceptor] Reintentando request original con nuevo token');


    }

    return Promise.reject(error);
  },
);

export const booksRepository = {
  async listar(): Promise<Book[]> {
    const response = await booksApi.get<unknown>('/books');
    const rawData = response.data;

    const list = Array.isArray(rawData)
      ? rawData
      : Array.isArray((rawData as { data?: unknown }).data)
        ? (rawData as { data: unknown[] }).data
        : Array.isArray((rawData as { content?: unknown[] }).content)
          ? (rawData as { content: unknown[] }).content
          : [];



    console.log('[TODO] GET /books usando booksApi', list);

    // TODO 8:
    // Llamar booksApi.get<unknown>('/books')

    // TODO 9:
    // Normalizar la respuesta a Book[]

    return list.map((item, index) =>
      normalizeBook(item as Record<string, unknown>, index));
  },
};


