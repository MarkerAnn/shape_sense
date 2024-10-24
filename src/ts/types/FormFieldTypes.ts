/**
 * Type representing the names of input fields.
 * @typedef {('weight' | 'height' | 'age' | 'waist' | 'hip'
 * | 'neck' | 'weightGoal' | 'weeksToWeightGoal' | 'dailyCalories')} InputFieldName
 */
export type InputFieldName =
  | 'weight'
  | 'height'
  | 'age'
  | 'waist'
  | 'hip'
  | 'neck'
  | 'weightGoal'
  | 'weeksToWeightGoal'
  | 'dailyCalories'

/**
 * Type representing the names of select fields.
 * @typedef {('unitSystem' | 'gender' | 'activityLevel')} SelectFieldName
 */
export type SelectFieldName = 'unitSystem' | 'gender' | 'activityLevel'

/**
 * Type representing the names of form fields, which can be either input or select fields.
 * @typedef {InputFieldName | SelectFieldName} FormFieldName
 */
export type FormFieldName = InputFieldName | SelectFieldName

/**
 * Interface representing the selectors for form fields.
 * @interface IFormSelectors
 * @property {Record<InputFieldName, string>} inputs - The selectors for input fields.
 * @property {Record<SelectFieldName, string>} selects - The selectors for select fields.
 * @property {Object} common - The common selectors.
 * @property {string} common.form - The selector for the form.
 * @property {string} common.resultTable - The selector for the result table.
 * @property {string} common.errorMessage - The selector for the error message.
 * @property {string} common.inputGroup - The selector for the input group.
 */
export interface IFormSelectors {
  readonly inputs: Record<InputFieldName, string>
  readonly selects: Record<SelectFieldName, string>
  readonly common: {
    readonly form: string
    readonly resultTable: string
    readonly errorMessage: string
    readonly inputGroup: string
  }
}
