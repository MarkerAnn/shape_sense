// eslint-disable-next-line max-len
import { TotalDailyEnergyExpenditureView } from '../../views/TotalDailyEnergyExpenditureViews/TotalDailyEnergyExpenditureView'
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { FormValidator } from '../../utils/FormValidator'
import { TotalDailyEnergyExpenditureFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
import { ActivityLevel } from '../../enums/ActivityLevel'

export class TotalDailyEnergyExpenditureController extends BaseController {
  protected view: TotalDailyEnergyExpenditureView
  private formValidator: FormValidator

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    super(user, calculator)
    this.view = new TotalDailyEnergyExpenditureView()
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
      this.formValidator.validateTotalDailyEnergyExpenditureFormData(data)
      this.user.setData(data)
      this.updateView()
      this.view.hideError()
    } catch (error) {
      this.handleErrors(error as Error)
    }
  }

  private parseFormData(
    formData: FormData
  ): TotalDailyEnergyExpenditureFormData {
    const data: TotalDailyEnergyExpenditureFormData = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: parseFloat(formData.get('weight') as string),
      height: parseFloat(formData.get('height') as string),
      age: parseFloat(formData.get('age') as string),
      activityLevel: formData.get('activityLevel') as ActivityLevel,
    }

    return data
  }

  private updateView(): void {
    const totalDailyEnergyExpenditureHarris =
      this.calculator.getTdeeHarrisBenedict()
    const totalDailyEnergyExpenditureMifflin =
      this.calculator.getTdeeMifflinStJeor()

    this.view.updateResults({
      totalDailyEnergyExpenditureHarris,
      totalDailyEnergyExpenditureMifflin,
    })
  }

  private handleReset(): void {
    this.user.resetData()
    this.view.resetForm()
    this.view.hideError()
  }
}
