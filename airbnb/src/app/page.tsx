"use client"

import styled from 'styled-components';
import Link from "next/link";
import HotelCardList from './home/hotelCardList';
import Navigation from './home/navigation';

export default function Home() {
  return (
    <Wrapper>
      <Navigation />
      <HotelCardList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;