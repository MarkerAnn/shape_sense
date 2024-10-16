// import { BmiView } from '../views/Bmiview'
// import { BmiModel } from '../models/BmiModel'
// import { BmiCategory } from '../utils/BmiCategory'

// export class BmiController {
//   constructor() {
//     // Create a new instance of the view
//     this.view = new BmiView(this)
//   }

//   // Implementera den abstrakta metoden för BMI-beräkningar
//   calculateBMI(weight: number, height: number, unitSystem: string): void {
//     const bmiModel = new BmiModel(weight, height, unitSystem)
//     const bmi = bmiModel.calculateBMI()
//     const category = bmiModel.getBmiType() as BmiCategory

//     const healthRisk = this.getHealthRisk(category)
//     this.view.displayResult(bmi, category, healthRisk)
//   }

//   // Hämtar hälsorisk baserat på BMI-kategorin
//   private getHealthRisk(bmiCategory: BmiCategory): string {
//     switch (bmiCategory) {
//       case BmiCategory.UNDERWEIGHT_SEVERE:
//         return 'High risk of malnutrition, weakened immune system, and more.'
//       case BmiCategory.UNDERWEIGHT_MODERATE:
//         return 'Risks include nutrient deficiencies and weakened immune response.'
//       case BmiCategory.UNDERWEIGHT_MILD:
//         return 'Moderate risk of malnutrition.'
//       case BmiCategory.NORMAL_WEIGHT:
//         return 'Lowest health risks with a balanced lifestyle.'
//       case BmiCategory.OVERWEIGHT_PRE_OBESE:
//         return 'Increased risk of cardiovascular diseases and type 2 diabetes.'
//       case BmiCategory.OBESE_CLASS_I:
//         return 'Significant risk of metabolic syndrome and heart disease.'
//       case BmiCategory.OBESE_CLASS_II:
//         return 'Increased risk for heart disease and stroke.'
//       case BmiCategory.OBESE_CLASS_III:
//         return 'Severe health risks including reduced life expectancy.'
//       default:
//         return 'Unknown health risk.'
//     }
//   }
// }
