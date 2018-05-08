import { element } from 'prop-types'
import styled from 'styled-components'

const Splash = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

Splash.propTypes = {
    children: element.isRequired,
}

export default Splash
