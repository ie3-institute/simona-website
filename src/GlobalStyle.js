import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #737B7D;
    --darkGrey: #373F41;
    --green: #7AB523;
    --lightGreen: #F7FBF2;
    --fontSuperBig: 2.9rem;
    --fontBig: 2.1rem;
    --fontMedium: 1.6rem;
    --fontSmall: 1rem:
  }

  * {
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  
  body {
    margin: 0;
    padding: 0; 

    h1 {
      font-size: var(--fontSuperBig);
      font-weight: 600;
      color: var(--darkGrey);
    }

    h2 {
      font-size: var(--fontBig);
      font-weight: 600;
    }

    h3 {
      font-size: var(--fontMedium);
      font-weight: 600;
    }

    p{
      font-size: 1rem;
      color: var(--lightGrey);
    }
  }
`;
