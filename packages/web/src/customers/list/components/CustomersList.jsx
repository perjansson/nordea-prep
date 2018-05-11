import React from 'react'
import { instanceOf } from 'prop-types'
import styled, { css } from 'styled-components'

import {
    List,
    ListHeaderRow,
    ListHeader,
    ListItems,
    ListValue,
} from '@nordea-prep/components'

const gridTemplateColumnMixin = css`
    grid-template-columns: 1fr 1fr 1fr;
`

const fontMixin = css`
    color: white;
    text-shadow: 0 0 10px black, 0 0 5px darkblue;
    line-height: 56px;
`

const CustomerListHeaderRow = styled(ListHeaderRow)`
    ${gridTemplateColumnMixin};
    ${fontMixin};
    border-bottom: 2px dashed white;
`

const CustomerListItemRow = styled(ListItems)`
    ${gridTemplateColumnMixin};
    ${fontMixin};
`

const Wrapper = styled.div`
    height: 480px;
    width: 100vw;
    padding: 0 20px;
    overflow-y: scroll;
`

const CustomersList = ({ customers }) => (
    <Wrapper>
        <List
            items={customers}
            renderHeaderRow={() => (
                <CustomerListHeaderRow>
                    <ListHeader>Name</ListHeader>
                    <ListHeader>Phone</ListHeader>
                    <ListHeader>Email</ListHeader>
                </CustomerListHeaderRow>
            )}
            renderRow={({ name, phone, email }) => (
                <CustomerListItemRow key={`${name}_${phone}_${email}`}>
                    <ListValue>{name}</ListValue>
                    <ListValue>{phone}</ListValue>
                    <ListValue>{email}</ListValue>
                </CustomerListItemRow>
            )}
        />
    </Wrapper>
)

CustomersList.propTypes = {
    customers: instanceOf(Array),
}

CustomersList.defaultProps = {
    customers: [],
}

export default CustomersList
