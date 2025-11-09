import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins, Inter } from 'next/font/google';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '700']});

type Props = {
  listNum: number;
  image: string;
  name: string;
  date: string;
  headCount: number;
  price: string;
  cancel: boolean;
}

export default function ReservationItem (props: Props) {
  return (
    <Wrapper>
      <ItemContainer>
        <ListNumber className={inter.className}>{props.listNum}</ListNumber>
      </ItemContainer>

      <HotelImage>
        <Image 
          src={props.image}
          alt="호텔 이미지"
          width={400}
          height={200}
        />
        <HotelName className={poppins.className}>{props.name}</HotelName>
      </HotelImage>

      <ItemContainer>
        <TextContainer className={inter.className}>{props.date}</TextContainer>
      </ItemContainer>
      <ItemContainer>
        <TextContainer className={inter.className}>{props.headCount}</TextContainer>
      </ItemContainer>
      <ItemContainer>
        <TextContainer className={inter.className}>{props.price}</TextContainer>
      </ItemContainer>
      
      {props.cancel ? 
        <ItemContainer>
          <CancelBtn $cancel={props.cancel} className={inter.className}>예약 취소</CancelBtn>
        </ItemContainer> :
        <ItemContainer>
          <CancelBtn $cancel={props.cancel} className={inter.className}>후기 작성</CancelBtn>
        </ItemContainer>
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  height: 19.56rem;
`;

const ListNumber = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HotelImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #d5d5d5;
  gap: 0.69rem;
  height: 19.56rem;
`;

const HotelName = styled.h3`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TextContainer = styled.div`
  color: #3E3E3E;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #d5d5d5;
  height: 19.56rem;
  padding: 0 2.125rem;
`;

const CancelBtn = styled.button<{ $cancel: boolean }>`
  width: 9.5625rem;
  height: 2.5625rem;
  flex-shrink: 0;
  border: 1px solid #ff385c;
  border-radius: 2rem;

  background: ${({ $cancel }) => ($cancel ? "#ff385c" : "#fff")};
  color: ${({ $cancel }) => ($cancel ? "#fff" : "#ff385c")};

  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;