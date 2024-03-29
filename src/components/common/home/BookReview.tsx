import React from 'react';
import styled from 'styled-components';
import ProfileBar from './ProfileBar';
import Content from './Content';
import BottomBar from './BottomBar';
import { BookReviewData } from '../../../data/dummyData/homeDummy';

interface BookReviewProps {
  reviewData: BookReviewData;
}

function BookReview({ reviewData }: BookReviewProps) {
  return (
    <ReviewContainer>
      <TopBar />
      <ProfileBar user={reviewData.user} />
      <Content reviewData={reviewData} />
      <BottomBar commentsCount={reviewData.commentsCount} />
    </ReviewContainer>
  );
}

export default BookReview;

const ReviewContainer = styled.div`
  width: 100%;
  background: #ffffff;
  overflow: hidden; // 내부 컴포넌트가 ReviewContainer 넘지 않도록
`;

const TopBar = styled.div`
  width: 100%;
  height: 8px;
  flex-shrink: 0;
  background: #dce4dc;
  margin-bottom: 16px; // 하단 컴포넌트와의 간격 조정
`;
