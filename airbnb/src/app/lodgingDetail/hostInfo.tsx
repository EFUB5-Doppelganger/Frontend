import React from 'react';
import styled from 'styled-components';
import { Poppins } from 'next/font/google';
import SUPERHOST from '../../../public/superHost.svg';
import LOCATION from '../../../public/location.svg';
import KEY from '../../../public/key.svg';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'] });

type Props = {
  hostName: string;
  limit: string;
  hostProfile: React.ReactElement;
}

export default function hostInfo (props: Props) {
  return (
    <Wrapper>
      <HostInfoContainer>
        <HostInfo>
          <HostName className={poppins.className}>{props.hostName}</HostName>
          <Limit className={poppins.className}>{props.limit}</Limit>
        </HostInfo>
        {props.hostProfile}
      </HostInfoContainer>

      <NoticeContainer>
        <Notice>
          <SUPERHOST />
          <NoticeContent>
            <Subtitle className={poppins.className}>슈퍼호스트</Subtitle>
            <Description className={poppins.className}>
              슈퍼호스트는 경험이 많고 평점이 높은 호스트로, 게스트에게 훌륭한 숙박을 제공하기 위해 최선을 다하는 사람입니다.
            </Description>
          </NoticeContent>
        </Notice>

        <Notice>
          <LOCATION />
          <NoticeContent>
            <Subtitle className={poppins.className}>접근성</Subtitle>
            <Description className={poppins.className}>
              최근 게스트의 95%가 위치에 5점 만점을 주었습니다.
            </Description>
          </NoticeContent>
        </Notice>

        <Notice>
          <SUPERHOST />
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
  width: 45.4375rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const HostInfoContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const HostInfo = styled.div`
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
`;

const Limit = styled.p`
  color: #3E3E3E;
  font-family: Poppins;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1.56rem;
  justify-content: center;
  align-items: center;
`;

const Notice = styled.div`
  display: flex;
  gap: 1.19rem;
  justify-content: center;
  align-items: center;
`;

const NoticeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  justify-content: flex-start;
  align-items: center;
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
  width: 43.9375rem;
`;