'use client';

import axios, { AxiosError } from 'axios';
import { JWTPayload } from 'jose';
import { getServerSession } from '../auth/session.action';

type Session = {
  session: {
    token: {
      api_token: string;
      type: 'Bearer';
    };
  };
};

type Methods = 'head' | 'options' | 'put' | 'post' | 'patch' | 'delete' | 'get';

type FetchCLient = {
  method: Methods;
  url: string;
  body?: Record<string, string | number>;
  includeAuthorization?: boolean;
};

export async function fetchClient({
  method,
  url,
  body,
  includeAuthorization = false,
}: FetchCLient) {
  const sessionPayload: JWTPayload = await getServerSession();
  const session = sessionPayload.session as Session['session'];
  const token = session?.token ?? null;

  const includeHeaders = {
    'Content-Type': 'application/json',
  };

  const includeHeadersAuthorization = {
    Authorization: `${
      token && token !== null ? `${token.type} ${token.api_token}` : ''
    }`,
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
