import React from 'react';
import {
  ReservationCardWrapper,
  ReservationBadge,
  HostAvatar,
  BadgeText,
  ReservationTitle,
  ReservationDates,
  ReservationTags,
  SendMessageButton
} from '../HostDashboardPage.styles';

import { Reservation } from '../types/host.d';

interface ReservationCardProps {
  reservation: Reservation;
}

const ReservationCard: React.FC<ReservationCardProps> = ({ reservation }) => {
  return (
    <ReservationCardWrapper>
      <ReservationBadge>
        <HostAvatar>{reservation.hostAvatar}</HostAvatar>
        <BadgeText>2일 후 예정된 예약</BadgeText>
      </ReservationBadge>

      <ReservationTitle>{reservation.title}</ReservationTitle>
      <ReservationDates>{reservation.dates}</ReservationDates>
      <ReservationTags>{reservation.tags.join(' / ')}</ReservationTags>

      <SendMessageButton>메시지 보내기</SendMessageButton>
    </ReservationCardWrapper>
  );
};

export default ReservationCard;
