'use client';

import * as S from './HostSetup.styles';

interface Props {
  price: string; // string으로 변경
  onChangePrice: (value: string) => void;
}

const PriceSection = ({ price, onChangePrice }: Props) => {
  return (
    <S.Section>
      <S.SectionTitle>3단계: 등록을 완료하세요</S.SectionTitle>
      <S.PriceGrid>
        <S.PriceCard>
          <S.PriceLabel>주중 요금을 정해주세요</S.PriceLabel>
          <S.PriceAmountInput
            type="number"
            value={price}
            onChange={(e) => onChangePrice(e.target.value)}
            placeholder="₩ /박"
          />
        </S.PriceCard>

        <S.PriceCard>
          <S.PriceLabel>주말 요금을 정해주세요</S.PriceLabel>
          <S.PriceAmount>준비 중</S.PriceAmount>
        </S.PriceCard>
      </S.PriceGrid>
    </S.Section>
  );
};

export default PriceSection;
