import React from 'react'
import { Link } from 'react-router-dom'

import Page from '@nordea-prep/components/dist/Page'
import Header from '@nordea-prep/components/dist/Layout/Header'
import FadeInOut from '@nordea-prep/components/dist/Fade/FadeInOut'
import Title from '@nordea-prep/components/dist/Title'
import BackLink from '@nordea-prep/components/dist/BackLink'
import Footer from '@nordea-prep/components/dist/Layout/Footer'

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
