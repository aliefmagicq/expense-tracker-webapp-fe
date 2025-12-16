'use client';

import axios, { isAxiosError } from 'axios';
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
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        /**
         * Server error 4** 5**
         */
        console.error(
          'Server error:',
          error.response.status,
          error.response.data
        );

        throw new Error(error.response.data.message || 'Server error');
      } else if (error.request) {
        /**
         * Network error
         */
        console.error('Network error:', error.request);
        throw new Error('Network error. Please check your connection'); // ✅ String message
      } else {
        /**
         * Request setup error
         */
        console.error('Request error:', error.message);
        throw new Error(error.message);
      }
    }

    /**
     * Unexpected error
     */
    console.error('Unexpected error:', error);
    throw error;
  }
}
