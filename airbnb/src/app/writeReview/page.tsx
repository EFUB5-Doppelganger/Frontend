'use client';

import { Suspense } from 'react';
import WriteReviewClient from './WriteReviewClient';

export default function WriteReviewPage() {
  return (
    <Suspense fallback={<div>리뷰 작성 페이지 로딩 중...</div>}>
      <WriteReviewClient />
    </Suspense>
  );
}
