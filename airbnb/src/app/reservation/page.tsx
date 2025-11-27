"use client"

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Poppins, Inter } from 'next/font/google';
import ReservationItem from './components/reservationItem';
import { getMyReservations, cancelReservation, MyReservationItem } from "@/api/reservations";


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '700']});

export default function Reservation () {
  const [reservations, setReservations] = useState<MyReservationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // accessToken 가져오기
  const getAccessToken = () => {
    if (typeof window != 'undefined') {
      return localStorage.getItem('accessToken') || '';
    }
    return '';
  };

  // 예약 목록 조회 
  const fetchReservations = async () => {
    try {
      setLoading(true);
      const accessToken = getAccessToken();

      if (!accessToken) {
        setError('로그인이 필요합니다.');
        return;
      }

      const response = await getMyReservations(accessToken);
      setReservations(response.reservation);
      setError(null);
    } catch (err) {
      console.error('예약 조회 실패: ', err);
      setError('예약 조회에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  // 예약 취소 핸들러
  const handleCancelReservation = async (reservationId: number) => {
    if (!confirm('정말 예약을 취소하시겠습니까?')) {
      return;
    }

    try {
      const accessToken = getAccessToken();

      await cancelReservation(reservationId, accessToken);
      alert('예약이 취소되었습니다.');
      fetchReservations();
    } catch (err) {
      console.error("예약 취소 실패: ", err);
      alert('예약 취소에 실패했습니다.');
    }
  };

  if (loading) {
    return (
      <Wrapper>
        <LoadingText>로딩 중...</LoadingText>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <ErrorText>{error}</ErrorText>
      </Wrapper>
    );
  }


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

        {reservations.map((reservation, index) => (
          <ReservationItem
            key={reservation.reservationId}
            listNum={index + 1}
            reservationId={reservation.reservationId}
            accommodationId={reservation.accommodationId}
            accommodationName={reservation.accommodationName}
            checkIn={reservation.checkIn}
            checkOut={reservation.checkOut}
            guests={reservation.guests}
            totalPayment={reservation.totalPayment}
            onCancel={handleCancelReservation}
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

const LoadingText = styled.div`
  font-size: 1.25rem;
  color: #979797;
  padding: 2rem;
`;

const ErrorText = styled.div`
  font-size: 1.25rem;
  color: #ff385c;
  padding: 2rem;
`;