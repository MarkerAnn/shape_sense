import { FORM_FIELDS } from '../../constants/FormConstants'

export const totalDailyEnergyExpenditureTemplate = `
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
          <select id="${FORM_FIELDS.UNIT_SYSTEM}" 
          name="${FORM_FIELDS.UNIT_SYSTEM}">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${FORM_FIELDS.GENDER}">Gender</label>
          <select id="${FORM_FIELDS.GENDER}" name="${FORM_FIELDS.GENDER}">
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
