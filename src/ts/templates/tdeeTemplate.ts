export const tdeeTemplate = `
  <section class="container">
    <h2>TDEE Calculator</h2>
    <div class="content">
      <p class="description">Calculate your Total Daily Energy Expenditure (TDEE) and other health metrics based on various body measurements.</p>

      <div class="additional-info">
        <h2>What is TDEE?</h2>
        <p>Total Daily Energy Expenditure (TDEE) is an estimate of how many calories you burn per day when exercise is taken into account. It is calculated using Basal Metabolic Rate (BMR) and your level of physical activity.</p>
        <h3>Other Measurements</h3>
        <p>This calculator also measures the Waist-to-Hip Ratio (WHR), Waist-to-Height Ratio (WHtR), Body Fat Percentage, and Lean Body Mass. These metrics provide additional insights into your health and body composition.</p>
      </div>

      <form id="tdee-form">
        <div class="input-group">
          <label for="unitSystem">Unit System</label>
          <select id="unitSystem" name="unitSystem">
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
        <div class="input-group">
          <label for="height">Height</label>
          <input type="text" id="height" name="height" placeholder="m">
        </div>
        <div class="input-group">
          <label for="weight">Weight</label>
          <input type="text" id="weight" name="weight" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="neck">Neck Circumference</label>
          <input type="text" id="neck" name="neck" placeholder="cm">
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
            <td>Waist-to-Hip Ratio</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Waist-to-Height Ratio</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Body Fat Percentage</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Lean Body Mass</td>
            <td>-</td>
          </tr>
          <tr>
            <td>TDEE</td>
            <td>-</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>American Council on Exercise (ACE) – Body Fat Percentage and Health</li>
        <li>National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) – Body Composition Measurements</li>
        <li>Harvard Medical School – Waist-to-Height Ratio for Obesity Assessment</li>
        <li>Centers for Disease Control and Prevention (CDC) – Total Daily Energy Expenditure</li>
      </ul>
    </div>
  </section>
`
