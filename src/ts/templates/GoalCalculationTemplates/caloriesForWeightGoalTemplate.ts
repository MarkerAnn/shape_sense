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
          <label for="unitSystem">Unit System</label>
          <select id="unitSystem" name="unitSystem">
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
