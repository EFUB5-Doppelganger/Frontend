import React from 'react';
import styled from 'styled-components';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['100', '300', '500', '700'] });
const poppins = Poppins({ subsets: ['latin'], weight: '600'});

export default function writeReview () {
  return (
    <Wrapper>
      <Header className={poppins.className}>후기 작성</Header>
    
      <ContentContainer>
        <HotelInfo>

        </HotelInfo>
        
        <ReviewContainer>
          <ReviewInfo>
            <Title className={inter.className}>{hostname}에 대한 후기를 쓰세요.</Title>
            <Description className={inter.className}>
              방문이 완료된 숙소의 후기를 작성할 수 있습니다. 후기 작성 기간 동안에는 호스트도 회원님에 대한 후<br />
              기를 작성해야 회원님의 피드백을 읽을 수 있습니다.
            </Description>
          </ReviewInfo>

          <ReviewWriteContainer>
            <Title className={inter.className}>숙박이 어땠나요?</Title>
            <Subtitle className={inter.className}>전체적 만족도(필수 항목)</Subtitle>

            <Subtitle className={inter.className}>공개 후기</Subtitle>
            <Description className={inter.className}>
              회원님의 후기는 회원님의 프로필과 회원님의 호스트 숙소 페이지에 전체 공개됩니다. 한국어로 공개<br />
              후기를 작성하세요.
            </Description>

            <ReviewBox 
              className={inter.className} 
              placeholder="호스트가 어떻게 회원님을 맞이하셨나요? 숙소 설명은 정확하였나요?" 
            />
          </ReviewWriteContainer>
        </ReviewContainer>
      </ContentContainer>

      <FinishBtn className={inter.className}>완료</FinishBtn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.12rem 5rem;
`;

const Header = styled.h1`
  width: 11.4375rem;
  color: #3E3E3E;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const HotelInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  padding: 1rem;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100vh;
  width: 50%;
  padding: 1rem;
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  width: 25.5625rem;
  color: #000;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.p`
  width: 44.625rem;
  color: #979797;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
`;

const ReviewWriteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h3`
  display: flex;
  width: 13.5625rem;
  height: 1.9375rem;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #3E3E3E;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ReviewBox = styled.input`
  border-radius: 0.9375rem;
  border: 1px solid #B8B8B8;
  width: 45rem;
  height: 11.25rem;
  ::placeholder {
    color: #979797;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  }
`;

const FinishBtn = styled.button`
  width: 10.25rem;
  height: 3.60763rem;
  flex-shrink: 0;
  color: #FFF;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;