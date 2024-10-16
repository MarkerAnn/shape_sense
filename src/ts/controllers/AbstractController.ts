import { AbstractView } from '../views/AbstractView'

export abstract class AbstractController {
  protected view: AbstractView

  constructor(view: AbstractView) {
    this.view = view
  }

  // Common controller logic
  init(app: HTMLElement): void {
    this.view.render(app)
  }

  abstract calculateBMI(
    weight: number,
    height: number,
    unitSystem: string
  ): void
}
