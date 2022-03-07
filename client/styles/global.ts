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
    --font-primary: "Ibarra Real Nova", sans-serif;
    --font-weight-default: 400;

    /************************/

    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    background: var(--color-white);
    color: var(--color-black);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-default);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
  }
`;

export default GlobalStyle;
