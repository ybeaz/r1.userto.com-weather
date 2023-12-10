import React, { ReactElement } from 'react'
import {
  BrowserRouter,
  useRoutes,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import { ROUTES, RouteType } from '../Constants/routes.const'
import { WeatherScreen } from '../ViewLayer/Screens/WeatherScreen/WeatherScreen'
import { Error404 } from '../ViewLayer/Screens/Error404'

const PAGES: Record<string, any> = {
  WeatherScreen,
  Error404,
}

export const RouterScreensConfig: React.FunctionComponent<any> = () => {
  const demoHostName = 'r1.userto.com'
  const demoPath = '/demo-youtube-learn.html'
  const rootPath = location.hostname === demoHostName ? demoPath : ''

  interface IGetRoutes {
    (
      routesArg: {
        path: string
        strict?: boolean
        exact?: boolean
        page: string
        themeDafault: string
      }[]
    ): ReactElement[]
  }

  const routesDict = ROUTES.map((route: RouteType) => {
    const { page, path, themeDafault, children, errorElement } = route
    const Element = PAGES[route.page]
    const elementProps = { rootPath, routeProps: {}, themeDafault }
    const element = <Element {...elementProps} />
    return { element, path, children, errorElement }
  })

  const routes = createBrowserRouter(routesDict)

  return <RouterProvider router={routes} />
}
