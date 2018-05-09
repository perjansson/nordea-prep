import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Page from './Page'
import Title from '../Title/Title'
import Rotate from '../Rotate/Rotate'

const PageContent = styled.div`
    height: 300px;
    width: 300px;
    background: pink;
    display: flex;
    align-items: center;
    justify-content: center;
`

storiesOf('Page', module)
    .add('with text', () => (
        <Page>
            <PageContent>Hello Page!</PageContent>
        </Page>
    ))
    .add('with Title component', () => (
        <Page>
            <Rotate>
                <Title>My fancy title</Title>
            </Rotate>
        </Page>
    ))
