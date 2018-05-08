import React from 'react';

import ErrorBoundary from 'ErrorBoundary';
import { Splash, Pulse, Title } from '@nordea-prep/components';

const App = () => (
    <ErrorBoundary>
        <Splash>
            <Pulse>
                <Title className="title">nordea-prep-web 😎</Title>
            </Pulse>
        </Splash>
    </ErrorBoundary>
);

export default App;
