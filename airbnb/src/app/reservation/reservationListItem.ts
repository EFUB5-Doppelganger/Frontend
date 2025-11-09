import React from 'react';

export type Props = {
  listNum: number;
  image: string;
  name: string;
  date: string;
  headCount: number;
  price: string;
  cancel: boolean;
}

export const reservations: Props[] = [
  {
    listNum: 1,
    image: "/hotel/hotel1.svg",
    name: "Nusa Ceningan, Indonesia",
    date: "2025-10-02 - 2025-10-08",
    headCount: 3,
    price: "330,000원",
    cancel: false
  },
  {
    listNum: 2,
    image: "/hotel/hotel6.svg",
    name: "Lovina Seririt, Indonesia",
    date: "2025-11-12 - 2025-11-15",
    headCount: 2,
    price: "280,000원",
    cancel: true
  },
]