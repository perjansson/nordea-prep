import React from 'react'
import { Link } from 'react-router-dom'

import { Page, Pulse, Title, BackLink } from '@nordea-prep/components'

const CustomersListPage = () => (
    <Page>
        <Pulse>
            <Title className="title" emoji="🤩">
                Customers List Page
            </Title>
        </Pulse>
        <Link to="/">
            <BackLink className="backLink">to start page</BackLink>
        </Link>
    </Page>
)

export default CustomersListPage
