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
    router.push(`/reviews/write?accommodationId=${props.reservationId}`);
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
      <ItemContainer>
        <ListNumber className={inter.className}>{props.listNum}</ListNumber>
      </ItemContainer>

      <HotelImage>
        <Image 
          src="/hotel/hotel2.svg"
          alt="호텔 이미지"
          width={400}
          height={200}
        />
        <HotelName className={poppins.className}>{props.accommodationName}</HotelName>
      </HotelImage>

      <ItemContainer>
        <TextContainer className={inter.className}>
          {formatDate(props.checkIn)} - {formatDate(props.checkOut)}
        </TextContainer>
      </ItemContainer>

      <ItemContainer>
        <TextContainer className={inter.className}>{props.guests}명</TextContainer>
      </ItemContainer>

      <ItemContainer>
        <TextContainer className={inter.className}>
          {formatPrice(props.totalPayment)}
        </TextContainer>
      </ItemContainer>
      
      <ItemContainer>
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