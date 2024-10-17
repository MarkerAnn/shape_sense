import { BmiCategory } from './BmiCategory'

export function getHealthRisk(bmiCategory: BmiCategory): string {
  switch (bmiCategory) {
    case BmiCategory.UNDERWEIGHT_SEVERE:
      return 'High risk of malnutrition, weakened immune system, and more.'
    case BmiCategory.UNDERWEIGHT_MODERATE:
      return 'Risks include nutrient deficiencies and weakened immune response.'
    case BmiCategory.UNDERWEIGHT_MILD:
      return 'Moderate risk of malnutrition.'
    case BmiCategory.NORMAL_WEIGHT:
      return 'Lowest health risks with a balanced lifestyle.'
    case BmiCategory.OVERWEIGHT_PRE_OBESE:
      return 'Increased risk of cardiovascular diseases and type 2 diabetes.'
    case BmiCategory.OBESE_CLASS_I:
      return 'Significant risk of metabolic syndrome and heart disease.'
    case BmiCategory.OBESE_CLASS_II:
      return 'Increased risk for heart disease and stroke.'
    case BmiCategory.OBESE_CLASS_III:
      return 'Severe health risks including reduced life expectancy.'
    default:
      return 'Unknown health risk.'
  }
}
