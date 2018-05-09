import React from 'react'
import { element, string, any, oneOfType } from 'prop-types'
import styled from 'styled-components'

const Header = styled.h1`
    font-size: 84px;
    margin: 20px 0;
`

const Title = ({ children, emoji, className, style }) => (
    <Header className={className} style={style}>
        {children}
        {emoji && (
            <span role="img" aria-label="smiley-with-star-eyes">
                {' '}
                {emoji}
            </span>
        )}
    </Header>
)

Title.propTypes = {
    children: oneOfType([element, string]).isRequired,
    emoji: string,
    className: string,
    style: any,
}

Title.defaultProps = {
    emoji: '',
    className: '',
    style: {},
}

export default Title
