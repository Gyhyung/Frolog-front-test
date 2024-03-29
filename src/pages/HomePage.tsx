import React from 'react';
import styled from 'styled-components';
import BookReviewList from '../components/common/home/BookReviewList';

function HomePage() {
  return (
    <Container>
      <BookReviewList />
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  height: fit-content;
`;
