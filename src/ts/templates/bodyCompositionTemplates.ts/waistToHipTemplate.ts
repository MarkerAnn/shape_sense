export const waistHipRatioTemplate = `
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
