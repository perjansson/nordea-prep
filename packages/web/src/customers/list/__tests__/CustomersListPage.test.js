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
            const customersResponse = [
                {
                    id: '0',
                    name: 'Mina Watsica',
                    phone: '139-120-3133',
                    email: 'Gracie_Weber@hotmail.com',
                },
            ]
            mockDataFetch('customers', customersResponse)

            const { wrapper, store } = renderApp(<CustomersListPage />)

            // No rendered customers list initially
            expect(wrapper.find(CustomersList).exists()).toBeFalsy()

            await flushAllPromises()
            wrapper.update()

            const expectedCustomersListState = {
                '0': {
                    email: 'Gracie_Weber@hotmail.com',
                    name: 'Mina Watsica',
                    phone: '139-120-3133',
                },
            }

            // Customers list renderer after data fetch is complete
            const customersList = wrapper.find(CustomersList)
            expect(customersList.exists()).toBeTruthy()
            expect(customersList.prop('customers')).toEqual(customersResponse)
            expect(store.getState().customers.list).toEqual(
                expectedCustomersListState,
            )
        })

        it('displays empty page while loading customers and full list when loaded', () => {
            const customersResponse = [
                {
                    id: '1',
                    name: 'Marlene Ledner',
                    phone: '482-056-9445',
                    email: 'Brooklyn77@yahoo.com',
                },
            ]
            mockDataFetch('customers', customersResponse)

            const { wrapper } = renderApp(<CustomersListPage />)
            expect(wrapper).toMatchSnapshot()

            return flushAllPromises().then(() => {
                wrapper.update()
                expect(wrapper).toMatchSnapshot()
            })
        })

        it('fetches and shows error message on fetch error', async () => {
            const errorMessage = 'specific error message'
            mockDataFetchError('customers', errorMessage)

            const { wrapper } = renderApp(<CustomersListPage />)
            await flushAllPromises()
            wrapper.update()

            const error = wrapper.find(Error)
            expect(error.exists()).toBeTruthy()
            expect(error.props().children).toContain(errorMessage)
        })
    })
})
