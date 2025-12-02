'use client';

import { useEffect, useState } from "react";
import { getUserProfile } from "@/app/mypage/api/mypage.api";
import * as S from '../MyPage.styles';

// props type 정의
type Props = {
  setIsEditing: (editing: boolean) => void;
};

// profile type 정의
type Profile = {
  nickname: string;
  id: string;
  bio: string;
  bornYear: string;
  job: string;
};

export default function ProfileView({ setIsEditing }: Props) {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      const data = await getUserProfile();
      if (data) setProfile(data);
    };

    fetchProfile();
  }, []);

  return (
    <>
      <S.Header>
        <S.HeaderTitle>자기소개</S.HeaderTitle>
        <S.EditBadge>수정</S.EditBadge>
      </S.Header>

      <S.ContentWrapper>
        <S.ProfileCard>
          <S.ProfileAvatar>
            <span>{profile?.nickname?.charAt(0) ?? "?"}</span>
          </S.ProfileAvatar>
          <S.ProfileName>{profile?.nickname ?? "불러오는 중..."}</S.ProfileName>
          <S.ProfileLabel>{profile?.job ?? "직업 미입력"}</S.ProfileLabel>
        </S.ProfileCard>

        <S.InfoSection>
          <S.InfoTitle>프로필 작성 완료하기</S.InfoTitle>
          <S.InfoDescription>
            프로필은 예약 과정에서 중요한 역할을 합니다.<br />
            다른 호스트와 게스트에게 나를 알릴 수 있도록<br />
            프로필 작성을 완료해 주세요.
          </S.InfoDescription>
          <S.StartButton onClick={() => setIsEditing(true)}>시작하기</S.StartButton>
        </S.InfoSection>
      </S.ContentWrapper>

      <S.Footer>
        <S.FooterLink>
          <S.LinkIcon />
          <span>내가 작성한 후기</span>
        </S.FooterLink>
      </S.Footer>
    </>
  );
}
