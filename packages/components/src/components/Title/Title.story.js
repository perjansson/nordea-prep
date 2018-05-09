import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Title from './Title'

const Wrapper = styled.div`
    & > * {
        color: pink;
    }
`

storiesOf('Title', module)
    .addDecorator(story => <Wrapper>{story()}</Wrapper>)
    .add('with text', () => <Title>My Fancy Title!</Title>)
    .add('with emoji', () => <Title emoji="👍">My Fancy Title!</Title>)
