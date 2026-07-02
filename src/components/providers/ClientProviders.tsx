'use client';

import CustomCursor from '@/components/CustomCursor';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  );
}
