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
    --color-black: #000000;
    --color-red: #C95C44;
    --color-dark-red: #9E422E;

    /* Fonts */
    --font-primary: "Ibarra Real Nova", sans-serif;
    --font-weight-default: 400;

    /************************/
    /* Breakpoint Variables */
    /************************/

    /* Default mobile-first breakpoint */
    --body-margin: 20px;

    /* Small */
    @media (min-width: 576px) { 
    }

    /* Medium */
    @media (min-width: 768px) { 
      --body-margin: 25px;
    }

    /* Large */
    @media (min-width: 992px) { 
      --body-margin: 30px;
    }

    /* X-Large */
    @media (min-width: 1200px) { 
      --body-margin: 35px;
    }

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

    margin: var(--body-margin);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
  }

  a {
    color: var(--color-red);
    font-style: italic;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
