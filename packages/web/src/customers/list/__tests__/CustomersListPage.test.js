import React from 'react'

import {
    renderApp,
    mockDataFetch,
    mockDataFetchError,
    restoreFetchMock,
    flushAllPromises,
} from '__test__/util'

import CustomersListPage from 'customers/list/CustomersListPage'
import CustomersList from 'customers/list/components/CustomersList'
import Error from 'common/Error'

describe('<CustomersListPage />', () => {
    describe('integration test', () => {
        afterEach(restoreFetchMock)

        it('fetches and shows customers on load', async () => {
            mockDataFetch('customers', [
                {
                    id: 0,
                    name: 'Mina Watsica',
                    phone: '139-120-3133',
                    email: 'Gracie_Weber@hotmail.com',
                },
            ])

            const { wrapper } = renderApp(<CustomersListPage />)

            // No rendered customers list initially
            expect(wrapper.find(CustomersList).exists()).toBeFalsy()

            await flushAllPromises()
            wrapper.update()

            // Customers list renderer after data fetch is complete
            expect(wrapper.find(CustomersList).exists()).toBeTruthy()
        })

        it('fetches and shows error message on fetch error', async () => {
            const errorMessage = 'specific error message'
            mockDataFetchError('customers', errorMessage)

            const { wrapper } = renderApp(<CustomersListPage />)
            await flushAllPromises()
            wrapper.update()

            const error = wrapper.find(Error)
            expect(error.exists()).toBeTruthy()
            expect(error.props().message).toContain(errorMessage)
        })
    })
})
