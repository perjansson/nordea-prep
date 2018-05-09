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

const ForwardLink = ({ children, className }) => (
    <div className={className}>
        <Icon>&gt;&gt; </Icon>
        <Link>to {children}</Link>
        <Icon> &gt;&gt;</Icon>
    </div>
)

ForwardLink.propTypes = {
    children: string.isRequired,
    className: string,
}

ForwardLink.defaultProps = {
    className: '',
}

export default ForwardLink
