import React, { useState } from 'react';
import styled from 'styled-components';
import { Inter } from 'next/font/google';
import { signUp, login, socialLogin } from "@/api/users";
import { useRouter } from 'next/navigation';

interface LoginBtnProps {
  loginMethod: string;
  userId: string;
  userPw: string;
}

const inter = Inter({ subsets: ['latin'], weight: '300' })

export default function loginBtn ({ loginMethod, userId, userPw }: LoginBtnProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleGeneralAuth = async () => {
    // 입력 검증
    if (!userId.trim() || !userPw.trim()) {
      setError('아이디와 비밀번호를 모두 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError(null);

    // 일반 로그인/회원가입 처리
    try {
      const signUpRes  = await signUp({
        userId: userId, 
        password: userPw,
        provider: "general",
      });
      console.log("회원가입 성공: ", signUpRes);

      // 회원가입 후 자동 로그인
      const loginRes = await login({
        userId,
        password: userPw,
      });

      if (loginRes.success && loginRes.accessToken) {
        // 토큰 저장 
        localStorage.setItem('accessToken', loginRes.accessToken);
        console.log("자동 로그인 성공: ", loginRes);

        // 메인 페이지 이동
        router.push('/');
      }
    } catch (error) {
      console.error("회원가입 오류: ", error);
      // 회원가입 실패 시 로그인 시도 
      try {
        const loginRes = await login({
          userId,
          password: userPw,
        });
        console.log("로그인 성공!");

        if (loginRes.success && loginRes.accessToken) {
          localStorage.setItem('accessToken', loginRes.accessToken);
          console.log("로그인 성공:", loginRes);
          router.push('/dashboard');
        }
      } catch (error) {
        console.error("로그인 오류: ", error);
      } 
    } finally {
      setIsLoading(false);
    }
  };

  // 소셜 로그인
  const handleSocialLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      let response;

      response = await socialLogin();

      // 리다이렉트 URL로 이동
      if (response["redirect-url"]) {
        window.location.href = response["redirect-url"];
      }
    } catch (error: any) {
      console.error("소셜 로그인 오류: ", error);
      setError("카카오 로그인에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  // 버튼 클릭 핸들러
  const handleClick = () => {
    switch (loginMethod) {
      case "계속":
        handleGeneralAuth();
        break;
      default: 
        handleSocialLogin();
    }
  };

  return (
    <Wrapper 
      $loginMethod={loginMethod}
      onClick={handleClick}
      disabled={isLoading}
    >
      <LoginText className={inter.className} $loginMethod={loginMethod}>
        {loginMethod === "계속" ?
          "계속":
          `${loginMethod}로 로그인하기`}
      </LoginText>
    </Wrapper>
  );
}

const Wrapper = styled.button<{ $loginMethod: string }>`
  width: 35rem;
  height: 3.09194rem;
  flex-shrink: 0;
  fill: #FFF;
  stroke-width: 1px;
  stroke: #3E3E3E;
  border: ${({ $loginMethod }) => ($loginMethod === "계속" ? "1px solid #FF385C" : "1px solid #3e3e3e")};
  border-radius: 0.7rem;
  background: ${({ $loginMethod }) => ($loginMethod === "계속" ? "#FF385C" : "#fff")};
`;

const LoginText = styled.div<{ $loginMethod: string }>`
  color: ${({ $loginMethod }) => ($loginMethod === "계속" ? "#FFF" : "#3e3e3e")};;
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
`;