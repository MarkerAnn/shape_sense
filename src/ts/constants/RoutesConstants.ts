export const BASE_ROUTES = {
  HOME: '/',
} as const

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

export const ALL_ROUTES = {
  ...BASE_ROUTES,
  ...CALCULATOR_ROUTES,
} as const

export type CalculatorRouteType = keyof typeof CALCULATOR_ROUTES
export type AllRouteType = keyof typeof ALL_ROUTES
