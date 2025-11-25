'use client';

import * as S from './HostSetup.styles';

interface Props {
  location: string;
  address: string;
  onChangeLocation: (value: string) => void;
  onChangeAddress: (value: string) => void;
}

const LocationSection = ({
  location,
  address,
  onChangeLocation,
  onChangeAddress,
}: Props) => {
  return (
    <S.Section>
      <S.SectionTitle>숙소가 어디에 있나요?</S.SectionTitle>
      <S.Input
        placeholder="나라"
        value={location}
        onChange={(e) => onChangeLocation(e.target.value)}
      />
      <S.Input
        placeholder="주소"
        value={address}
        onChange={(e) => onChangeAddress(e.target.value)}
      />
    </S.Section>
  );
};

export default LocationSection;
