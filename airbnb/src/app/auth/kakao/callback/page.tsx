"use client"

import { useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { access } from "fs";

export default function KakaoCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      console.log("카카오 로그인 성공: ", accessToken);

      // 메인 페이지로 이동
      router.push('/');
    } else {
      console.error("카카오 로그인 실패: 토큰이 없습니다");
      router.push('/signInUp');
    }
  }, [searchParams, router]);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh' 
    }}>
      <p>카카오 로그인 처리 중...</p>
    </div>
  )
}