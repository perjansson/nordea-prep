import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate360} 10s linear infinite;
    animation-delay: 1s;
`

export default Rotate
