import { BodyCompositionView } from '../views/BodyCompositionView'
import { UserModel } from '../models/UserModel'
import { User } from '../types/User'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { InterfaceController } from '../interfaces/InterfaceController'
import { UnitSystem } from '../enums/UnitSystem'
import { Gender } from '../enums/Gender'

// Define handler types for each form
type WaistHipRatioHandler = (formData: FormData) => void
type WaistHeightRatioHandler = (formData: FormData) => void
type BodyFatPercentageHandler = (formData: FormData) => void
type LeanBodyMassHandler = (formData: FormData) => void
type ResetHandler = () => void

export class BodyCompositionController implements InterfaceController {
  private view: BodyCompositionView
  private user: UserModel
  private calculator: HealthCalculatorModel

  constructor(user: UserModel, calculator: HealthCalculatorModel) {
    this.user = user
    this.calculator = calculator
    this.view = new BodyCompositionView()
  }

  init(container: HTMLElement): void {
    this.view.render(container)
    this.fillFormWithUserData()
    this.bindFormHandlers()
  }

  private fillFormWithUserData(): void {
    const userData = this.user.getData()
    this.view.fillForm(userData)
  }

  private bindFormHandlers(): void {
    this.view.bindWaistHipRatioEvent(this.handleWaistHipRatio.bind(this))
    this.view.bindWaistHeightRatioEvent(this.handleWaistHeightRatio.bind(this))
    this.view.bindBodyFatPercentageEvent(
      this.handleBodyFatPercentage.bind(this)
    )
    this.view.bindLeanBodyMassEvent(this.handleLeanBodyMass.bind(this))
    this.view.bindResetEvents(this.handleReset.bind(this))
  }

  private handleWaistHipRatio: WaistHipRatioHandler = (formData) => {
    try {
      const data = this.extractWaistHipRatioData(formData)
      this.user.setData(data)
      const waistHipRatio = this.calculator.getWaistToHipRatio()
      this.view.updateResults({ waistHipRatio })
      this.view.hideError()
    } catch (error) {
      this.view.showError((error as Error).message)
    }
  }

  private handleWaistHeightRatio: WaistHeightRatioHandler = (formData) => {
    try {
      const data = this.extractWaistHeightRatioData(formData)
      this.user.setData(data)
      const waistHeightRatio = this.calculator.getWaistToHeightRatio()
      this.view.updateResults({ waistHeightRatio })
      this.view.hideError()
    } catch (error) {
      this.view.showError((error as Error).message)
    }
  }

  private handleBodyFatPercentage: BodyFatPercentageHandler = (formData) => {
    try {
      const data = this.extractBodyFatPercentageData(formData)
      this.user.setData(data)
      const bodyFatPercentage = this.calculator.getBodyFatPercentage()
      this.view.updateResults({ bodyFatPercentage })
      this.view.hideError()
    } catch (error) {
      this.view.showError((error as Error).message)
    }
  }

  private handleLeanBodyMass: LeanBodyMassHandler = (formData) => {
    try {
      const data = this.extractLeanBodyMassData(formData)
      this.user.setData(data)
      const leanBodyMass = this.calculator.getLeanBodyMass()
      this.view.updateResults({ leanBodyMass })
      this.view.hideError()
    } catch (error) {
      this.view.showError((error as Error).message)
    }
  }

  private handleReset: ResetHandler = () => {
    this.user.resetData()
    this.view.resetForms()
    this.view.hideError()
  }

  private extractWaistHipRatioData(formData: FormData): Partial<User> {
    return {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      waist: this.parseFloat(formData.get('waist') as string),
      hip: this.parseFloat(formData.get('hip') as string),
    }
  }

  private extractWaistHeightRatioData(formData: FormData): Partial<User> {
    return {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      waist: this.parseFloat(formData.get('waist') as string),
      height: this.parseFloat(formData.get('height') as string),
    }
  }

  private extractBodyFatPercentageData(formData: FormData): Partial<User> {
    return {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: this.parseFloat(formData.get('weight') as string),
      waist: this.parseFloat(formData.get('waist') as string),
      neck: this.parseFloat(formData.get('neck') as string),
      hip: this.parseFloat(formData.get('hip') as string),
    }
  }

  private extractLeanBodyMassData(formData: FormData): Partial<User> {
    return {
      unitSystem: formData.get('unitSystem') as UnitSystem,
      gender: formData.get('gender') as Gender,
      weight: this.parseFloat(formData.get('weight') as string),
      height: this.parseFloat(formData.get('height') as string),
    }
  }

  private parseFloat(value: string): number {
    const parsed = parseFloat(value)
    if (isNaN(parsed)) {
      throw new Error('Invalid number input')
    }
    return parsed
  }
}
