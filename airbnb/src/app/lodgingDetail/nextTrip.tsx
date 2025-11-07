import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

export default function NextTrip () {
  return (
    <Wrapper>
      <Header className={poppins.className}>다른 여행지 살펴보기</Header>
      <Container>
        <SmallContainer>
          <Text className={poppins.className}>Lombok</Text>
          <Text className={poppins.className}>Bingin Beach</Text>
          <Text className={poppins.className}>Kuta Beach</Text>
        </SmallContainer>

        <SmallContainer>
          <Text className={poppins.className}>Sanur</Text>
          <Text className={poppins.className}>Gili Trawangan</Text>
          <Text className={poppins.className}>Seminyak Beach</Text>
        </SmallContainer>

        <SmallContainer>
          <Text className={poppins.className}>Penida Island</Text>
          <Text className={poppins.className}>Nusa Dua Beach</Text>
          <Text className={poppins.className}>Canggu Beach</Text>
        </SmallContainer>
      </Container>

      <TextStrong className={poppins.className}>
        DoppelGanger {'>'} Indonesia {'>'} Bali {'>'} Klungkung Regency {'>'} Penida Island {'>'} Ceningan Island
      </TextStrong>
      
      <Line />

      <Container2>
        <SmallContainer>
          <TextStrong className={poppins.className}>Support</TextStrong>
          <Text2 className={poppins.className}>Help Center</Text2>
          <Text2 className={poppins.className}>NgCover</Text2>
          <Text2 className={poppins.className}>Supporting people with disablilities</Text2>
          <Text2 className={poppins.className}>Cancellation options</Text2>
          <Text2 className={poppins.className}>Our COVID-19 Response</Text2>
        </SmallContainer>

        <SmallContainer>
          <TextStrong className={poppins.className}>Community</TextStrong>
          <Text2 className={poppins.className}>Nginep.org</Text2>
        </SmallContainer>

        <SmallContainer>
          <TextStrong className={poppins.className}>Hosting</TextStrong>
          <Text2 className={poppins.className}>Nginep your home</Text2>
          <Text2 className={poppins.className}>Explore hosting resources</Text2>
          <Text2 className={poppins.className}>Visit community forum</Text2>
        </SmallContainer>

        <SmallContainer>
          <TextStrong className={poppins.className}>DoppelGanger</TextStrong>
          <Text2 className={poppins.className}>Newsroom</Text2>
          <Text2 className={poppins.className}>About new features</Text2>
          <Text2 className={poppins.className}>Letter from our founders</Text2>
          <Text2 className={poppins.className}>Careers</Text2>
          <Text2 className={poppins.className}>Investors</Text2>
        </SmallContainer>
      </Container2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.37rem;
  padding-bottom: 3rem;
  background: #f7f7f7;
  border: #e6e6e6;
`;

const Header = styled.h1`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12.69rem;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5rem;
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
  color: #707070;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const Text2 = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const Line = styled.div`
  width: 90rem;
  height: 0.1875rem;
  flex-shrink: 0;
  background: #E6E6E6;
`;

