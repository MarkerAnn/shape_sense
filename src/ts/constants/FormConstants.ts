export const FORM_FIELDS = {
  WEIGHT: 'weight',
  HEIGHT: 'height',
  AGE: 'age',
  WAIST: 'waist',
  HIP: 'hip',
  NECK: 'neck',
  WEIGHT_GOAL: 'weightGoal',
  WEEKS_TO_GOAL: 'weeksToWeightGoal',
  DAILY_CALORIES: 'dailyCalories',
  UNIT_SYSTEM: 'unitSystem',
  GENDER: 'gender',
  ACTIVITY_LEVEL: 'activityLevel',
} as const

export type FormField = keyof typeof FORM_FIELDS

export const FORM_SELECTORS = {
  INPUTS: {
    [FORM_FIELDS.WEIGHT]: `#${FORM_FIELDS.WEIGHT}`,
    [FORM_FIELDS.HEIGHT]: `#${FORM_FIELDS.HEIGHT}`,
    [FORM_FIELDS.AGE]: `#${FORM_FIELDS.AGE}`,
    [FORM_FIELDS.WAIST]: `#${FORM_FIELDS.WAIST}`,
    [FORM_FIELDS.HIP]: `#${FORM_FIELDS.HIP}`,
    [FORM_FIELDS.NECK]: `#${FORM_FIELDS.NECK}`,
    [FORM_FIELDS.WEIGHT_GOAL]: `#${FORM_FIELDS.WEIGHT_GOAL}`,
    [FORM_FIELDS.WEEKS_TO_GOAL]: `#${FORM_FIELDS.WEEKS_TO_GOAL}`,
    [FORM_FIELDS.DAILY_CALORIES]: `#${FORM_FIELDS.DAILY_CALORIES}`,
  },
  SELECTS: {
    [FORM_FIELDS.UNIT_SYSTEM]: `#${FORM_FIELDS.UNIT_SYSTEM}`,
    [FORM_FIELDS.GENDER]: `#${FORM_FIELDS.GENDER}`,
    [FORM_FIELDS.ACTIVITY_LEVEL]: `#${FORM_FIELDS.ACTIVITY_LEVEL}`,
  },
  COMMON: {
    FORM: 'form',
    RESULT_TABLE: '.resultTable',
    ERROR_MESSAGE: '.errorMessage',
    INPUT_GROUP: '.inputGroup',
  },
} as const

export const UNIT_PLACEHOLDERS = {
  metric: {
    [FORM_FIELDS.HEIGHT]: 'm',
    [FORM_FIELDS.WEIGHT]: 'kg',
    [FORM_FIELDS.WAIST]: 'cm',
    [FORM_FIELDS.HIP]: 'cm',
    [FORM_FIELDS.NECK]: 'cm',
  },
  imperial: {
    [FORM_FIELDS.HEIGHT]: 'ft',
    [FORM_FIELDS.WEIGHT]: 'lbs',
    [FORM_FIELDS.WAIST]: 'in',
    [FORM_FIELDS.HIP]: 'in',
    [FORM_FIELDS.NECK]: 'in',
  },
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
