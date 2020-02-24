import { css } from '@emotion/core';

export default {
  placeholderWrapper: (theme, heightPercentage) => css`
    margin: 0 0 0.5em 0;
    width: 100%;
    background-color: ${theme.colors.lightGrey2};
    display: block;
    position: relative;
    height: 0;
    padding-bottom: ${heightPercentage}%;
  `,
};
