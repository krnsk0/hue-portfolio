import { css } from '@emotion/core';
import { mediaQuery } from '../../emotion';

export default {
  mainContainer: css`
    display: flex;
    flex-direction: column;
    & > img:first-child {
      margin-top: 0 !important;
    }
    & > img:last-child {
      margin-bottom: 0 !important;
    }

    ${mediaQuery('md')} {
      flex-wrap: wrap;
      max-height: 225vh;
      & > img:first-child {
        margin-top: 0.5em !important;
      }
      & > img:last-child {
        margin-bottom: 0.5em !important;
      }
    }
  `,
  image: css`
    margin: 0.5em 0.5em 0 0.5em;
    width: calc(100% - 1em);

    ${mediaQuery('md')} {
      max-width: calc(50% - 1em);
      margin: 0.5em 0.5em 0 0;
    }
  `,
};
