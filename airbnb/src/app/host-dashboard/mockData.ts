import { Review, Reservation } from './types/host.d';

export const reviews: Review[] = [
  {
    id: 1,
    name: '호온',
    date: '2025년 6월',
    content: `[장점]
1. 광안리 바로 앞에 위치해 있어 바다 접근성이 아주 좋습니다.
2. 숙소 바로 앞에 편의점도 있어서 편리하게 이용할 수 있어요.`,
    avatar: '🙂'
  },
  {
    id: 2,
    name: '윤희',
    date: '2025년 6월',
    content: '광안리 오션뷰가 정말 멋졌고, 근처에 식당과 편의시설이 많아 편하게 지낼 수 있었습니다.',
    avatar: '😊'
  },
  {
    id: 3,
    name: '채원',
    date: '2025년 8월',
    content: '호스트 분이 정말 친절하고 배려심이 많으셨어요. 숙소도 넓고 깔끔해서 만족스럽게 이용했습니다!',
    avatar: '😄'
  },
  {
    id: 4,
    name: '주영',
    date: '2025년 8월',
    content: '숙소가 아늑하고 조용해서 편하게 쉬다 왔습니다. 감사합니다 :)',
    avatar: '🤓'
  }
];

export const reservation: Reservation = {
  id: 1,
  title: 'Navindra',
  dates: '9월 20일 ~ 23일',
  tags: ['디자인 숙소', '로맨틱 감성', '도보 여행 추천', '식사 가능', '캠핑 분위기'],
  hostAvatar: '😄'
};
