import { element, array, oneOfType } from 'prop-types'
import styled from 'styled-components'

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:after {
        content: '';
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(rgba(255, 255, 255, 0) 0%, darkblue 100%);
        pointer-events: none;
    }
`

Page.propTypes = {
    children: oneOfType([element, array]).isRequired,
}

export default Page
