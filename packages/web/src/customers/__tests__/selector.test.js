import {
    customersListSelector,
    errorMessageSelector,
    showCustomersSelector,
} from 'customers/selectors'

describe('customers/selectors', () => {
    const list = {
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

    const error = 'something went wrong'

    it('selects customers list', () => {
        const state = { customers: { list } }

        const expectedList = [
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

        const customers = customersListSelector(state)
        expect(customers).toEqual(expectedList)
    })

    it('selects error message', () => {
        const state = { customers: { list, error } }

        const errorMessage = errorMessageSelector(state)
        expect(errorMessage).toEqual(state.customers.error)
    })

    it('selects show customers', () => {
        const state = { customers: { list } }

        const showCustomers = showCustomersSelector(state)
        expect(showCustomers).toBeTruthy()
    })

    it('selects not show customers', () => {
        const state = { customers: { list, error } }

        const showCustomers = showCustomersSelector(state)
        expect(showCustomers).toBeFalsy()
    })
})
