import { RouteEnum, ROUTES, getRouteFromPath } from './utils/Routes'

type RouteCallback = () => void

export class Router {
  private routes: Map<RouteEnum, RouteCallback>

  constructor() {
    this.routes = new Map()
    this.handlePopState = this.handlePopState.bind(this)
    window.addEventListener('popstate', this.handlePopState)
  }

  addRoute(route: RouteEnum, callback: RouteCallback): void {
    this.routes.set(route, callback)
  }

  navigateTo(route: RouteEnum): void {
    const path = ROUTES[route]
    history.pushState(null, '', path)
    this.handleRoute(route)
  }

  private handlePopState(): void {
    const path = window.location.pathname
    const route = getRouteFromPath(path)
    if (route !== undefined) {
      this.handleRoute(route)
    } else {
      console.error(`No route found for path: ${path}`)
      //TODO: redirect to error page or homepage
    }
  }

  private handleRoute(route: RouteEnum): void {
    const callback = this.routes.get(route)
    if (callback) {
      callback()
    } else {
      console.error(`No handler found for route: ${RouteEnum[route]}`)
    }
  }

  getCurrentRoute(): RouteEnum | undefined {
    return getRouteFromPath(window.location.pathname)
  }
}

// TODO: Error handeling
