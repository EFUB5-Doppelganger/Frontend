"use client"

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins, Inter } from 'next/font/google';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import ReservationItem from './components/reservationItem';
import { reservations, Props } from './reservationListItem';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '700']});

export default function Reservation () {
  return (
    <Wrapper>
      <Header className={poppins.className}>예약 내역</Header>

      <ItemList>
        <ListHeader>
          <Title6 />
          <Title1 className={poppins.className}>호텔 정보</Title1>
          <Title2 className={poppins.className}>날짜</Title2>
          <Title3 className={poppins.className}>인원수</Title3>
          <Title4 className={poppins.className}>결제 금액</Title4>
          <Title5 className={poppins.className}>예약 취소</Title5>
        </ListHeader>

        {reservations.map(({ listNum, image, name, date, headCount, price, cancel }, index) => (
          <ReservationItem
            key={index}
            listNum={listNum}
            image={image}
            name={name}
            date={date}
            headCount={headCount}
            price={price}
            cancel={cancel}
          />
        ))}
      </ItemList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 4rem;
`;

const Header = styled.h1`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: 0;
  width: 78.99rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListHeader = styled.div`
  display: flex;
  width: 78.99rem;
`;

const Title1 = styled.h2`
  width: 24.94rem;
  text-align: center;

  color: #000;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Title2 = styled.h2`
  width: 19.37rem;
  text-align: center;

  color: #000;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Title3 = styled.h2`
  width: 5rem;
  text-align: center;

  color: #000;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Title4 = styled.h2`
  width: 11.37rem;
  text-align: center;

  color: #000;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Title5 = styled.h2`
  width: 13.81rem;
  text-align: center;

  color: #000;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Title6 = styled.h2`
  width: 5rem;
  text-align: center;
`;