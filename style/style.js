import { css } from '@emotion/react';

// Import Google Font using the next/font module
import { Prompt } from 'next/font';

// Define global styles including the imported font
const globalStyles = css`
  /* Import and apply the 'Prompt' font from Google Fonts API */
  @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@400;700&display=swap');

  body {
    font-family: 'Prompt', sans-serif;
  }

  /* Add more styles as needed */
`;

export default globalStyles;