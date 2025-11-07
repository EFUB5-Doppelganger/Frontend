import React from 'react';
import styled from 'styled-components';
import { Inter } from 'next/font/google';

type Props = {
  loginMethod: string,
}

const inter = Inter({ subsets: ['latin'], weight: '300' })

export default function loginBtn (props: Props) {
  const { loginMethod } = props;

  return (
    <Wrapper loginMethod={loginMethod}>
      <LoginText className={inter.className} loginMethod={loginMethod}>
        {loginMethod === "계속" ?
          "계속":
          `${loginMethod}로 로그인하기`}
      </LoginText>
    </Wrapper>
  );
}

const Wrapper = styled.button<{ loginMethod: string }>`
  width: 35rem;
  height: 3.09194rem;
  flex-shrink: 0;
  fill: #FFF;
  stroke-width: 1px;
  stroke: #3E3E3E;
  border: ${({ loginMethod }) => (loginMethod === "계속" ? "1px solid #FF385C" : "1px solid #3e3e3e")};;
  border-radius: 0.7rem;
  background: ${({ loginMethod }) => (loginMethod === "계속" ? "#FF385C" : "#fff")};
`;

const LoginText = styled.div<{ loginMethod: string }>`
  color: ${({ loginMethod }) => (loginMethod === "계속" ? "#FFF" : "#3e3e3e")};;
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
`;