'use client';

import * as S from './HostSetup.styles';

const LocationSection = () => {
  return (
    <S.Section>
      <S.SectionTitle>숙소가 어디에 있나요?</S.SectionTitle>
      <S.Input placeholder="나라" />
      <S.Input placeholder="주소" />
      <S.Input placeholder="상세주소" />
      <S.Input placeholder="우편번호" />
    </S.Section>
  );
};

export default LocationSection;
