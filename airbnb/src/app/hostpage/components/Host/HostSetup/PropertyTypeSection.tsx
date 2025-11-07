'use client';

import React from 'react';
import Image from 'next/image';
import * as S from './HostSetup.styles';

interface Props {
  selected: string;
  onSelect: (type: string) => void;
}

const PropertyTypeSection: React.FC<Props> = ({ selected, onSelect }) => {
  const types = [
    { label: '집 전체', icon: '/hostpage/house.svg' },
    { label: '개인 실', icon: '/hostpage/union.svg' },
    { label: '호스트 집 따로', icon: '/hostpage/house.svg' }, // 반복 사용
  ];

  return (
    <S.Section>
      <S.SectionTitle>게스트가 사용할 숙소 유형</S.SectionTitle>
      <S.PropertyTypeGrid>
        {types.map((type) => (
          <S.PropertyTypeCard
            key={type.label}
            selected={selected === type.label}
            onClick={() => onSelect(type.label)}
          >
            {type.label === '호스트 집 따로' ? (
              <S.PropertyIcon style={{ display: 'flex', gap: '4px' }}>
                <Image src="/hostpage/house.svg" alt="house" width={20} height={20} />
                <Image src="/hostpage/house.svg" alt="house" width={20} height={20} />
                <Image src="/hostpage/house.svg" alt="house" width={20} height={20} />
              </S.PropertyIcon>
            ) : (
              <S.PropertyIcon>
                <Image src={type.icon} alt={type.label} width={36} height={36} />
              </S.PropertyIcon>
            )}
            <S.PropertyLabel>{type.label}</S.PropertyLabel>
          </S.PropertyTypeCard>
        ))}
      </S.PropertyTypeGrid>
    </S.Section>
  );
};

export default PropertyTypeSection;
