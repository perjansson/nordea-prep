import React from 'react'
import { array, func } from 'prop-types'
import styled, { css } from 'styled-components'

const ListWrapper = styled.div`
    width: 100%;
`

const List = ({ items, renderHeaderRow, renderRow, ...rest }) => (
    <ListWrapper {...rest}>
        {renderHeaderRow()}
        {items.map(renderRow)}
    </ListWrapper>
)

List.propTypes = {
    items: array.isRequired,
    renderHeaderRow: func.isRequired,
    renderRow: func.isRequired,
}

const centeredMixin = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeaderRow = styled.div`
    display: grid;
`

const Header = styled.div`
    font-weight: 700;
    font-size: 42px;
    ${centeredMixin};
`

const Items = styled.div`
    display: grid;
    line-height: 40px;
`

const Value = styled.div`
    font-weight: 300;
    font-size: 28px;
    ${centeredMixin};
`

export default List
export { HeaderRow, Header, Items, Value }
