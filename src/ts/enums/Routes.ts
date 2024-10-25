import { ALL_ROUTES, AllRouteType } from '../constants/RoutesConstants'

/**
 * Gets the route type from the given path.
 *
 * @param {string} path - The path to get the route type for.
 * @returns {AllRouteType | undefined} The route type corresponding to the path,
 * or undefined if no match is found.
 */
export function getRouteFromPath(path: string): AllRouteType | undefined {
  const routes = Object.entries(ALL_ROUTES)
  // _key because we don't need it (satisfies the linter)
  const route = routes.find(([_key, value]) => value === path)
  return route ? (route[0] as AllRouteType) : undefined
}
// 5 rader
