import React from 'react'
import { Link } from 'react-router-dom'

import { Page, Fade, Title, BackLink } from '@nordea-prep/components'

import CustomersListContainer from 'customers/list/CustomersListContainer'

const CustomersListPage = () => (
    <Page>
        <Fade>
            <Title className="title" emoji="🤩">
                customers list page
            </Title>
        </Fade>
        <CustomersListContainer />
        <Link to="/">
            <BackLink className="backLink">start page</BackLink>
        </Link>
    </Page>
)

export default CustomersListPage
