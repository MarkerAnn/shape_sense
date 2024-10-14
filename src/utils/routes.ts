export const ROUTES = {
  HOME: '/',
  BMI: '/bmi',
  BMR: '/bmr',
  TDEE: '/tdee',
  BODY_COMPOSITION: '/body-composition',
  CALORIE_CALCULATION: '/calorie-calculation',
} as const

export type RouteKeys = keyof typeof ROUTES
