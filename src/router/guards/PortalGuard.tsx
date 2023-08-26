import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAtom } from 'jotai'

import { RoutesNames } from '../const/routes'
import localStorageKeys from 'src/const/localStorage'
import { userAtom } from 'src/atoms/user'

const PortalGuard = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [user, setUser] = useAtom(userAtom)

  React.useEffect(() => {
    const token = localStorage.getItem(localStorageKeys.TOKEN)
    if (token) {
      setUser({
        id: '0',
        email: 'sven.suk5@gmail.com',
        firstName: 'Sven',
        lastName: 'Suk',
      })
    }
    setIsLoading(false)
  }, [])

  if (!isLoading) {
    if (user) {
      return <Outlet />
    }
    return <Navigate to={RoutesNames.Login} replace />
  }
  return <></>
}

export default PortalGuard
