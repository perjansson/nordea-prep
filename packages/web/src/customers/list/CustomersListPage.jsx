import React from 'react'
import { Link } from 'react-router-dom'

import {
    Page,
    Header,
    FadeInOut,
    Title,
    BackLink,
    Footer,
} from '@nordea-prep/components'

import CustomersListContainer from 'customers/list/CustomersListContainer'

const CustomersListPage = () => (
    <Page>
        <Header>
            <FadeInOut>
                <Title className="title" emoji="🤩">
                    customers list page
                </Title>
            </FadeInOut>
        </Header>
        <CustomersListContainer />
        <Footer>
            <Link to="/">
                <BackLink className="backLink">start page</BackLink>
            </Link>
        </Footer>
    </Page>
)

export default CustomersListPage
