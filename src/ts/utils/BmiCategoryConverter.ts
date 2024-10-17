import { BmiCategory } from '../enums/BmiCategory'

export class BmiCategoryConverter {
  static fromString(bmiType: string): BmiCategory {
    const normalizedType = bmiType.toLowerCase().trim()
    for (const [key, value] of Object.entries(BmiCategory)) {
      if (value.toLowerCase() === normalizedType) {
        return BmiCategory[key as keyof typeof BmiCategory]
      }
    }
    throw new Error(`Invalid BMI category: ${bmiType}`)
  }
}
