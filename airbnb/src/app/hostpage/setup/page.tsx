'use client';

import { useState } from 'react';
import * as S from '../../hostpage/components/Host/HostSetup/HostSetup.styles';
import PropertyTypeSection from 'src/app/hostpage/components/Host/HostSetup/PropertyTypeSection';
import LocationSection from 'src/app/hostpage/components/Host/HostSetup/LocationSection';
import AmenitySection from 'src/app/hostpage/components/Host/HostSetup/AmenitySection';
import UploadSection from 'src/app/hostpage/components/Host/HostSetup/UploadSection';
import PriceSection from 'src/app/hostpage/components/Host/HostSetup/PriceSection';


const HostSetupPage = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState('집 전체');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSubmit = () => {
    console.log('숙소 등록 완료!');
    console.log('숙소 유형:', selectedPropertyType);
    console.log('편의시설:', selectedAmenities);
    // 나중에 form 데이터 묶어서 서버로 전송하면 됨
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Airbnb 호스팅 시작하기</S.Title>
        <S.Subtitle>1단계: 숙소 정보를 알려주세요</S.Subtitle>
      </S.Header>

      <PropertyTypeSection
        selected={selectedPropertyType}
        onSelect={setSelectedPropertyType}
      />

      <LocationSection />

      <AmenitySection
        selectedAmenities={selectedAmenities}
        toggleAmenity={toggleAmenity}
      />

      <UploadSection />

      <PriceSection />

      <S.SubmitButton onClick={handleSubmit}>등록 완료하기</S.SubmitButton>
    </S.Container>
  );
};

export default HostSetupPage;
