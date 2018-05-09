import styled, { keyframes } from 'styled-components'

const rotate560 = keyframes`
    0% {transform: scale(1)}
    25% {transform: scale(5)}
    50% {transform: scale(1)}
    75% {transform: scale(5)}
    100% {transform: scale(1)}
`

const Pulse = styled.div`
    display: inline-block;
    animation: ${rotate560} 3s linear infinite;
`

export default Pulse
