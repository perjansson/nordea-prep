import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
    0% {opacity: 1.0}
    50% {opacity: 0.0}
    100% {opacity: 1.0}
`

const Pulse = styled.div`
    display: inline-block;
    animation: ${rotate360} 5s linear infinite;
    animation-delay: 1s;
`

export default Pulse