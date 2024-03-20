import { createGlobalStyle } from 'styled-components';
import '../assets/font/font.css';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  button {
    background: none;
    border: none;
    box-sizing: content-box;
  }
  body {
    margin: 0;
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    font-family: "Pretendard";

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
  }
`;
