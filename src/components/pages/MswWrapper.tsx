import { PropsWithChildren, useEffect, useState } from 'react';
import { worker } from '../../mock/browser';

export function MswProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const startMockServer = async () => {
      await worker.start();
      setIsReady(true);
    };

    startMockServer();
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
