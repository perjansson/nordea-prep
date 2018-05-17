import styled, { keyframes } from 'styled-components'

const fadeInAnimation = keyframes`
    0% {opacity: 0.0}
    100% {opacity: 1.0}
`

const FadeIn = styled.div`
    display: inline-block;
    animation: ${fadeInAnimation} 1s ease-in forwards;
    opacity: 0;
`

export default FadeIn
