import { ViewContainer } from '../utils/ViewContainer'

export abstract class View {
  protected container: HTMLElement

  constructor(containerType: ViewContainer) {
    const container = this.getContainer(containerType)
    if (!container) {
      console.error(`Container of type ${containerType} not found`)
    }
    return container
  }

  abstract render(): void

  mount(): void {
    this.container.style.display = 'block'
  }

  unmount(): void {
    this.container.style.display = 'none'
  }
}
