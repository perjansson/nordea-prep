import { createSelector } from 'reselect'

const customersSelector = state => state.customers

export const customersListSelector = createSelector(
    customersSelector,
    customersState => {
        const { list } = customersState
        return list
            ? Object.entries(list).map(([id, customer]) => ({
                  id,
                  ...customer,
              }))
            : []
    },
)

export const errorMessageSelector = createSelector(
    customersSelector,
    customersState => customersState.error,
)

export const showCustomersSelector = createSelector(
    [customersListSelector, errorMessageSelector],
    (customersList, errorMessage) => customersList.length > 0 && !errorMessage,
)
