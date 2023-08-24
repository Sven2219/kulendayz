import { BrowserRouter } from 'react-router-dom'

import Router from './router'
import ErrorBoundary from './wrapper/ErrorBoundary'
import ErrorScreen from './modules/error'

const App = () => {
  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
