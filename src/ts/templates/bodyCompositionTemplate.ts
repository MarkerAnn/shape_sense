export const bodyCompositionTemplate = `
<section class="container">
    <h2>Body Composition Calculator</h2>
    <div class="content">
        <p class="description">Understand your body composition by calculating various metrics based on your body measurements. Get insights into your health status and risk factors.</p>

        <div class="additional-info">
            <h2>What is Body Composition?</h2>
            <p>Body composition refers to the proportion of fat and non-fat mass in your body. A balanced body composition indicates a healthier lifestyle and can help reduce the risk of various health issues. It provides a deeper understanding beyond simple weight measurements, giving a comprehensive view of your physical condition.</p>
            <h3>Key Measurements</h3>
            <p>This calculator provides results for Waist-to-Hip Ratio (WHR), Waist-to-Height Ratio (WHtR), Body Fat Percentage, and Lean Body Mass. These measurements offer insights into fat distribution, potential health risks, and overall fitness levels:</p>
            <ul>
                <li>
                    <strong>Waist-to-Hip Ratio (WHR):</strong> A useful indicator of fat distribution and potential risk for cardiovascular disease. 
                    <em>Note:</em> WHR does not account for overall body fat percentage and may not accurately reflect risk for all body types, such as those with more muscle mass.
                </li>
                <li>
                    <strong>Waist-to-Height Ratio (WHtR):</strong> An important measure for determining abdominal fat levels, which can be linked to health risks like diabetes and heart disease. 
                    <em>Note:</em> WHtR focuses solely on abdominal fat and does not consider fat distribution in other areas of the body.
                </li>
                <li>
                    <strong>Body Fat Percentage:</strong> The proportion of fat to your total body weight, providing a clearer picture of your health and fitness compared to BMI alone. 
                    <em>Note:</em> Estimating body fat percentage through basic measurements may not be as accurate as methods like DEXA scans or hydrostatic weighing.
                </li>
                <li>
                    <strong>Lean Body Mass:</strong> The weight of your muscles, bones, and organs, excluding fat. Understanding your lean body mass helps in setting fitness goals and managing weight. 
                    <em>Note:</em> Lean body mass calculations can be affected by inaccuracies in body fat estimation, leading to less precise results.
                </li>
            </ul>
        </div>

        <!-- Form for Waist-to-Hip Ratio -->
        <form id="waist-hip-ratio-form">
            <h3>Calculate Waist-to-Hip Ratio</h3>

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
        <div class="button-group">
          <button type="submit">Calculate WHR</button>
        </div>
      </form>

      <!-- Form for Waist-to-Height Ratio -->
      <form id="waist-height-ratio-form">
        <h3>Calculate Waist-to-Height Ratio</h3>
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
          <label for="height">Height</label>
          <input type="text" id="height" name="height" placeholder="m">
        </div>
        <div class="button-group">
          <button type="submit">Calculate WHtR</button>
        </div>
      </form>

      <!-- Form for Body Fat Percentage -->
      <form id="body-fat-percentage-form">
        <h3>Calculate Body Fat Percentage</h3>
        <div class="input-group">
          <label for="unitSystem">Unit System</label>
          <select id="unitSystem" name="unitSystem">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="gender">Gender</label>
          <div>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
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
          <button type="submit">Calculate Body Fat Percentage</button>
        </div>
      </form>

            <!-- Form for Lean Body Mass -->
      <form id="lean-body-mass-form">
        <h3>Calculate Lean Body Mass</h3>
        <div class="input-group">
          <label for="unitSystem">Unit System</label>
          <select id="unitSystem" name="unitSystem">
            <option value="metric">Metric</option>
            <option value="imperial">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="gender">Gender</label>
          <div>
            <input type="radio" id="male-lbm" name="gender" value="male">
            <label for="male-lbm">Male</label>
            <input type="radio" id="female-lbm" name="gender" value="female">
            <label for="female-lbm">Female</label>
          </div>
        </div>
        <div class="input-group">
          <label for="weight">Weight</label>
          <input type="text" id="weight" name="weight" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="height">Height</label>
          <input type="text" id="height" name="height" placeholder="cm">
        </div>
        <div class="button-group">
          <button type="submit">Calculate Lean Body Mass</button>
        </div>
      </form>
      
      <!-- Error message area -->
      <div class="error-message"></div>

      <!-- Results area -->
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
        </table>
      </div>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>Centers for Disease Control and Prevention (CDC) – Health Statistics</li>
        <li>American Council on Exercise – Body Fat Percentage Guidelines</li>
        <li>Harvard Medical School – Lean Body Mass Calculations</li>
      </ul>
    </div>
  </section>
`
