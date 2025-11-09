import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });

const photos = [
  "/hotel/hotel1.svg",
  "/hotel/hotel2.svg",
  "/hotel/hotel3.svg",
  "/hotel/hotel4.svg",
  "/hotel/hotel5.svg",
];

export default function HotelIntroduction () {
  return (
    <Wrapper>
      <Header>
        <Title className={poppins.className}>파라다이스 호텔 부산</Title>
        <HeaderDescription>
          <DetailedInfo>
            <Image src="/star.svg" alt="별점" width={15} height={15} />
            <Text className={poppins.className}>4.83</Text>
            <Text className={poppins.className}>•</Text>
            <TextStrong className={poppins.className}>1,800 리뷰</TextStrong>
            <Text className={poppins.className}>•</Text>
            <TextStrong className={poppins.className}>해운대구 해운대해변로 296 (중동), 해운대구, 부산, 대한민국, 48099</TextStrong>
          </DetailedInfo>
          <Options>
            <Option>
              <Image src="/share.svg" alt="공유" width={12} height={12} />
              <TextLined className={poppins.className}>공유</TextLined>
            </Option>
            <Option>
              <Image src="/heart.svg" alt="하트" width={12} height={12} />
              <TextLined className={poppins.className}>찜</TextLined>
            </Option>
          </Options>
        </HeaderDescription>
      </Header>

      <Grid>
        <BigPhoto>
          <Image src={photos[0]} alt="" fill style={{objectFit: 'cover', borderRadius: '0.7rem 0 0 0.7rem'}} />
        </BigPhoto>
        <SmallPhoto><Image src={photos[1]} alt="" fill style={{objectFit: 'cover'}} /></SmallPhoto>
        <SmallPhoto><Image src={photos[2]} alt="" fill style={{objectFit: 'cover', borderRadius: '0 0.7rem 0 0'}} /></SmallPhoto>
        <SmallPhoto><Image src={photos[3]} alt="" fill style={{objectFit: 'cover'}} /></SmallPhoto>
        <SmallPhoto>
          <Image src={photos[4]} alt="" fill style={{objectFit: 'cover', borderRadius: '0 0 0.7rem 0'}} />
        </SmallPhoto>
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.1rem;
  margin-bottom: 3rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;
`;

const HeaderDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 33rem;
`;

const Title = styled.h1`
  color: #3E3E3E;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const DetailedInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.69rem;
  margin: 0;
  padding: 0;
`;

const Text = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const TextLined = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-decoration: underline;
`;

const TextStrong = styled.div`
  color: #3E3E3E;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: underline;
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

const Option = styled.div`
  gap: 0.31rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  width: 77.5rem;
  height: 29.13rem;
  border-radius: 0.8rem;
  overflow: hidden;
`;

// 큰 사진 (왼쪽 2행 모두)
const BigPhoto = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / 2;
  position: relative; /* next/image fill 사용시 필요 */
`;

// 오른쪽 작은 사진들
const SmallPhoto = styled.div`
  position: relative;
  min-width: 0;
  min-height: 0;
`;
