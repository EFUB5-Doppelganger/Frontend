'use client';

import { useState } from 'react';
import * as S from '../../hostpage/components/Host/HostSetup/HostSetup.styles';
import PropertyTypeSection from '../../hostpage/components/Host/HostSetup/PropertyTypeSection';
import LocationSection from '../../hostpage/components/Host/HostSetup/LocationSection';
import AmenitySection from '../../hostpage/components/Host/HostSetup/AmenitySection';
import UploadSection from '../../hostpage/components/Host/HostSetup/UploadSection';
import PriceSection from '../../hostpage/components/Host/HostSetup/PriceSection';
import { createAccommodation } from '@/app/hostpage/api/accommodation.api';

type AccommodationForm = {
  propertyType: string;
  amenities: string[];
  images: File[]; 
  name: string;
  description: string;
  location: string;
  address: string;
  price: string;
};

const HostSetupPage = () => {
  const [form, setForm] = useState<AccommodationForm>({
    propertyType: '집 전체',
    amenities: [],
    images: [],    
    name: '',
    description: '',
    location: '',
    address: '',
    price: '',
  });

  const toggleAmenity = (amenity: string) => {
    setForm((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return alert('로그인이 필요합니다.');

    if (form.images.length === 0) {
      return alert("사진을 최소 1장 이상 업로드해주세요.");
    }

    const payload = {
      name: form.name,
      description: form.description,
      location: form.location,
      address: form.address,
      price: parseInt(form.price, 10),
      maxGuests: 4,
      bedroom: 2,
      bed: 2,
      bathroom: 1,
      images: form.images,
    };
    
    const result = await createAccommodation(payload);
    if (result) {
      alert('숙소 등록 완료!');
      console.log(result);
    } else {
      alert('등록 실패');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Airbnb 호스팅 시작하기</S.Title>
        <S.Subtitle>1단계: 숙소 정보를 알려주세요</S.Subtitle>
      </S.Header>

      <PropertyTypeSection
        selected={form.propertyType}
        onSelect={(type) => setForm((prev) => ({ ...prev, propertyType: type }))}
      />

      <LocationSection
        location={form.location}
        address={form.address}
        onChangeLocation={(value) => setForm((prev) => ({ ...prev, location: value }))}
        onChangeAddress={(value) => setForm((prev) => ({ ...prev, address: value }))}
      />

      <AmenitySection
        selectedAmenities={form.amenities}
        toggleAmenity={toggleAmenity}
      />

      <UploadSection
        name={form.name}
        description={form.description}
        images={form.images}                 // File[]
        setName={(value) => setForm((prev) => ({ ...prev, name: value }))}
        setDescription={(value) => setForm((prev) => ({ ...prev, description: value }))}
        setImages={(files) => setForm((prev) => ({ ...prev, images: files }))} // File[]
      />

      <PriceSection
        price={form.price}
        onChangePrice={(value) =>
          setForm((prev) => ({ ...prev, price: value }))
        }
      />

      <S.SubmitButton onClick={handleSubmit}>등록 완료하기</S.SubmitButton>
    </S.Container>
  );
};

export default HostSetupPage;
