import React from 'react'

import { Splash, Rotate, Title } from '@nordea-prep/components'

import ErrorBoundary from 'ErrorBoundary'

const App = () => (
    <ErrorBoundary>
        <Splash>
            <Rotate>
                <Title onClick={() => console.log('click')} className="title">
                    nordea-prep-web{' '}
                    <span role="img" aria-label="smiley-with-sun-glasses">
                        😎
                    </span>
                </Title>
            </Rotate>
        </Splash>
    </ErrorBoundary>
)

export default App
