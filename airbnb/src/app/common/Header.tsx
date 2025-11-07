'use client';

import Image from 'next/image';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import * as S from './Header.styles';

export default function Header() {
  return (
    <S.Header>
      {/* 로고 */}
      <S.LogoWrapper>
        <Image
          src="/logo.svg"
          alt="DoppelGanger Logo"
          width={120}
          height={40}
        />
      </S.LogoWrapper>

      {/* 검색창 */}
      <S.SearchContainer>
        <S.SearchInput type="text" placeholder="후쿠오카" />
        <S.SearchButton>
          <FaSearch size={12} color="#FFFFFF" />
        </S.SearchButton>
      </S.SearchContainer>

      {/* 유저 아이콘 */}
      <S.UserIconContainer>
        <FaUserCircle size={20} color="#707070" />
      </S.UserIconContainer>
    </S.Header>
  );
}
