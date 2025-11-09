import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function Convenience () {
  return (
    <Wrapper>
      <Header className={poppins.className}>숙소 편의시설</Header>

      <Content>
        <ConvenienceItems>
          <ConvenienceContainer>
            <ConvenienceItem>
              <Image 
                src="/convenience/beach.svg"
                alt="해변"
                width={20}
                height={20}
              />
              <ItemText className={poppins.className}>해변으로 연결</ItemText>
            </ConvenienceItem>
            <ConvenienceItem>
              <Image 
                src="/convenience/tv.svg"
                alt="tv"
                width={20}
                height={20}
              />
              <ItemText className={poppins.className}>TV</ItemText>
            </ConvenienceItem>
            <ConvenienceItem>
              <Image 
                src="/convenience/pool.svg"
                alt="실내 수영장"
                width={20}
                height={20}
              />
              <ItemText className={poppins.className}>실내 수영장</ItemText>
            </ConvenienceItem>
          </ConvenienceContainer>

          <ConvenienceContainer>
            <ConvenienceItem>
              <Image 
                src="/convenience/parking.svg"
                alt="주차"
                width={20}
                height={20}
              />
              <ItemText className={poppins.className}>무료 주차</ItemText>
            </ConvenienceItem>
            <ConvenienceItem>
              <Image 
                src="/convenience/wifi.svg"
                alt="와이파이"
                width={20}
                height={20}
              />
              <ItemText className={poppins.className}>Wifi</ItemText>
            </ConvenienceItem>
            <ConvenienceItem>
              <Image 
                src="/convenience/airconditioning.svg"
                alt="냉방"
                width={20}
                height={20}
              />
              <ItemText className={poppins.className}>냉방</ItemText>
            </ConvenienceItem>
          </ConvenienceContainer>
        </ConvenienceItems>
        <ConvenienceBtn className={poppins.className}>
          편의시설 34개 모두 보기
        </ConvenienceBtn>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  width: 88%;
`;

const Header = styled.h1`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ConvenienceItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 48rem;
`;

const ConvenienceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48rem;
`;

const ConvenienceItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 7rem;
`;

const ItemText = styled.h3`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ConvenienceBtn = styled.button`
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

  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;