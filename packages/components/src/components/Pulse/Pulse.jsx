import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
    0% {opacity: 0.0}
    50% {opacity: 1.0}
    100% {opacity: 0.0}
`;

const Pulse = styled.div`
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
`;

export default Pulse;
