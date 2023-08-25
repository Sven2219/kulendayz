import { Navigate, Outlet } from 'react-router-dom'
import { RoutesNames } from '../const/routes'

const PortalGuard = () => {
  const isLoggedIn = false

  if (isLoggedIn) {
    return <Outlet />
  }
  return <Navigate to={RoutesNames.Login} replace />
}

export default PortalGuard
