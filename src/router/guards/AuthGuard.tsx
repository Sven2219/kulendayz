import { Outlet, Navigate } from 'react-router-dom'

import { RoutesNames } from '../const/routes'
import localStorageKeys from 'src/const/localStorage'

const AuthGuard = () => {
  const isLoggedIn = localStorage.getItem(localStorageKeys.TOKEN)

  if (!isLoggedIn) {
    return <Outlet />
  }

  return <Navigate to={RoutesNames.Portal} replace />
}

export default AuthGuard
