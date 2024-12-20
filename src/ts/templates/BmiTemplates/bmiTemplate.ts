import { FORM_FIELDS } from '../../constants/FormConstants'
import { UnitSystem } from '../../enums/UnitSystem'
/**
 * Template for the Body Mass Index (BMI) Calculator.
 * This template includes a section explaining the concept of BMI,
 * its significance in assessing body weight relative to height,
 * and a form for user input to calculate BMI based on height and weight.
 *
 * @constant {string} bmiTemplate
 */
export const bmiTemplate = `
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
        such as "${FORM_FIELDS.waist}"-to-"${FORM_FIELDS.hip}" 
        ratio or body fat percentage.
        </p>
        </div>

        <form id="bmi-form">
          <div class="input-group">
            <label for="${FORM_FIELDS.unitSystem}">Unit System</label>
            <select id="${FORM_FIELDS.unitSystem}" 
            name="${FORM_FIELDS.unitSystem}">
              <option value="${UnitSystem.METRIC}">Metric</option>
              <option value="${UnitSystem.IMPERIAL}">Imperial</option>
            </select>
          </div>
          <div class="input-group">
            <label for="${FORM_FIELDS.height}">Height</label>
            <input type="text" id="${FORM_FIELDS.height}" 
            name="${FORM_FIELDS.height}" placeholder="m">
          </div>
          <div class="input-group">
            <label for="${FORM_FIELDS.weight}">Weight</label>
            <input type="text" id="${FORM_FIELDS.weight}" 
            name="${FORM_FIELDS.weight}" placeholder="kg">
          </div>
          <div class="button-group">
            <button type="reset">Reset</button>
            <button type="submit">Calculate</button>
          </div>
        </form>

        <div class="errorMessage"></div>
        <div class="results">
          <h2>Results</h2>
          <table class="resultTable">
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
