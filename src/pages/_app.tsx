import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import { PageWrapper } from '@/components/PageWrapper/PageWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}

export default MyApp;
