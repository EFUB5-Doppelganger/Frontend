'use client';

import * as S from '../MyPage.styles';

type Props = {
  setIsEditing: (editing: boolean) => void;
};

export default function ProfileView({ setIsEditing }: Props) {
  return (
    <>
      {/* 상단 제목 + 수정 뱃지 */}
      <S.Header>
        <S.HeaderTitle>자기소개</S.HeaderTitle>
        <S.EditBadge>수정</S.EditBadge>
      </S.Header>

      {/* 본문: 좌측 프로필 카드 + 우측 작성 안내 */}
      <S.ContentWrapper>
        <S.ProfileCard>
          <S.ProfileAvatar>
            <span>하</span>
          </S.ProfileAvatar>
          <S.ProfileName>하경</S.ProfileName>
          <S.ProfileLabel>게스트</S.ProfileLabel>
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

      {/* 하단 후기 섹션 */}
      <S.Footer>
        <S.FooterLink>
          <S.LinkIcon />
          <span>내가 작성한 후기</span>
        </S.FooterLink>
      </S.Footer>
    </>
  );
}
