import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, string, bool } from 'prop-types'

import { fetchCustomers } from 'customers/actions'

import CustomersList from 'customers/list/components/CustomersList'
import Error from 'common/Error'

class CustomersListContainer extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCustomers())
    }

    render() {
        const { customers, error, showCustomers } = this.props

        return showCustomers ? (
            <CustomersList customers={customers} />
        ) : (
            <Error message={error} />
        )
    }
}

const mapStateToProps = state => {
    const { list: customers, error } = state.customers
    return {
        customers,
        error,
        showCustomers: !!customers && !error,
    }
}

CustomersListContainer.propTypes = {
    customers: array,
    error: string,
    showCustomers: bool.isRequired,
    dispatch: func.isRequired,
}

CustomersListContainer.deafultProps = {
    customers: null,
    error: null,
}

export default connect(mapStateToProps)(CustomersListContainer)
