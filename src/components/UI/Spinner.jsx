import React from 'react';
import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

function Spinner({ loading }) {
  const override = css`
    display: block;
    margin: 2rem auto;
  `;
  return <MoonLoader loading={loading} css={override} size={100} />;
}

export default Spinner;
