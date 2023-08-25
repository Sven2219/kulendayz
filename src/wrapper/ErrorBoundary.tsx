import React from 'react'
import ErrorScreen from 'src/modules/error'

interface ErrorBoundaryProps {
  children: JSX.Element
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorScreen />
    }

    return this.props.children
  }
}

export default ErrorBoundary
