'use client';

import React from 'react';
import styled from 'styled-components';
import { Container, ContentWrapper, Title, StartButton } from './HostPage.styles';
import HostStartInfoList from './HostStartInfoList';

interface Props {
  onStart: () => void;
}

const LeftSection = styled.div`
  flex: 1;
  max-width: 600px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
  padding-top: 40px;
  border-top: 1px solid #ebebeb;

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

const HostStartLayout: React.FC<Props> = ({ onStart }) => {
  return (
    <Container>
      <ContentWrapper>
        <LeftSection>
          <Title>
            간단하게 에어비앤비<br />
            호스팅을 시작할 수<br />
            있습니다
          </Title>
        </LeftSection>

        <HostStartInfoList />
      </ContentWrapper>

      <BottomSection>
        <StartButton onClick={onStart}>시작하기</StartButton>
      </BottomSection>
    </Container>
  );
};

export default HostStartLayout;
