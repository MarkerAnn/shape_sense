import { BmiCategory } from './BmiCategory'

/**
 * An object mapping BMI categories to their corresponding health risk descriptions.
 * @constant
 * @type {Record<BmiCategory, string>}
 */
const healthRiskDescriptions: Record<BmiCategory, string> = {
  [BmiCategory.UNDERWEIGHT_SEVERE]:
    'High risk of malnutrition, weakened immune system, and more.',
  [BmiCategory.UNDERWEIGHT_MODERATE]:
    'Risks include nutrient deficiencies and weakened immune response.',
  [BmiCategory.UNDERWEIGHT_MILD]: 'Moderate risk of malnutrition.',
  [BmiCategory.NORMAL_WEIGHT]: 'Lowest health risks with a balanced lifestyle.',
  [BmiCategory.OVERWEIGHT_PRE_OBESE]:
    'Increased risk of cardiovascular diseases and type 2 diabetes.',
  [BmiCategory.OBESE_CLASS_I]:
    'Significant risk of metabolic syndrome and heart disease.',
  [BmiCategory.OBESE_CLASS_II]: 'Increased risk for heart disease and stroke.',
  [BmiCategory.OBESE_CLASS_III]:
    'Severe health risks including reduced life expectancy.',
}

/**
 * Gets the health risk description for a given BMI category.
 *
 * @param {BmiCategory} bmiCategory - The BMI category to get the health risk for.
 * @returns {string} The health risk description corresponding to the BMI category.
 */
export function getHealthRisk(bmiCategory: BmiCategory): string {
  return healthRiskDescriptions[bmiCategory] || 'Unknown health risk.'
}
