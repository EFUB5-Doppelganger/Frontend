import React from 'react';
import styled from 'styled-components';
import STAR from '../../../public/star.svg';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500'] });

export default function price () {
  return (
    <Wrapper>
      <PriceHeader>
        <TotalPrice className={poppins.className}>₩140,753</TotalPrice>
        <DuringDate className={poppins.className}>1박</DuringDate>
        <STAR />
        <StarRating className={poppins.className}>4.83</StarRating>
        <ReviewCount className={poppins.className}>1,800 리뷰</ReviewCount>
      </PriceHeader>

      <ReservationInfoContainer>
        <SelectDate>
          <SelectionTitle className={poppins.className}>체크인</SelectionTitle>
          <Selection type="date" value={checkInDate} onChange={handleCheckInChange} className={poppins.className} />
        </SelectDate>

        <SelectDate>
          <SelectionTitle className={poppins.className}>체크인</SelectionTitle>
          <Selection type="date" value={checkInDate} onChange={handleCheckInChange} className={poppins.className} />
        </SelectDate>

        <GuestContainer>
          <SelectionTitle className={poppins.className}>체크인</SelectionTitle>
          <GuestCount value={guests} onChange={handleGuestsChange} className={poppins.className}>
            <option value="1">게스트 1명</option>
            <option value="2">게스트 2명</option>
            <option value="3">게스트 3명</option>
            <option value="4">게스트 4명</option>
          </GuestCount>
        </GuestContainer>
      </ReservationInfoContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 24.1875rem;
  height: 32.8125rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  border: 2px solid #E6E6E6;
  background: #FFF;
  box-shadow: 0 0 35px 0 rgba(155, 155, 155, 0.15);
  display: flex;
  flex-direction: column;
`;

const PriceHeader = styled.div`
  width: 22rem;
  height: 2.7rem;
`;

const TotalPrice = styled.span`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const DuringDate = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const StarRating = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
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
  text-underline-position: from-font;
`;

const ReservationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SelectDate = styled.div`
  width: 9.75rem;
  height: 2.8125rem;
  flex-shrink: 0;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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

const Selection = styled.input`
  color: #3E3E3E;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GuestContainer = styled.div`
  width: 20.4375rem;
  height: 2.8125rem;
  flex-shrink: 0;
  background: #FFF;
  display: flex;
  flex-direction: column;
  padding: 0.44rem 0.38rem;
  margin: 0;
`;

const GuestCount = styled.select`
  color: #3E3E3E;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;