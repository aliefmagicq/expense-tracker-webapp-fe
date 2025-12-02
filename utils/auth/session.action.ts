'use server';

import AuthSession from './auth';

export async function getServerSession() {
  const session = await new AuthSession().getSession();
  return session;
}
