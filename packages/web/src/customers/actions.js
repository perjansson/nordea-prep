import api from 'customers/api'

export const REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS'
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS'
export const RECEIVE_CUSTOMERS_ERROR = 'RECEIVE_CUSTOMERS_ERROR'

const requestCustomers = () => ({
    type: REQUEST_CUSTOMERS,
})

const receiveCustomers = customers => ({
    type: RECEIVE_CUSTOMERS,
    payload: customers,
    receivedAt: Date.now(),
})

const receiveCustomersError = error => ({
    type: RECEIVE_CUSTOMERS_ERROR,
    payload: error,
    receivedAt: Date.now(),
})

export const fetchCustomers = () => async dispatch => {
    dispatch(requestCustomers())
    try {
        const customers = await api.fetchCustomers()
        dispatch(receiveCustomers(customers))
    } catch (error) {
        dispatch(receiveCustomersError(error.message))
    }
}
