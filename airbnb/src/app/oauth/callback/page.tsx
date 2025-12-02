// app/oauth/callback/page.tsx
'use client'

import { Suspense } from 'react';
import OAuthCallbackClient from '../callback/OAuthCallbackClient';

export default function OAuthCallbackPage() {
  return (
    <Suspense fallback={<div>로그인 처리 중...</div>}>
      <OAuthCallbackClient />
    </Suspense>
  );
}
