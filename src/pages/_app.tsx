// scroll bar
import "simplebar-react/dist/simplebar.min.css";
// rainbowkit
import "@rainbow-me/rainbowkit/styles.css";

// @emotion
import { CacheProvider, EmotionCache } from "@emotion/react";
import CollapseDrawerProvider from "~/components/CollapseDrawerProvider";
import NotistackProvider from "~/components/NotistackProvider";
import MainLayout from "~/layouts/main";
import ThemeProvider from "~/theme";
import createEmotionCache from "~/utils/createEmotionCache";
import { client } from "~/wagmi";
// next
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
// wagmi
import { WagmiConfig } from "wagmi";

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
            <NotistackProvider>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </NotistackProvider>
          </ThemeProvider>
        </CollapseDrawerProvider>
      </CacheProvider>
    </WagmiConfig>
  );
}
