"use client"

import styled from 'styled-components';
import Link from "next/link";
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import HotelCardList from './home/hotelCardList';
import Navigation from './home/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: '500' });


export default function Home() {
  return (
    <Wrapper>
      <Navigation />
      <HotelCardList />
      <MapBtn>
        <Map className={poppins.className}>Show map</Map>
        <Image 
          src="/map.svg"
          alt="지도"
          width={20}
          height={20}
        />
      </MapBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const MapBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 3.125rem;
  flex-shrink: 0;
  border-radius: 1.5625rem;
  background: #1E1E1E;
  gap: 0.62rem;
`;

const Map = styled.div`
  color: #FFF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;