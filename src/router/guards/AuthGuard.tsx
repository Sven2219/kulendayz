import { Outlet, Navigate } from 'react-router-dom'
import { RoutesNames } from '../routes'

const AuthGuard = () => {
  const isLoggedIn = false

  if (!isLoggedIn) {
    return <Outlet />
  }

  return <Navigate to={RoutesNames.Portal} replace />
}

export default AuthGuard
