// import { BodyCompositionView } from '../views/BodyCompositionView'
// import { UserModel } from '../models/UserModel'
// import { User } from '../types/User'
// import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
// import { UnitSystem } from '../enums/UnitSystem'
// import { Gender } from '../enums/Gender'
// import { BaseController } from './AbstractBaseController'
// import { FormValidator } from '../utils/FormValidator'

// export class BodyCompositionController extends BaseController {
//   protected view: BodyCompositionView
//   private formValidator: FormValidator

//   constructor(user: UserModel, calculator: HealthCalculatorModel) {
//     super(user, calculator)
//     this.view = new BodyCompositionView()
//     this.formValidator = new FormValidator()
//   }

//   init(container: HTMLElement): void {
//     this.view.render(container)
//     this.fillFormWithUserData()
//     this.bindFormHandlers()
//   }

//   protected fillFormWithUserData(): void {
//     const userData = this.user.getData()
//     this.view.fillForm(userData)
//   }

//   private bindFormHandlers(): void {
//     this.view.bindCalculateEvent(
//       'waistHipRatio',
//       this.handleCalculate.bind(
//         this,
//         this.extractWaistHipRatioData,
//         this.calculator.getWaistToHipRatio.bind(this.calculator)
//       )
//     )
//     this.view.bindCalculateEvent(
//       'waistHeightRatio',
//       this.handleCalculate.bind(
//         this,
//         this.extractWaistHeightRatioData,
//         this.calculator.getWaistToHeightRatio.bind(this.calculator)
//       )
//     )
//     this.view.bindCalculateEvent(
//       'bodyFatPercentage',
//       this.handleCalculate.bind(
//         this,
//         this.extractBodyFatPercentageData,
//         this.calculator.getBodyFatPercentage.bind(this.calculator)
//       )
//     )
//     this.view.bindCalculateEvent(
//       'leanBodyMass',
//       this.handleCalculate.bind(
//         this,
//         this.extractLeanBodyMassData,
//         this.calculator.getLeanBodyMass.bind(this.calculator)
//       )
//     )
//     this.view.bindResetEvents(this.handleReset.bind(this))
//   }

//   private handleCalculate(
//     extractData: (formData: FormData) => Partial<User>,
//     calculateResult: () => number,
//     formData: FormData
//   ): void {
//     try {
//       const data = extractData(formData)
//       this.user.setData(data)
//       const result = calculateResult()
//       this.view.updateResults({ [extractData.name]: result })
//       this.view.hideError()
//     } catch (error) {
//       this.handleErrors(error as Error)
//     }
//   }

//   private handleReset(): void {
//     this.user.resetData()
//     this.view.resetForm()
//     this.view.hideError()
//   }

//   private extractWaistHipRatioData(formData: FormData): Partial<User> {
//     return {
//       unitSystem: formData.get('unitSystem') as UnitSystem,
//       waist: this.validateNumericInput(
//         formData.get('waist') as string,
//         'waist'
//       ),
//       hip: this.validateNumericInput(formData.get('hip') as string, 'hip'),
//     }
//   }

//   private extractWaistHeightRatioData(formData: FormData): Partial<User> {
//     return {
//       unitSystem: formData.get('unitSystem') as UnitSystem,
//       waist: this.validateNumericInput(
//         formData.get('waist') as string,
//         'waist'
//       ),
//       height: this.validateNumericInput(
//         formData.get('height') as string,
//         'height'
//       ),
//     }
//   }

//   private extractBodyFatPercentageData(formData: FormData): Partial<User> {
//     return {
//       unitSystem: formData.get('unitSystem') as UnitSystem,
//       gender: formData.get('gender') as Gender,
//       weight: this.validateNumericInput(
//         formData.get('weight') as string,
//         'weight'
//       ),
//       waist: this.validateNumericInput(
//         formData.get('waist') as string,
//         'waist'
//       ),
//       neck: this.validateNumericInput(formData.get('neck') as string, 'neck'),
//       hip: this.validateNumericInput(formData.get('hip') as string, 'hip'),
//     }
//   }

//   private extractLeanBodyMassData(formData: FormData): Partial<User> {
//     return {
//       unitSystem: formData.get('unitSystem') as UnitSystem,
//       gender: formData.get('gender') as Gender,
//       weight: this.validateNumericInput(
//         formData.get('weight') as string,
//         'weight'
//       ),
//       height: this.validateNumericInput(
//         formData.get('height') as string,
//         'height'
//       ),
//     }
//   }
// }
