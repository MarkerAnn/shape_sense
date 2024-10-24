import { FORM_FIELDS } from '../../constants/FormConstants'
import { Gender } from '../../enums/Gender'
import { ActivityLevel } from '../../enums/ActivityLevel'
import { UnitSystem } from '../../enums/UnitSystem'

/**
 * Template for the Calories Needed to Reach Weight Goal Calculator.
 * This template includes a section explaining the concept of calculating daily caloric needs
 * to reach a weight goal, its calculation methods, and a form for user input to calculate
 * the required daily calories based on various factors.
 *
 * @constant {string} caloriesForWeightGoalTemplate
 */
export const caloriesForWeightGoalTemplate = `
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
          <label for="${FORM_FIELDS.unitSystem}">Unit System</label>
          <select id="${FORM_FIELDS.unitSystem}" 
          name="${FORM_FIELDS.unitSystem}">
            <option value="${UnitSystem.METRIC}">Metric</option>
            <option value="${UnitSystem.IMPERIAL}">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.gender}">Gender</label>
          <select id="${FORM_FIELDS.gender}" 
          name="${FORM_FIELDS.gender}">
            <option value="${Gender.MALE}">Male</option>
            <option value=${Gender.FEMALE}>Female</option>
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
        <div class="input-group">
          <label for="${FORM_FIELDS.activityLevel}">Activity Level</label>
          <select id="${FORM_FIELDS.activityLevel}" 
          name="${FORM_FIELDS.activityLevel}">
            <option value="${ActivityLevel.SEDENTARY}">Sedentary
            </option>
            <option value="${ActivityLevel.LIGHTLY}">Lightly Active
            </option>
            <option value="${ActivityLevel.MODERATELY}">Moderately Active
            </option>
            <option value="${ActivityLevel.VERY}">Very Active</option>
            <option value="${ActivityLevel.EXTREMELY}">Extremely Active<
            /option>
          </select>
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.weightGoal}">Weight Goal</label>
          <input type="text" id="${FORM_FIELDS.weightGoal}" 
          name="${FORM_FIELDS.weightGoal}" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.weeksToWeightGoal}">
          Weeks to Reach Goal</label>
          <input type="text" id="${FORM_FIELDS.weeksToWeightGoal}" 
          name="${FORM_FIELDS.weeksToWeightGoal}" placeholder="weeks">
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
