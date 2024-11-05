import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { InputFieldName, SelectFieldName } from '../types/FormFieldTypes'
import { UnitSystem } from '../enums/UnitSystem'
import { UserModel } from '../models/UserModel'
HealthCalculatorModel
import { User } from '../types/User'
import { AbstractView } from '../views/AbstractView'
import { IController } from '../interfaces/InterfaceController'
import { IFormValidator } from '../interfaces/InterfaceFormValidator'

/**
 * Abstract class representing a base controller.
 * Implements common functionality for controllers and provides
 * abstract methods to be implemented by subclasses.
 *
 * @abstract
 * @class BaseController
 * @implements {IController}
 */
export abstract class BaseController implements IController {
  protected user: UserModel
  protected calculator: HealthCalculatorModel
  protected abstract view: AbstractView
  protected formValidator: IFormValidator

  /**
   * Creates an instance of BaseController.
   * Initializes the user model, health calculator, and form validator.
   *
   * @param {UserModel} user - The user model containing user data.
   * @param {HealthCalculatorModel} calculator - The health calculator model.
   * @param {IFormValidator} formValidator - The form validator service.
   */
  constructor(
    user: UserModel,
    calculator: HealthCalculatorModel,
    formValidator: IFormValidator
  ) {
    this.user = user
    this.calculator = calculator
    this.formValidator = formValidator
  }

  /**
   * Parses a numeric value from form data, handling both comma and period
   * as decimal separators
   */
  protected parseNumericValue(value: string | null): number {
    if (!value) {
      throw new Error('Missing required value')
    }

    // Replace comma with period for decimal numbers
    const normalizedValue = value.replace(',', '.')
    const parsedValue = parseFloat(normalizedValue)

    if (isNaN(parsedValue)) {
      throw new Error('Invalid numeric value')
    }

    return parsedValue
  }

  /**
   * Initializes the controller by rendering the view into the specified container.
   *
   * @abstract
   * @param {HTMLElement} container - The container element to render the view into.
   */
  abstract init(container: HTMLElement): void

  /**
   * Gets the unit system value (e.g., metric or imperial).
   *
   * @abstract
   * @returns {UnitSystem} The unit system value.
   */
  protected abstract getUnitSystemValue(): UnitSystem

  /**
   * Handles the calculation based on the provided form data.
   *
   * @abstract
   * @param {FormData} formData - The form data to use for the calculation.
   */
  protected abstract handleCalculate(formData: FormData): void

  /**
   * Binds form events to the specified calculate handler.
   *
   * @protected
   * @param {(data: FormData) => void} calculateHandler -
   * The handler to call when the form is submitted.
   */
  protected bindFormEvents(calculateHandler: (data: FormData) => void): void {
    this.view.bindFormEvents((formData: FormData) => {
      calculateHandler(formData)
    })

    this.view.bindResetEvent(() => {
      this.handleReset()
    })
  }

  /**
   * Handles errors by displaying the error message in the view.
   *
   * @protected
   * @param {Error} error - The error to handle.
   */
  protected handleErrors(error: Error): void {
    this.view.showError(error.message)
  }

  /**
   * Resets the form by clearing the user data, form fields, and results.
   *
   * @protected
   */
  protected resetForm(): void {
    this.user.resetData()
    this.view.clearForm()
    this.view.clearResults()
    this.view.hideError()
    this.view.updatePlaceholders()
  }

  /**
   * Fills the form with the provided user data.
   *
   * @protected
   * @param {Partial<User>} data - The user data to fill the form with.
   */
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

  /**
   * Updates the placeholders in the view.
   *
   * @protected
   */
  protected updatePlaceholders(): void {
    this.view.updatePlaceholders()
  }

  /**
   * Handles the form submission event.
   * Prevents the default form submission behavior, extracts the form data,
   * and calls the handleCalculate method with the extracted form data.
   *
   * @protected
   * @param {Event} event - The form submission event.
   */
  protected handleFormSubmit(event: Event): void {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    this.handleCalculate(formData)
  }

  /**
   * Handles the form reset event.
   * Calls the resetForm method to reset the form fields.
   *
   * @protected
   */
  protected handleReset(): void {
    this.resetForm()
  }
}
