import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

type Props = {
  image: string;
  name: string;
  score: number;
}

export default function HotelCard (props: Props) {
  return (
    <Wrapper>
      <Image 
        src={props.image}
        alt="호텔 카드 이미지"
        width={316}
        height={310}
      />

      <ContentContainer>
        <NameScore>
          <Name className={poppins.className}>{props.name}</Name>
          <ScoreContainer>
            <Image 
              src="/star.svg"
              alt="별점"
              width={15}
              height={15}
            />
            <Score className={poppins.className}>{props.score}</Score>
          </ScoreContainer>
        </NameScore>

        <Description className={poppins.className}>53 kilometers away</Description>
        <Description className={poppins.className}>May 6-11</Description>

        <History className={poppins.className}>
          <StrongHistory className={poppins.className}>Rp2,932,910</StrongHistory> night
        </History>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 19.6875rem;
  height: 27.6875rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 0.81rem;
  gap: 0.94rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const NameScore = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 19rem;
`;

const Name = styled.h3`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  margin: 0;
  padding: 0;
`;

const Score = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const Description = styled.div`
  color: #B8B8B8;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  padding: 0;
  text-align: start;
  width: 19rem;
`;

const History = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin: 0;
  margin-top: 0.4rem;
  padding: 0;
  text-align: start;
  width: 19rem;
`;

const StrongHistory = styled.span`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
  text-align: start;
`;