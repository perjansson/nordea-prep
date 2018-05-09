import React from 'react'
import { Link } from 'react-router-dom'

import { Page, Pulse, Title, ForwardLink } from '@nordea-prep/components'

const StartPage = () => (
    <Page>
        <Pulse>
            <Title className="title title__clickable" emoji="😎">
                Nordea Start Page
            </Title>
        </Pulse>
        <Link to="/customers">
            <ForwardLink className="backLink">customers list page</ForwardLink>
        </Link>
    </Page>
)

export default StartPage
