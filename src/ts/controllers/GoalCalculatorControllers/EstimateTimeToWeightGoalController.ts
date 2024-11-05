/* eslint-disable max-len */
import { EstimateTimeToWeightGoalView } from '../../views/GoalCalculatorViews/EstimateTimeToWeightGoalView'
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { IEstimateTimeToWeightGoalFormData } from '../../interfaces/InterfaceForms'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
import { ActivityLevel } from '../../enums/ActivityLevel'
import { IFormattedTimeToWeightGoalResults } from '../../interfaces/FormattedResults'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'
/* eslint-enable max-len */

/**
 * Controller for handling the estimation of time to reach a weight goal.
 * Extends the BaseController to provide specific functionality for this estimation.
 *
 * @class
 * @extends {BaseController}
 */
export class EstimateTimeToWeightGoalController extends BaseController {
  protected view: EstimateTimeToWeightGoalView

  /**
   * Creates an instance of EstimateTimeToWeightGoalController.
   * Initializes the view and binds the unit system value method.
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
    super(user, calculator, formValidator)
    this.view = new EstimateTimeToWeightGoalView(
      this.getUnitSystemValue.bind(this)
    )
  }

  /**
   * @inheritdoc
   */
  init(container: HTMLElement): void {
    this.view.render(container)
    this.fillFormData(this.user.getData())
    this.bindFormEvents(this.handleCalculate.bind(this))
  }

  /**
   * @inheritdoc
   */
  protected getUnitSystemValue(): UnitSystem {
    const unitSelect = document.querySelector(
      'select#unitSystem'
    ) as HTMLSelectElement
    if (unitSelect) {
      return unitSelect.value as UnitSystem
    }
    return UnitSystem.METRIC
  }

  /**
   * @inheritdoc
   */
  protected handleCalculate(formData: FormData): void {
    try {
      const data = this.parseFormData(formData)
      this.formValidator.validateITotalDailyEnergyExpenditureFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): IEstimateTimeToWeightGoalFormData {
    const data: IEstimateTimeToWeightGoalFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: this.parseNumericValue(formData.get('weight') as string),
      height: this.parseNumericValue(formData.get('height') as string),
      age: this.parseNumericValue(formData.get('age') as string),
      activityLevel: formData.get('activityLevel') as ActivityLevel,
      weightGoal: this.parseNumericValue(formData.get('weightGoal') as string),
      dailyCalories: this.parseNumericValue(
        formData.get('dailyCalories') as string
      ),
    }
    return data
  }

  private updateView(): void {
    const weeksToWeightGoal = this.calculator.getEstimateTimeToWeightGoal()

    const formattedResults: IFormattedTimeToWeightGoalResults = {
      weeksToWeightGoal: this.formatValue(weeksToWeightGoal),
    }
    this.view.updateResults(formattedResults)
  }

  private formatValue(value: number): string {
    return `${value.toFixed(1)} weeks`
  }
}
