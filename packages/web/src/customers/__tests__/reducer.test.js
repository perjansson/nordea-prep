import { REQUEST_CUSTOMERS, RECEIVE_CUSTOMERS } from 'customers/actions'

import reducer from 'customers/reducer'

describe('customers/reducer', () => {
    it('should have default state', () => {
        const currentState = undefined
        const action = {}

        const newState = reducer(currentState, action)
        expect(newState).toEqual({
            list: null,
            error: null,
            isFetching: false,
            receivedAt: null,
        })
    })

    it('should have fetching state when requesting customers', () => {
        const currentState = undefined
        const action = { type: REQUEST_CUSTOMERS }

        const newState = reducer(currentState, action)
        expect(newState).toEqual({
            error: null,
            isFetching: true,
            list: null,
            receivedAt: null,
        })
    })

    it('should have customers state when received customers', () => {
        const currentState = {
            error: null,
            isFetching: true,
            list: null,
            receivedAt: null,
        }

        const customersList = [
            {
                id: '0',
                name: 'Mina Watsica',
                phone: '139-120-3133',
                email: 'Gracie_Weber@hotmail.com',
            },
            {
                id: '1',
                name: 'Marlene Ledner',
                phone: '482-056-9445',
                email: 'Brooklyn77@yahoo.com',
            },
        ]

        const action = { type: RECEIVE_CUSTOMERS, payload: customersList }

        const expectedCustomersList = {
            '0': {
                name: 'Mina Watsica',
                phone: '139-120-3133',
                email: 'Gracie_Weber@hotmail.com',
            },
            '1': {
                name: 'Marlene Ledner',
                phone: '482-056-9445',
                email: 'Brooklyn77@yahoo.com',
            },
        }

        const newState = reducer(currentState, action)
        expect(newState).toEqual({
            error: null,
            isFetching: false,
            list: expectedCustomersList,
            receivedAt: null,
        })
    })
})
