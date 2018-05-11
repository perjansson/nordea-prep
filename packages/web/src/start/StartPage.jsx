import React, { Component } from 'react'
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

class StartPage extends Component {
    state = {
        isRotating: false,
    }

    handleTitleClick = () => {
        this.setState(state => ({ isRotating: !state.isRotating }))
    }

    renderLogo = () => {
        const logo = (
            <Pulse>
                <NordeaLogo fill="lightpink" width={250} height={250} />
            </Pulse>
        )

        return this.state.isRotating ? (
            <Rotate className="logo">{logo}</Rotate>
        ) : (
            logo
        )
    }

    render() {
        return (
            <Page>
                <Fade>
                    <Title
                        onClick={this.handleTitleClick}
                        className="title title__clickable"
                        emoji="😎"
                    >
                        start page
                    </Title>
                </Fade>

                {this.renderLogo()}

                <Link to="/customers">
                    <ForwardLink className="forwardLink">
                        customers list page
                    </ForwardLink>
                </Link>
            </Page>
        )
    }
}

export default StartPage
