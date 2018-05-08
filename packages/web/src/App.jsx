import React from 'react';

import ErrorBoundary from 'ErrorBoundary';
import { Splash, Rotate, Title } from '@nordea-prep/components';

const App = () => (
    <ErrorBoundary>
        <Splash>
            <Rotate>
                <Title className="title">nordea-prep-web 😎</Title>
            </Rotate>
        </Splash>
    </ErrorBoundary>
);

export default App;
