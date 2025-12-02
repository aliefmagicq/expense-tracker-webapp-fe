import 'server-only';

import axios, { AxiosError } from 'axios';
import { JWTPayload } from 'jose';
import AuthSession from '../auth/auth';

type Session = {
  token: {
    api_token: string;
    type: 'Bearer';
  };
};

type Methods = 'head' | 'options' | 'put' | 'post' | 'patch' | 'delete' | 'get';

type FetchServer = {
  method: Methods;
  url: string;
  body?: Record<string, string | number>;
  includeAuthorization?: boolean;
};

export async function fetchServer({
  method,
  url,
  body,
  includeAuthorization = false,
}: FetchServer) {
  const session: JWTPayload = await new AuthSession().getSession();
  const token = session.token as Session['token'];

  const includeHeaders = {
    'Content-Type': 'application/json',
  };

  const includeHeadersAuthorization = {
    Authorization: `${token.type} ${token.api_token ?? ''}`,
    'Content-Type': 'application/json',
  };

  try {
    if (['head', 'options', 'delete', 'get'].includes(method)) {
      const res = await axios[method](url, {
        withCredentials: true,
        headers: includeAuthorization
          ? includeHeadersAuthorization
          : includeHeaders,
      });

      const data = res.data;
      return data;
    } else {
      const res = await axios[method](url, body, {
        withCredentials: true,
        headers: includeAuthorization
          ? includeHeadersAuthorization
          : includeHeaders,
      });

      const data = res.data;
      return data;
    }
  } catch (err) {
    if (err instanceof AxiosError) {
      throw new Error(err.response?.data.message as string);
    }
  }
}
