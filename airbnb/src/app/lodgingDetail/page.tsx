"use client"

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Convenience from './components/convenience';
import HostDetail from './components/hostDetail';
import HostPrice from './components/hostPrice';
import Location from './components/location';
import NextTrip from './components/nextTrip';
import Notice from './components/notice';
import Reviews from './components/reviews';
import HotelIntroduction from '@/app/lodgingDetail/components/hotelIntroduction';
import { getAccommodationDetail, GetAccommodationDetail } from "@/api/acoommodations";
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();

  const [details, setDetails] = useState<GetAccommodationDetail | null>(null);

  const accommodationId = searchParams.get('accommodationId') || '';

  const fetchAccommodationDetail = async () => {
    try {
      const res = await getAccommodationDetail(Number(accommodationId));
      setDetails(res);
    } catch (err) {
      console.error("숙소 상세 페이지 불러오기 실패: ", err);
    }
  };

  useEffect(() => {
    fetchAccommodationDetail();
  }, []);

  return (
    <Wrapper> 
      {details ? (
        <Wrapper>
          <Container>
            <HotelIntroduction 
              name={details.name} 
              rating={details.rating} 
              address={details.address} 
              photos={details.photos}
            />
            <Line />
            <HostPrice 
              maxGuests={details.maxGuests}
              dailyPrice={details.dailyPrice}
              rating={details.rating}
            />
            <Line />
            <Convenience amenities={details.amenities} />
            <Line />
            <Reviews />
            <Line />
            <Location />
            <Line />
            <HostDetail />
            <Line />
            <Notice />
          </Container>
          <NextTrip />
        </Wrapper>
      ) :
      <div>로딩 중...</div>}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  margin: 0;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 77.9375rem;
  height: 0.0625rem;
  flex-shrink: 0; 
  background: #E6E6E6;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;