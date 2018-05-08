import React from 'react'
import { Link } from 'react-router-dom'

import { Page, Pulse, Title } from '@nordea-prep/components'

const StartPage = () => (
    <Page>
        <Pulse>
            <Link to="/customers">
                <Title className="title title__clickable" emoji="😎">
                    Nordea Start Page
                </Title>
            </Link>
        </Pulse>
    </Page>
)

export default StartPage
