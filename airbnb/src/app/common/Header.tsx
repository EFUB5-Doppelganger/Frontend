'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import * as S from './Header.styles';

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim()) {
      // 검색 결과 페이지로 이동
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(e as any);
    }
  };

  return (
    <S.Header>
      {/* 로고 */}
      <S.LogoWrapper onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
        <Image
          src="/logo.svg"
          alt="DoppelGanger Logo"
          width={120}
          height={40}
        />
      </S.LogoWrapper>

      {/* 검색창 */}
      <S.SearchContainer as="form" onSubmit={handleSearch}>
        <S.SearchInput 
          type="text" 
          placeholder="후쿠오카" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <S.SearchButton type="submit">
          <FaSearch size={12} color="#FFFFFF" />
        </S.SearchButton>
      </S.SearchContainer>

      {/* 유저 아이콘 */}
      <S.UserIconContainer onClick={() => router.push('/mypage')} style={{ cursor: 'pointer' }}>
        <FaUserCircle size={20} color="#707070" />
      </S.UserIconContainer>
    </S.Header>
  );
}