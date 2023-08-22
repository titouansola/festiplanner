import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { isClient } from '@internal/utils';

export function useAuthService() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (typeof session !== 'undefined') {
      if (!!session && router.asPath === '/') {
        void router.push('/dashboard');
      } else if (!session && router.asPath !== '/') {
        void router.push('/');
      }
    }
  });

  return {
    session,
    signOut: () => {
      if (isClient()) {
        void signOut({ callbackUrl: location.host });
      }
    },
  };
}
