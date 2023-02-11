import { useProvider, useEnsName, useEnsAvatar } from "wagmi";
import { mainnet } from "wagmi/chains";

export function useMainnet() {
  const chainId = mainnet.id;

  const provider = useProvider();
  const chains = Array.isArray(provider.chains) ? provider.chains : [];
  const enabled = chains?.some(chain => chain?.id === chainId);

  return { chainId, enabled };
}

export function useMainnetEnsName(address: `0x${string}` | undefined) {
  const { chainId, enabled } = useMainnet();

  const { data: ensName } = useEnsName({
    address,
    chainId,
    enabled,
  });

  return ensName;
}

export function useMainnetEnsAvatar(address: `0x${string}` | undefined) {
  const { chainId, enabled } = useMainnet();

  const { data: ensAvatar } = useEnsAvatar({
    address,
    chainId,
    enabled,
  });

  return ensAvatar;
}
