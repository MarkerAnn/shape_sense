import { InterfaceController } from '../interfaces/InterfaceController'
import { BodyCompositionView } from '../views/BodyCompositionView'
import { UserModel } from '../models/UserModel'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'

export class BodyCompositionController implements InterfaceController {
  private view: BodyCompositionView
  private user: UserModel
  private calculator: HealthCalculatorModel

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    this.user = user
    this.calculator = calculator
    this.view = new BodyCompositionView()
    console.log(this.user.getData())
    console.log(this.calculator.getBmi())
  }

  init(container: HTMLElement): void {
    this.view.render(container)
  }
}
