// eslint-disable-next-line max-len
import { EstimateTimeToWeightGoalView } from '../../views/GoalCalculatorViews/EstimateTimeToWeightGoalView'
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { EstimateTimeToWeightGoalFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
import { ActivityLevel } from '../../enums/ActivityLevel'
import { IFormattedTimeToWeightGoalResults } from '../../interfaces/FormattedResults'

export class EstimateTimeToWeightGoalController extends BaseController {
  protected view: EstimateTimeToWeightGoalView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new EstimateTimeToWeightGoalView(
      this.getUnitSystemValue.bind(this)
    )
    this.formValidator = new FormValidator()
  }

  init(container: HTMLElement): void {
    this.view.render(container)
    this.fillFormData(this.user.getData())
    this.bindFormEvents(this.handleCalculate.bind(this))
  }

  protected getUnitSystemValue(): UnitSystem {
    const userData = this.user.getData()
    return userData.unitSystem ?? UnitSystem.METRIC
  }

  protected handleCalculate(formData: FormData): void {
    try {
      const data = this.parseFormData(formData)
      this.formValidator.validateTotalDailyEnergyExpenditureFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(formData: FormData): EstimateTimeToWeightGoalFormData {
    const data: EstimateTimeToWeightGoalFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: parseFloat(formData.get('weight') as string),
      height: parseFloat(formData.get('height') as string),
      age: parseFloat(formData.get('age') as string),
      activityLevel: formData.get('activityLevel') as ActivityLevel,
      weightGoal: parseFloat(formData.get('weightGoal') as string),
      dailyCalories: parseFloat(formData.get('dailyCalories') as string),
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
