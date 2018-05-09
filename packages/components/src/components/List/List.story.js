import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { css } from 'styled-components'

import List, { HeaderRow, Header, Items, Value } from './List'

const fontsMixin = css`
    font-family: monospace;
    -webkit-text-stroke: 1px black;
    text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
        -1px 1px 0 #000, 1px 1px 0 #000;
    letter-spacing: 4px;
    line-height: 60px;
`

const StyledHeaderRow = styled(HeaderRow)`
    color: lightblue;
    ${fontsMixin};
`
const StyledItems = styled(Items)`
    color: pink;
    ${fontsMixin};
`

const items = [
    { name: 'Moneypenny', age: 55 },
    { name: 'Bond', age: 66 },
    { name: 'Goldfinger', age: 77 },
]

storiesOf('List', module).add('with items', () => (
    <List
        items={items}
        renderHeaderRow={() => (
            <StyledHeaderRow>
                <Header>Name</Header>
                <Header>Age</Header>
            </StyledHeaderRow>
        )}
        renderRow={({ name, age }) => (
            <StyledItems key={name}>
                <Value>{name}</Value>
                <Value>{age}</Value>
            </StyledItems>
        )}
    />
))
