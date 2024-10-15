import { View } from '../views/AbstractView'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'

export abstract class Controller<T extends View> {
  protected model: HealthCalculatorModel
  protected view: T

  constructor(model: HealthCalculatorModel, view: T) {
    this.model = model
    this.view = view
    this.bindEvents()
  }

  abstract bindEvents(): void

  mount(): void {
    this.view.mount()
  }

  unmount(): void {
    this.view.unmount()
  }
}
