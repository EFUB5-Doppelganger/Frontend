import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function HostDetail () {
  return (
    <Wrapper>
      <Header>
        <Image
          src="/profile/profile1.svg"
          alt="프로필 사진"
          width={70}
          height={70}
        />
        <HostInfo>
          <Name className={poppins.className}>단추</Name>
          <History className={poppins.className}>호스팅 경력: 1년</History>
        </HostInfo>
      </Header>
      <Container>
        <SmallContainer>
          <DetailedInfo>
            <Image src="/star.svg" alt="별점" width={15} height={15} />
            <Text className={poppins.className}>4.83</Text>
            <Text className={poppins.className}>•</Text>
            <TextStrong className={poppins.className}>1,800 리뷰</TextStrong>
            <Text className={poppins.className}>•</Text>
            <Image src="/superHostBlack.svg" alt="별점" width={15} height={15} />
            <Text className={poppins.className}>슈퍼 호스트</Text>
            <Text className={poppins.className}>•</Text>
            <Image src="/certification.svg" alt="별점" width={15} height={15} />
            <Text className={poppins.className}>신원 보장</Text>
          </DetailedInfo>

          <Description className={poppins.className}>
            단추님은 슈퍼호스트입니다<br/>
            <br/>
            슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
          </Description>
        </SmallContainer>

        <SmallContainer>
          <Description className={poppins.className}>
            Languages: 中文, English, Brazil, Français, Bahasa Indonesia, Español
          </Description>
          <Description className={poppins.className}>
            응답률: 100%<br/>
            1시간 내에 응답
          </Description>
          <MessageBtn>호스트에게 메세지 보내기</MessageBtn>
        </SmallContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 9.3rem;
  margin-bottom: 3rem;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
`;

const HostInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Name = styled.span`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const History = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DetailedInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.69rem;
`;

const Text = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const TextStrong = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Description = styled.p`
  width: 26.75rem;
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const MessageBtn = styled.button`
  display: flex;
  width: 15.625rem;
  height: 3.75rem;
  padding: 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  border: 1px solid #3E3E3E;
  background: #fff;
  margin-top: 2rem;

  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
