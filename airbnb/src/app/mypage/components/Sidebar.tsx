'use client';

import * as S from '../MyPage.styles';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

export default function Sidebar({ activeTab, setActiveTab }: Props) {
  return (
    <S.Sidebar>
      <S.Title>프로필</S.Title>
      <S.MenuList>
        <S.MenuItem $active={activeTab === '자기소개'} onClick={() => setActiveTab('자기소개')}>
          <S.IconCircle $active={activeTab === '자기소개'}>
            <span>하</span>
          </S.IconCircle>
          <span>자기소개</span>
        </S.MenuItem>

        <S.MenuItem $active={activeTab === '이전여행'} onClick={() => setActiveTab('이전여행')}>
          <S.IconCircle $active={activeTab === '이전여행'} />
          <span>이전여행</span>
        </S.MenuItem>
      </S.MenuList>
    </S.Sidebar>
  );
}
