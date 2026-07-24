export const oauthConfig = {
  tokenUrl: 'https://wso2isjr.techjrstar.com/oauth2/token',
  booksBaseUrl: 'https://library-management.techjrstar.com/api/v1',
  clientId: 'bST2q47eZertdff9d4SLLwkPALca',
  clientSecret: 'GSEQ6qcTsD_ujJ7qmpCCqs8f19Sddn0IA4x39uPAbgQa',
};

// DOCENTE:
// En una app móvil real NO se recomienda exponer client_secret dentro del código.
// Para clase se deja visible porque el objetivo es entender OAuth2, token opaco,
// refresh token e interceptor. En producción, esto debe ir detrás de un backend.
