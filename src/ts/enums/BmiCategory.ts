/**
 * Enum representing the different categories of Body Mass Index (BMI).
 * Each category corresponds to a specific range of BMI values and describes
 * the associated weight status.
 *
 * @enum {string}
 */
export enum BmiCategory {
  UNDERWEIGHT_SEVERE = 'underweight, severe thinness',
  UNDERWEIGHT_MODERATE = 'underweight, moderate thinness',
  UNDERWEIGHT_MILD = 'underweight, mild thinness',
  NORMAL_WEIGHT = 'normal weight',
  OVERWEIGHT_PRE_OBESE = 'overweight, pre-obese',
  OBESE_CLASS_I = 'obese, class I',
  OBESE_CLASS_II = 'obese, class II',
  OBESE_CLASS_III = 'obese, class III',
}
