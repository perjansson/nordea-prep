import React from 'react'
import { array, func } from 'prop-types'
import styled, { css } from 'styled-components'

const ListWrapper = styled.div`
    width: 100%;
`
ListWrapper.displayName = 'ListWrapper'

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
HeaderRow.displayName = 'HeaderRow'

const Header = styled.div`
    font-weight: 700;
    font-size: 42px;
    ${centeredMixin};
`
Header.displayName = 'Header'

const Items = styled.div`
    display: grid;
    line-height: 40px;
`
Items.displayName = 'Items'

const Value = styled.div`
    font-weight: 300;
    font-size: 28px;
    ${centeredMixin};
`
Value.displayName = 'Value'

export default List
export { HeaderRow, Header, Items, Value }
