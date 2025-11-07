import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function Notice () {
  return (
    <Wrapper>
      <Header className={poppins.className}>알아두어야 할 사항</Header>
      <Container>
        <SmallContainer>
          <TextStrong className={poppins.className}>숙소 이용규칙</TextStrong>
          <Text className={poppins.className}>체크인 시간: 오후 4:00~오전2:00</Text>
          <Text className={poppins.className}>체크아웃 시간: 오후 12:00전까지</Text>
          <Text className={poppins.className}>게스트 정원 2명</Text>
        </SmallContainer>

        <SmallContainer>
          <TextStrong className={poppins.className}>안전 및 공간</TextStrong>
          <Text className={poppins.className}>일산화탄소 경보기</Text>
          <Text className={poppins.className}>화재 경보</Text>
        </SmallContainer>

        <SmallContainer>
          <TextStrong className={poppins.className}>환불 정책</TextStrong>
          <Text className={poppins.className}>9월 15일 전에 취소하면 부분 환불을 받으실 수 있습니다.</Text>
          <Text className={poppins.className}>자세한 내용은 호스트의 환불 정책 전문을 참고하세요.</Text>
          <Text className={poppins.className}>게스트 정원 2명</Text>
        </SmallContainer>
      </Container>
      <BtnContainer>
        <MoreBtn>더 보기 {'>'}</MoreBtn>
        <MoreBtn>더 보기 {'>'}</MoreBtn>
        <MoreBtn>Show more {'>'}</MoreBtn>
      </BtnContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
  width: 88%;
`;

const Header = styled.h1`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12.69rem;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.94rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 21rem;
`;

const TextStrong = styled.span`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const Text = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12.69rem;
`;

const MoreBtn = styled.button`
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
  text-align: start;

  border: none;
  background: #fff;
  width: 21rem;
  margin: 0;
  padding: 0;
`;