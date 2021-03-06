import React from 'react'
import { element, string, any, oneOfType, func } from 'prop-types'
import styled from 'styled-components'

const Header = styled.h1`
    font-size: 84px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
        font-size: 0.7em;
    }
`

const Title = ({ children, emoji, className, style, onClick }) => (
    <Header onClick={onClick} className={className} style={style}>
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
    onClick: func,
}

Title.defaultProps = {
    emoji: '',
    className: '',
    style: {},
    onClick: () => {},
}

export default Title
