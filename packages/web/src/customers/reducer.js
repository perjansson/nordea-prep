import {
    REQUEST_CUSTOMERS,
    RECEIVE_CUSTOMERS,
    RECEIVE_CUSTOMERS_ERROR,
} from 'customers/actions'

const defaultState = {
    list: null,
    error: null,
    isFetching: false,
    receivedAt: null,
}

const customers = (state = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case REQUEST_CUSTOMERS:
            return {
                ...state,
                isFetching: true,
            }
        case RECEIVE_CUSTOMERS:
            return {
                ...state,
                list: payload,
                isFetching: false,
            }
        case RECEIVE_CUSTOMERS_ERROR:
            return {
                ...state,
                error: payload,
                isFetching: false,
            }
        default:
            return state
    }
}

export default customers
