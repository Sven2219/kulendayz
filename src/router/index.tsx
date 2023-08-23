import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { RoutesNames } from './routes'
import PortalGuard from './guards/PortalGuard'
import AuthGuard from './guards/AuthGuard'
import Register from 'src/modules/auth/register'
import Portal from 'src/modules/portal'
import Login from 'src/modules/auth/login'

const Router = () => {
  return (
    <React.Suspense fallback={<div />}>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route path={RoutesNames.Login} element={<Login />} />
          <Route path={RoutesNames.Register} element={<Register />} />
        </Route>

        <Route element={<PortalGuard />}>
          <Route path={RoutesNames.Portal} element={<Portal />} />
        </Route>

        <Route path="*" element={<Navigate to={RoutesNames.Login} replace />} />
      </Routes>
    </React.Suspense>
  )
}

export default Router
