import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import md5 from 'md5';
import { Credentials } from '@internal/types';
import { HTTP_UNAUTHORIZED } from '@internal/constants';

export function signUpWithCredential(credentials: Credentials) {
  const prisma = new PrismaClient();
  const { email, password } = credentials;
  return prisma.user.create({ data: { email, password: md5(password) } });
}

export function signInWithCredential(credentials: Credentials) {
  const prisma = new PrismaClient();
  const { email, password } = credentials;
  return prisma.user.findFirstOrThrow({
    where: { email, password: md5(password) },
  });
}

export async function isAuthenticated(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const sessionToken = req.cookies['next-auth.session-token'] || '';
  const prisma = new PrismaClient();
  try {
    return prisma.session
      .findFirstOrThrow({ where: { sessionToken } })
      .user({ select: { name: true, email: true, telephone: true } });
  } catch (_) {
    res.status(HTTP_UNAUTHORIZED).end();
    throw new Error('Unahtorized');
  }
}
