import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { GeneralProvider } from '@/context';
import { Footer, Header } from '@/elements/organisms';

import '../styles/index.scss';

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Header />
      <main
        className={`pt-14 relative overflow-hidden lg:pt-16 ${pathname === '/' ? 'bg-grey-10' : 'bg-neutrals-100'}`}
      >
        <GeneralProvider>
          <Component {...pageProps} />
        </GeneralProvider>
      </main>
      {pathname === '/' && <Footer />}
    </>
  );
}
