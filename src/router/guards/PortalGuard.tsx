import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAtom } from 'jotai'

import { RoutesNames } from '../const/routes'
import { userAtom } from 'src/atoms/user'
import { axiosInstance } from 'src/service'
import localStorageKeys from 'src/const/localStorage'

const PortalGuard = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [user, setUser] = useAtom(userAtom)

  const validateAuthToken = async () => {
    try {
      const result = await axiosInstance.get('user/1/me')
      setUser({ ...result.data })
      setIsLoading(false)
    } catch (error) {
      localStorage.removeItem(localStorageKeys.TOKEN)
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    validateAuthToken()
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
