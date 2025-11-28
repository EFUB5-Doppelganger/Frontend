"use client"

import React from 'react';
import styled from 'styled-components';
import Convenience from './components/convenience';
import HostDetail from './components/hostDetail';
import HostPrice from './components/hostPrice';
import Location from './components/location';
import NextTrip from './components/nextTrip';
import Notice from './components/notice';
import Reviews from './components/reviews';
import HotelIntroduction from '@/app/lodgingDetail/components/hotelIntroduction';

export default function Page() {

  return (
    <Wrapper>
      <Container>
        <HotelIntroduction />
        <Line />
        <HostPrice />
        <Line />
        <Convenience />
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