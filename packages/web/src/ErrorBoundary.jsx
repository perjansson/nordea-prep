import React, { Component } from 'react'
import { element } from 'prop-types'

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            error,
            info,
        })
    }

    render() {
        const { hasError, error, info } = this.state
        if (hasError) {
            return (
                <p>
                    Sorry Something went wrong {error}, {info}
                </p>
            )
        }
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: element.isRequired,
}

export default ErrorBoundary
