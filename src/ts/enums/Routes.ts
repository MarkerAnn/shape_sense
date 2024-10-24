import { ALL_ROUTES, AllRouteType } from '../constants/RoutesConstants'

export function getRouteFromPath(path: string): AllRouteType | undefined {
  const routes = Object.entries(ALL_ROUTES)
  // _key because we don't need it (satifies the linter)
  const route = routes.find(([_key, value]) => value === path)
  return route ? (route[0] as AllRouteType) : undefined
}
