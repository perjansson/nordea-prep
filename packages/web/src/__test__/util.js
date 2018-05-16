import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'configureStore'
import fetchMock from 'fetch-mock'

import config from 'config'

export const renderApp = component => {
    const store = configureStore()
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter>{component}</MemoryRouter>
        </Provider>,
    )
    return { wrapper, store }
}

export const mockDataFetch = (resourcePath, dataResponse) =>
    fetchMock.getOnce(`${config.apiBaseUrl}/${resourcePath}`, {
        body: { data: dataResponse },
    })

export const mockDataFetchError = (resourcePath, errorMessage) =>
    fetchMock.getOnce(`${config.apiBaseUrl}/${resourcePath}`, {
        status: 500,
        body: { errorMessage },
    })

export const restoreFetchMock = () => fetchMock.restore()

export const flushAllPromises = () =>
    new Promise(resolve => setImmediate(resolve))
