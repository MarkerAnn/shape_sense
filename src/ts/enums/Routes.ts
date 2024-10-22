export enum RouteEnum {
  HOME,
  BMI,
  BASAL_METABOLIC_RATE,
  TDEE,
  BODY_COMPOSITION,
  CALORIE_CALCULATION,
  WAIST_TO_HIP,
  WAIST_TO_HEIGHT,
  BODY_FAT_PERCENTAGE,
}

export const ROUTES: Record<RouteEnum, string> = {
  [RouteEnum.HOME]: '/',
  [RouteEnum.BMI]: '/bmi',
  [RouteEnum.BASAL_METABOLIC_RATE]: '/bmr',
  [RouteEnum.TDEE]: '/tdee',
  [RouteEnum.BODY_COMPOSITION]: '/body-composition',
  [RouteEnum.CALORIE_CALCULATION]: '/calorie-calculation',
  [RouteEnum.WAIST_TO_HIP]: '/waist-to-hip',
  [RouteEnum.WAIST_TO_HEIGHT]: '/waist-to-height',
  [RouteEnum.BODY_FAT_PERCENTAGE]: '/body-fat-percentage',
}

export function getRouteFromPath(path: string): RouteEnum | undefined {
  const entry = Object.entries(ROUTES).find(([_, value]) => value === path)
  return entry ? (Number(entry[0]) as RouteEnum) : undefined
}
