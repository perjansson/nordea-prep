import React from 'react'
import { element, string, oneOfType } from 'prop-types'
import styled from 'styled-components'

const Header = styled.h1`
    font-size: 84px;
    color: #fff;
    margin: 30px 0;
`

const Title = ({ children, emoji, className }) => (
    <Header className={className}>
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
}

Title.defaultProps = {
    emoji: '',
    className: '',
}

export default Title
