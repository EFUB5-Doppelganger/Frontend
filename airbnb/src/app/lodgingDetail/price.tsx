import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function price () {
  return (
    <Wrapper>
      <PriceHeader>
        <TotalPrice className={poppins.className}>₩140,753</TotalPrice>
        <DuringDate className={poppins.className}>1박</DuringDate>
        <Image
          src="/star.svg"
          alt="별점"
          width={20}
          height={20}
        />
        <StarRating className={poppins.className}>4.83</StarRating>
        <ReviewCount className={poppins.className}>1,800 리뷰</ReviewCount>
      </PriceHeader>

      <ReservationInfoContainer>
        <DateSelectContainer>
          <SelectDate>
            <SelectionTitle className={poppins.className}>체크인</SelectionTitle>
            <Selection type="date" className={poppins.className} />
          </SelectDate>
          <Line />
          <SelectDate>
            <SelectionTitle className={poppins.className}>체크아웃</SelectionTitle>
            <Selection type="date" className={poppins.className} />
          </SelectDate>
        </DateSelectContainer>
        <Line2 />
        <GuestContainer>
          <SelectionTitle className={poppins.className}>인원</SelectionTitle>
          <GuestCount className={poppins.className}>
            <option value="1">게스트 1명</option>
            <option value="2">게스트 2명</option>
            <option value="3">게스트 3명</option>
            <option value="4">게스트 4명</option>
          </GuestCount>
        </GuestContainer>
      </ReservationInfoContainer>

      <ReservationBtn className={poppins.className}>예약</ReservationBtn>
      <ReservationNotice className={poppins.className}>
        예약 확정 전에는 요금이 청구되지 않습니다.
      </ReservationNotice>

      <TotalContainer>
        <TotalCalculation>
          <Calculation className={poppins.className}>₩ 140,753 x 4박</Calculation>
          <Price className={poppins.className}>₩563,012</Price>
        </TotalCalculation>

        <Line3 />

        <TotalInfo>
          <TotalText className={poppins.className}>총 금액</TotalText>
          <Price className={poppins.className}>₩563,012</Price>
        </TotalInfo>
      </TotalContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 28.1875rem;
  height: 36.8125rem;
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
  width: 25rem;
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
  margin: 0.5rem 4.81rem 0 0.5rem;
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
  width: 24rem;
  overflow: visible;
  box-sizing: border-box;
  padding: 0.3rem;
`;

const SelectDate = styled.div`
  width: 10rem;
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
  width: 23.5rem;
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
  width: 21.4375rem;
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
  width: 24.0625rem;
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
  margin-top: 5rem;
  margin-bottom: 1rem;
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

const Price = styled.div`
  color: #3E3E3E;
  text-align: right;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Line3 = styled.div`
  width: 24.0625rem;
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
