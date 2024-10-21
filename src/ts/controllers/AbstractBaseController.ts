import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { UserModel } from '../models/UserModel'
HealthCalculatorModel
import { AbstractView } from '../views/AbstractView'
import { InterfaceController } from '../interfaces/InterfaceController'

export abstract class BaseController implements InterfaceController {
  protected user: UserModel
  protected calculator: HealthCalculatorModel
  protected abstract view: AbstractView

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    this.user = user
    this.calculator = calculator
  }

  abstract init(container: HTMLElement): void

  protected handleErrors(error: Error): void {
    this.view.showError(error.message)
  }

  protected resetForm(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }

  protected fillFormWithUserData(): void {
    const userData = this.user.getData()
    this.view.fillForm(userData)
  }
}
