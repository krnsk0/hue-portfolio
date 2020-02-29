import { css } from '@emotion/core';

export default {
  placeholderWrapper: (theme, heightPercentage) => css`
    width: 100%;
    background-color: ${theme.colors.lightGrey2};
    display: block;
    position: relative;
    height: 0;
    padding-bottom: ${heightPercentage}%;
    break-inside: avoid-column;
  `,
};
