import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function DefaultLayout() {
  return (
    <Container>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default DefaultLayout;

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: white;
  border-radius: 0px;
  position: relative;
  box-sizing: border-box;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    width: 450px;
    height: 100vh;
  }
`;

const Content = styled.div`
  width: 100%;

  // 모바일 사이즈(최대 430px)에서 벗어날 경우 사이즈 고정
  @media screen and (min-width: 430px) {
    overflow: auto;
  }
`;
