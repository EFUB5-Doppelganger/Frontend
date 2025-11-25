'use client';

import * as S from '../MyPage.styles';
import { updateUserProfile } from "@/app/mypage/api/mypage.api";
import { useState } from "react";

type Props = {
  profile: {
    job: string;
    name: string;
    birthYear: string;
    interests: string;
    introduction: string;
  };
  setProfile: (profile: Props['profile']) => void;
  setIsEditing: (editing: boolean) => void;
};

export default function ProfileEdit({ profile, setProfile, setIsEditing }: Props) {
  const [loading, setLoading] = useState(false);

  const handleComplete = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        bio: profile.introduction, 
      };

      const result = await updateUserProfile(token, payload);
      if (result) {
        alert("프로필이 성공적으로 수정되었습니다.");
        setIsEditing(false);
      } else {
        alert("수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("수정 중 오류 발생:", error);
      alert("오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.EditView>
      <S.EditHeader>
        <S.ProfileAvatarSmall>
          <span>하</span>
          <S.CameraBadge>
            <S.CameraIcon>📷 수정</S.CameraIcon>
          </S.CameraBadge>
        </S.ProfileAvatarSmall>
      </S.EditHeader>

      <S.ProfileInfoSection>
        <S.SectionTitle>프로필</S.SectionTitle>
        <S.InfoText>
          커뮤니티 신뢰구축을 위해 프로필 정보가 호스트와 게스트에게 공개되며,
          에어비앤비 플랫폼 전반에도 프로필이 표시될 수 있습니다
        </S.InfoText>

        <S.InfoGrid>
          <S.InfoItem>
            <S.InfoLabel>직업</S.InfoLabel>
            <S.InfoInput
              type="text"
              value={profile.job}
              onChange={(e) => setProfile({ ...profile, job: e.target.value })}
            />
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>이름</S.InfoLabel>
            <S.InfoInput
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>출생 연도</S.InfoLabel>
            <S.InfoInput
              type="text"
              value={profile.birthYear}
              onChange={(e) => setProfile({ ...profile, birthYear: e.target.value })}
            />
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>꼭 여행해 보고 싶은 장소</S.InfoLabel>
            <S.InfoInput
              type="text"
              value={profile.interests}
              onChange={(e) => setProfile({ ...profile, interests: e.target.value })}
            />
          </S.InfoItem>
        </S.InfoGrid>
      </S.ProfileInfoSection>

      <S.IntroSection>
        <S.SectionTitle>자기소개</S.SectionTitle>
        <S.TextAreaWrapper>
          <S.TextArea
            placeholder="재치를 발휘해 작성해보세요"
            value={profile.introduction}
            onChange={(e) => setProfile({ ...profile, introduction: e.target.value })}
          />
        </S.TextAreaWrapper>
      </S.IntroSection>

      <S.ButtonWrapper>
        <S.CompleteButton onClick={handleComplete} disabled={loading}>
          {loading ? "저장 중..." : "완료"}
        </S.CompleteButton>
      </S.ButtonWrapper>
    </S.EditView>
  );
}
