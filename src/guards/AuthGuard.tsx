import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// wagmi
import { useAccount } from 'wagmi';
// components
import LoadingScreen from '../components/LoadingScreen';
import ConnectButton from '../components/ConnectButton';
// ----------------------------------------------------------------------

export default function AuthGuard({ children }: React.PropsWithChildren) {
  const { status } = useAccount();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (status === 'connected') {
      setRequestedLocation(null);
    }
  }, [status, pathname, push, requestedLocation]);

  if (['connecting', 'reconnecting'].includes(status)) {
    return <LoadingScreen />;
  }

  if (status !== 'connected') {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <ConnectButton />;
  }

  return <>{children}</>;
}
