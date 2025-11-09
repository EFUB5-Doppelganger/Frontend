import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import HostInfo from './hostInfo';
import Price from './price';

export default function HostPrice () {
  return (
    <Wrapper>
      <LeftContainer>
        <HostInfo 
          hostName="김호스트"
          limit="최대 4명까지 숙박 가능"
          hostProfile={<img src="/profile/profile1.svg" alt="호스트 프로필" style={{width: '60px', borderRadius: '50%'}} />}
        />
        <Line />
        <ReservationTimeNotice>
          <TextNotice>
            예약 마감까지 5시간 남았습니다. 해당 날짜에 대한 예약은 곧 마감됩니다.
          </TextNotice>
          <Image 
            src="/time.svg"
            alt="시간 이모지"
            width={20}
            height={20}
          />
        </ReservationTimeNotice>
      </LeftContainer>
      <Price />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-right: 2rem;
`;

const Line = styled.div`
  width: 50.4375rem;
  height: 0.0625rem;
  flex-shrink: 0;
  background: #E6E6E6;
`;

const ReservationTimeNotice = styled.div`
  width: 46.4375rem;
  height: 2.375rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #FFF;
  box-shadow: 0 0 2px 0 rgba(43, 43, 43, 0.35);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.88rem;
  margin-top: 3rem;
`;

const TextNotice = styled.p`
  display: flex;
  width: 37.25rem;
  height: 0.875rem;
  flex-direction: column;
  justify-content: center;
  color: #3E3E3E;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;