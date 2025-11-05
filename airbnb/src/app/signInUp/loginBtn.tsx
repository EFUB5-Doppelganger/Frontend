import React from 'react';
import styled from 'styled-components';

type Props = {
  loginMethod: string,
}

export default function loginBtn (props: Props) {
  const loginMethod = { props }

  return (
    <Wrapper>
      <LoginText>
        {loginMethod === "계속" ?
          "계속":
          `${loginMethod}로 로그인하기`}
      </LoginText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid #3e3e3e;
  background: #fff;
  width: 688px;
  height: 65.47px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginText = styled.div`
  color: #3e3e3e;
  font-size: 25px;
  font-weight: 200;
`;