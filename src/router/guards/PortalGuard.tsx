import { Navigate, Outlet } from 'react-router-dom'

import { RoutesNames } from '../const/routes'
import localStorageKeys from 'src/const/localStorage'

const PortalGuard = () => {
  const isLoggedIn = localStorage.getItem(localStorageKeys.TOKEN)

  if (isLoggedIn) {
    return <Outlet />
  }
  return <Navigate to={RoutesNames.Login} replace />
}

export default PortalGuard
