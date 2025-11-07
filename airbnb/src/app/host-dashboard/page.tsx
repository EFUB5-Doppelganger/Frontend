'use client';

import { useState } from 'react';
import {
  Container,
  Section,
  SectionTitle
} from './HostDashboardPage.styles';
import TabBar from './components/TabBar';
import PropertyCard from './components/PropertyCard';
import ReviewList from './components/ReviewList';
import ReservationCard from './components/ReservationCard';

import { reviews, reservation } from './mockData';

const HostDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'hostel' | 'review' | 'nearby'>('hostel');

  return (
    <Container>
      <Section>
        <SectionTitle>숙소 관리</SectionTitle>
        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === 'hostel' && <PropertyCard />}
        {activeTab === 'review' && <ReviewList reviews={reviews} />}
        {activeTab === 'nearby' && <ReservationCard reservation={reservation} />}
      </Section>
    </Container>
  );
};

export default HostDashboardPage;

