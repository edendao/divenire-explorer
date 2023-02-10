import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { APP, CHAINS } from './config';

const { chains, provider, webSocketProvider } = configureChains(CHAINS, [
  publicProvider(),
]);

const { connectors } = getDefaultWallets({
  appName: APP.title,
  chains,
});

export const client = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

export { chains };
