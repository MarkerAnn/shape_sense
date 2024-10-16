// import { HealthCalculatorFactory } from 'body-measurements'

// export class BmiModel {
//   private weight: number
//   private height: number
//   private unitSystem: string

//   constructor(weight: number, height: number, unitSystem: string) {
//     this.weight = weight
//     this.height = height
//     this.unitSystem = unitSystem
//   }

//   calculateBMI(): number {
//     const user = {
//       weight: this.weight,
//       height: this.height,
//       unitSystem: this.unitSystem,
//     }
//     const healthCalculator =
//       HealthCalculatorFactory.createHealthCalculator(user)
//     return healthCalculator.getBmi()
//   }

//   getBmiType(): string {
//     const user = {
//       weight: this.weight,
//       height: this.height,
//       unitSystem: this.unitSystem,
//     }
//     const healthCalculator =
//       HealthCalculatorFactory.createHealthCalculator(user)
//     return healthCalculator.getBmiType()
//   }
// }
