// @flow
import * as React from 'react'

type Props = {
    children: React.Node,
}

type State = {
    hasError: boolean,
    error: ?string,
    info: ?string,
}

class ErrorBoundary extends React.Component<Props, State> {
    state = {
        hasError: false,
        error: null,
        info: null,
    }

    componentDidCatch(error: string, info: string) {
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
                    Sorry Something went wrong (Error: {error} and info: {info})
                </p>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
