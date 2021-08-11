import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/spl0edl.css");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  html {
    font-size: 20px;
    text-rendering: optimizeLegibility;
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  body {
    width: 100%;
    height: 100%;
  }
`;
