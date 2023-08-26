import { Outlet, Navigate } from 'react-router-dom'

import { RoutesNames } from '../const/routes'

const AuthGuard = () => {
  const isLoggedIn = localStorage.getItem('token')

  if (!isLoggedIn) {
    return <Outlet />
  }

  return <Navigate to={RoutesNames.Portal} replace />
}

export default AuthGuard
