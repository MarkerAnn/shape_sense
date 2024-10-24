import { FORM_FIELDS } from '../../constants/FormConstants'
import { UnitSystem } from '../../enums/UnitSystem'

export const basalMetabolicRateTemplate = `
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
          <label for="${FORM_FIELDS.unitSystem}">Unit System</label>
          <select id="${FORM_FIELDS.unitSystem}" 
          name="${FORM_FIELDS.unitSystem}">
            <option value="${UnitSystem.METRIC}">Metric</option>
            <option value="${UnitSystem.IMPERIAL}">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.gender}">Gender</label>
          <select id="${FORM_FIELDS.gender}" name="${FORM_FIELDS.gender}">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.height}">Height</label>
          <input type="text" id="${FORM_FIELDS.height}" 
          name="${FORM_FIELDS.height}" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.weight}">Weight</label>
          <input type="text" id="${FORM_FIELDS.weight}" 
          name="${FORM_FIELDS.weight}" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.age}">Age</label>
          <input type="number" id="${FORM_FIELDS.age}" 
          name="${FORM_FIELDS.age}" placeholder="years">
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
