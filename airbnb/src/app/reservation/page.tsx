"use client"

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Poppins, Inter } from 'next/font/google';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';
import ReservationItem from './reservationItem';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '700']});

export default function Reservation () {
  return (
    <ReservationItem
      listNum={1}
      image="/hotel/hotel1.svg"
      date="2025-10-18 - 2025-10-20"
      headCount={2}
      price="331,3000원"
      cancel={true}
    />
  );
}