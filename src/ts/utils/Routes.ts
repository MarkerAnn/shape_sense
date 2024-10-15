export enum RouteEnum {
  HOME,
  BMI,
  BMR,
  TDEE,
  BODY_COMPOSITION,
  CALORIE_CALCULATION,
}

export const ROUTES: Record<RouteEnum, string> = {
  [RouteEnum.HOME]: '/',
  [RouteEnum.BMI]: '/bmi',
  [RouteEnum.BMR]: '/bmr',
  [RouteEnum.TDEE]: '/tdee',
  [RouteEnum.BODY_COMPOSITION]: '/body-composition',
  [RouteEnum.CALORIE_CALCULATION]: '/calorie-calculation',
}

export function getRouteFromPath(path: string): RouteEnum | undefined {
  const entry = Object.entries(ROUTES).find(([_, value]) => value === path)
  return entry ? (Number(entry[0]) as RouteEnum) : undefined
}
