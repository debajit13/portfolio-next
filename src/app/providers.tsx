'use client';

import { ReactNode, useState, useEffect } from 'react';
import AnimatedCursor from '@/components/global/cursor/AnimatedCursor';

export function Providers({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {children}
      {isMounted && (
        <AnimatedCursor
          color='#64ffda'
          outerSize={22}
          innerSize={10}
          outerScale={2.5}
          innerScale={0.7}
          trailingSpeed={0.2}
          outerAlpha={0.4}
          clickEffect={true}
        />
      )}
    </>
  );
}
