var M = Object.defineProperty
var G = (i, t, e) =>
  t in i
    ? M(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (i[t] = e)
var l = (i, t, e) => (G(i, typeof t != 'symbol' ? t + '' : t, e), e)
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) a(s)
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === 'childList')
        for (const o of r.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && a(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function e(s) {
    const r = {}
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    )
  }
  function a(s) {
    if (s.ep) return
    s.ep = !0
    const r = e(s)
    fetch(s.href, r)
  }
})()
var g = ((i) => (
  (i[(i.HOME = 0)] = 'HOME'),
  (i[(i.BMI = 1)] = 'BMI'),
  (i[(i.BASAL_METABOLIC_RATE = 2)] = 'BASAL_METABOLIC_RATE'),
  (i[(i.TDEE = 3)] = 'TDEE'),
  (i[(i.BODY_COMPOSITION = 4)] = 'BODY_COMPOSITION'),
  (i[(i.CALORIE_CALCULATION = 5)] = 'CALORIE_CALCULATION'),
  (i[(i.WAIST_TO_HIP = 6)] = 'WAIST_TO_HIP'),
  (i[(i.WAIST_TO_HEIGHT = 7)] = 'WAIST_TO_HEIGHT'),
  (i[(i.BODY_FAT_PERCENTAGE = 8)] = 'BODY_FAT_PERCENTAGE'),
  (i[(i.CALORIE_GOAL = 9)] = 'CALORIE_GOAL'),
  (i[(i.WEIGHT_GOAL = 10)] = 'WEIGHT_GOAL'),
  i
))(g || {})
const F = {
  0: '/',
  1: '/bmi',
  2: '/bmr',
  3: '/tdee',
  4: '/body-composition',
  5: '/calorie-calculation',
  6: '/waist-to-hip',
  7: '/waist-to-height',
  8: '/body-fat-percentage',
  9: '/calorie-goal',
  10: '/weight-goal',
}
function L(i) {
  const t = Object.entries(F).find(([e, a]) => a === i)
  return t ? Number(t[0]) : void 0
}
var m = ((i) => (
  (i.BMI = 'bmi'),
  (i.BMR = 'bmr'),
  (i.TDEE = 'tdee'),
  (i.WAIST_TO_HIP_RATIO = 'waist-to-hip'),
  (i.WAIST_TO_HEIGHT_RATIO = 'waist-to-height'),
  (i.BODY_FAT_PERCENTAGE = 'body-fat-percentage'),
  (i.CALORIE_GOAL = 'calorie-goal'),
  (i.WEIGHT_GOAL = 'weight-goal'),
  i
))(m || {})
class O {
  render(t) {
    t.innerHTML = `
        <section class="container">
          <h2>Our Calculators</h2>
          ${this.renderCalculatorItems()}
        </section>
      `
  }
  renderCalculatorItems() {
    return Object.values(m)
      .map(
        (t) => `
        <div class="calculator-item">
          <div>
            <h3>${this.capitalizeWords(t)}</h3>
            <p>${this.getCalculatorDescription(t)}</p>
            <div class="button-container">
            <a href="#/${t.toLowerCase()}" class="button">Calculate</a>
            </div>
          </div>
          <img src="./assets/images/${t.toLowerCase()}.png" 
          alt="${t} illustration">
        </div>
      `
      )
      .join('')
  }
  capitalizeWords(t) {
    return t
      .split('-')
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
      .join(' ')
  }
  getCalculatorDescription(t) {
    return (
      {
        [m.BMI]:
          'Body Mass Index (BMI) - A measure of body fat based on weight and height.',
        [m.BMR]:
          'Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.',
        [m.TDEE]:
          'Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.',
        [m.WAIST_TO_HIP_RATIO]:
          'Calculate the ratio between your waist and hip circumference.',
        [m.WAIST_TO_HEIGHT_RATIO]:
          'Calculate the ratio between your waist circumference and height.',
        [m.BODY_FAT_PERCENTAGE]:
          'Body Fat Percentage and Lean Body Mass - Estimate the percentage of fat in your body based on your measurements.',
        [m.CALORIE_GOAL]:
          'Calorie Calculations - Estimate daily calorie needs to reach your weight goal',
        [m.WEIGHT_GOAL]:
          'Weight Goal - Calculate the time needed to reach your desired weight based on your calorie intake.',
      }[t] || 'Description not available.'
    )
  }
}
class B {
  constructor() {
    l(this, 'view')
    this.view = new O()
  }
  init(t) {
    this.view.render(t)
  }
}
var n = ((i) => (
    (i.WEIGHT = '#weight'),
    (i.HEIGHT = '#height'),
    (i.WAIST = '#waist'),
    (i.NECK = '#neck'),
    (i.HIP = '#hip'),
    (i.AGE = '#age'),
    (i.WEIGHT_GOAL = '#weightGoal'),
    (i.WEEKS_TO_WEIGHT_GOAL = '#weeksToWeightGoal'),
    (i.DAILY_CALORIES = '#dailyCalories'),
    (i.UNIT_SYSTEM = '#unitSystem'),
    (i.GENDER = '#gender'),
    (i.ACTIVITY_LEVEL = '#activityLevel'),
    (i.RESULT_TABLE = '.resultTable'),
    (i.ERROR_MESSAGE = '.errorMessage'),
    (i.FORM = 'form'),
    i
  ))(n || {}),
  E = ((i) => ((i.METRIC = 'metric'), (i.IMPERIAL = 'imperial'), i))(E || {})
const _ = {
  [E.METRIC]: {
    height: 'm',
    weight: 'kg',
    waist: 'cm',
    hip: 'cm',
    neck: 'cm',
    age: 'years',
    dailyCalories: 'kcal',
    weighGoal: 'kg',
    weeksToWeightGoal: 'weeks',
  },
  [E.IMPERIAL]: {
    height: 'ft',
    weight: 'lbs',
    waist: 'in',
    hip: 'in',
    neck: 'in',
    age: 'years',
    dailyCalories: 'kcal',
    weighGoal: 'lbs',
    weeksToWeightGoal: 'weeks',
  },
}
class v {
  constructor(t) {
    l(this, 'form', null)
    l(this, 'resultsTable', null)
    l(this, 'errorMessage', null)
    l(this, 'inputs', {})
    l(this, 'getSelectedUnitSystem')
    this.getSelectedUnitSystem = t
  }
  initializeCommonElements() {
    ;(this.form = this.getElement(n.FORM)),
      (this.resultsTable = this.getElement(n.RESULT_TABLE)),
      (this.errorMessage = this.getElement(n.ERROR_MESSAGE))
  }
  initializeInputs(t) {
    t.forEach((e) => {
      this.inputs[e] = this.getElement(`#${e}`)
    })
  }
  resetForm() {
    var t
    ;(t = this.form) == null || t.reset(),
      this.clearResults(),
      this.updatePlaceholders(),
      this.hideError()
  }
  clearResults() {
    if (this.resultsTable) {
      const t = this.resultsTable.rows
      for (let e = 0; e < t.length; e++) t[e].cells[1].textContent = '-'
    }
  }
  updatePlaceholders() {
    const t = this.getSelectedUnitSystem(),
      e = _[t]
    Object.keys(this.inputs).forEach((a) => {
      a in e && this.inputs[a].setAttribute('placeholder', e[a])
    })
  }
  showError(t) {
    this.errorMessage instanceof HTMLElement &&
      ((this.errorMessage.textContent = t),
      this.errorMessage.classList.remove('hidden'))
  }
  hideError() {
    this.errorMessage instanceof HTMLElement &&
      ((this.errorMessage.textContent = ''),
      this.errorMessage.classList.add('hidden'))
  }
  getElement(t) {
    return document.querySelector(t)
  }
  createElement(t, e) {
    const a = document.createElement(t)
    return e && (a.className = e), a
  }
  bindResetEvent(t) {
    var a
    const e =
      (a = this.form) == null ? void 0 : a.querySelector('button[type="reset"]')
    e == null ||
      e.addEventListener('click', (s) => {
        s.preventDefault(), t()
      })
  }
}
const D = `
      <section class="container">
        <h2>BMI Calculator</h2>
        <div class="content">
        <p class="description">BMI is a measure of body fat based 
        on height and weight that applies to adult men and women.</p>

        <div class="additional-info">
        <h2>What is BMI?</h2>
        <p>Body Mass Index (BMI) is a simple calculation 
        used to assess a person's body weight in relation 
        to their height. It's calculated by dividing an individual's 
        weight (in kilograms) by the square of their height (in meters). 
        BMI is commonly used as a general indicator of whether someone 
        is underweight, normal weight, overweight, or obese.</p>
        <p>The BMI categories are:</p>
        <ul>
          <li>Underweight: BMI less than 18.5</li>
          <li>Normal weight: BMI between 18.5 and 24.9</li>
          <li>Overweight: BMI between 25 and 29.9</li>
          <li>Obesity: BMI 30 or greater</li>
        </ul>
        <h3>Limitations of BMI</h3>
        <p>
        While BMI is widely used, it has some limitations. 
        It doesn't differentiate between muscle mass and fat mass, 
        so individuals with high muscle mass (such as athletes) 
        may be classified as overweight or obese even though 
        they have low body fat. Additionally, BMI doesn't consider 
        fat distribution, which is an important factor in 
        assessing health risks. It also doesn't account for 
        differences in body composition due to age, gender, or ethnicity.
        </p>
        <p>
        For a more comprehensive assessment of health, 
        BMI should be used alongside other measurements, 
        such as waist-to-hip ratio or body fat percentage.
        </p>
        </div>

        <form id="bmi-form">
          <div class="input-group">
            <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
            <select id="${FORM_FIELDS.UNIT_SYSTEM}" name="${FORM_FIELDS.UNIT_SYSTEM}">
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>
          <div class="input-group">
            <label for="height">Height</label>
            <input type="text" id="height" name="height" placeholder="m">
          </div>
          <div class="input-group">
            <label for="weight">Weight</label>
            <input type="text" id="weight" name="weight" placeholder="kg">
          </div>
          <div class="button-group">
            <button type="reset">Reset</button>
            <button type="submit">Calculate</button>
          </div>
        </form>

        <div class="error-message"></div>
        <div class="results">
          <h2>Results</h2>
          <table>
            <tr>
              <td>BMI</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Health Risk</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Ideal weight</td>
              <td>-</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="sources">
    Sources:
    <ul>
      <li>World Health Organization (WHO) – BMI Classification 
      and Health Risks</li>
      <li>National Institutes of Health (NIH) – 
      Health Risks Associated with Overweight and Obesity</li>
      <li>Centers for Disease Control and Prevention (CDC) – 
      Body Mass Index and Health</li>
      <li>Harvard School of Public Health – 
      Understanding Obesity-Related Health Risks</li>
    </ul>
  </div>
      </section>
    `
var h = ((i) => (
  (i.WEIGHT = 'weight'),
  (i.HEIGHT = 'height'),
  (i.WAIST = 'waist'),
  (i.NECK = 'neck'),
  (i.HIP = 'hip'),
  (i.AGE = 'age'),
  (i.WEIGHT_GOAL = 'weightGoal'),
  (i.WEEKS_TO_WEIGHT_GOAL = 'weeksToWeightGoal'),
  (i.DAILY_CALORIES = 'dailyCalories'),
  i
))(h || {})
class k extends v {
  constructor() {
    super(() => {
      var e
      return (e = this.unitSystemSelect) == null ? void 0 : e.value
    })
    l(this, 'heightInput', null)
    l(this, 'weightInput', null)
    l(this, 'unitSystemSelect', null)
  }
  render(e) {
    var a
    ;(e.innerHTML = D),
      this.initializeCommonElements(),
      this.initializeInputs([h.HEIGHT, h.WEIGHT]),
      (this.weightInput = this.getElement(n.WEIGHT)),
      (this.heightInput = this.getElement(n.HEIGHT)),
      (this.unitSystemSelect = this.getElement(n.UNIT_SYSTEM)),
      (a = this.unitSystemSelect) == null ||
        a.addEventListener('change', this.updatePlaceholders.bind(this))
  }
  fillForm(e) {
    this.unitSystemSelect &&
      e.unitSystem &&
      (this.unitSystemSelect.value = e.unitSystem),
      this.setInputValue(this.heightInput, e.height),
      this.setInputValue(this.weightInput, e.weight),
      this.updatePlaceholders()
  }
  setInputValue(e, a) {
    e && a && (e.value = a.toString())
  }
  bindCalculateEvent(e) {
    var a
    ;(a = this.form) == null ||
      a.addEventListener('submit', (s) => {
        s.preventDefault()
        const r = new FormData(this.form)
        e(r)
      })
  }
  updateResults(e) {
    if (!this.resultsTable) return
    const a = this.resultsTable.rows
    ;(a[0].cells[1].textContent = e.bmi.toFixed(2)),
      (a[1].cells[1].textContent = e.category),
      (a[2].cells[1].textContent = e.healthRisk)
    const s = e.idealWeight[0].toFixed(0),
      r = e.idealWeight[1].toFixed(0)
    a[3].cells[1].textContent = `${s} - ${r} kg`
  }
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ class N {
  constructor(t, e, a, s, r, o) {
    ;(this.user = t),
      (this.bmiCalculator = e),
      (this.bodycompositionCalculator = a),
      (this.bmrCalculator = s),
      (this.tdeeCalculator = r),
      (this.calorieCalculator = o)
  }
  getBmi() {
    return this.bmiCalculator.calculateBmi(this.user)
  }
  getBmiType() {
    const t = this.getBmi()
    return this.bmiCalculator.calculateBmiType(t)
  }
  getBmiPrime() {
    const t = this.getBmi()
    return this.bmiCalculator.calculateBmiPrime(t)
  }
  getIdealWeight() {
    return this.bmiCalculator.calculateIdealWeight(this.user)
  }
  getWaistToHipRatio() {
    return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)
  }
  getWaistToHeightRatio() {
    return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)
  }
  getBodyFatPercentage() {
    return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)
  }
  getLeanBodyMass() {
    return this.bodycompositionCalculator.calculateLeanBodyMass(this.user)
  }
  getBmrHarrisBenedict() {
    return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)
  }
  getBmrMifflinStJeor() {
    return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)
  }
  getTdeeHarrisBenedict() {
    const t = this.getBmrHarrisBenedict()
    return this.tdeeCalculator.calculateTdeeHarrisBenedict(this.user, t)
  }
  getTdeeMifflinStJeor() {
    const t = this.getBmrMifflinStJeor()
    return this.tdeeCalculator.calculateTdeeMifflinStJeor(this.user, t)
  }
  getCaloricSurplusOrDeficit() {
    const t = this.getTdeeHarrisBenedict()
    return this.calorieCalculator.calculateCaloricSurplusOrDeficit(this.user, t)
  }
  getEstimatedWeightChangeWeekly() {
    const t = this.getCaloricSurplusOrDeficit()
    return this.calorieCalculator.calculateEstimatedWeightChangeWeekly(
      t,
      this.user
    )
  }
  getEstimatedWeightChangeMonthly() {
    const t = this.getCaloricSurplusOrDeficit()
    return this.calorieCalculator.calculateEstimatedWeightChangeMonthly(
      t,
      this.user
    )
  }
  getEstimateTimeToWeightGoal() {
    const t = this.getCaloricSurplusOrDeficit()
    return this.calorieCalculator.calculateEstimatedWeeksToWeightGoal(
      t,
      this.user
    )
  }
  getCaloriesForWeightGoal() {
    const t = this.getTdeeHarrisBenedict()
    return this.calorieCalculator.calculateCaloriesForWeightGoal(this.user, t)
  }
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ var u
;(function (i) {
  ;(i.UnderweightSevereThinness = 'underweight, severe thinness'),
    (i.UnderweightModerateThinness = 'underweight, moderate thinness'),
    (i.UnderweightMildThinness = 'underweight, mild thinness'),
    (i.Normal = 'normal weight'),
    (i.Overweight = 'overweight, pre-obese'),
    (i.ObeseFirstGrade = 'obese, class I'),
    (i.ObeseSecondGrade = 'obese, class II'),
    (i.ObeseThirdGrade = 'obese, class III')
})(u || (u = {}))
const A = [
  { min: 0, max: 15.9, type: u.UnderweightSevereThinness },
  { min: 16, max: 16.9, type: u.UnderweightModerateThinness },
  { min: 17, max: 18.4, type: u.UnderweightMildThinness },
  { min: 18.5, max: 24.9, type: u.Normal },
  { min: 25, max: 29.9, type: u.Overweight },
  { min: 30, max: 34.9, type: u.ObeseFirstGrade },
  { min: 35, max: 39.9, type: u.ObeseSecondGrade },
  { min: 40, max: 100, type: u.ObeseThirdGrade },
]
var w
;(function (i) {
  ;(i.Sedentary = 'sedentary'),
    (i.Lightly = 'lightly'),
    (i.Moderately = 'moderately'),
    (i.Very = 'very'),
    (i.Extremely = 'extremely')
})(w || (w = {}))
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ class x {
  calculateBmi(t) {
    this.validateWeightAndHeight(t)
    const e = 2
    return t.weight / Math.pow(t.height, e)
  }
  calculateBmiType(t) {
    this.validateBmi(t)
    const e = this.roundBmi(t)
    return this.findBmiType(e)
  }
  calculateIdealWeight(t) {
    this.validateHeight(t)
    const e = this.getNormalBmiRange(),
      a = this.calculateWeight(e.min, t.height),
      s = this.calculateWeight(e.max, t.height)
    return [a, s]
  }
  calculateBmiPrime(t) {
    return t / 25
  }
  validateWeightAndHeight(t) {
    if (t.weight === void 0 || t.height === void 0)
      throw new Error('Weight and height are required for BMI calculation.')
    if (typeof t.weight != 'number' || typeof t.height != 'number')
      throw new Error('Weight and height must be numbers.')
    if (t.weight <= 0 || t.height <= 0)
      throw new Error('Weight and height must be positive numbers.')
  }
  validateHeight(t) {
    if (t.height === void 0)
      throw new Error('Height is required for ideal weight calculation.')
    if (typeof t.height != 'number') throw new Error('Height must be a number.')
    if (t.height <= 0) throw new Error('Height must be a positive number.')
  }
  validateBmi(t) {
    if (t <= 0 || t > 100)
      throw new Error(`BMI out of range. Please check your values. BMI: ${t}`)
  }
  roundBmi(t) {
    return Math.round(t)
  }
  findBmiType(t) {
    for (const e of A) if (t >= e.min && t <= e.max) return e.type
    throw new Error('Bmi Type could not be found')
  }
  getNormalBmiRange() {
    const t = A.find((e) => e.type === u.Normal)
    if (!t) throw new Error('Could not find normal BMI range.')
    return t
  }
  calculateWeight(t, e) {
    return t * Math.pow(e, 2)
  }
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ class V {
  constructor() {
    ;(this.CM_PER_METER = 100),
      (this.PERCENTAGE = 100),
      (this.TOTAL_BODY_COMPOSITION = 1),
      (this.BODY_FAT = { CONSTANT_FACTOR: 495, SUBTRACTION_CONSTANT: 450 }),
      (this.BODY_FAT_MALE = {
        CONSTANT: 1.0324,
        WAIST_NECK_FACTOR: 0.19077,
        HEIGHT_FACTOR: 0.15456,
      }),
      (this.BODY_FAT_FEMALE = {
        CONSTANT: 1.29579,
        WAIST_HIP_NECK_FACTOR: 0.35004,
        HEIGHT_FACTOR: 0.221,
      })
  }
  calculateWaistToHipRatio(t) {
    return this.validateWaistAndHip(t), t.waist / t.hip
  }
  calculateWaistToHeightRatio(t) {
    this.validateWaistAndHeight(t)
    const e = this.convertHeightToCentimeter(t.height)
    return t.waist / e
  }
  calculateBodyFatPercentage(t) {
    this.validateRequiredMeasurements(t)
    const e = this.convertHeightToCentimeter(t.height)
    return this.calculateBodyFatBasedOnGender(t, e)
  }
  calculateLeanBodyMass(t) {
    this.validateRequiredMeasurements(t)
    const a = this.calculateBodyFatPercentage(t) / this.PERCENTAGE,
      s = this.TOTAL_BODY_COMPOSITION - a
    return t.weight * s
  }
  convertHeightToCentimeter(t) {
    return t * this.CM_PER_METER
  }
  calculateMaleBodyFat(t, e) {
    this.validateWaistAndNeck(t)
    const {
        CONSTANT: a,
        WAIST_NECK_FACTOR: s,
        HEIGHT_FACTOR: r,
      } = this.BODY_FAT_MALE,
      { CONSTANT_FACTOR: o, SUBTRACTION_CONSTANT: c } = this.BODY_FAT,
      p = a - s * Math.log10(t.waist - t.neck) + r * Math.log10(e)
    return o / p - c
  }
  calculateFemaleBodyFat(t, e) {
    this.validateWaistHipAndNeck(t)
    const {
        CONSTANT: a,
        WAIST_HIP_NECK_FACTOR: s,
        HEIGHT_FACTOR: r,
      } = this.BODY_FAT_FEMALE,
      { CONSTANT_FACTOR: o, SUBTRACTION_CONSTANT: c } = this.BODY_FAT,
      p = a - s * Math.log10(t.waist + t.hip - t.neck) + r * Math.log10(e)
    return o / p - c
  }
  validateWaistAndHip(t) {
    if (!t.waist || !t.hip)
      throw new Error(
        'Waist and hip measurements are required for waist to hip calculation.'
      )
  }
  validateWaistAndHeight(t) {
    if (!t.waist || !t.height)
      throw new Error(
        'Waist and height measurements are required for waist to height calculation.'
      )
  }
  validateWaistHipAndNeck(t) {
    if (!t.waist || !t.neck || !t.hip)
      throw new Error(
        'Waist, hip and neck is required to calculate body fat percentage for female'
      )
  }
  validateWaistAndNeck(t) {
    if (!t.waist || !t.neck)
      throw new Error(
        'Waist and neck is required to calculate body fat percentage for male'
      )
  }
  validateRequiredMeasurements(t) {
    if (t.weight === void 0 || t.height === void 0)
      throw new Error(
        'Weight and height are required for body composition calculations.'
      )
  }
  calculateBodyFatBasedOnGender(t, e) {
    if (t.gender === 'male') return this.calculateMaleBodyFat(t, e)
    if (t.gender === 'female') return this.calculateFemaleBodyFat(t, e)
    throw new Error('Invalid gender. Gender must be either "male" or "female".')
  }
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ class P {
  constructor() {
    ;(this.CM_PER_METER = 100),
      (this.MIFFLIN_ST_JEOR = {
        WEIGHT_FACTOR: 10,
        HEIGHT_FACTOR: 6.25,
        AGE_FACTOR: 5,
        MALE_ADJUSTMENT: 5,
        FEMALE_ADJUSTMENT: -161,
      }),
      (this.HARRIS_BENEDICT = {
        FEMALE: {
          BASE: 447.593,
          WEIGHT_FACTOR: 9.247,
          HEIGHT_FACTOR: 3.098,
          AGE_FACTOR: 4.33,
        },
        MALE: {
          BASE: 88.362,
          WEIGHT_FACTOR: 13.397,
          HEIGHT_FACTOR: 4.799,
          AGE_FACTOR: 5.677,
        },
      })
  }
  calculateBmrHarrisBenedict(t) {
    this.validateRequiredFields(t)
    const e = this.convertHeightToCentimeter(t.height)
    return this.calculateBmrBasedOnGender(t, e)
  }
  calculateBmrMifflinStJeor(t) {
    this.validateRequiredFields(t)
    const e = this.convertHeightToCentimeter(t.height),
      a = this.MIFFLIN_ST_JEOR.WEIGHT_FACTOR * t.weight,
      s = this.MIFFLIN_ST_JEOR.HEIGHT_FACTOR * e,
      r = this.MIFFLIN_ST_JEOR.AGE_FACTOR * t.age,
      o =
        t.gender === 'male'
          ? this.MIFFLIN_ST_JEOR.MALE_ADJUSTMENT
          : this.MIFFLIN_ST_JEOR.FEMALE_ADJUSTMENT
    return a + s - r + o
  }
  convertHeightToCentimeter(t) {
    return t * this.CM_PER_METER
  }
  harrisBenedictFemale(t, e) {
    const {
        BASE: a,
        WEIGHT_FACTOR: s,
        HEIGHT_FACTOR: r,
        AGE_FACTOR: o,
      } = this.HARRIS_BENEDICT.FEMALE,
      c = s * t.weight,
      p = r * e,
      I = o * t.age
    return a + c + p - I
  }
  harrisBenedictMale(t, e) {
    const {
        BASE: a,
        WEIGHT_FACTOR: s,
        HEIGHT_FACTOR: r,
        AGE_FACTOR: o,
      } = this.HARRIS_BENEDICT.MALE,
      c = s * t.weight,
      p = r * e,
      I = o * t.age
    return a + c + p - I
  }
  calculateBmrBasedOnGender(t, e) {
    if (t.gender === 'male') return this.harrisBenedictMale(t, e)
    if (t.gender === 'female') return this.harrisBenedictFemale(t, e)
    throw new Error("Invalid gender. Gender must be either 'male' or 'female'.")
  }
  validateRequiredFields(t) {
    if (t.weight === void 0 || typeof t.weight != 'number' || t.weight <= 0)
      throw new Error('Valid weight is required for BMR calculation.')
    if (t.height === void 0 || typeof t.height != 'number' || t.height <= 0)
      throw new Error('Valid height is required for BMR calculation.')
    if (t.age === void 0 || typeof t.age != 'number' || t.age <= 0)
      throw new Error('Valid age is required for BMR calculation.')
    if (t.gender === void 0 || (t.gender !== 'male' && t.gender !== 'female'))
      throw new Error(
        "Valid gender is required for BMR calculation. Gender must be either 'male' or 'female'."
      )
  }
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ class U {
  constructor() {
    this.ACTIVITY_FACTORS = {
      SEDENTARY: 1.2,
      LIGHTLY: 1.375,
      MODERATELY: 1.55,
      VERY: 1.725,
      EXTREMELY: 1.9,
    }
  }
  calculateTdeeMifflinStJeor(t, e) {
    this.validateAgeAndActivityLevel(t)
    const a = e,
      s = this.getActivityFactor(t.activityLevel)
    return this.calculateTdee(a, s)
  }
  calculateTdeeHarrisBenedict(t, e) {
    this.validateAgeAndActivityLevel(t)
    const a = e,
      s = this.getActivityFactor(t.activityLevel)
    return this.calculateTdee(a, s)
  }
  getActivityFactor(t) {
    switch (t) {
      case w.Sedentary:
        return this.ACTIVITY_FACTORS.SEDENTARY
      case w.Lightly:
        return this.ACTIVITY_FACTORS.LIGHTLY
      case w.Moderately:
        return this.ACTIVITY_FACTORS.MODERATELY
      case w.Very:
        return this.ACTIVITY_FACTORS.VERY
      case w.Extremely:
        return this.ACTIVITY_FACTORS.EXTREMELY
      default:
        throw new Error(
          'Activity level must be sedentary, lightly, moderately, very, or extremely'
        )
    }
  }
  validateAgeAndActivityLevel(t) {
    if (!t.age || !t.activityLevel)
      throw new Error('Age and activity level is required')
  }
  calculateTdee(t, e) {
    return t * e
  }
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ const Y = { min: 0, max: 700 },
  J = { min: 0, max: 1543 },
  q = { min: 0, max: 2.5 },
  $ = { min: 0, max: 8.2 }
function z(i) {
  try {
    K(i),
      i.weight !== void 0 && X(i),
      i.height !== void 0 && Q(i),
      Z(i),
      ee(i),
      te(i),
      j(i),
      ie(i),
      ae(i),
      se(i)
  } catch (t) {
    const e = `Validation error in user object: ${JSON.stringify(i)} - ${t.message}. Stack trace: ${t.stack}`
    throw new Error(e)
  }
}
function K(i) {
  ;[
    'age',
    'waist',
    'hip',
    'neck',
    'dailyCalories',
    'weightGoal',
    'weeksToWeightGoal',
  ].forEach((e) => {
    if (e in i && i[e] !== void 0 && typeof i[e] != 'number')
      throw new TypeError(`${e} must be a number if provided`)
  })
}
function j(i) {
  if (i.unitSystem === void 0) throw new Error('Unit system is required')
  if (typeof i.unitSystem != 'string')
    throw new TypeError(
      `Unit system must be a string. Check the unitSystem value in ${JSON.stringify(i)}`
    )
  if (i.unitSystem !== 'metric' && i.unitSystem !== 'imperial')
    throw new Error('Unit system must be either "metric" or "imperial"')
}
function R(i, t, e, a, s) {
  if (i < t.min || i > t.max)
    throw new RangeError(
      `${e.charAt(0).toUpperCase() + e.slice(1)} using the ${a} system must be between ${t.min}-${t.max}. Check the ${e.toLowerCase()} value in ${JSON.stringify(s)}`
    )
}
function X(i) {
  if (typeof i.weight != 'number')
    throw new Error(
      `Weight must be a number if provided. Check the weight value in ${JSON.stringify(i)}`
    )
  const t = i.unitSystem === 'metric' ? Y : J,
    e = i.unitSystem === 'metric' ? 'metric' : 'imperial'
  R(i.weight, t, 'weight', e, i)
}
function Q(i) {
  if (typeof i.height != 'number')
    throw new Error(
      `Height must be a number if provided. Check the height value in ${JSON.stringify(i)}`
    )
  const t = i.unitSystem === 'metric' ? q : $,
    e = i.unitSystem === 'metric' ? 'metric' : 'imperial'
  R(i.height, t, 'height', e, i)
}
function Z(i) {
  if (i.gender !== void 0 && i.gender !== 'male' && i.gender !== 'female')
    throw new TypeError(
      `Gender must be male or female. Check the gender value in ${JSON.stringify(i)}`
    )
}
function ee(i) {
  i.age !== void 0 &&
    i.age < 18 &&
    console.warn(
      `Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(i)}`
    )
}
function te(i) {
  const t = ['sedentary', 'lightly', 'moderately', 'very', 'extremely']
  if (i.activityLevel !== void 0 && !t.includes(i.activityLevel))
    throw new TypeError(
      `Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(i)}`
    )
}
function ie(i) {
  if (i.dailyCalories !== void 0 && i.dailyCalories < 0)
    throw new Error(
      `Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(i)}`
    )
}
function ae(i) {
  if (i.weightGoal !== void 0 && i.weightGoal < 0)
    throw new Error(
      `The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(i)}`
    )
}
function se(i) {
  if (i.weeksToWeightGoal !== void 0 && i.weeksToWeightGoal < 0)
    throw new Error(
      `Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(i)}`
    )
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ function le(i) {
  return { ...i }
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ function re(i) {
  return i.unitSystem === 'metric'
    ? i
    : {
        ...i,
        height: i.height !== void 0 ? ne(i.height) : void 0,
        weight: i.weight !== void 0 ? W(i.weight) : void 0,
        waist: i.waist !== void 0 ? b(i.waist) : void 0,
        hip: i.hip !== void 0 ? b(i.hip) : void 0,
        neck: i.neck !== void 0 ? b(i.neck) : void 0,
        weightGoal: i.weightGoal !== void 0 ? W(i.weightGoal) : void 0,
        unitSystem: 'metric',
      }
}
function ne(i) {
  return i !== void 0 ? i * 0.3048 : void 0
}
function W(i) {
  return i !== void 0 ? i * 0.453592 : void 0
}
function b(i) {
  return i !== void 0 ? i * 2.54 : void 0
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ class oe {
  constructor() {
    ;(this.DAYS_IN_WEEK = 7),
      (this.DAYS_IN_MONTH = 30),
      (this.CALORIES_PER_KILO = 7700),
      (this.REFERENCE_WEIGHT = 70)
  }
  calculateCaloricSurplusOrDeficit(t, e) {
    return this.validateDailyCalories(t), e - t.dailyCalories
  }
  calculateEstimatedWeightChangeWeekly(t, e) {
    return (
      this.validateWeight(e), this.estimateWeightChange(t, e, this.DAYS_IN_WEEK)
    )
  }
  calculateEstimatedWeightChangeMonthly(t, e) {
    return (
      this.validateWeight(e),
      this.estimateWeightChange(t, e, this.DAYS_IN_MONTH)
    )
  }
  calculateEstimatedWeeksToWeightGoal(t, e) {
    this.validateWeightGoal(e), this.validateWeight(e)
    const a = this.estimateWeightChange(t, e, this.DAYS_IN_WEEK),
      s = e.weightGoal - e.weight,
      o = Math.abs(s) / Math.abs(a)
    return Math.ceil(o)
  }
  calculateCaloriesForWeightGoal(t, e) {
    this.validateWeightGoal(t),
      this.validateWeight(t),
      this.validateWeeksToWeightGoal(t)
    const a = t.weightGoal - t.weight,
      o =
        ((Math.abs(a) / t.weeksToWeightGoal) * this.CALORIES_PER_KILO) /
        this.DAYS_IN_WEEK
    return a > 0 ? Math.round(e + o) : Math.round(e - o)
  }
  validateDailyCalories(t) {
    if (
      t.dailyCalories === void 0 ||
      typeof t.dailyCalories != 'number' ||
      t.dailyCalories < 0
    )
      throw new Error('Valid dailyCalories is required for calorie calculation')
  }
  validateWeightGoal(t) {
    if (
      t.weightGoal === void 0 ||
      typeof t.weightGoal != 'number' ||
      t.weightGoal <= 0
    )
      throw new Error(
        'Valid weightGoal is required for some calorie calculations'
      )
  }
  validateWeight(t) {
    if (t.weight === void 0 || typeof t.weight != 'number' || t.weight <= 0)
      throw new Error('Valid weight is required for some calorie calculations')
  }
  validateWeeksToWeightGoal(t) {
    if (
      t.weeksToWeightGoal === void 0 ||
      typeof t.weeksToWeightGoal != 'number' ||
      t.weeksToWeightGoal <= 0
    )
      throw new Error(
        'Valid weeksToWeightGoal is required for some calorie calculations'
      )
  }
  estimateWeightChange(t, e, a) {
    const s = this.CALORIES_PER_KILO * (e.weight / this.REFERENCE_WEIGHT)
    return (t * a) / s
  }
}
/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */ class he {
  static createHealthCalculator(t) {
    z(t)
    const e = le(t),
      a = re(e),
      s = new x(),
      r = new V(),
      o = new P(),
      c = new U(),
      p = new oe()
    return new N(a, s, r, o, c, p)
  }
}
var d = ((i) => (
  (i.UNDERWEIGHT_SEVERE = 'underweight, severe thinness'),
  (i.UNDERWEIGHT_MODERATE = 'underweight, moderate thinness'),
  (i.UNDERWEIGHT_MILD = 'underweight, mild thinness'),
  (i.NORMAL_WEIGHT = 'normal weight'),
  (i.OVERWEIGHT_PRE_OBESE = 'overweight, pre-obese'),
  (i.OBESE_CLASS_I = 'obese, class I'),
  (i.OBESE_CLASS_II = 'obese, class II'),
  (i.OBESE_CLASS_III = 'obese, class III'),
  i
))(d || {})
class ce {
  static fromString(t) {
    const e = t.toLowerCase().trim()
    for (const [a, s] of Object.entries(d))
      if (s.toLowerCase() === e) return d[a]
    throw new Error(`Invalid BMI category: ${t}`)
  }
}
function ue(i) {
  switch (i) {
    case d.UNDERWEIGHT_SEVERE:
      return 'High risk of malnutrition, weakened immune system, and more.'
    case d.UNDERWEIGHT_MODERATE:
      return 'Risks include nutrient deficiencies and weakened immune response.'
    case d.UNDERWEIGHT_MILD:
      return 'Moderate risk of malnutrition.'
    case d.NORMAL_WEIGHT:
      return 'Lowest health risks with a balanced lifestyle.'
    case d.OVERWEIGHT_PRE_OBESE:
      return 'Increased risk of cardiovascular diseases and type 2 diabetes.'
    case d.OBESE_CLASS_I:
      return 'Significant risk of metabolic syndrome and heart disease.'
    case d.OBESE_CLASS_II:
      return 'Increased risk for heart disease and stroke.'
    case d.OBESE_CLASS_III:
      return 'Severe health risks including reduced life expectancy.'
    default:
      return 'Unknown health risk.'
  }
}
class de {
  constructor(t) {
    l(this, 'calculator')
    ;(this.userModel = t), (this.calculator = this.createCalculator())
  }
  createCalculator() {
    const t = this.userModel.getData()
    return he.createHealthCalculator({
      unitSystem: t.unitSystem,
      weight: t.weight ?? 70,
      height: t.height ?? 1.75,
      age: t.age,
      gender: t.gender,
      waist: t.waist,
      hip: t.hip,
      neck: t.neck,
      activityLevel: t.activityLevel,
      dailyCalories: t.dailyCalories,
      weightGoal: t.weightGoal,
      weeksToWeightGoal: t.weeksToWeightGoal,
    })
  }
  getBmi() {
    return (this.calculator = this.createCalculator()), this.calculator.getBmi()
  }
  getBmiType() {
    this.calculator = this.createCalculator()
    const t = this.calculator.getBmiType()
    return ce.fromString(t)
  }
  getHealthRisk() {
    return ue(this.getBmiType())
  }
  getBmiPrime() {
    return (
      (this.calculator = this.createCalculator()), this.calculator.getBmiPrime()
    )
  }
  getIdealWeight() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getIdealWeight()
    )
  }
  getBodyFatPercentage() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getBodyFatPercentage()
    )
  }
  getWaistToHipRatio() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getWaistToHipRatio()
    )
  }
  getWaistToHeightRatio() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getWaistToHeightRatio()
    )
  }
  getLeanBodyMass() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getLeanBodyMass()
    )
  }
  getBmrMifflinStJeor() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getBmrMifflinStJeor()
    )
  }
  getBmrHarrisBenedict() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getBmrHarrisBenedict()
    )
  }
  getTdeeMifflinStJeor() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getTdeeMifflinStJeor()
    )
  }
  getTdeeHarrisBenedict() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getTdeeHarrisBenedict()
    )
  }
  getCaloricSurplusOrDeficit() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getCaloricSurplusOrDeficit()
    )
  }
  getEstimatedWeightChangeWeekly() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getEstimatedWeightChangeWeekly()
    )
  }
  getEstimatedWeightChangeMonthly() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getEstimatedWeightChangeMonthly()
    )
  }
  getEstimateTimeToWeightGoal() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getEstimateTimeToWeightGoal()
    )
  }
  getCaloriesForWeightGoal() {
    return (
      (this.calculator = this.createCalculator()),
      this.calculator.getCaloriesForWeightGoal()
    )
  }
}
class ge {
  constructor(t) {
    l(this, 'calculator')
    this.calculator = new de(t)
  }
  getBmi() {
    return this.calculator.getBmi()
  }
  getBmiType() {
    return this.calculator.getBmiType()
  }
  getHealthRisk() {
    return this.calculator.getHealthRisk()
  }
  getBmiPrime() {
    return this.calculator.getBmiPrime()
  }
  getIdealWeight() {
    return this.calculator.getIdealWeight()
  }
  getBodyFatPercentage() {
    return this.calculator.getBodyFatPercentage()
  }
  getWaistToHipRatio() {
    return this.calculator.getWaistToHipRatio()
  }
  getWaistToHeightRatio() {
    return this.calculator.getWaistToHeightRatio()
  }
  getLeanBodyMass() {
    return this.calculator.getLeanBodyMass()
  }
  getBmrMifflinStJeor() {
    return this.calculator.getBmrMifflinStJeor()
  }
  getBmrHarrisBenedict() {
    return this.calculator.getBmrHarrisBenedict()
  }
  getTdeeMifflinStJeor() {
    return this.calculator.getTdeeMifflinStJeor()
  }
  getTdeeHarrisBenedict() {
    return this.calculator.getTdeeHarrisBenedict()
  }
  getCaloricSurplusOrDeficit() {
    return this.calculator.getCaloricSurplusOrDeficit()
  }
  getEstimatedWeightChangeWeekly() {
    return this.calculator.getEstimatedWeightChangeWeekly()
  }
  getEstimatedWeightChangeMonthly() {
    return this.calculator.getEstimatedWeightChangeMonthly()
  }
  getCaloriesForWeightGoal() {
    return this.calculator.getCaloriesForWeightGoal()
  }
  getEstimateTimeToWeightGoal() {
    return this.calculator.getEstimateTimeToWeightGoal()
  }
}
class y {
  constructor(t, e) {
    l(this, 'user')
    l(this, 'calculator')
    ;(this.user = t), (this.calculator = e)
  }
  handleErrors(t) {
    this.view.showError(t.message)
  }
  resetForm() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
  fillFormWithUserData() {
    const t = this.user.getData()
    this.view.fillForm(t)
  }
}
var T = ((i) => ((i.MALE = 'male'), (i.FEMALE = 'female'), i))(T || {}),
  H = ((i) => (
    (i.SEDENTARY = 'sedentary'),
    (i.LIGHTLY = 'lightly'),
    (i.MODERATELY = 'moderately'),
    (i.VERY = 'very'),
    (i.EXTREMELY = 'extremely'),
    i
  ))(H || {})
class f {
  validateBmiFormData(t) {
    this.validateUnitSystem(t.unitSystem),
      this.validateNumericInput(t.height, 'height'),
      this.validateNumericInput(t.weight, 'weight')
  }
  validateTotalDailyEnergyExpenditureFormData(t) {
    this.validateUnitSystem(t.unitSystem),
      this.validateGender(t.gender),
      this.validateNumericInput(t.weight, 'weight'),
      this.validateNumericInput(t.height, 'height'),
      this.validateNumericInput(t.age, 'age'),
      this.validateActivityLevel(t.activityLevel)
  }
  validateWaistToHipRatioFormData(t) {
    this.validateUnitSystem(t.unitSystem),
      this.validateNumericInput(t.waist, 'waist'),
      this.validateNumericInput(t.hip, 'hip')
  }
  validateWaistHeightRatioFormData(t) {
    this.validateUnitSystem(t.unitSystem),
      this.validateNumericInput(t.waist, 'waist'),
      this.validateNumericInput(t.height, 'height')
  }
  validateBodyFatPercentageFormData(t) {
    this.validateUnitSystem(t.unitSystem),
      this.validateGender(t.gender),
      this.validateNumericInput(t.weight, 'weight'),
      this.validateNumericInput(t.waist, 'waist'),
      this.validateNumericInput(t.neck, 'neck'),
      t.gender === T.FEMALE &&
        t.hip !== void 0 &&
        this.validateNumericInput(t.hip, 'hip')
  }
  validateBasalMetabolicRateFormData(t) {
    this.validateUnitSystem(t.unitSystem),
      this.validateGender(t.gender),
      this.validateNumericInput(t.weight, 'weight'),
      this.validateNumericInput(t.height, 'height'),
      this.validateNumericInput(t.age, 'age')
  }
  validateCaloriesForWeightGoalFormData(t) {
    this.validateUnitSystem(t.unitSystem),
      this.validateGender(t.gender),
      this.validateNumericInput(t.weight, 'weight'),
      this.validateNumericInput(t.height, 'height'),
      this.validateNumericInput(t.age, 'age'),
      this.validateActivityLevel(t.activityLevel),
      this.validateNumericInput(t.weightGoal, 'weight goal'),
      this.validateNumericInput(t.weeksToWeightGoal, 'weeks to weight goal')
  }
  validateEstimateTimeToWeightGoalFormData(t) {
    this.validateUnitSystem(t.unitSystem),
      this.validateGender(t.gender),
      this.validateActivityLevel(t.activityLevel),
      this.validateNumericInput(t.weight, 'weight'),
      this.validateNumericInput(t.height, 'height'),
      this.validateNumericInput(t.age, 'age'),
      this.validateNumericInput(t.weightGoal, 'weight goal'),
      this.validateNumericInput(t.dailyCalories, 'daily calories')
  }
  validateUnitSystem(t) {
    if (!Object.values(E).includes(t))
      throw new Error('Invalid unit system value')
  }
  validateGender(t) {
    if (!Object.values(T).includes(t)) throw new Error('Invalid gender value')
  }
  validateActivityLevel(t) {
    if (!Object.values(H).includes(t))
      throw new Error('Invalid activity level value')
  }
  validateNumericInput(t, e) {
    if (typeof t != 'number' || isNaN(t) || t <= 0)
      throw new Error(`Invalid ${e} value`)
  }
}
class me extends y {
  constructor(e, a) {
    super(e, a)
    l(this, 'view')
    l(this, 'formValidator')
    ;(this.view = new k()), (this.formValidator = new f())
  }
  init(e) {
    this.view.render(e),
      this.fillFormWithUserData(),
      this.view.bindCalculateEvent(this.handleCalculate.bind(this)),
      this.view.bindResetEvent(this.handleReset.bind(this))
  }
  fillFormWithUserData() {
    const e = this.user.getData()
    this.view.fillForm(e)
  }
  handleCalculate(e) {
    try {
      const a = this.parseFormData(e)
      this.formValidator.validateBmiFormData(a),
        this.user.setData(a),
        this.updateView(),
        this.view.hideError()
    } catch (a) {
      this.handleErrors(a)
    }
  }
  parseFormData(e) {
    return {
      unitSystem: e.get('${FORM_FIELDS.UNIT_SYSTEM}'),
      weight: parseFloat(e.get('weight')),
      height: parseFloat(e.get('height')),
    }
  }
  updateView() {
    const e = this.calculator.getBmi(),
      a = this.calculator.getBmiType(),
      s = this.calculator.getHealthRisk(),
      r = this.calculator.getIdealWeight()
    this.view.updateResults({
      bmi: e,
      category: a,
      healthRisk: s,
      idealWeight: r,
    })
  }
  handleReset() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
}
const pe = `
<section class="container">
    <h2>Waist-to-Hip Ratio Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your Waist-to-Hip Ratio (WHR) to understand your fat 
            distribution and potential health risks.
        </p>

        <p class="info">
            A WHR value of 
            <strong>0.90 or less</strong> for men and 
            <strong>0.85 or less</strong> for women indicates 
            a lower risk of health complications such as 
            cardiovascular diseases. 
            A higher ratio may suggest a greater risk of metabolic 
            issues and heart 
            conditions, particularly if it exceeds 
            <strong>1.0 for men</strong> and <strong>0.85 for women</strong>.
        </p>

        <form id="waist-hip-ratio-form">
            <div class="input-group">
                <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
                <select id="${FORM_FIELDS.UNIT_SYSTEM}" name="${FORM_FIELDS.UNIT_SYSTEM}">
                    <option value="metric">Metric</option>
                    <option value="imperial">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="waist">Waist Circumference</label>
                <input type="text" id="waist" name="waist" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="hip">Hip Circumference</label>
                <input type="text" id="hip" name="hip" placeholder="cm">
            </div>
            <div class="button-group">
                <button type="reset">Reset</button>
                <button type="submit">Calculate WHR</button>
            </div>
        </form>

        <div class="error-message"></div>
                <div class="results">
            <h2>Results</h2>
            <table>
                <tr>
                    <td>Waist-to-Hip Ratio</td>
                    <td>-</td>
                </tr>
            </table>
    </div>
    <div class="sources">
        Sources:
        <ul>
            <li>World Health Organization (WHO) – 
            Waist-to-Hip Ratio</li>
            <li>Centers for Disease Control and Prevention (CDC) – 
            Health Guidelines</li>
        </ul>
    </div>
</section>
`
class ve extends v {
  constructor() {
    super(() => {
      var e
      return (e = this.unitSystemSelect) == null ? void 0 : e.value
    })
    l(this, 'waistInput', null)
    l(this, 'hipInput', null)
    l(this, 'unitSystemSelect', null)
  }
  render(e) {
    var a
    ;(e.innerHTML = pe),
      this.initializeCommonElements(),
      this.initializeInputs([h.WAIST, h.HIP]),
      (this.waistInput = this.getElement(n.WAIST)),
      (this.hipInput = this.getElement(n.HIP)),
      (this.unitSystemSelect = this.getElement('#unitSystem')),
      (a = this.unitSystemSelect) == null ||
        a.addEventListener('change', this.updatePlaceholders.bind(this))
  }
  fillForm(e) {
    this.unitSystemSelect &&
      e.unitSystem &&
      (this.unitSystemSelect.value = e.unitSystem),
      this.setInputValue(this.waistInput, e.waist),
      this.setInputValue(this.hipInput, e.hip),
      this.updatePlaceholders()
  }
  setInputValue(e, a) {
    e && a && (e.value = a.toString())
  }
  bindCalculateEvent(e) {
    var a
    ;(a = this.form) == null ||
      a.addEventListener('submit', (s) => {
        s.preventDefault()
        const r = new FormData(this.form)
        e(r)
      })
  }
  updateResults(e) {
    if (this.resultsTable) {
      const a = this.resultsTable.querySelector('td:nth-child(2)')
      a && (a.textContent = e.toFixed(2))
    }
  }
}
class ye extends y {
  constructor(e, a) {
    super(e, a)
    l(this, 'view')
    l(this, 'formValidator')
    ;(this.view = new ve()), (this.formValidator = new f())
  }
  init(e) {
    this.view.render(e),
      this.fillFormWithUserData(),
      this.view.bindCalculateEvent(this.handleCalculate.bind(this)),
      this.view.bindResetEvent(this.handleReset.bind(this))
  }
  fillFormWithUserData() {
    const e = this.user.getData()
    this.view.fillForm(e)
  }
  handleCalculate(e) {
    try {
      console.log('handleCalculate called with:', e)
      const a = this.parseFormData(e)
      this.formValidator.validateWaistToHipRatioFormData(a),
        this.user.setData(a),
        this.updateView(),
        this.view.hideError()
    } catch (a) {
      this.handleErrors(a)
    }
  }
  parseFormData(e) {
    return {
      unitSystem: e.get('${FORM_FIELDS.UNIT_SYSTEM}'),
      waist: parseFloat(e.get('waist')),
      hip: parseFloat(e.get('hip')),
    }
  }
  updateView() {
    const e = this.calculator.getWaistToHipRatio()
    console.log('Ratio:', e), this.view.updateResults(e)
  }
  handleReset() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
}
const fe = `
<section class="container">
    <h2>Waist-to-Height Ratio Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your Waist-to-Height Ratio (WHtR) to determine abdominal 
            fat levels and associated health risks.
        </p>

        <p class="info">
            A WHtR value of <strong>less than 0.5</strong> 
            is generally considered 
            healthy for both men and women. 
            Values above 0.5 may indicate an increased risk of cardiovascular d
            isease, type 2 diabetes, and other health conditions. 
            Keeping your waist circumference below half of your height is a 
            guideline for maintaining a healthier profile.
        </p>

        <form id="waist-height-ratio-form">
            <div class="input-group">
                <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
                <select id="${FORM_FIELDS.UNIT_SYSTEM}" name="${FORM_FIELDS.UNIT_SYSTEM}">
                    <option value="metric">Metric</option>
                    <option value="imperial">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="waist">Waist Circumference</label>
                <input type="text" id="waist" name="waist" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="height">Height</label>
                <input type="text" id="height" name="height" placeholder="m">
            </div>
            <div class="button-group">
                <button type="reset">Reset</button>
                <button type="submit">Calculate WHtR</button>
            </div>
        </form>

        <div class="error-message"></div>
                        <div class="results">
            <h2>Results</h2>
            <table>
                <tr>
                    <td>Waist-to-Height Ratio</td>
                    <td>-</td>
                </tr>
            </table>
    </div>
    </div>
    <div class="sources">
        Sources:
        <ul>
            <li>Journal of Clinical Endocrinology & Metabolism – 
            Waist-to-Height Ratio Research</li>
            <li>American Heart Association – Cardiovascular Health</li>
        </ul>
    </div>
</section>
`
class we extends v {
  constructor() {
    super(() => {
      var e
      return (e = this.unitSystemSelect) == null ? void 0 : e.value
    })
    l(this, 'waistInput', null)
    l(this, 'heightInput', null)
    l(this, 'unitSystemSelect', null)
  }
  render(e) {
    var a
    ;(e.innerHTML = fe),
      this.initializeCommonElements(),
      this.initializeInputs([h.WAIST, h.HEIGHT]),
      (this.waistInput = this.getElement(n.WAIST)),
      (this.heightInput = this.getElement(n.HEIGHT)),
      (this.unitSystemSelect = this.getElement('#unitSystem')),
      (a = this.unitSystemSelect) == null ||
        a.addEventListener('change', this.updatePlaceholders.bind(this))
  }
  fillForm(e) {
    this.unitSystemSelect &&
      e.unitSystem &&
      (this.unitSystemSelect.value = e.unitSystem),
      this.setInputValue(this.waistInput, e.waist),
      this.setInputValue(this.heightInput, e.height),
      this.updatePlaceholders()
  }
  setInputValue(e, a) {
    e && a && (e.value = a.toString())
  }
  bindCalculateEvent(e) {
    var a
    ;(a = this.form) == null ||
      a.addEventListener('submit', (s) => {
        s.preventDefault()
        const r = new FormData(this.form)
        e(r)
      })
  }
  updateResults(e) {
    if (this.resultsTable) {
      const a = this.resultsTable.querySelector('td:nth-child(2)')
      a && (a.textContent = e.toFixed(2))
    }
  }
}
class Ee extends y {
  constructor(e, a) {
    super(e, a)
    l(this, 'view')
    l(this, 'formValidator')
    ;(this.view = new we()), (this.formValidator = new f())
  }
  init(e) {
    this.view.render(e),
      this.fillFormWithUserData(),
      this.view.bindCalculateEvent(this.handleCalculate.bind(this)),
      this.view.bindResetEvent(this.handleReset.bind(this))
  }
  fillFormWithUserData() {
    const e = this.user.getData()
    this.view.fillForm(e)
  }
  handleCalculate(e) {
    try {
      console.log('handleCalculate called with:', e)
      const a = this.parseFormData(e)
      this.formValidator.validateWaistHeightRatioFormData(a),
        this.user.setData(a),
        this.updateView(),
        this.view.hideError()
    } catch (a) {
      this.handleErrors(a)
    }
  }
  parseFormData(e) {
    return {
      unitSystem: e.get('${FORM_FIELDS.UNIT_SYSTEM}'),
      waist: parseFloat(e.get('waist')),
      height: parseFloat(e.get('height')),
    }
  }
  updateView() {
    const e = this.calculator.getWaistToHeightRatio()
    this.view.updateResults(e)
  }
  handleReset() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
}
const Te = `
<section class="container">
     <h2>Body Fat Percentage and Lean Body Mass Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your Body Fat Percentage and Lean Body Mass for a deeper 
            understanding of your health and fitness. 
            These metrics can help you track progress, set realistic goals, 
            and optimize your health.
        </p>

        <p class="info">
            Healthy ranges vary, but a body fat percentage of 
            <strong>14-24%</strong> for men and 
            <strong>21-31%</strong> for women is often considered optimal. 
            Values outside these ranges may indicate either too low or too high 
            fat levels, both of which carry health risks like 
            hormonal imbalances, metabolic issues, or cardiovascular disease. 
            Lean Body Mass (LBM), 
            which includes muscle, bone, and organs, is crucial for strength, 
            metabolism, and overall health.
        </p>

        <form id="body-fat-percentage-form">
            <div class="input-group">
                <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
                <select id="${FORM_FIELDS.UNIT_SYSTEM}" name="${FORM_FIELDS.UNIT_SYSTEM}">
                    <option value="metric">Metric</option>
                    <option value="imperial">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="gender">Gender</label>
                <div>
                    <input type="radio" id="male" name="gender" value="male">
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" 
                    value="female">
                    <label for="female">Female</label>
                </div>
            </div>
            <div class="input-group">
                <label for="weight">Weight</label>
                <input type="text" id="weight" name="weight" placeholder="kg">
            </div>
            <div class="input-group">
                <label for="waist">Waist Circumference</label>
                <input type="text" id="waist" name="waist" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="hip">Hip Circumference (for females only)</label>
                <input type="text" id="hip" name="hip" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="neck">Neck Circumference</label>
                <input type="text" id="neck" name="neck" placeholder="cm">
            </div>
            <div class="button-group">
                <button type="reset">Reset</button>
                <button type="submit">Calculate Body Fat Percentage</button>
            </div>
        </form>

        <div class="error-message"></div>
                <div class="results">
            <h2>Results</h2>
            <table>
                <tr>
                    <td>Body Fat Percentage</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Lean Body Mass</td>
                    <td>-</td>
                </tr>
            </table>
            
    </div>
    </div>
    <div class="sources">
        Sources:
        <ul>
            <li>American Council on Exercise (ACE) – 
            Body Fat Percentage Guidelines</li>
            <li>National Institutes of Health (NIH) – Health Research</li>
        </ul>
    </div>
</section>
`
class Ie extends v {
  constructor() {
    super(() => {
      var e
      return (e = this.unitSystemSelect) == null ? void 0 : e.value
    })
    l(this, 'weightInput', null)
    l(this, 'waistInput', null)
    l(this, 'hipInput', null)
    l(this, 'neckInput', null)
    l(this, 'unitSystemSelect', null)
    l(this, 'genderInputs', [])
  }
  render(e) {
    var s, r
    ;(e.innerHTML = Te),
      this.initializeCommonElements(),
      this.initializeInputs([h.WEIGHT, h.WAIST, h.HIP, h.NECK]),
      (this.weightInput = this.getElement(n.WEIGHT)),
      (this.waistInput = this.getElement(n.WAIST)),
      (this.hipInput = this.getElement(n.HIP)),
      (this.neckInput = this.getElement(n.NECK)),
      (this.unitSystemSelect = this.getElement(n.UNIT_SYSTEM))
    const a =
      (s = this.form) == null
        ? void 0
        : s.querySelectorAll('input[name="gender"]')
    ;(this.genderInputs = Array.from(a || [])),
      (r = this.unitSystemSelect) == null ||
        r.addEventListener('change', this.updatePlaceholders.bind(this)),
      this.genderInputs.forEach((o) => {
        o.addEventListener('change', this.updateHipInputVisibility.bind(this))
      }),
      this.updateHipInputVisibility()
  }
  fillForm(e) {
    this.unitSystemSelect &&
      e.unitSystem &&
      (this.unitSystemSelect.value = e.unitSystem),
      this.setInputValue(this.weightInput, e.weight),
      this.setInputValue(this.waistInput, e.waist),
      this.setInputValue(this.neckInput, e.neck),
      e.gender && (this.setGender(e.gender), this.handleHipInput(e)),
      this.updatePlaceholders(),
      this.updateHipInputVisibility()
  }
  setInputValue(e, a) {
    e && a !== void 0 && (e.value = a.toString())
  }
  setGender(e) {
    const a = this.genderInputs.find((s) => s.value === e)
    a && (a.checked = !0)
  }
  handleHipInput(e) {
    this.hipInput &&
      e.hip &&
      e.gender === T.FEMALE &&
      (this.hipInput.value = e.hip.toString())
  }
  updateHipInputVisibility() {
    var s
    const e = this.getElement('.input-group:has(#hip)'),
      a =
        (s = this.getElement('input[value="female"]')) == null
          ? void 0
          : s.checked
    e && (e.style.display = a ? 'block' : 'none')
  }
  bindCalculateEvent(e) {
    var a
    ;(a = this.form) == null ||
      a.addEventListener('submit', (s) => {
        s.preventDefault()
        const r = new FormData(this.form)
        e(r)
      })
  }
  updateResults(e) {
    if (!this.resultsTable) return
    const a = this.resultsTable.rows
    ;(a[0].cells[1].textContent = e.bodyFatPercentage.toFixed(2) + '%'),
      (a[1].cells[1].textContent = e.leanBodyMass.toFixed(2) + ' kg')
  }
}
class be extends y {
  constructor(e, a) {
    super(e, a)
    l(this, 'view')
    l(this, 'formValidator')
    ;(this.view = new Ie()), (this.formValidator = new f())
  }
  init(e) {
    this.view.render(e),
      this.fillFormWithUserData(),
      this.view.bindCalculateEvent(this.handleCalculate.bind(this)),
      this.view.bindResetEvent(this.handleReset.bind(this))
  }
  fillFormWithUserData() {
    const e = this.user.getData()
    this.view.fillForm(e)
  }
  handleCalculate(e) {
    try {
      const a = this.parseFormData(e)
      this.formValidator.validateBodyFatPercentageFormData(a),
        this.user.setData(a),
        this.updateView(),
        this.view.hideError()
    } catch (a) {
      this.handleErrors(a)
    }
  }
  parseFormData(e) {
    const a = {
      unitSystem: e.get('${FORM_FIELDS.UNIT_SYSTEM}'),
      gender: e.get('gender'),
      weight: parseFloat(e.get('weight')),
      waist: parseFloat(e.get('waist')),
      neck: parseFloat(e.get('neck')),
    }
    if (a.gender === T.FEMALE) {
      const s = e.get('hip')
      if (s) a.hip = parseFloat(s)
      else throw new Error('Hip measurement is required for females.')
    }
    return a
  }
  updateView() {
    const e = this.calculator.getBodyFatPercentage(),
      a = this.calculator.getLeanBodyMass()
    this.view.updateResults({ bodyFatPercentage: e, leanBodyMass: a })
  }
  handleReset() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
}
const Se = `
  <section class="container">
    <h2>TDEE Calculator (Harris-Benedict & Mifflin-St Jeor)</h2>
    <div class="content">

      <div class="additional-info">
        <h2>What is TDEE?</h2>
        <p>
        TDEE (Total Daily Energy Expenditure) 
        is the total amount of energy (calories) 
        your body needs per day to maintain its 
        current weight. It takes into account 
        your Basal Metabolic Rate (BMR) and your activity level. 
        TDEE represents the sum of calories burned 
        through basic bodily functions, 
        physical activity, and the thermic effect of food.
        </p>
        <p>
        The Harris-Benedict and Mifflin-St Jeor 
        equations are commonly used to estimate BMR, 
        which is then adjusted based on activity level to determine TDEE. 
        These formulas consider weight, height, age, 
        gender, and activity level to provide an estimate 
        of daily energy needs.
        </p>

        <h3>Limitations of TDEE Calculations</h3>
        <p>
        While both the Harris-Benedict and 
        Mifflin-St Jeor equations offer useful estimates of TDEE, 
        they do not account for variations in muscle mass, body fat percentage, 
        or other metabolic factors that may affect calorie needs. 
        It is recommended to use these TDEE 
        values as part of a broader assessment 
        when planning dietary and fitness goals.
        </p>
      </div>

      <form id="tdee-form">
        <div class="input-group">
          <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
          <select id="${FORM_FIELDS.UNIT_SYSTEM}" name="${FORM_FIELDS.UNIT_SYSTEM}">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="height">Height</label>
          <input type="text" id="height" name="height" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="weight">Weight</label>
          <input type="text" id="weight" name="weight" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" placeholder="years">
        </div>
        <div class="input-group">
          <label for="activityLevel">Activity Level</label>
          <select id="activityLevel" name="activityLevel">
            <option value="sedentary">Sedentary</option>
            <option value="lightly">Lightly Active</option>
            <option value="moderately">Moderately Active</option>
            <option value="very">Very Active</option>
            <option value="extremely">Extremely Active</option>
          </select>
        </div>
        <div class="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>

      <div class="error-message"></div>
      <div class="results">
        <h2>Results</h2>
        <table class="resultTable">
          <tr>
            <td>TDEE (Harris-Benedict)</td>
            <td>-</td>
          </tr>
          <tr>
            <td>TDEE (Mifflin-St Jeor)</td>
            <td>-</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>Harris, J.A. & Benedict, F.G. (1918) – 
        A Biometric Study of Basal Metabolism in Man</li>
        <li>Mifflin, M.D., et al. (1990) – 
        A New Predictive Equation for Resting Energy Expenditure 
        in Healthy Individuals</li>
        <li>National Institutes of Health (NIH) – 
        Understanding Caloric Needs</li>
        <li>World Health Organization (WHO) – 
        Energy Requirements and Health Risks</li>
        <li>American Council on Exercise (ACE) – 
        Understanding Activity Levels and TDEE</li>
      </ul>
    </div>
  </section>
`
class Ce extends v {
  constructor() {
    super(() => {
      var e
      return (e = this.unitSystemSelect) == null ? void 0 : e.value
    })
    l(this, 'weightInput', null)
    l(this, 'heightInput', null)
    l(this, 'ageInput', null)
    l(this, 'unitSystemSelect', null)
    l(this, 'genderSelect', null)
    l(this, 'activityLevelSelect', null)
  }
  render(e) {
    var a
    ;(e.innerHTML = Se),
      this.initializeCommonElements(),
      this.initializeInputs([h.WEIGHT, h.HEIGHT, h.AGE]),
      (this.weightInput = this.getElement(n.WEIGHT)),
      (this.heightInput = this.getElement(n.HEIGHT)),
      (this.ageInput = this.getElement(n.AGE)),
      (this.unitSystemSelect = this.getElement(n.UNIT_SYSTEM)),
      (this.genderSelect = this.getElement(n.GENDER)),
      (this.activityLevelSelect = this.getElement(n.ACTIVITY_LEVEL)),
      (a = this.unitSystemSelect) == null ||
        a.addEventListener('change', () => this.updatePlaceholders())
  }
  fillForm(e) {
    this.unitSystemSelect &&
      e.unitSystem &&
      (this.unitSystemSelect.value = e.unitSystem),
      this.genderSelect && e.gender && (this.genderSelect.value = e.gender),
      this.activityLevelSelect &&
        e.activityLevel &&
        (this.activityLevelSelect.value = e.activityLevel),
      this.setInputValue(this.weightInput, e.weight),
      this.setInputValue(this.heightInput, e.height),
      this.setInputValue(this.ageInput, e.age)
  }
  setInputValue(e, a) {
    e && a && (e.value = a.toString())
  }
  bindCalculateEvent(e) {
    var a
    ;(a = this.form) == null ||
      a.addEventListener('submit', (s) => {
        s.preventDefault()
        const r = new FormData(this.form)
        this.genderSelect && r.set('gender', this.genderSelect.value),
          this.activityLevelSelect &&
            r.set('activityLevel', this.activityLevelSelect.value),
          e(r)
      })
  }
  updateResults(e) {
    if (!this.resultsTable) return
    const a = this.resultsTable.rows
    ;(a[0].cells[1].textContent =
      e.totalDailyEnergyExpenditureHarris.toFixed(0) + ' kcal/day'),
      (a[1].cells[1].textContent =
        e.totalDailyEnergyExpenditureMifflin.toFixed(0) + ' kcal/day')
  }
}
class Ae extends y {
  constructor(e, a) {
    super(e, a)
    l(this, 'view')
    l(this, 'formValidator')
    ;(this.view = new Ce()), (this.formValidator = new f())
  }
  init(e) {
    this.view.render(e),
      this.fillFormWithUserData(),
      this.view.bindCalculateEvent(this.handleCalculate.bind(this)),
      this.view.bindResetEvent(this.handleReset.bind(this))
  }
  fillFormWithUserData() {
    const e = this.user.getData()
    this.view.fillForm(e)
  }
  handleCalculate(e) {
    try {
      const a = this.parseFormData(e)
      this.formValidator.validateTotalDailyEnergyExpenditureFormData(a),
        this.user.setData(a),
        this.updateView(),
        this.view.hideError()
    } catch (a) {
      this.handleErrors(a)
    }
  }
  parseFormData(e) {
    return {
      unitSystem: e.get('${FORM_FIELDS.UNIT_SYSTEM}'),
      gender: e.get('gender'),
      weight: parseFloat(e.get('weight')),
      height: parseFloat(e.get('height')),
      age: parseFloat(e.get('age')),
      activityLevel: e.get('activityLevel'),
    }
  }
  updateView() {
    const e = this.calculator.getTdeeHarrisBenedict(),
      a = this.calculator.getTdeeMifflinStJeor()
    this.view.updateResults({
      totalDailyEnergyExpenditureHarris: e,
      totalDailyEnergyExpenditureMifflin: a,
    })
  }
  handleReset() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
}
const We = `
  <section class="container">
    <h2>BMR Calculator (Harris-Benedict & Mifflin-St Jeor)</h2>
    <div class="content">

      <div class="additional-info">
        <h2>What is BMR?</h2>
        <p>
        BMR is a measure of the amount of energy (calories) your body requires 
        to maintain basic physiological functions like breathing, circulation, 
        and cell production while at rest. It forms the basis for calculating 
        daily energy needs.
        </p>
        <p>
        The Harris-Benedict and Mifflin-St Jeor equations are two of the most 
        commonly used formulas to estimate BMR. 
        These formulas take into account variables such as 
        weight, height, age, and gender to provide an estimate 
        of daily energy requirements.
        </p>

        <h3>Limitations of BMR Calculations</h3>
        <p>
        While both the Harris-Benedict and Mifflin-St Jeor equations provide 
        useful estimates of BMR, they do not consider variations 
        in muscle mass, body fat percentage, or other 
        metabolic factors that may affect calorie needs. 
        It is recommended to use these BMR values 
        as part of a broader assessment 
        of daily calorie needs.
        </p>
      </div>

      <form id="bmr-form">
        <div class="input-group">
          <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
          <select id="${FORM_FIELDS.UNIT_SYSTEM}" name="${FORM_FIELDS.UNIT_SYSTEM}">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="height">Height</label>
          <input type="text" id="height" name="height" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="weight">Weight</label>
          <input type="text" id="weight" name="weight" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" placeholder="years">
        </div>
        <div class="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>

      <div class="error-message"></div>
      <div class="results">
        <h2>Results</h2>
        <table>
          <tr>
            <td>BMR (Harris-Benedict)</td>
            <td>-</td>
          </tr>
          <tr>
            <td>BMR (Mifflin-St Jeor)</td>
            <td>-</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>Harris, J.A. & Benedict, F.G. (1918) – 
        A Biometric Study of Basal Metabolism in Man</li>
        <li>Mifflin, M.D., et al. (1990) – 
        A New Predictive Equation for Resting Energy Expenditure 
        in Healthy Individuals</li>
        <li>National Institutes of Health (NIH) – 
        Understanding Caloric Needs</li>
        <li>World Health Organization (WHO) – 
        Energy Requirements and Health Risks</li>
      </ul>
    </div>
  </section>
`
class Re extends v {
  constructor() {
    super(() => {
      var e
      return (e = this.unitSystemSelect) == null ? void 0 : e.value
    })
    l(this, 'weightInput', null)
    l(this, 'heightInput', null)
    l(this, 'ageInput', null)
    l(this, 'unitSystemSelect', null)
    l(this, 'genderInputs', [])
  }
  render(e) {
    var s, r
    ;(e.innerHTML = We),
      this.initializeCommonElements(),
      this.initializeInputs([h.WEIGHT, h.HEIGHT, h.AGE]),
      (this.weightInput = this.getElement(n.WEIGHT)),
      (this.heightInput = this.getElement(n.HEIGHT)),
      (this.ageInput = this.getElement(n.AGE)),
      (this.unitSystemSelect = this.getElement(n.UNIT_SYSTEM))
    const a =
      (s = this.form) == null
        ? void 0
        : s.querySelectorAll('input[name="gender"]')
    ;(this.genderInputs = Array.from(a || [])),
      (r = this.unitSystemSelect) == null ||
        r.addEventListener('change', this.updatePlaceholders.bind(this))
  }
  fillForm(e) {
    this.unitSystemSelect &&
      e.unitSystem &&
      (this.unitSystemSelect.value = e.unitSystem),
      this.setInputValue(this.weightInput, e.weight),
      this.setInputValue(this.heightInput, e.height),
      this.setInputValue(this.ageInput, e.age),
      e.gender && this.setGender(e.gender),
      this.updatePlaceholders()
  }
  setInputValue(e, a) {
    e && a !== void 0 && (e.value = a.toString())
  }
  setGender(e) {
    const a = this.genderInputs.find((s) => s.value === e)
    a && (a.checked = !0)
  }
  bindCalculateEvent(e) {
    var a
    ;(a = this.form) == null ||
      a.addEventListener('submit', (s) => {
        s.preventDefault()
        const r = new FormData(this.form)
        e(r)
      })
  }
  updateResults(e) {
    if (!this.resultsTable) return
    const a = this.resultsTable.rows
    ;(a[0].cells[1].textContent =
      e.basalMetabolicRateHarrisBenedict.toFixed(0) + ' kcal/day'),
      (a[1].cells[1].textContent =
        e.basalMetabolicRateMifflinStJeor.toFixed(0) + ' kcal/day')
  }
}
class He extends y {
  constructor(e, a) {
    super(e, a)
    l(this, 'view')
    l(this, 'formValidator')
    ;(this.view = new Re()), (this.formValidator = new f())
  }
  init(e) {
    this.view.render(e),
      this.fillFormWithUserData(),
      this.view.bindCalculateEvent(this.handleCalculate.bind(this)),
      this.view.bindResetEvent(this.handleReset.bind(this))
  }
  fillFormWithUserData() {
    const e = this.user.getData()
    this.view.fillForm(e)
  }
  handleCalculate(e) {
    try {
      const a = this.parseFormData(e)
      this.formValidator.validateBasalMetabolicRateFormData(a),
        this.user.setData(a),
        this.updateView(),
        this.view.hideError()
    } catch (a) {
      this.handleErrors(a)
    }
  }
  parseFormData(e) {
    return {
      unitSystem: e.get('${FORM_FIELDS.UNIT_SYSTEM}'),
      gender: e.get('gender'),
      weight: parseFloat(e.get('weight')),
      height: parseFloat(e.get('height')),
      age: parseFloat(e.get('age')),
    }
  }
  updateView() {
    const e = this.calculator.getBmrHarrisBenedict(),
      a = this.calculator.getBmrMifflinStJeor()
    this.view.updateResults({
      basalMetabolicRateHarrisBenedict: e,
      basalMetabolicRateMifflinStJeor: a,
    })
  }
  handleReset() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
}
const Me = `
  <section class="container">
    <h2>Estimated Time to Reach Weight Goal</h2>
    <div class="content">

      <div class="additional-info">
        <h2>What is Time to Reach Weight Goal?</h2>
        <p>
          This calculation estimates the time needed to reach your weight goal 
          based on your current weight, daily caloric intake, 
          and activity level. It uses your Basal Metabolic Rate (BMR) 
          and Total Daily Energy Expenditure (TDEE) 
          to provide an estimate of how long it will take to achieve your
          weight goal.
        </p>
        <p>
          The method considers factors like weight, height, age, 
          gender, activity level, and current calorie 
          intake to determine the time frame required 
          to reach your desired weight safely.
        </p>

        <h3>Limitations of Estimations</h3>
        <p>
          These estimates are based on general formulas and may not account for 
          individual differences in metabolism, muscle mass, or other factors 
          that could affect the rate of weight change. 
          Always consult a healthcare provider before making significant 
          changes to your diet or exercise routine.
        </p>
      </div>

      <form id="time-to-goal-form">
        <div class="input-group">
          <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
          <select id="${FORM_FIELDS.UNIT_SYSTEM}" name="${FORM_FIELDS.UNIT_SYSTEM}">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="height">Height</label>
          <input type="text" id="height" name="height" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="weight">Weight</label>
          <input type="text" id="weight" name="weight" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" placeholder="years">
        </div>
        <div class="input-group">
          <label for="activityLevel">Activity Level</label>
          <select id="activityLevel" name="activityLevel">
            <option value="sedentary">Sedentary</option>
            <option value="lightly">Lightly Active</option>
            <option value="moderately">Moderately Active</option>
            <option value="very">Very Active</option>
            <option value="extremely">Extremely Active</option>
          </select>
        </div>
        <div class="input-group">
          <label for="dailyCalories">Daily Caloric Intake</label>
          <input type="text" id="dailyCalories" 
          name="dailyCalories" placeholder="kcal">
        </div>
        <div class="input-group">
          <label for="weightGoal">Weight Goal</label>
          <input type="text" id="weightGoal" name="weightGoal" placeholder="kg">
        </div>
        <div class="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>

    <div class="error-message"></div>
    <div class="results">
        <h2>Results</h2>
        <table class="resultTable">
          <tr>
            <td>Estimated time to reach weight goal:</td>
            <td>-</td>
          </tr>
        </table>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>National Institutes of Health (NIH) – 
        Understanding Caloric Deficit and Weight Loss</li>
        <li>American Council on Exercise (ACE) –
         Weight Management and Caloric Needs</li>
        <li>World Health Organization (WHO) – 
        Guidelines on Healthy Weight Management</li>
      </ul>
    </div>
  </section>
`
class Ge extends v {
  constructor() {
    super(() => {
      var e
      return (e = this.unitSystemSelect) == null ? void 0 : e.value
    })
    l(this, 'weightInput', null)
    l(this, 'heightInput', null)
    l(this, 'ageInput', null)
    l(this, 'unitSystemSelect', null)
    l(this, 'genderSelect', null)
    l(this, 'activityLevelSelect', null)
    l(this, 'weightGoalInput', null)
    l(this, 'dailyCaloriesInput', null)
  }
  render(e) {
    var a
    ;(e.innerHTML = Me),
      this.initializeCommonElements(),
      this.initializeInputs([
        h.WEIGHT,
        h.HEIGHT,
        h.AGE,
        h.WEIGHT_GOAL,
        h.DAILY_CALORIES,
      ]),
      (this.weightInput = this.getElement(n.WEIGHT)),
      (this.heightInput = this.getElement(n.HEIGHT)),
      (this.ageInput = this.getElement(n.AGE)),
      (this.weightGoalInput = this.getElement(n.WEIGHT_GOAL)),
      (this.dailyCaloriesInput = this.getElement(n.DAILY_CALORIES)),
      (this.unitSystemSelect = this.getElement(n.UNIT_SYSTEM)),
      (this.genderSelect = this.getElement(n.GENDER)),
      (this.activityLevelSelect = this.getElement(n.ACTIVITY_LEVEL)),
      (a = this.unitSystemSelect) == null ||
        a.addEventListener('change', () => this.updatePlaceholders())
  }
  fillForm(e) {
    this.unitSystemSelect &&
      e.unitSystem &&
      (this.unitSystemSelect.value = e.unitSystem),
      this.genderSelect && e.gender && (this.genderSelect.value = e.gender),
      this.activityLevelSelect &&
        e.activityLevel &&
        (this.activityLevelSelect.value = e.activityLevel),
      this.setInputValue(this.weightInput, e.weight),
      this.setInputValue(this.heightInput, e.height),
      this.setInputValue(this.ageInput, e.age),
      this.setInputValue(this.weightGoalInput, e.weightGoal),
      this.setInputValue(this.dailyCaloriesInput, e.dailyCalories)
  }
  setInputValue(e, a) {
    e && a && (e.value = a.toString())
  }
  bindCalculateEvent(e) {
    var a
    ;(a = this.form) == null ||
      a.addEventListener('submit', (s) => {
        s.preventDefault()
        const r = new FormData(this.form)
        this.genderSelect && r.set('gender', this.genderSelect.value),
          this.activityLevelSelect &&
            r.set('activityLevel', this.activityLevelSelect.value),
          e(r)
      })
  }
  updateResults(e) {
    if (!this.resultsTable) return
    const a = this.resultsTable.rows
    a[0].cells[1].textContent = e.toString() + ' weeks'
  }
}
class Fe extends y {
  constructor(e, a) {
    super(e, a)
    l(this, 'view')
    l(this, 'formValidator')
    ;(this.view = new Ge()), (this.formValidator = new f())
  }
  init(e) {
    this.view.render(e),
      this.fillFormWithUserData(),
      this.view.bindCalculateEvent(this.handleCalculate.bind(this)),
      this.view.bindResetEvent(this.handleReset.bind(this))
  }
  fillFormWithUserData() {
    const e = this.user.getData()
    this.view.fillForm(e)
  }
  handleCalculate(e) {
    try {
      const a = this.parseFormData(e)
      this.formValidator.validateEstimateTimeToWeightGoalFormData(a),
        this.user.setData(a),
        this.updateView(),
        this.view.hideError()
    } catch (a) {
      this.handleErrors(a)
    }
  }
  parseFormData(e) {
    return {
      unitSystem: e.get('${FORM_FIELDS.UNIT_SYSTEM}'),
      gender: e.get('gender'),
      weight: parseFloat(e.get('weight')),
      height: parseFloat(e.get('height')),
      age: parseFloat(e.get('age')),
      activityLevel: e.get('activityLevel'),
      weightGoal: parseFloat(e.get('weightGoal')),
      dailyCalories: parseFloat(e.get('dailyCalories')),
    }
  }
  updateView() {
    const e = this.calculator.getEstimateTimeToWeightGoal()
    this.view.updateResults(e)
  }
  handleReset() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
}
const Le = `
  <section class="container">
    <h2>Calories Needed to Reach Weight Goal</h2>
    <div class="content">

      <div class="additional-info">
        <h2>What is Calories for Weight Goal?</h2>
        <p>
          This calculation determines the number of daily calories 
          you need to consume to reach your weight goal within a 
          specific time frame. It takes into account your Basal Metabolic 
          Rate (BMR), Total Daily Energy Expenditure (TDEE), 
          and your target weight and duration to achieve the goal.
        </p>
        <p>
          The calculation considers factors like weight, height, age, gender, 
          activity level, and the amount of time you set to reach your goal.
        </p>

        <h3>Limitations of Caloric Calculations</h3>
        <p>
          The provided caloric values are estimates and may not 
          reflect individual variations such as muscle mass, 
          metabolic rate, or other factors influencing calorie needs. 
          Consult a healthcare provider before making dietary changes.
        </p>
      </div>

      <form id="calories-goal-form">
        <div class="input-group">
          <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
          <select id="${FORM_FIELDS.UNIT_SYSTEM}" name="${FORM_FIELDS.UNIT_SYSTEM}">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="height">Height</label>
          <input type="text" id="height" name="height" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="weight">Weight</label>
          <input type="text" id="weight" name="weight" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" placeholder="years">
        </div>
        <div class="input-group">
          <label for="activityLevel">Activity Level</label>
          <select id="activityLevel" name="activityLevel">
            <option value="sedentary">Sedentary</option>
            <option value="lightly">Lightly Active</option>
            <option value="moderately">Moderately Active</option>
            <option value="very">Very Active</option>
            <option value="extremely">Extremely Active</option>
          </select>
        </div>
        <div class="input-group">
          <label for="weightGoal">Weight Goal</label>
          <input type="text" id="weightGoal" name="weightGoal" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="weeksToWeightGoal">Weeks to Reach Goal</label>
          <input type="text" id="weeksToWeightGoal" 
          name="weeksToWeightGoal" placeholder="weeks">
        </div>
        <div class="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>

      <div class="error-message"></div>
      <div class="results">
        <h2>Results</h2>
        <table class="resultTable">
          <tr>
            <td>Calories needed per day to reach your weight goal</td>
            <td>-</td>
          </tr>
        </table>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>National Institutes of Health (NIH) – 
        Caloric Needs and Weight Management</li>
        <li>American Dietetic Association (ADA) – 
        Guidelines on Caloric Intake for Weight Goals</li>
        <li>World Health Organization (WHO) – 
        Health Risks and Weight Management</li>
      </ul>
    </div>
  </section>
`
class Oe extends v {
  constructor() {
    super(() => {
      var e
      return (e = this.unitSystemSelect) == null ? void 0 : e.value
    })
    l(this, 'weightInput', null)
    l(this, 'heightInput', null)
    l(this, 'ageInput', null)
    l(this, 'unitSystemSelect', null)
    l(this, 'genderSelect', null)
    l(this, 'activityLevelSelect', null)
    l(this, 'weightGoalInput', null)
    l(this, 'weeksToWeightGoalInput', null)
    l(this, 'render', (e) => {
      var a
      ;(e.innerHTML = Le),
        this.initializeCommonElements(),
        this.initializeInputs([
          h.WEIGHT,
          h.HEIGHT,
          h.AGE,
          h.WEIGHT_GOAL,
          h.WEEKS_TO_WEIGHT_GOAL,
        ]),
        (this.weightInput = this.getElement(n.WEIGHT)),
        (this.heightInput = this.getElement(n.HEIGHT)),
        (this.ageInput = this.getElement(n.AGE)),
        (this.weightGoalInput = this.getElement(n.WEIGHT_GOAL)),
        (this.weeksToWeightGoalInput = this.getElement(n.WEEKS_TO_WEIGHT_GOAL)),
        (this.unitSystemSelect = this.getElement(n.UNIT_SYSTEM)),
        (this.genderSelect = this.getElement(n.GENDER)),
        (this.activityLevelSelect = this.getElement(n.ACTIVITY_LEVEL)),
        (a = this.unitSystemSelect) == null ||
          a.addEventListener('change', () => this.updatePlaceholders())
    })
  }
  fillForm(e) {
    this.unitSystemSelect &&
      e.unitSystem &&
      (this.unitSystemSelect.value = e.unitSystem),
      this.genderSelect && e.gender && (this.genderSelect.value = e.gender),
      this.activityLevelSelect &&
        e.activityLevel &&
        (this.activityLevelSelect.value = e.activityLevel),
      this.setInputValue(this.weightInput, e.weight),
      this.setInputValue(this.heightInput, e.height),
      this.setInputValue(this.ageInput, e.age),
      this.setInputValue(this.weightGoalInput, e.weightGoal),
      this.setInputValue(this.weeksToWeightGoalInput, e.weeksToWeightGoal)
  }
  setInputValue(e, a) {
    e && a && (e.value = a.toString())
  }
  bindCalculateEvent(e) {
    var a
    ;(a = this.form) == null ||
      a.addEventListener('submit', (s) => {
        s.preventDefault()
        const r = new FormData(this.form)
        this.genderSelect && r.set('gender', this.genderSelect.value),
          this.activityLevelSelect &&
            r.set('activityLevel', this.activityLevelSelect.value),
          e(r)
      })
  }
  updateResults(e) {
    if (!this.resultsTable) return
    const a = this.resultsTable.rows
    a[0].cells[1].textContent = e.toString() + 'kcal/day'
  }
}
class Be extends y {
  constructor(e, a) {
    super(e, a)
    l(this, 'view')
    l(this, 'formValidator')
    ;(this.view = new Oe()), (this.formValidator = new f())
  }
  init(e) {
    this.view.render(e),
      this.fillFormWithUserData(),
      this.view.bindCalculateEvent(this.handleCalculate.bind(this)),
      this.view.bindResetEvent(this.handleReset.bind(this))
  }
  fillFormWithUserData() {
    const e = this.user.getData()
    this.view.fillForm(e)
  }
  handleCalculate(e) {
    try {
      const a = this.parseFormData(e)
      console.log('data', a),
        this.formValidator.validateCaloriesForWeightGoalFormData(a),
        this.user.setData(a),
        console.log('user', this.user),
        this.updateView(),
        console.log('view', this.view),
        this.view.hideError()
    } catch (a) {
      console.error('error', a), this.handleErrors(a)
    }
  }
  parseFormData(e) {
    return {
      unitSystem: e.get('${FORM_FIELDS.UNIT_SYSTEM}'),
      gender: e.get('gender'),
      weight: parseFloat(e.get('weight')),
      height: parseFloat(e.get('height')),
      age: parseFloat(e.get('age')),
      activityLevel: e.get('activityLevel'),
      weightGoal: parseFloat(e.get('weightGoal')),
      weeksToWeightGoal: parseFloat(e.get('weeksToWeightGoal')),
    }
  }
  updateView() {
    const e = this.calculator.getCaloriesForWeightGoal()
    console.log('dailyCalories', e), this.view.updateResults(e)
  }
  handleReset() {
    this.user.resetData(), this.view.resetForm(), this.view.hideError()
  }
}
class _e {
  constructor(t, e) {
    ;(this.user = t), (this.calculator = e)
  }
  createController(t) {
    switch (t) {
      case g.HOME:
        return new B()
      case g.BMI:
        return new me(this.user, this.calculator)
      case g.WAIST_TO_HIP:
        return new ye(this.user, this.calculator)
      case g.WAIST_TO_HEIGHT:
        return new Ee(this.user, this.calculator)
      case g.BODY_FAT_PERCENTAGE:
        return new be(this.user, this.calculator)
      case g.BASAL_METABOLIC_RATE:
        return new He(this.user, this.calculator)
      case g.TDEE:
        return new Ae(this.user, this.calculator)
      case g.WEIGHT_GOAL:
        return new Fe(this.user, this.calculator)
      case g.CALORIE_GOAL:
        return new Be(this.user, this.calculator)
      default:
        throw new Error('404 Not Found')
    }
  }
}
class De {
  constructor(t, e) {
    l(this, 'currentController', null)
    l(this, 'controllerFactory')
    this.controllerFactory = new _e(t, e)
  }
  listen() {
    window.addEventListener('hashchange', () => {
      const e = window.location.hash.slice(1)
      this.navigate(e)
    })
    const t = window.location.hash.slice(1) || '/'
    this.navigate(t)
  }
  navigate(t) {
    const e = document.getElementById('app')
    if (!e) return
    e.innerHTML = ''
    const a = L(t)
    if (a !== void 0)
      try {
        ;(this.currentController = this.controllerFactory.createController(a)),
          this.currentController.init(e)
      } catch (s) {
        console.error('Error creating controller:', s),
          (e.innerHTML = '<h2>An error occurred</h2>')
      }
    else e.innerHTML = '<h2>404 Not Found</h2>'
  }
}
let S = null
class C {
  constructor() {
    l(this, 'data')
    const t = sessionStorage.getItem('userModel')
    this.data = t ? JSON.parse(t) : { unitSystem: 'metric' }
  }
  static getInstance() {
    return S || (S = new C()), S
  }
  setData(t) {
    Object.assign(this.data, t), this.saveToSession()
  }
  getData() {
    return {
      weight: this.data.weight,
      height: this.data.height,
      unitSystem: this.data.unitSystem,
      age: this.data.age,
      gender: this.data.gender,
      waist: this.data.waist,
      hip: this.data.hip,
      neck: this.data.neck,
      activityLevel: this.data.activityLevel,
      dailyCalories: this.data.dailyCalories,
      weightGoal: this.data.weightGoal,
      weeksToWeightGoal: this.data.weeksToWeightGoal,
    }
  }
  resetData() {
    ;(this.data = { unitSystem: E.METRIC }), this.saveToSession()
  }
  saveToSession() {
    sessionStorage.setItem('userModel', JSON.stringify(this.data))
  }
}
class ke {
  constructor() {
    l(this, 'dropdownToggles')
    l(this, 'dropdownMenus')
    ;(this.dropdownToggles = Array.from(
      document.querySelectorAll('.dropdown-toggle')
    )),
      (this.dropdownMenus = Array.from(
        document.querySelectorAll('.dropdown-menu')
      )),
      this.initializeDropdowns()
  }
  initializeDropdowns() {
    this.dropdownToggles.forEach((t) => {
      t.addEventListener('click', this.toggleDropdown.bind(this))
    }),
      document.addEventListener('click', this.handleOutsideClick.bind(this))
  }
  toggleDropdown(t) {
    var s
    t.preventDefault(),
      this.dropdownMenus.forEach((r) => {
        var o
        ;(o = r.parentElement) == null || o.classList.remove('show')
      })
    const e = t.currentTarget,
      a = e.nextElementSibling
    a &&
      a.classList.contains('dropdown-menu') &&
      ((s = e.parentElement) == null || s.classList.toggle('show'))
  }
  handleOutsideClick(t) {
    const e = t.target
    this.dropdownToggles.some((s) => s.contains(e)) ||
      this.dropdownMenus.forEach((s) => {
        var r
        ;(r = s.parentElement) == null || r.classList.remove('show')
      })
  }
}
class Ne {
  constructor() {
    l(this, 'router')
    l(this, 'user')
    l(this, 'calculator')
    ;(this.user = C.getInstance()),
      (this.calculator = new ge(this.user)),
      (this.router = new De(this.user, this.calculator)),
      new ke()
  }
  start() {
    this.router.listen()
    const t = window.location.hash.slice(1) || '/'
    this.router.navigate(t)
  }
}
const xe = new Ne()
xe.start()
