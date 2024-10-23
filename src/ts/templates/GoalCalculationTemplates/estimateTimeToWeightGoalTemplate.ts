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
