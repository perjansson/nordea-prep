import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import classNames from 'classnames/bind'
import styled from 'styled-components'

import { colors } from './constants'
import buttonStyles from './Button.scss'

const PrimaryButton = ({ children, ...props }) => (
    <Button bsStyle="primary" {...props}>
        {children}
    </Button>
)

const BigButton = ({ children, ...props }) => (
    <Button bsSize="large" {...props}>
        {children}
    </Button>
)

const ButtonWithOverriddenStyle = props => {
    const style = { color: 'red', backgroundColor: 'pink', fontSize: '32px' }
    return <Button style={style} {...props} />
}

const ButtonWithOverriddenClassName = props => (
    <Button className="my-fancy-button" {...props} />
)

const cx = classNames.bind(buttonStyles)
const ButtonWithCSSModules = ({ className, ...props }) => {
    const buttonClass = cx({ button: true }, className)
    return <Button className={buttonClass} {...props} />
}

const ButtonWithStyledComponent = styled(Button)`
    background: ${colors.light};
    color: ${colors.dark};
    text-transform: uppercase;
    font-family: 'Courier New', monospace;
    font-weight: 700;
    font-size: 32px;
`

export {
    Button,
    PrimaryButton,
    BigButton,
    ButtonWithOverriddenStyle,
    ButtonWithOverriddenClassName,
    ButtonWithCSSModules,
    ButtonWithStyledComponent,
}
