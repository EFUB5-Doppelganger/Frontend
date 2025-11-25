'use client';

import { useEffect, useState } from 'react';
import {
  Container,
  Section,
  SectionTitle
} from './HostDashboardPage.styles';
import TabBar from './components/TabBar';
import PropertyCard from './components/PropertyCard';
import ReviewList from './components/ReviewList';
import ReservationCard from './components/ReservationCard';

import { getMyAccommodations, getAccommodationReviews } from './api/accommodationApi';

const HostDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'hostel' | 'review' | 'nearby'>('hostel');
  const [accessToken, setAccessToken] = useState(''); // 실제 연동 시 localStorage 등에서 가져오면 됨

  const [accommodations, setAccommodations] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [reservations, setReservations] = useState<any[]>([]); // 예약 API 연결되면 여기에 적용

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyAccommodations(accessToken);
        setAccommodations(data.reviews || []);

        // 기본 숙소 하나에 대한 리뷰 조회 (예시: 첫 번째 숙소)
        if (data.reviews?.[0]) {
          const reviewData = await getAccommodationReviews(data.reviews[0].id);
          setReviews(reviewData.reviews || []);
          setAverageRating(reviewData.averageRating || 0);
        }
      } catch (error) {
        console.error('숙소 및 리뷰 불러오기 실패:', error);
      }
    };

    fetchData();
  }, [accessToken]);

  return (
    <Container>
      <Section>
        <SectionTitle>숙소 관리</SectionTitle>
        <TabBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          hostelCount={accommodations.length}
          reviewCount={reviews.length}
          reservationCount={reservations.length}
        />

        {activeTab === 'hostel' &&
          accommodations.map((acc) => (
            <PropertyCard
              key={acc.id}
              name={acc.name}
              dailyPrice={acc.dailyPrice}
              rating={acc.rating}
              photos={acc.photos}
            />
          ))}

        {activeTab === 'review' && (
          <ReviewList reviews={reviews} averageRating={averageRating} />
        )}

        {activeTab === 'nearby' &&
          reservations.map((res, i) => (
            <ReservationCard
              key={i}
              hostAvatar={res.hostAvatar}
              title={res.title}
              dates={res.dates}
              tags={res.tags}
            />
          ))}
      </Section>
    </Container>
  );
};

export default HostDashboardPage;
