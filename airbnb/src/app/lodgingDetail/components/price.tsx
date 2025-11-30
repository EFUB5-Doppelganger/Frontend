import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { getAccommodationCheck, GetAccommodationCheckResponse } from '@/api/acoommodations';
import { useParams } from 'next/navigation';
import { postReservation } from '@/api/reservations';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

type Props = {
  dailyPrice: number;
  rating: number;
  maxGuests: number;
};

export default function Price ({ dailyPrice, rating, maxGuests }: Props) {
  const router = useRouter();
  const params = useParams();
  const accommodationId = params.id;

  const [check, setCheck] = useState<GetAccommodationCheckResponse | null>(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // 날짜 차이 계산
  const calculateNights = (): number => {
    if (!checkIn || !checkOut) return 0;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = checkOutDate.getTime() - checkInDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();

  const fetchCheck = async () => {
    try {
      const res = await getAccommodationCheck(
        {
          checkIn,
          checkOut,
          guests
        },
        Number(accommodationId)
      );
      setCheck(res);
    } catch (err) {
      console.error("예약 가능 날짜 조회 실패: ", err);
    }
  };

  const fetchReservation = async () => {
    if (!check) {
      alert('먼저 예약 가능 여부를 확인해주세요.');
      return;
    }

    if (check.available) {
      try {
        setIsLoading(true);
        
        await postReservation({
          accommodationId: Number(accommodationId),
          checkIn,
          checkOut,
          guests,
          totalPayment: check.totalPrice
        });

        alert('예약이 완료되었습니다!');
        router.push('/reservation');
      } catch (err) {
        console.error("예약 실패: ", err);
        alert('예약 처리 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("예약이 불가능합니다.");
    }
  };

  // 체크인/체크아웃 날짜 변경 핸들러 
  const handleCheckIn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIn(e.target.value);
  };

  const handleCheckOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(e.target.value);
  };

  // 인원 수 변경 핸들러 
  const handleGuests = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuests(Number(e.target.value));
  };

  // 예약 버튼 핸들러 
  const handleClickReserve = async () => {
    await fetchCheck();
    fetchReservation();
  };

  const renderGuestOptions = () => {
    const options = [];
    for (let i = 1; i <= maxGuests; i++) {
      options.push(
        <option key={i} value={i}>
          게스트 {i}명
        </option>
      );
    }
    return options;
  };

  // 오늘 날짜를 YYYY-MM-DD 형식으로 반환 (최소 날짜 제한용)
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <Wrapper>
      <PriceHeader>
        <TotalPrice className={poppins.className}>₩{dailyPrice.toLocaleString()}</TotalPrice>
        <DuringDate className={poppins.className}>1박</DuringDate>
        <Image
          src="/star.svg"
          alt="별점"
          width={20}
          height={20}
        />
        <StarRating className={poppins.className}>{rating}</StarRating>
        <ReviewCount className={poppins.className}>1,800 리뷰</ReviewCount>
      </PriceHeader>

      <ReservationInfoContainer>
        <DateSelectContainer>
          <SelectDate>
            <SelectionTitle className={poppins.className}>체크인</SelectionTitle>
            <Selection 
              type="date" 
              value={checkIn}
              onChange={handleCheckIn} 
              className={poppins.className} 
            />
          </SelectDate>
          <Line />
          <SelectDate>
            <SelectionTitle className={poppins.className}>체크아웃</SelectionTitle>
            <Selection 
              type="date" 
              value={checkOut}
              onChange={handleCheckOut} 
              min={checkIn || getTodayDate()}
              disabled={!checkIn}
              className={poppins.className}
            />
          </SelectDate>
        </DateSelectContainer>
        <Line2 />
        <GuestContainer>
          <SelectionTitle className={poppins.className}>인원</SelectionTitle>
          <GuestCount 
            value={guests}
            onChange={handleGuests} 
            className={poppins.className}
          >
            {renderGuestOptions()}
          </GuestCount>
        </GuestContainer>
      </ReservationInfoContainer>

      <ReservationBtn onClick={handleClickReserve} className={poppins.className}>예약</ReservationBtn>
      <ReservationNotice className={poppins.className}>
        예약 확정 전에는 요금이 청구되지 않습니다.
      </ReservationNotice>

      {isLoading ? (
        <LoadingText className={poppins.className}>가격 계산 중...</LoadingText>
      ) : check ? (
        <TotalContainer>
        <TotalCalculation>
          <Calculation className={poppins.className}>
            ₩ {dailyPrice.toLocaleString()} x {nights}박
          </Calculation>
          <PriceText className={poppins.className}>
            ₩{check.totalPrice.toLocaleString()}
          </PriceText>
         </TotalCalculation>

        <Line3 />

        <TotalInfo>
          <TotalText className={poppins.className}>총 금액</TotalText>
          <PriceText className={poppins.className}>
            ₩{check.totalPrice.toLocaleString()}
          </PriceText>
        </TotalInfo>
      </TotalContainer>
      ) : (
        checkIn && checkOut && (
          <NoDataText className={poppins.className}>
            선택한 날짜의 예약 정보를 불러올 수 없습니다.
          </NoDataText>
        )
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 25.1875rem;
  height: 33.8125rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 2px solid #E6E6E6;
  background: #FFF;
  box-shadow: 0 0 35px 0 rgba(155, 155, 155, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  align-items: center;
`;

const PriceHeader = styled.div`
  width: 23rem;
  height: 2.7rem;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TotalPrice = styled.span`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 1rem;
`;

const DuringDate = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0.5rem 3rem 0 0.5rem;
`;

const StarRating = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0.5rem 0.5rem 0 0.3rem;
`;

const DateSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewCount = styled.span`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  margin: 0.5rem 0 0 0.5rem;
`;

const ReservationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #979797;
  border-radius: 1rem;
  width: 20rem;
  overflow: visible;
  box-sizing: border-box;
  padding: 0.3rem;
`;

const SelectDate = styled.div`
  width: 8rem;
  height: 2.5125rem;
  flex-shrink: 0;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1.19rem 0.69rem;
  margin: 0;
`;

const SelectionTitle = styled.label`
  color: #3E3E3E;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Line = styled.div`
  width: 0.0625rem;
  height: 5.355rem;
  background: #979797;
`;

const Line2 = styled.div`
  width: 19.5rem;
  height: 0.0625rem;
  background: #979797;
`;

const Selection = styled.input`
  color: #3E3E3E;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  outline: none;
`;

const GuestContainer = styled.div`
  width: 17.4375rem;
  height: 2.2125rem;
  flex-shrink: 0;
  background: #FFF;
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.38rem 0.44rem 0.8rem;
  margin: 0;
`;

const GuestCount = styled.select`
  color: #3E3E3E;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  outline: none;
`;

const ReservationBtn = styled.button`
  display: flex;
  width: 20.0625rem;
  height: 3.75rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: none;
  background: #FF385C;
  color: #FFF;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const ReservationNotice = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  width: 20rem;
`;

const TotalCalculation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Calculation = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PriceText = styled.div`
  color: #3E3E3E;
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Line3 = styled.div`
  width: 20.0625rem;
  height: 0.0625rem;
  flex-shrink: 0;
  background: #E6E6E6;
`;

const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalText = styled.span`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const LoadingText = styled.div`
  color: #717171;
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
`;

const NoDataText = styled.div`
  color: #717171;
  font-size: 0.875rem;
  text-align: center;
  padding: 1rem;
`;