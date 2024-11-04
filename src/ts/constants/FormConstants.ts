import { FormFieldName, IFormSelectors } from '../types/FormFieldTypes'

/**
 * Object containing form field names.
 *
 * @constant {Object}
 * @property {string} unitSystem - The form field name for the unit system.
 * @property {string} gender - The form field name for gender.
 * @property {string} height - The form field name for height.
 * @property {string} weight - The form field name for weight.
 * @property {string} waist - The form field name for waist circumference.
 * @property {string} hip - The form field name for hip circumference.
 * @property {string} neck - The form field name for neck circumference.
 * @property {string} age - The form field name for age.
 * @property {string} activityLevel - The form field name for activity level.
 * @property {string} dailyCalories - The form field name for daily caloric intake.
 * @property {string} weightGoal - The form field name for weight goal.
 * @property {string} weeksToWeightGoal - The form field name for weeks to reach weight goal.
 */
export const FORM_FIELDS: Record<string, FormFieldName> = {
  weight: 'weight',
  height: 'height',
  age: 'age',
  waist: 'waist',
  hip: 'hip',
  neck: 'neck',
  weightGoal: 'weightGoal',
  weeksToWeightGoal: 'weeksToWeightGoal',
  dailyCalories: 'dailyCalories',
  unitSystem: 'unitSystem',
  gender: 'gender',
  activityLevel: 'activityLevel',
} as const

export type FormField = keyof typeof FORM_FIELDS

/**
 * Object containing form selectors for input and select fields, as well as common selectors.
 *
 * @constant {IFormSelectors}
 * @property {Object} inputs - Selectors for input fields.
 * @property {string} inputs.weight - Selector for the weight input field.
 * @property {string} inputs.height - Selector for the height input field.
 * @property {string} inputs.age - Selector for the age input field.
 * @property {string} inputs.waist - Selector for the waist input field.
 * @property {string} inputs.hip - Selector for the hip input field.
 * @property {string} inputs.neck - Selector for the neck input field.
 * @property {string} inputs.weightGoal - Selector for the weight goal input field.
 * @property {string} inputs.weeksToWeightGoal - Selector for the weeks to weight goal input field.
 * @property {string} inputs.dailyCalories - Selector for the daily calories input field.
 * @property {Object} selects - Selectors for select fields.
 * @property {string} selects.unitSystem - Selector for the unit system select field.
 * @property {string} selects.gender - Selector for the gender select field.
 * @property {string} selects.activityLevel - Selector for the activity level select field.
 * @property {Object} common - Common selectors.
 * @property {string} common.form - Selector for the form element.
 * @property {string} common.resultTable - Selector for the result table element.
 * @property {string} common.errorMessage - Selector for the error message element.
 * @property {string} common.inputGroup - Selector for the input group element.
 */
export const FORM_SELECTORS: IFormSelectors = {
  inputs: {
    weight: `#${FORM_FIELDS.weight}`,
    height: `#${FORM_FIELDS.height}`,
    age: `#${FORM_FIELDS.age}`,
    waist: `#${FORM_FIELDS.waist}`,
    hip: `#${FORM_FIELDS.hip}`,
    neck: `#${FORM_FIELDS.neck}`,
    weightGoal: `#${FORM_FIELDS.weightGoal}`,
    weeksToWeightGoal: `#${FORM_FIELDS.weeksToWeightGoal}`,
    dailyCalories: `#${FORM_FIELDS.dailyCalories}`,
  },
  selects: {
    unitSystem: `#${FORM_FIELDS.unitSystem}`,
    gender: `#${FORM_FIELDS.gender}`,
    activityLevel: `#${FORM_FIELDS.activityLevel}`,
  },
  common: {
    form: 'form',
    resultTable: '.resultTable',
    errorMessage: '.errorMessage',
    inputGroup: '.inputGroup',
  },
} as const

/**
 * Object containing unit placeholders for metric and imperial systems.
 *
 * @constant {Object}
 * @property {Object} metric - Placeholders for the metric system.
 * @property {string} metric.height - Placeholder for height in the metric system.
 * @property {string} metric.weight - Placeholder for weight in the metric system.
 * @property {string} metric.waist - Placeholder for waist in the metric system.
 * @property {string} metric.hip - Placeholder for hip in the metric system.
 * @property {string} metric.neck - Placeholder for neck in the metric system.
 * @property {Object} imperial - Placeholders for the imperial system.
 * @property {string} imperial.height - Placeholder for height in the imperial system.
 * @property {string} imperial.weight - Placeholder for weight in the imperial system.
 * @property {string} imperial.waist - Placeholder for waist in the imperial system.
 * @property {string} imperial.hip - Placeholder for hip in the imperial system.
 * @property {string} imperial.neck - Placeholder for neck in the imperial system.
 */
export const UNIT_PLACEHOLDERS = {
  metric: {
    [FORM_FIELDS.height]: 'm',
    [FORM_FIELDS.weight]: 'kg',
    [FORM_FIELDS.weightGoal]: 'kg',
    [FORM_FIELDS.waist]: 'cm',
    [FORM_FIELDS.hip]: 'cm',
    [FORM_FIELDS.neck]: 'cm',
  },
  imperial: {
    [FORM_FIELDS.height]: 'ft',
    [FORM_FIELDS.weight]: 'lbs',
    [FORM_FIELDS.weightGoal]: 'lbs',
    [FORM_FIELDS.waist]: 'in',
    [FORM_FIELDS.hip]: 'in',
    [FORM_FIELDS.neck]: 'in',
  },
} as const
