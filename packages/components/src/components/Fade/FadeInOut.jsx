import styled, { keyframes } from 'styled-components'

const fadeInOutAnimation = keyframes`
    0% {opacity: 1.0}
    50% {opacity: 0.0}
    100% {opacity: 1.0}
`

const FadeInOut = styled.div`
    display: inline-block;
    animation: ${fadeInOutAnimation} 10s linear infinite;
    animation-delay: 1s;
`

export default FadeInOut
