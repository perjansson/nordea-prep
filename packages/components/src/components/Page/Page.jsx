import { element, array, oneOfType } from 'prop-types'
import styled from 'styled-components'

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

Page.propTypes = {
    children: oneOfType([element, array]).isRequired,
}

export default Page
