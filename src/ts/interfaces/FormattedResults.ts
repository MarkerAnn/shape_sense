export interface FormattedBmiResults {
  bmi: string
  category: string
  healthRisk: string
  idealWeight: string
}

export interface IFormattedTdeeResults {
  totalDailyEnergyExpenditureHarris: string
  totalDailyEnergyExpenditureMifflin: string
}

export interface IFormattedTimeToWeightGoalResults {
  weeksToWeightGoal: string
}

export interface IFormattedCaloriesForWeightGoalResults {
  dailyCalories: string
}

export interface IFormattedBodyFatPercentageResults {
  bodyFatPercentage: string
  leanBodyMass: string
}

export interface IFormattedWaistToHeightRatioResults {
  waistToHeightRatio: string
}

export interface IFormattedWaistToHipRationResults {
  waistToHipRatio: string
}

export interface IFormatBasaMetabolicRateResults {
  basalMetabolicRateHarrisBenedict: string
  basalMetabolicRateMifflinStJeor: string
}
