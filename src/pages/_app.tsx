import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';

import '../styles/index.scss';
import '../core/client/_i18n/initialize';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'devanagari', 'latin-ext'],
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <Head>
        <title>Festiplanner</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
        </QueryClientProvider>
      </SessionProvider>
    </>
  );
}
