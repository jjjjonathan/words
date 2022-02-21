import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    /************************/
    /* Global CSS Variables */
    /************************/

    /* Colors */
    --color-white: #E3E4DB;
    --color-black: black;

    /* Fonts */
    --font-primary: "Ibarra Real Nova", sans-serif
  }

  body {
    background: var(--color-white);
    color: var(--color-black);
    font-family: var(--font-primary);
  }
`;

export default GlobalStyle;
