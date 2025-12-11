import 'server-only';

import { JWTPayload, jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';

type CreateSessionPayload = {
  userId: number | string;
  email: string;
  token: {
    api_token: string;
    type: 'Bearer';
  };
};

export type CreateSession = {
  session: CreateSessionPayload;
};

export default class AuthSession {
  constructor(
    private AUTH_KEY = new TextEncoder().encode(process.env.AUTH_SECRET),
    private duration = 7 * 24 * 60 * 60 * 1000,
    private cookieName = 'session'
  ) {}

  async encryptToken(payLoad: JWTPayload) {
    const jwtSign = new SignJWT(payLoad)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('7day')
      .sign(this.AUTH_KEY);

    return jwtSign;
  }

  async decryptToken(session: string) {
    try {
      const { payload } = await jwtVerify(session, this.AUTH_KEY, {
        algorithms: ['HS256'],
      });

      return payload;
    } catch {
      return null;
    }
  }

  async createSession(payLoad: CreateSession) {
    const expires = new Date(Date.now() + this.duration);
    const jwtToken = await this.encryptToken({ ...payLoad, expires });

    const setCookie = (await cookies()).set(this.cookieName, jwtToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      expires,
    });

    return setCookie;
  }

  async verifySession() {
    const jwtToken = (await cookies()).get(this.cookieName)?.value;
    if (!jwtToken) {
      return { session: null };
    }

    const validJwtToken = await this.decryptToken(jwtToken);
    if (!validJwtToken) {
      return { session: null };
    }

    return validJwtToken;
  }

  async destroySession() {
    (await cookies()).delete(this.cookieName);
  }

  async getSession() {
    return await this.verifySession();
  }
}
