export interface UserModel {
  weight: number
  height: number
  age?: number
  gender?: 'male' | 'female'
  waist?: number
  hip?: number
  neck?: number
  unitSystem: 'metric' | 'imperial'
  activityLevel?: 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extremely'
  dailyCalories?: number
  weightGoal?: number
  weeksToWeightGoal?: number
}
