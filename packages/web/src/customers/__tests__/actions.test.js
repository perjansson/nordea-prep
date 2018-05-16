import {
    createMockStore,
    mockDataFetch,
    restoreFetchMock,
    mockDate,
    resetDate,
} from '__test__/util'
import {
    fetchCustomers,
    REQUEST_CUSTOMERS,
    RECEIVE_CUSTOMERS,
} from 'customers/actions'

describe('customers/actions', () => {
    beforeEach(() => mockDate('2018-05-15T15:00:00z'))
    afterEach(() => {
        restoreFetchMock()
        resetDate()
    })

    it('fetches and receives customers', async () => {
        const customersResponse = [
            {
                id: 0,
                name: 'Mina Watsica',
                phone: '139-120-3133',
                email: 'Gracie_Weber@hotmail.com',
            },
        ]
        mockDataFetch('customers', customersResponse)

        const store = createMockStore()
        await store.dispatch(fetchCustomers())

        const expectedActions = [
            { type: REQUEST_CUSTOMERS },
            {
                payload: [
                    {
                        email: 'Gracie_Weber@hotmail.com',
                        id: 0,
                        name: 'Mina Watsica',
                        phone: '139-120-3133',
                    },
                ],
                receivedAt: '2018-05-15T15:00:00z',
                type: RECEIVE_CUSTOMERS,
            },
        ]
        const actions = store.getActions()
        expect(actions).toEqual(expectedActions)
    })
})
