// @flow
import * as React from 'react'

type Props = {
    children: React.Node,
}

type State = {
    hasError: boolean,
}

class ErrorBoundary extends React.Component<Props, State> {
    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    }

    render() {
        const { hasError } = this.state
        if (hasError) {
            return <p className="error">Sorry Something went wrong</p>
        }
        return this.props.children
    }
}

export default ErrorBoundary
