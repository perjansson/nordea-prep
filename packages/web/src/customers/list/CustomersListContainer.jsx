import React, { Component } from 'react'
import { connect } from 'react-redux'
import { array, func, string } from 'prop-types'

import { fetchCustomers } from 'customers/actions'

import CustomersList from 'customers/list/components/CustomersList'

class CustomersListContainer extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchCustomers())
    }

    render() {
        const { customers, error } = this.props
        return !!customers && !error ? (
            <CustomersList customers={customers} />
        ) : (
            <div>{error}</div>
        )
    }
}

const mapStateToProps = state => {
    const { list, error } = state.customers
    return {
        customers: list,
        error,
    }
}

CustomersListContainer.propTypes = {
    customers: array,
    error: string,
    dispatch: func.isRequired,
}

CustomersListContainer.deafultProps = {
    customers: null,
}

export default connect(mapStateToProps)(CustomersListContainer)
