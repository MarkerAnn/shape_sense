// src/ts/enums/Routes.ts
import { CALCULATOR_ROUTES } from '../constants/FormConstants'

export type RouteType = keyof typeof CALCULATOR_ROUTES
export type RoutePath = (typeof CALCULATOR_ROUTES)[RouteType]

export const ROUTES = {
  HOME: '/',
  ...CALCULATOR_ROUTES,
} as const

export function getRouteFromPath(path: string): RouteType | undefined {
  const routes = Object.entries(ROUTES)
  const route = routes.find(([_, value]) => value === path)
  return route ? (route[0] as RouteType) : undefined
}
