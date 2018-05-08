import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const Link = styled.span`
    font-size: 24px;
    color: #fff;
`

const Icon = styled.span`
    color: #fff;
`

const BackLink = ({ children, className }) => (
    <div className={className}>
        <Icon>&lt;&lt; </Icon>
        <Link>{children}</Link>
        <Icon> &lt;&lt;</Icon>
    </div>
)

BackLink.propTypes = {
    children: string.isRequired,
    className: string,
}

BackLink.defaultProps = {
    className: '',
}

export default BackLink
