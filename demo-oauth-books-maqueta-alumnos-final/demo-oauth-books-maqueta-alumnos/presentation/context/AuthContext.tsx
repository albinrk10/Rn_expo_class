import { createContext, PropsWithChildren, useState } from 'react';

import { OAuthSession } from '../../domain/models/OAuthSession';
import { oauthApi } from '../../infrastructure/api/oauthApi';
import { tokenStore } from '../../infrastructure/session/tokenStore';

type AuthContextValue = {
  session: OAuthSession | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  refreshSession: () => Promise<void>;
  logout: () => void;
  clearError: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<OAuthSession | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      

      // TODO 10:
      // Llamar oauthApi.login(username, password)
      // Guardar tokens con tokenStore.setTokens(...)
      // Guardar la sesión con setSession(...)
      const newSession = await oauthApi.login(username, password);
      tokenStore.setTokens(newSession.accessToken, newSession.refreshToken)
      setSession(newSession);

      console.log('[TODO AUTH] Login OAuth2', { username, password: '***' });
    } catch (e) {
      console.log('[AUTH ERROR] login', e);
      setError('No se pudo iniciar sesión. Revisa usuario/contraseña o conexión.');
    } finally {
      setLoading(false);
    }
  };

  const refreshSession = async () => {
    const refreshToken = tokenStore.getRefreshToken();
    if (!refreshToken) {
      setError('No hay refresh token para renovar sesión.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // TODO 11:
      // Llamar oauthApi.refresh(refreshToken)
      // Guardar nuevos tokens
      // Actualizar session
      const newSession = await oauthApi.refresh(refreshToken);
      tokenStore.setTokens(newSession.accessToken, newSession.refreshToken);
      setSession(newSession);

      console.log('[TODO AUTH] Refresh token', { refreshToken });
    } catch (e) {
      console.log('[AUTH ERROR] refreshSession', e);
      setError('No se pudo renovar el token.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    tokenStore.clear();
    setSession(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        error,
        isAuthenticated: Boolean(session?.accessToken),
        login,
        refreshSession,
        logout,
        clearError: () => setError(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
