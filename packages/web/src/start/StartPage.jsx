import React from 'react'
import { Link } from 'react-router-dom'

import {
    Page,
    Fade,
    Pulse,
    Rotate,
    Title,
    ForwardLink,
} from '@nordea-prep/components'

import NordeaLogo from './nordeaLogo.svg'

const StartPage = () => (
    <Page>
        <Fade>
            <Title className="title title__clickable" emoji="😎">
                start page
            </Title>
        </Fade>
        <Rotate className="logo">
            <Pulse>
                <NordeaLogo fill="lightpink" width={250} height={250} />
            </Pulse>
        </Rotate>
        <Link to="/customers">
            <ForwardLink className="forwardLink">
                customers list page
            </ForwardLink>
        </Link>
    </Page>
)

export default StartPage
