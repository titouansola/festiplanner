import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import { signInWithCredential, signUpWithCredential } from '@internal/server';

export default NextAuth({
  adapter: PrismaAdapter(new PrismaClient()) as Adapter,
  providers: [
    CredentialProvider({
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        return signInWithCredential(credentials).catch(() =>
          signUpWithCredential(credentials)
        );
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
});
