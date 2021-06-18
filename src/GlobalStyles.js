import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    --color-primary: #FFB900;
    --color-secondary: #9B2ECF;
    --color-tertiary: #FF8600;
    --color-lightgrey: #E0E0E0;

    --font-primary: 'Karla';
    --font-secondary: 'Rubik';

    --font-small: 0.8rem;
    --font-medium: 1rem;
    --font-large: 1.5rem;
  }

  body {
    font-family: Karla, Helvetica,Arial,sans-serif;
  }
`;
 

export default GlobalStyles;