import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { InputFieldName, SelectFieldName } from '../types/FormFieldTypes'
import { UnitSystem } from '../enums/UnitSystem'
import { UserModel } from '../models/UserModel'
HealthCalculatorModel
import { User } from '../types/User'
import { AbstractView } from '../views/AbstractView'
import { InterfaceController } from '../interfaces/InterfaceController'
import { IFormValidator } from '../interfaces/InterfaceFormValidator'

export abstract class BaseController implements InterfaceController {
  protected user: UserModel
  protected calculator: HealthCalculatorModel
  protected abstract view: AbstractView
  protected formValidator: IFormValidator

  constructor(
    user: UserModel,
    calculator: HealthCalculatorModel,
    formValidator: IFormValidator
  ) {
    this.user = user
    this.calculator = calculator
    this.formValidator = formValidator
  }

  abstract init(container: HTMLElement): void
  protected abstract getUnitSystemValue(): UnitSystem
  protected abstract handleCalculate(formData: FormData): void

  protected bindFormEvents(calculateHandler: (data: FormData) => void): void {
    this.view.bindFormEvents(calculateHandler)
  }

  protected handleErrors(error: Error): void {
    this.view.showError(error.message)
  }

  protected resetForm(): void {
    this.user.resetData()
    this.view.clearForm()
    this.view.hideError()
  }

  protected fillFormData(data: Partial<User>): void {
    if (data.unitSystem) {
      this.view.setSelectValue('unitSystem', data.unitSystem)
    }

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'number') {
        this.view.setInputValue(key as InputFieldName, value)
      } else if (typeof value === 'string') {
        this.view.setSelectValue(key as SelectFieldName, value)
      }
    })

    this.updatePlaceholders()
  }

  protected updatePlaceholders(): void {
    this.view.updatePlaceholders()
  }

  protected handleFormSubmit(event: Event): void {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    this.handleCalculate(formData)
  }

  protected handleReset(): void {
    this.user.resetData()
    this.view.clearForm()
    this.view.clearResults()
    this.view.hideError()
    this.updatePlaceholders()
  }
}
