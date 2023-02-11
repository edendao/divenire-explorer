// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
// rainbowkit
import '@rainbow-me/rainbowkit/styles.css';
// next
import Head from 'next/head';
import type { AppProps as NextAppProps } from 'next/app';
// @emotion
import { CacheProvider, EmotionCache } from '@emotion/react';
// react-query
import { QueryClient, QueryClientProvider } from 'react-query';
// wagmi
import { WagmiConfig } from 'wagmi';
import { client } from '../wagmi';
// theme
import ThemeProvider from '../theme';
import createEmotionCache from '../utils/createEmotionCache';
import MainLayout from '../layouts/main';
// components
import CollapseDrawerProvider from '../components/CollapseDrawerProvider';
import NotistackProvider from '../components/NotistackProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
// Create a client
const queryClient = new QueryClient();

export type AppProps = NextAppProps & {
  emotionCache?: EmotionCache;
};

export default function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <WagmiConfig client={client}>
      <CacheProvider value={emotionCache}>
        <QueryClientProvider client={queryClient}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>

          <CollapseDrawerProvider>
            <ThemeProvider>
              <NotistackProvider>
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              </NotistackProvider>
            </ThemeProvider>
          </CollapseDrawerProvider>
        </QueryClientProvider>
      </CacheProvider>
    </WagmiConfig>
  );
}
