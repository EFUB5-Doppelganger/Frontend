import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins, Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '700']});

type Props = {
  listNum: number;
  reservationId: number;
  accommodationId: number;
  accommodationName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPayment: number;
  onCancel: (reservationId: number) => void;
}

export default function ReservationItem (props: Props) {
  const router = useRouter();

  // 체크아웃 날짜가 지났는지 확인
  const isCheckoutPassed = () => {
    const checkoutDate = new Date(props.checkOut);
    const today = new Date();
    return checkoutDate < today;
  };

  // 예약 취소 버튼 클릭
  const handleCancelClick = () => {
    props.onCancel(props.reservationId);
  };

  // 후기 작성 버튼 클릭
  const handleReviewClick = () => {
    router.push(`/writeReview?accommodationId=${props.accommodationId}`);
  };

  // 날짜 포맷팅
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 금액 포맷팅
  const formatPrice = (price: number) => {
    return `${price.toLocaleString()}`;
  };


  return (
    <Wrapper>
      <ItemContainer $width="2.5rem">
        <ListNumber className={inter.className}>{props.listNum}</ListNumber>
      </ItemContainer>

      <HotelImage>
        <Image 
          src="/hotel/hotel2.svg"
          alt="호텔 이미지"
          width={300}
          height={250}
        />
        <HotelName className={poppins.className}>{props.accommodationName}</HotelName>
      </HotelImage>

      <ItemContainer className={inter.className} $width="17.5rem">
          {formatDate(props.checkIn)} - {formatDate(props.checkOut)}
      </ItemContainer>

      <ItemContainer className={inter.className} $width="8.25rem">
        {props.guests}명
      </ItemContainer>

      <ItemContainer className={inter.className} $width="12.12rem">
          {formatPrice(props.totalPayment)}
      </ItemContainer>
      
      <ItemContainer $width="13rem">
        {isCheckoutPassed() ? (
          <CancelBtn 
            $cancel={false} 
            className={inter.className}
            onClick={handleReviewClick}
          >
            후기 작성
          </CancelBtn>
        ) : (
          <CancelBtn 
            $cancel={true} 
            className={inter.className}
            onClick={handleCancelClick}
          >
            예약 취소
          </CancelBtn>
        )}
      </ItemContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  height: 19.56rem;
  width: 78.99rem;
`;

const ListNumber = styled.div`
  color: #000;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 5rem;
  min-width: 5rem;
  text-align: center;
  flex-shrink: 0;
`;

const HotelImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #d5d5d5;
  gap: 0.69rem;
  height: 19.56rem;
  width: 26.94rem;
  min-width: 26.94rem;
  padding: 0;
  flex-shrink: 0;
`;

const HotelName = styled.h3`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

const ItemContainer = styled.div<{ $width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #d5d5d5;
  height: 19.56rem;
  padding: 0;
  width: ${({ $width }) => $width || 'auto'};
  min-width: ${({ $width }) => $width || 'auto'};
  flex-shrink: 0;
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