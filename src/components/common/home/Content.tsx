import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import star from '../../../assets/home/star.svg';
import halfstar from '../../../assets/home/halfstar.svg';
import nostar from '../../../assets/home/nostar.svg';
import { BookReviewData } from '../../../data/dummyData/homeDummy';

interface ContentProps {
  reviewData: BookReviewData;
}

function Content({ reviewData }: ContentProps) {
  // 리뷰 텍스트의 "더보기"/"간략히" 기능을 토글
  const [isExpanded, setIsExpanded] = useState(false);

  // 별점을 생성하는 함수. 별점(rating) 값에 따라 적절한 별 이미지를 배열로 생성
  const generateRatingStars = useCallback((rating: number) => {
    const stars = [];
    let currentRating = rating;
    for (let i = 0; i < 5; i += 1) {
      if (currentRating >= 1) {
        stars.push(<StarIcon src={star} alt='star' key={i} />);
        currentRating -= 1;
      } else if (currentRating > 0) {
        stars.push(<StarIcon src={halfstar} alt='half star' key={i} />);
        currentRating = 0;
      } else {
        stars.push(<StarIcon src={nostar} alt='no star' key={i} />);
      }
    }
    return stars;
  }, []);

  return (
    <Container>
      <BookImage src={reviewData.bookImage} alt='Book' />
      <ContentRight>
        <ReviewSection>
          <OneLiner>{`‘ ${reviewData.oneLiner} ’`}</OneLiner>
          <Review isExpanded={isExpanded}>{reviewData.review}</Review>
          <ToggleButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? '..간략히' : '..더보기'}
          </ToggleButton>
        </ReviewSection>
        <BookInfo>{`${reviewData.bookName}  /  ${reviewData.bookAuthor}`}</BookInfo>
        <RatingContainer>
          {generateRatingStars(reviewData.rating)}
          <RatingNumber>{reviewData.rating}</RatingNumber>
        </RatingContainer>
        <TagsContainer>
          {/* <TagIcon src={proConTag} alt='Tag' /> */}
          {/* TODO: 장점과 단점 태그 대체. 현재는 임시 이미지로 대체 */}
          <Tag>재밌어요</Tag>
          <Tag>재밌어요재밌어요재밌어요</Tag>
          <Tag>재밌어요</Tag>
        </TagsContainer>
      </ContentRight>
    </Container>
  );
}

export default Content;

const Tag = styled.div`
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 8px;
  color: white;
  background-color: ${({ theme }) => theme.colors.key_color};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row; /* 가로 방향으로 요소를 배열 */
  width: 100%;
  //margin: 22px; /* FIXME: margin 빼면 전체 크기가 줄어듦... */
  align-items: flex-start; /* 상단 정렬 */
`;

const BookImage = styled.img`
  width: 142px;
  height: 144px;
  flex-shrink: 0;
  margin-left: 0px;
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: column; /* 세로 방향으로 요소를 배열 */
  margin-left: 5px; /* 이미지와 나머지 내용 사이의 간격 조정 */
`;

const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const OneLiner = styled.p`
  color: #000;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  width: 224px;
  margin-bottom: 12px;
`;

const Review = styled.p<{ isExpanded: boolean }>`
  color: #000;
  font-size: ${({ theme }) => theme.fontSize.sm};
  overflow: hidden;
  width: 100%;
  height: ${({ isExpanded }) => (isExpanded ? 'auto' : '45px')};
  margin-bottom: 6px;
  padding-right: 26px;
  line-height: 160%;
`;

const ToggleButton = styled.button`
  color: #b1b1b1;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 400;
  align-self: flex-end;
  padding-right: 26px;
  margin-bottom: 5px;
`;

const BookInfo = styled.p`
  color: #818181;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const StarIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const RatingNumber = styled.span`
  color: #000;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.04px;
  padding-left: 5px;
`;

const TagsContainer = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 6px;
`;
