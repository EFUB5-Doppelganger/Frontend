import React from 'react';
import { TabContainer, Tab } from '../HostDashboardPage.styles';

interface TabBarProps {
  activeTab: 'hostel' | 'review' | 'nearby';
  setActiveTab: (tab: 'hostel' | 'review' | 'nearby') => void;
  hostelCount: number;
  reviewCount: number;
  reservationCount: number;
}

const TabBar: React.FC<TabBarProps> = ({
  activeTab,
  setActiveTab,
  hostelCount,
  reviewCount,
  reservationCount
}) => {
  return (
    <TabContainer>
      <Tab
        active={activeTab === 'hostel'}
        onClick={() => setActiveTab('hostel')}
      >
        현재 호스팅 중({hostelCount})
      </Tab>
      <Tab
        active={activeTab === 'review'}
        onClick={() => setActiveTab('review')}
      >
        후기({reviewCount})
      </Tab>
      <Tab
        active={activeTab === 'nearby'}
        onClick={() => setActiveTab('nearby')}
      >
        예약 내역({reservationCount})
      </Tab>
    </TabContainer>
  );
};

export default TabBar;
