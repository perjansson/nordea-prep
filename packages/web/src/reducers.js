import { combineReducers } from 'redux'

import customers from 'customers/reducer'

const rootReducer = combineReducers({
    customers,
})

export default rootReducer
