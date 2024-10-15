import { RouteEnum, ROUTES, getRouteFromPath } from './utils/Routes'

export class NavigationComponent {
  private navElement: HTMLElement
  private onNavigate: (route: RouteEnum) => void

  constructor(onNavigate: (route: RouteEnum) => void) {
    const navElement = document.querySelector('header nav') as HTMLElement
    if (!navElement) {
      throw new Error('Navigation element not found in header')
    }
    this.navElement = navElement
    this.onNavigate = onNavigate
    this.bindEvents()
  }

  private bindEvents(): void {
    this.navElement.addEventListener('click', this.handleClick.bind(this))
  }

  private handleClick(event: Event): void {
    event.preventDefault()
    const target = event.target as HTMLElement
    if (target.tagName === 'A') {
      const href = target.getAttribute('href')
      if (href) {
        const route = getRouteFromPath(href)
        if (route !== undefined) {
          this.onNavigate(route)
        } else {
          console.error(`No route found for path: ${href}`)
        }
      }
    }
  }

  updateActiveLink(currentRoute: RouteEnum): void {
    const links = this.navElement.querySelectorAll('a')
    links.forEach((link) => {
      if (link.getAttribute('href') === ROUTES[currentRoute]) {
        link.classList.add('active')
      } else {
        link.classList.remove('active')
      }
    })
  }
}
