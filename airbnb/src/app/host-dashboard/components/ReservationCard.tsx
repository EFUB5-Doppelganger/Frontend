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

interface ReservationCardProps {
  hostAvatar: string;
  title: string;
  dates: string;
  tags: string[];
}

const ReservationCard: React.FC<ReservationCardProps> = ({
  hostAvatar,
  title,
  dates,
  tags
}) => {
  return (
    <ReservationCardWrapper>
      <ReservationBadge>
        <HostAvatar>{hostAvatar}</HostAvatar>
        <BadgeText>2일 후 예정된 예약</BadgeText>
      </ReservationBadge>

      <ReservationTitle>{title}</ReservationTitle>
      <ReservationDates>{dates}</ReservationDates>
      <ReservationTags>{tags.join(' / ')}</ReservationTags>

      <SendMessageButton>메시지 보내기</SendMessageButton>
    </ReservationCardWrapper>
  );
};

export default ReservationCard;
