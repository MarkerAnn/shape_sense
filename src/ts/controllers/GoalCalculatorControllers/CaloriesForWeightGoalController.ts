// eslint-disable-next-line max-len
import { CaloriesForWeightGoalView } from '../../views/GoalCalculatorViews/CaloriesForWeightGoalView'
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { CaloriesForWeightGoalFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
import { ActivityLevel } from '../../enums/ActivityLevel'

export class CaloriesForWeightGoalController extends BaseController {
  protected view: CaloriesForWeightGoalView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new CaloriesForWeightGoalView()
    this.formValidator = new FormValidator()
  }

  init(container: HTMLElement): void {
    this.view.render(container)
    this.fillFormWithUserData()
    this.view.bindCalculateEvent(this.handleCalculate.bind(this))
    this.view.bindResetEvent(this.handleReset.bind(this))
  }

  protected fillFormWithUserData(): void {
    const userData = this.user.getData()
    this.view.fillForm(userData)
  }

  private handleCalculate(formData: FormData): void {
    try {
      const data = this.parseFormData(formData)
      console.log('data', data)
      this.formValidator.validateCaloriesForWeightGoalFormData(data)
      this.user.setData(data)
      console.log('user', this.user)
      this.updateView()
      console.log('view', this.view)
      this.view.hideError()
    } catch (error) {
      console.error('error', error)
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
    console.log('dailyCalories', dailyCalories)
    this.view.updateResults(dailyCalories)
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
