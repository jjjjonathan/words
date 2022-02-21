import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    /* Global CSS Variables */
    --color-white: #E3E4DB;
    --color-black: black;
  }
`;

export default GlobalStyle;
