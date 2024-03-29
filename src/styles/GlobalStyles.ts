import { createGlobalStyle, keyframes } from 'styled-components';
import '../assets/font/font.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
    scrollbar-width: none; /* Firefox */
  }
  button {
    background: none;
    border: none;
    box-sizing: content-box;
    padding: 0;
  }
  html {
    background-color: #f1f1f1;
  }
  body {
    margin: 0;
    width: 100vw;
    font-family: "Pretendard";

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;

    overscroll-behavior-y: none;
    overflow: auto;
  }

  .slick-list {
    border-radius: 12px;
  }
  
  // 스크롤바 스타일 숨기기
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const fadeUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0%); }
`;

export const fadeDown = keyframes`
  0% { transform: translateY(-100%);  }
  100% { transform: translateY(0%); }
`;
