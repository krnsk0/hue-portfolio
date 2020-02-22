import Layout from '../components/layout';
import { css } from '@emotion/core';

const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

const Index = () => {
  return (
    <Layout>
      <div>
        <img src="/logo.png" alt="logo with text HUE art"></img>
        <div css={basicStyles}>hue art</div>
        <div css={basicStyles}>line 1</div>
        <div css={basicStyles}>line 2</div>
      </div>
      <div></div>
    </Layout>
  );
};

export default Index;
