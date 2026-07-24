let accessTokenMemory: string | null = null;
let refreshTokenMemory: string | null = null;

export const tokenStore = {
  setTokens(accessToken: string, refreshToken: string) {
    console.log('[TOKEN STORE] Guardando accessToken y refreshToken en memoria');
    accessTokenMemory = accessToken;
    refreshTokenMemory = refreshToken;
  },

  getAccessToken() {
    return accessTokenMemory;
  },

  getRefreshToken() {
    return refreshTokenMemory;
  },

  clear() {
    console.log('[TOKEN STORE] Limpiando sesión');
    accessTokenMemory = null;
    refreshTokenMemory = null;
  },
};
