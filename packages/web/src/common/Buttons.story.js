import React from 'react'
import { storiesOf } from '@storybook/react'

import {
    Button,
    PrimaryButton,
    BigButton,
    ButtonWithOverriddenStyle,
    ButtonWithOverriddenClassName,
    ButtonWithCSSModules,
    ButtonWithStyledComponent,
} from './Buttons'

storiesOf('Buttons/component', module)
    .add('default', () => <Button>My Fancy Button!</Button>)
    .add('primary', () => <PrimaryButton>My Fancy Button!</PrimaryButton>)
    .add('big', () => <BigButton>My Fancy Button!</BigButton>)

storiesOf('Buttons/customizing', module)
    .add('small, primary and disabled', () => (
        <Button bsSize="small" bsStyle="primary" disabled>
            My Fancy Button!
        </Button>
    ))
    .add('overridden inline css', () => (
        <ButtonWithOverriddenStyle>My Fancy Button!</ButtonWithOverriddenStyle>
    ))
    .add('overridden css class name', () => (
        <ButtonWithOverriddenClassName>
            My Fancy Button!
        </ButtonWithOverriddenClassName>
    ))

storiesOf('Buttons/css tools', module)
    .add('css modules: default', () => (
        <ButtonWithCSSModules>My Fancy Button!</ButtonWithCSSModules>
    ))
    .add('css modules: overridden inline css', () => (
        <ButtonWithCSSModules style={{ padding: '40px' }}>
            My Fancy Button!
        </ButtonWithCSSModules>
    ))
    .add('styled components: default', () => (
        <ButtonWithStyledComponent>My Fancy Button!</ButtonWithStyledComponent>
    ))
    .add('styled components: overridden inline css', () => (
        <ButtonWithStyledComponent style={{ padding: '40px' }}>
            My Fancy Button!
        </ButtonWithStyledComponent>
    ))
