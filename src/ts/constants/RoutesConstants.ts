/**
 * Object containing the base routes for the application.
 *
 * @constant {Object}
 * @property {string} HOME - The home route.
 */
export const BASE_ROUTES = {
  HOME: '/',
} as const

/**
 * Object containing the calculator routes for the application.
 *
 * @constant {Object}
 * @property {string} BMI - The route for the BMI calculator.
 * @property {string} BMR - The route for the BMR calculator.
 * @property {string} TDEE - The route for the TDEE calculator.
 * @property {string} WAIST_TO_HIP - The route for the Waist to Hip Ratio calculator.
 * @property {string} WAIST_TO_HEIGHT - The route for the Waist to Height Ratio calculator.
 * @property {string} BODY_FAT - The route for the Body Fat Percentage calculator.
 * @property {string} CALORIE_GOAL - The route for the Calorie Goal calculator.
 * @property {string} WEIGHT_GOAL - The route for the Weight Goal calculator.
 */
export const CALCULATOR_ROUTES = {
  BMI: '/bmi',
  BMR: '/bmr',
  TDEE: '/tdee',
  WAIST_TO_HIP: '/waist-to-hip',
  WAIST_TO_HEIGHT: '/waist-to-height',
  BODY_FAT: '/body-fat-percentage',
  CALORIE_GOAL: '/calorie-goal',
  WEIGHT_GOAL: '/weight-goal',
} as const

/**
 * Object containing all routes for the application, including base and calculator routes.
 *
 * @constant {Object}
 */
export const ALL_ROUTES = {
  ...BASE_ROUTES,
  ...CALCULATOR_ROUTES,
} as const

/**
 * Type representing the keys of the calculator routes.
 *
 * @typedef {keyof typeof CALCULATOR_ROUTES} CalculatorRouteType
 */
export type CalculatorRouteType = keyof typeof CALCULATOR_ROUTES

/**
 * Type representing the keys of all routes.
 *
 * @typedef {keyof typeof ALL_ROUTES} AllRouteType
 */
export type AllRouteType = keyof typeof ALL_ROUTES

// 23 rader
