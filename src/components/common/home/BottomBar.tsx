import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import likeDefault from '../../../assets/bottomSheet/LikeDefault.svg';
import likeClicked from '../../../assets/bottomSheet/LikeClicked.svg';
import commentIcon from '../../../assets/home/comment.svg';
import shareIcon from '../../../assets/home/share.svg';
import CommentBottomSheet from '../../../pages/CommentBottomSheet';

interface BottomBarProps {
  commentsCount: number;
}

function BottomBar({ commentsCount }: BottomBarProps) {
  const [like, setLike] = useState(false);
  const [likesCount, setLikesCount] = useState(0); // 초기 좋아요 수
  const [commentOpen, setCommentOpen] = useState(false);

  const toggleLike = useCallback(() => {
    setLike(!like);
    setLikesCount(like ? likesCount - 1 : likesCount + 1);
  }, [like, likesCount]);

  /* ----- 피드 공유 함수 ----- */
  const handleShare = useCallback(async () => {
    try {
      await navigator.share({
        title: 'Book Title', // 실제 값으로 대체 필요
        text: 'One-liner review',
        url: '',
      });
    } catch (err) {
      alert('Sharing is not supported.');
    }
  }, []);

  return (
    <BarContainer>
      <LikeButton onClick={toggleLike}>
        <Icon src={like ? likeClicked : likeDefault} alt='like' />
        <ButtonText>좋아요 {likesCount}</ButtonText>
      </LikeButton>

      <CommentButton onClick={() => setCommentOpen(true)}>
        <Icon src={commentIcon} alt='comment' />
        <ButtonText>댓글달기 {commentsCount}</ButtonText>
      </CommentButton>
      {commentOpen && <CommentBottomSheet setOpen={setCommentOpen} />}

      <ShareButton onClick={handleShare}>
        <Icon src={shareIcon} alt='share' />
        <ButtonText>공유하기</ButtonText>
      </ShareButton>
    </BarContainer>
  );
}

export default BottomBar;

const BarContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  margin-top: 5px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg_white};
  position: relative;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;
const CommentButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: 16px;
`;
const ShareButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  right: 42px;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const ButtonText = styled.span`
  font-size: 8px;
  color: #818181;
`;
