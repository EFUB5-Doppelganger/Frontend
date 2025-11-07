'use client';

import * as S from './HostSetup.styles';

const PriceSection = () => {
  return (
    <S.Section>
      <S.SectionTitle>3단계: 등록을 완료하세요</S.SectionTitle>
      <S.PriceGrid>
        <S.PriceCard>
          <S.PriceLabel>주중 요금을 정해주세요</S.PriceLabel>
          <S.PriceAmount>67,284원 /박</S.PriceAmount>
        </S.PriceCard>
        <S.PriceCard>
          <S.PriceLabel>주말 요금을 정해주세요</S.PriceLabel>
          <S.PriceAmount>89,284원 /박</S.PriceAmount>
        </S.PriceCard>
      </S.PriceGrid>
    </S.Section>
  );
};

export default PriceSection;
