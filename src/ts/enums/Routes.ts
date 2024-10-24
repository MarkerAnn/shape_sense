// src/ts/enums/Routes.ts
import { ALL_ROUTES, AllRouteType } from '../constants/RoutesConstants'

export function getRouteFromPath(path: string): AllRouteType | undefined {
  const routes = Object.entries(ALL_ROUTES)
  const route = routes.find(([_, value]) => value === path)
  return route ? (route[0] as AllRouteType) : undefined
}
