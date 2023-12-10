export type RouteType = {
  page: string
  path: string
  children: any[]
  errorElement: string
  themeDafault: string
  strict?: boolean
  exact?: boolean
}

export const ROUTES: RouteType[] = [
  {
    page: 'WeatherScreen',
    path: `/`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Light',
    exact: true,
  },
  {
    page: 'WeatherScreen',
    path: `/weather`,
    children: [],
    errorElement: 'Error404',
    themeDafault: 'Light',
    exact: true,
  },
]
