'use client';

import { useState } from 'react';
import ProfileSidebar from './components/Sidebar';
import ProfileView from './components/ProfileView';
import ProfileEdit from './components/ProfileEdit';
import * as S from './MyPage.styles';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('자기소개');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    job: '',
    name: '',
    birthYear: '',
    interests: '',
    introduction: '',
  });

  return (
    <S.Container isEditing={isEditing}>
    {!isEditing && (
      <ProfileSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    )}
  
    <S.MainContent>
      {!isEditing ? (
        <ProfileView setIsEditing={setIsEditing} />
      ) : (
        <ProfileEdit
          profile={profile}
          setProfile={setProfile}
          setIsEditing={setIsEditing}
        />
      )}
    </S.MainContent>
  </S.Container>  
  );  
}
