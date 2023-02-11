// components
import ConnectButton from '~/components/ConnectButton';
import LoadingScreen from '~/components/LoadingScreen';
// next
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// wagmi
import { useAccount } from 'wagmi';

// ----------------------------------------------------------------------

export default function AuthGuard({ children }: React.PropsWithChildren) {
  const { status } = useAccount();
  const { pathname, push } = useRouter();
  const [requestedLocation, setRequestedLocation] = useState<string>('');

  useEffect(() => {
    if (status === 'connected') {
      setRequestedLocation('');
    } else if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
  }, [status, pathname, push, requestedLocation]);

  return status === 'connecting' || status === 'reconnecting' ? (
    <LoadingScreen />
  ) : status !== 'connected' ? (
    <ConnectButton />
  ) : (
    <>{children}</>
  );
}
