'use client';

import { useEffect, useState } from 'react';
import {
  Container,
  Section,
  SectionTitle,
  PropertyCardsContainer  
} from './HostDashboardPage.styles';
import TabBar from './components/TabBar';
import PropertyCard from './components/PropertyCard';
import ReviewList from './components/ReviewList';
import ReservationCard from './components/ReservationCard';

import { getMyAccommodations, getAccommodationReviews } from './api/accommodationApi';
import { getMyReservations } from '../../api/reservations';

const HostDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'hostel' | 'review' | 'nearby'>('hostel');

  const [accommodations, setAccommodations] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [averageRating, setAverageRating] = useState(0);

  const [reservations, setReservations] = useState<any[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accData = await getMyAccommodations();
        setAccommodations(accData || []);  // ← reviews 제거

        if (accData?.[0]) {
          const reviewData = await getAccommodationReviews(accData[0].id);
          setReviews(reviewData.reviews || []);
          setAverageRating(reviewData.averageRating || 0);
        }
  
        const reservationData = await getMyReservations();
        setReservations(reservationData.reservation || []);
  
      } catch (error) {
        console.error('대시보드 데이터 불러오기 실패:', error);
      }
    };
  
    fetchData();
  }, []); 

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

        {/* 탭 1: 내 숙소 */}
        {activeTab === 'hostel' && (
          <PropertyCardsContainer>
            {accommodations.map((acc) => (
              <PropertyCard
                key={acc.id}
                name={acc.name}
                dailyPrice={acc.price}
                rating={acc.rating}
                image={acc.image}
              />
            ))}
          </PropertyCardsContainer>
        )}

        {/* 탭 2: 리뷰 */}
        {activeTab === 'review' && (
          <ReviewList reviews={reviews} averageRating={averageRating} />
        )}

        {/* 탭 3: 내 예약 */}
        {activeTab === 'nearby' &&
          reservations.map((res) => (
            <ReservationCard
              key={res.reservationId}
              hostAvatar={res.imageUrl || "/default-avatar.png"}
              title={res.accommodationName}
              dates={`${res.checkIn} ~ ${res.checkOut}`}
              tags={[
                `게스트 ${res.guests}명`,
                `1박당 ${res.price.toLocaleString()}원`,
                `총 결제 ${res.totalPayment.toLocaleString()}원`,
                `위치: ${res.location}`
              ]}
            />
          ))}

      </Section>
    </Container>
  );
};

export default HostDashboardPage;
