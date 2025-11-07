import React from 'react';
import styled from 'styled-components';
import { Poppins } from 'next/font/google';
import SUPERHOST from '../../../public/superHost.svg';
import LOCATION from '../../../public/location.svg';
import KEY from '../../../public/key.svg';
import Image from 'next/image';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

type Props = {
  hostName: string;
  limit: string;
  hostProfile: React.ReactElement;
}

export default function HostInfo (props: Props) {
  return (
    <Wrapper>
      <HostInfoContainer>
        <HostInformation>
          <HostName className={poppins.className}>{props.hostName}</HostName>
          <Limit className={poppins.className}>{props.limit}</Limit>
        </HostInformation>
        {props.hostProfile}
      </HostInfoContainer>

      <NoticeContainer>
        <Notice>
          <Image
            src="/superHost.svg"
            alt="슈퍼호스트"
            width={25}
            height={35}
          />
          <NoticeContent>
            <Subtitle className={poppins.className}>슈퍼호스트</Subtitle>
            <Description className={poppins.className}>
              슈퍼호스트는 경험이 많고 평점이 높은 호스트로, 게스트에게 훌륭한 숙박을 제공하기 위해 최선을 다하는 사람입니다.
            </Description>
          </NoticeContent>
        </Notice>

        <Notice>
          <Image
            src="/location.svg"
            alt="위치"
            width={25}
            height={35}
          />
          <NoticeContent>
            <Subtitle className={poppins.className}>접근성</Subtitle>
            <Description className={poppins.className}>
              최근 게스트의 95%가 위치에 5점 만점을 주었습니다.
            </Description>
          </NoticeContent>
        </Notice>

        <Notice>
          <Image
            src="/key.svg"
            alt="키"
            width={25}
            height={35}
          />
          <NoticeContent>
            <Subtitle className={poppins.className}>순조로운 체크인 절차</Subtitle>
            <Description className={poppins.className}>
              최근 게스트의 100%가 체크인 절차에 5점 만점을 주었습니다.
            </Description>
          </NoticeContent>
        </Notice>
      </NoticeContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50.9375rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const HostInfoContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 48.9375rem;
`;

const HostInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HostName= styled.span`
  color: #3E3E3E;
  font-family: Poppins;
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const Limit = styled.p`
  color: #3E3E3E;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 0;
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.88rem;
  justify-content: center;
  align-items: center;
`;

const Notice = styled.div`
  display: flex;
  gap: 1.55rem;
  justify-content: center;
  align-items: center;
`;

const NoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: center;
  align-items: flex-start;
`;

const Subtitle = styled.span`
  color: #3E3E3E;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Description = styled.p`
  color: #3E3E3E;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 45.9375rem;
  margin: 0;
`;