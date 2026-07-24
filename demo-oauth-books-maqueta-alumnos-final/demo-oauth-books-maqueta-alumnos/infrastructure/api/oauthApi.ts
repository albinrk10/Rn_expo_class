import axios from 'axios';

import { OAuthSession } from '../../domain/models/OAuthSession';
import { oauthConfig } from '../config/oauthConfig';

type OAuthTokenResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
};

const oauthClient = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

function toSession(data: OAuthTokenResponse): OAuthSession {
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    tokenType: data.token_type,
    expiresIn: data.expires_in,
    scope: data.scope,
  };
}

export const oauthApi = {

  async login(username: string, password: string): Promise<OAuthSession> {
    const body = new URLSearchParams(
      {
        grant_type: 'password',
        client_id: oauthConfig.clientId,
        client_secret: oauthConfig.clientSecret,
        username,
        password,
      }
    );

    console.log('[API REQUEST] POST /oauth2/token grant_type=password', {
      username,
      password: '***',
      config: oauthConfig.tokenUrl,
    });

    const response = await oauthClient.post<OAuthTokenResponse>(
      oauthConfig.tokenUrl,body.toString()
    );
    
    console.log('[API REQUEST] POST /oauth2/token', {
      token_type: response.data.token_type,
      access_token :response.data.access_token,
      refresh_token: response.data.refresh_token,
      expires_in: response.data.expires_in,
      
    });
    

    return toSession(response.data);

  },

  async refresh(refreshToken: string): Promise<OAuthSession> {
     const body = new URLSearchParams(
      {
        grant_type: 'refresh_token',
        client_id: oauthConfig.clientId,
        client_secret: oauthConfig.clientSecret,
        refresh_token: refreshToken,
      }
    );

    console.log('[TODO] POST /oauth2/token grant_type=refresh_token', {
      refreshToken,
      config: oauthConfig.tokenUrl,
    });

    const response = await oauthClient.post<OAuthTokenResponse>(
      oauthConfig.tokenUrl,body.toString()
    );

     console.log('[API REQUEST] refresh token', {
      token_type: response.data.token_type,
      access_token :response.data.access_token,
      refresh_token: response.data.refresh_token,
      expires_in: response.data.expires_in,
      
    });
    
    return toSession(response.data);
    
  },
};


