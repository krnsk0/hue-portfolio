import { css } from '@emotion/core';

const globalStyles = theme => css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    font-size: 16px;
    box-sizing: border-box;
  }
  body {
    background: ${theme.colors.lightGrey1};
    color: ${theme.colors.darkGrey1};
    font-weight: 400;
    letter-spacing: 0.2px;
    position: relative;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre {
    margin: 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export default globalStyles;
