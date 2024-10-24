// eslint-disable-next-line max-len
import { TotalDailyEnergyExpenditureView } from '../../views/TotalDailyEnergyExpenditureViews/TotalDailyEnergyExpenditureView'
import { BaseController } from '../AbstractBaseController'
import { UserModel } from '../../models/UserModel'
import { HealthCalculatorModel } from '../../models/HealthCalculatorModel'
import { TotalDailyEnergyExpenditureFormData } from '../../types/FormTypes'
import { UnitSystem } from '../../enums/UnitSystem'
import { Gender } from '../../enums/Gender'
import { ActivityLevel } from '../../enums/ActivityLevel'
import { IFormattedTdeeResults } from '../../interfaces/FormattedResults'
import { IFormValidator } from '../../interfaces/InterfaceFormValidator'

export class TotalDailyEnergyExpenditureController extends BaseController {
  protected view: TotalDailyEnergyExpenditureView

  constructor(
    user: UserModel,
    calculator: HealthCalculatorModel,
    formValidator: IFormValidator
  ) {
    super(user, calculator, formValidator)
    this.view = new TotalDailyEnergyExpenditureView(
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

    const formattedResults: IFormattedTdeeResults = {
      totalDailyEnergyExpenditureHarris: this.formatValue(
        totalDailyEnergyExpenditureHarris
      ),
      totalDailyEnergyExpenditureMifflin: this.formatValue(
        totalDailyEnergyExpenditureMifflin
      ),
    }
    this.view.updateResults(formattedResults)
  }

  private formatValue(value: number): string {
    return `${value.toFixed(0)} kcal/day`
  }
}
