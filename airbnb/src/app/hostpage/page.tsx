'use client';

import HostStartLayout from './components/Host/HostStart/HostStartLayout';
import { useRouter } from 'next/navigation';

const HostStartPage = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/hostpage/setup');
  };

  return <HostStartLayout onStart={handleStart} />;
};

export default HostStartPage;
