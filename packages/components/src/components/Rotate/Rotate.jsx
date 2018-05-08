import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate360} 7s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

export default Rotate;
