import { FORM_FIELDS } from '../../constants/FormConstants'
import { ActivityLevel } from '../../enums/ActivityLevel'
import { Gender } from '../../enums/Gender'
import { UnitSystem } from '../../enums/UnitSystem'

export const estimateTimeToWeightGoalTemplate = `
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
          <label for="${FORM_FIELDS.dailyCalories}">Daily Caloric Intake
          </label>
          <input type="text" id="${FORM_FIELDS.dailyCalories}" 
          name="${FORM_FIELDS.dailyCalories}" placeholder="kcal">
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.weightGoal}">Weight Goal</label>
          <input type="text" id="${FORM_FIELDS.weightGoal}" 
          name="${FORM_FIELDS.weightGoal}" placeholder="kg">
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
