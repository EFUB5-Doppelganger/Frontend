'use client';

import { Suspense } from 'react';
import SearchClient from './SearchClient';

export default function SearchPageWrapper() {
  return (
    <Suspense fallback={<div>검색 중입니다...</div>}>
      <SearchClient />
    </Suspense>
  );
}
