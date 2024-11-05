import { CalculatorRouteType } from '../constants/RoutesConstants'

/**
 * An object mapping calculator route types to their corresponding descriptions.
 * Provides descriptions for various health and fitness calculators.
 *
 * @constant
 * @type {Record<CalculatorRouteType, string>}
 */
export const CALCULATOR_DESCRIPTION: Record<CalculatorRouteType, string> = {
  BMI:
    'Body Mass Index (BMI) - A measure of body ' +
    'fat based on weight and height.',
  BMR:
    'Basal Metabolic Rate (BMR) - The amount of energy your body needs ' +
    'to maintain basic functions while at rest.',
  TDEE:
    'Total Daily Energy Expenditure (TDEE) - ' +
    'The number of calories you burn daily.',
  WAIST_TO_HIP: 'Calculate the ratio between your waist and hip circumference.',
  WAIST_TO_HEIGHT:
    'Calculate the ratio between your waist circumference and height.',
  BODY_FAT:
    'Estimate the percentage of fat in your body based on measurements.',
  CALORIE_GOAL: 'Estimate daily caloric needs to reach your weight goal',
  WEIGHT_GOAL: 'Calculate the time needed to reach your desired weight.',
} as const
