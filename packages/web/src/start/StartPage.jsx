import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Page from '@nordea-prep/components/dist/Page'
import Header from '@nordea-prep/components/dist/Layout/Header'
import FadeInOut from '@nordea-prep/components/dist/Fade/FadeInOut'
import Title from '@nordea-prep/components/dist/Title'
import ForwardLink from '@nordea-prep/components/dist/ForwardLink'
import Footer from '@nordea-prep/components/dist/Layout/Footer'
import Pulse from '@nordea-prep/components/dist/Pulse'
import Rotate from '@nordea-prep/components/dist/Rotate'

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
                <Header>
                    <FadeInOut>
                        <Title
                            onClick={this.handleTitleClick}
                            className="title title__clickable"
                            emoji="😎"
                        >
                            start page
                        </Title>
                    </FadeInOut>
                </Header>

                {this.renderLogo()}

                <Footer>
                    <Link to="/customers">
                        <ForwardLink className="forwardLink">
                            customers list page
                        </ForwardLink>
                    </Link>
                </Footer>
            </Page>
        )
    }
}

export default StartPage
