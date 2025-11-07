import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function Location () {
  return (
    <Container>
      <Header>
        <Title className={poppins.className}>위치</Title>
        <Subtitle className={poppins.className}>부산, 한국</Subtitle>
      </Header>

      <Image
        src="/locationImage.svg"
        alt="위치 사진"
        width={1250}
        height={650}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.62rem;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  color: #3E3E3E;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const Subtitle = styled.h2`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0;
`;