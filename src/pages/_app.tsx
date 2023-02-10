// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
// rainbowkit
import '@rainbow-me/rainbowkit/styles.css';
// next
import Head from 'next/head';
import type { AppProps as NextAppProps } from 'next/app';
// @emotion
import { CacheProvider, EmotionCache } from '@emotion/react';
// wagmi
import { WagmiConfig } from 'wagmi';
import { client } from '../wagmi';
import ThemeProvider from '../theme';
import createEmotionCache from '../utils/createEmotionCache';
import MainLayout from '../layouts/main';
import CollapseDrawerProvider from '../components/CollapseDrawerProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export type AppProps = NextAppProps & {
  emotionCache?: EmotionCache;
};

export default function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <WagmiConfig client={client}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <CollapseDrawerProvider>
          <ThemeProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeProvider>
        </CollapseDrawerProvider>
      </CacheProvider>
    </WagmiConfig>
  );
}
