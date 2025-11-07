'use client';

import Image from 'next/image';
import * as S from './HostSetup.styles';

interface Props {
  selectedAmenities: string[];
  toggleAmenity: (amenity: string) => void;
}

const amenities = [
  { label: '무선 인터넷', text: 'Wi-Fi', icon: '/hostpage/wifi.svg' },
  { label: 'TV', text: 'TV', icon: '/hostpage/tv.svg' },
  { label: '주차', text: 'Free parking on premises', icon: '/hostpage/parking.svg' },
  { label: '해변 접근', text: 'Beach Front', icon: '/hostpage/beach.svg' },
];

const AmenitySection: React.FC<Props> = ({ selectedAmenities, toggleAmenity }) => {
  return (
    <S.Section>
      <S.SectionTitle>2단계: 숙소의 매력을 돋보이게 해주세요</S.SectionTitle>
      <S.SectionSubtitle>숙소 편의시설을 알려주세요</S.SectionSubtitle>
      <S.AmenityGrid>
        {amenities.map((amenity) => (
          <S.AmenityCard
            key={amenity.label}
            selected={selectedAmenities.includes(amenity.label)}
            onClick={() => toggleAmenity(amenity.label)}
          >
            <S.AmenityIcon>
              <Image src={amenity.icon} alt={amenity.label} width={20} height={20} />
            </S.AmenityIcon>
            <S.AmenityText>{amenity.text}</S.AmenityText>
          </S.AmenityCard>
        ))}
      </S.AmenityGrid>
    </S.Section>
  );
};

export default AmenitySection;
