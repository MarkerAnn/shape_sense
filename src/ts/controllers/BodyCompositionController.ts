import { BodyCompositionView } from '../views/BodyCompositionView'
import { UserModel } from '../models/UserModel'
import { User } from '../types/User'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { InterfaceController } from '../interfaces/InterfaceController'
import { UnitSystem } from '../enums/UnitSystem'
import { Gender } from '../enums/Gender'

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
    this.view.fillForm(this.user.getData())
    this.view.bindCalculateEvents(this.handleCalculate.bind(this))
  }

  private handleCalculate(formId: string, formData: FormData): void {
    try {
      const data = this.extractFormData(formId, formData)
      this.user.setData(data)

      const results: Record<string, number> = {}
      switch (formId) {
        case 'waistHipRatio':
          results.waistHipRatio = this.calculator.getWaistToHipRatio()
          break
        case 'waistHeightRatio':
          results.waistHeightRatio = this.calculator.getWaistToHeightRatio()
          break
        case 'bodyFatPercentage':
          results.bodyFatPercentage = this.calculator.getBodyFatPercentage()
          break
        case 'leanBodyMass':
          data.gender = formData.get('gender') as Gender
          data.weight = this.parseFloat(formData.get('weight') as string)
          data.height = this.parseFloat(formData.get('height') as string)
          break
      }

      this.view.updateResults(results)
      this.view.hideError()
    } catch (error) {
      this.view.showError((error as Error).message)
    }
  }

  private extractFormData(formId: string, formData: FormData): Partial<User> {
    const data: Partial<User> = {
      unitSystem: formData.get('unitSystem') as UnitSystem,
    }

    switch (formId) {
      case 'waistHipRatio':
      case 'waistHeightRatio':
        data.waist = this.parseFloat(formData.get('waist') as string)
        data.hip = this.parseFloat(formData.get('hip') as string)
        data.height = this.parseFloat(formData.get('height') as string)
        break
      case 'bodyFatPercentage':
        data.gender = formData.get('gender') as Gender
        data.weight = this.parseFloat(formData.get('weight') as string)
        data.waist = this.parseFloat(formData.get('waist') as string)
        data.neck = this.parseFloat(formData.get('neck') as string)
        data.hip = this.parseFloat(formData.get('hip') as string)
        break
      case 'leanBodyMass':
        data.weight = this.parseFloat(formData.get('weight') as string)
        data.waist = this.parseFloat(formData.get('waist') as string)
        break
    }

    return data
  }

  private parseFloat(value: string): number {
    const parsed = parseFloat(value)
    if (isNaN(parsed)) {
      throw new Error('Invalid number input')
    }
    return parsed
  }
}
