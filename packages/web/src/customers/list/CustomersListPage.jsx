import React from 'react'
import { Link } from 'react-router-dom'
import { instanceOf } from 'prop-types'
import styled, { css } from 'styled-components'

import {
    Page,
    Pulse,
    Title,
    BackLink,
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

const CustomersListPage = ({ customers }) => (
    <Page>
        <Pulse>
            <Title className="title" emoji="🤩">
                Customers List Page
            </Title>
        </Pulse>
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
        <Link to="/">
            <BackLink className="backLink">start page</BackLink>
        </Link>
    </Page>
)

CustomersListPage.propTypes = {
    customers: instanceOf(Array),
}

CustomersListPage.defaultProps = {
    customers: [
        { name: 'Moneypenny', phone: 55, email: 'adasd' },
        { name: 'Bond', phone: 66, email: 'dssada' },
        { name: 'Goldfinger', phone: 77, email: 'wdsgg' },
        { name: 'Moneypenny', phone: 55, email: 'awdadd' },
        { name: 'Bond', phone: 66, email: 'dsdsad a' },
        { name: 'Goldfinger', phone: 77, email: ' asdasgg' },
        { name: 'Moneypenny', phone: 55, email: 'a asdsadd' },
        { name: 'Bond', phone: 66, email: 'dssadefa' },
        { name: 'Goldfinger', phone: 77, email: 'efafasgg' },
        { name: 'Moneypenny', phone: 55, email: 'afa d' },
        { name: 'Bond', phone: 66, email: 'dsaeffa' },
        { name: 'Goldfinger', phone: 77, email: 'aafffsgg' },
        { name: 'Moneypenny', phone: 55, email: 'afaegd' },
        { name: 'Bond', phone: 66, email: 'dsaggeag' },
        { name: 'Goldfinger', phone: 77, email: 'aegagsgg' },
        { name: 'Moneypenny', phone: 55, email: 'eee' },
        { name: 'Bond', phone: 66, email: 'dsaggga' },
        { name: 'Goldfinger', phone: 77, email: 'agegasgg' },
    ],
}

export default CustomersListPage
