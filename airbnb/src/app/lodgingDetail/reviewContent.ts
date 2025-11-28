import React from 'react';

export type Props = {
  profileImage: string;
  userName: string;
  writeDate: string;
  review: string;
};

export const reviews: Props[] = [
  {
    profileImage: "/profile/profile1.svg",
    userName: "호운",
    writeDate: "2025년 8월",
    review: "[장점] 1. 광안리 바로 앞에 위치하여 바다까지도 가깝고 뷰도 좋았습니다. 2. 바로 옆에 편의점도 있어요."
  },
  {
    profileImage: "/profile/profile2.svg",
    userName: "윤희",
    writeDate: "2025년 8월",
    review: "광안리 오션뷰가 너무 좋은 숙소 이고 카페나 식당 편의시설등이 바로 근처에 있어 편하게 보내다 옵니다."
  },
  {
    profileImage: "/profile/profile3.svg",
    userName: "채원",
    writeDate: "2025년 8월",
    review: "답변이 정말 빠르시고 친절하셔서 가장 좋았습니다. 숙소 내부도 청결하고 사진과 동일한 느낌으로 뷰까지 완벽해서 더 기분 좋게 이용했습니다!!"
  },
  {
    profileImage: "/profile/profile4.svg",
    userName: "주영",
    writeDate: "2025년 8월",
    review: "숙소가 이뻐요. 편히 쉬다 갑니다~"
  },
  {
    profileImage: "/profile/profile5.svg",
    userName: "윤호",
    writeDate: "2025년 8월",
    review: "사진보다 넓고 깔끔하고 예쁜 곳은 처음이었어요바다만 보고있어도 힐링이었어요 ㅎㅎ 다음번에 와도 여기 머무를 거 같아요!"
  },
  {
    profileImage: "/profile/profile6.svg",
    userName: "지민",
    writeDate: "2025년 8월",
    review: "광안대교가 한눈에 보이는 뷰가 정말 압도적이에요. 특히 야경이 멋져서 숙소에 머무는 것만으로도 여행 온 기분이 제대로 납니다."
  },
  {
    profileImage: "/profile/profile7.svg",
    userName: "유나",
    writeDate: "2025년 8월",
    review: "숙소 위치와 뷰가 끝내주게 좋은 곳입니다!!! 머무르는 내내 창밖을 볼 때 기분 좋았어요"
  },
]