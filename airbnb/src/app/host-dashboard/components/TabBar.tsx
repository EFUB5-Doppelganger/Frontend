import React from 'react';
import { TabContainer, Tab } from '../HostDashboardPage.styles';

interface TabBarProps {
  activeTab: 'hostel' | 'review' | 'nearby';
  setActiveTab: (tab: 'hostel' | 'review' | 'nearby') => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <TabContainer>
      <Tab
        active={activeTab === 'hostel'}
        onClick={() => setActiveTab('hostel')}
      >
        현재 호스팅 중(1)
      </Tab>
      <Tab
        active={activeTab === 'review'}
        onClick={() => setActiveTab('review')}
      >
        후기(4)
      </Tab>
      <Tab
        active={activeTab === 'nearby'}
        onClick={() => setActiveTab('nearby')}
      >
        예약 내역(1)
      </Tab>
    </TabContainer>
  );
};

export default TabBar;
