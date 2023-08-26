import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAtom } from 'jotai'
import jwtDecode from 'jwt-decode'

import { RoutesNames } from '../const/routes'
import localStorageKeys from 'src/const/localStorage'
import { userAtom } from 'src/atoms/user'
import { JWTToken } from 'src/types/jwtToken'

const PortalGuard = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [user, setUser] = useAtom(userAtom)

  React.useEffect(() => {
    try {
      const token = localStorage.getItem(localStorageKeys.TOKEN)
      if (token) {
        const { email, firstName, lastName, id } = jwtDecode<JWTToken>(token)
        setUser({ email, firstName, lastName, id })
      }
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
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
