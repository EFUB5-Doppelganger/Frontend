// reservation 데이터가 어떤 모양이어야 하는지를 미리 정의
export interface Review {
    id: number;
    name: string;
    date: string;
    content: string;
    avatar: string;
  }
  
  export interface Reservation {
    id: number;
    title: string;
    dates: string;
    tags: string[];
    hostAvatar: string;
  }
  