import React from 'react'
import { Provider } from 'react-redux'

import configureStore from 'configureStore'
import ErrorBoundary from 'ErrorBoundary'
import Routes from 'Routes'

const store = configureStore()

const App = () => (
    <ErrorBoundary>
        <Provider store={store}>
            <Routes />
        </Provider>
    </ErrorBoundary>
)

export default App
