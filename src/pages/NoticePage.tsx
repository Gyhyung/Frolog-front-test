import React from 'react';
import styled from 'styled-components';
import arrowLeft from '../assets/notice/arrow-left.svg';
import AdBanner from '../components/noticePage/AdBanner';
import NoticeItem from '../components/noticePage/NoticeItem';
import { noticeDummy } from '../data/dummyData/noticeDummy';

function NoticePage() {
  return (
    <Container>
      <TopContainer>
        <Header>
          <BackBtn onClick={() => window.history.back()}>
            <img src={arrowLeft} alt='back' />
          </BackBtn>
          <h1>알림</h1>
        </Header>
        <AdBanner />
      </TopContainer>
      <NoticeBox>
        {noticeDummy.map((data) => {
          return <NoticeItem key={data.id} noticeData={data} />;
        })}
      </NoticeBox>
    </Container>
  );
}

export default NoticePage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  padding-top: 24px;

  border-bottom: 8px solid ${({ theme }) => theme.colors.key_color_light};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 14px 0;
  position: relative;

  & h1 {
    width: 100%;
    color: ${({ theme }) => theme.colors.text_black};
    text-align: center;
    font-family: 'Noto Sans KR';
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    letter-spacing: -0.07px;
    text-align: center;
  }
`;

const BackBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -10px;
  cursor: pointer;
`;

const NoticeBox = styled.div`
  flex: 1;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
