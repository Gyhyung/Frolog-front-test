import React, { useState } from 'react';
import styled from 'styled-components';
import menuIcon from '../../../assets/home/menu.svg';
import { UserProfile } from '../../../data/dummyData/homeDummy';
import FeedPopUp from '../popUp/FeedPopUp';

interface ProfileBarProps {
  user: UserProfile;
}

function ProfileBar({ user }: ProfileBarProps) {
  const [feedPopUp, setFeedPopUp] = useState(false);

  return (
    <BarContainer>
      <ProfileImage src={user.profilePicture} alt={`${user.name}'s profile`} />
      <UserInfo>
        <UserName>{user.name}</UserName>
        <UserNickname>{user.nickname}</UserNickname>
      </UserInfo>
      <MenuButton onClick={() => setFeedPopUp(true)}>
        <MenuIcon src={menuIcon} alt='menu' />
      </MenuButton>
      {feedPopUp && <FeedPopUp setOpen={setFeedPopUp} />}
    </BarContainer>
  );
}

export default ProfileBar;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 16px 16px;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 44px;
  box-shadow: 1px 1px 1px grey;
  background: url(${(props) => props.src});
  margin-right: 16px;
  flex-shrink: 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  color: black;
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 2px;
`;

const UserNickname = styled.div`
  color: #b1b1b1;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

const MenuButton = styled.button`
  position: absolute;
  right: 16px;
`;

const MenuIcon = styled.img`
  width: 22px;
  height: 22px;
`;
