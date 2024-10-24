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

export type SelectFieldName = 'unitSystem' | 'gender' | 'activityLevel'

export type FormFieldName = InputFieldName | SelectFieldName

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
