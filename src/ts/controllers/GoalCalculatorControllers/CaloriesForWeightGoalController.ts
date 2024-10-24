// eslint-disable-next-line max-len
import { CaloriesForWeightGoalView } from '../../views/GoalCalculatorViews/CaloriesForWeightGoalView'
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'
import { CaloriesForWeightGoalFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
import { ActivityLevel } from '../../enums/ActivityLevel'
import { IFormattedCaloriesForWeightGoalResults } from '../../interfaces/FormattedResults'

export class CaloriesForWeightGoalController extends BaseController {
  protected view: CaloriesForWeightGoalView

  constructor(
    user: UserModel,
    calculator: HealthCalculatorModel,
    formValidator: IFormValidator
  ) {
    super(user, calculator, formValidator)
    this.view = new CaloriesForWeightGoalView(
      this.getUnitSystemValue.bind(this)
    )
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

  private parseFormData(formData: FormData): CaloriesForWeightGoalFormData {
    const data: CaloriesForWeightGoalFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: parseFloat(formData.get('weight') as string),
      height: parseFloat(formData.get('height') as string),
      age: parseFloat(formData.get('age') as string),
      activityLevel: formData.get('activityLevel') as ActivityLevel,
      weightGoal: parseFloat(formData.get('weightGoal') as string),
      weeksToWeightGoal: parseFloat(
        formData.get('weeksToWeightGoal') as string
      ),
    }
    return data
  }

  private updateView(): void {
    const dailyCalories = this.calculator.getCaloriesForWeightGoal()

    const formattedResults: IFormattedCaloriesForWeightGoalResults = {
      dailyCalories: this.formatValue(dailyCalories),
    }
    this.view.updateResults(formattedResults)
  }

  private formatValue(value: number): string {
    return `${value.toFixed(0)} kcal/day`
  }
}
