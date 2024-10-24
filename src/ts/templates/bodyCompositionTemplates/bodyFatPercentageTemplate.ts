import { FORM_FIELDS } from '../../constants/FormConstants'
import { UnitSystem } from '../../enums/UnitSystem'

export const bodyFatPercentageTemplate = `
<section class="container">
     <h2>Body Fat Percentage and Lean Body Mass Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your Body Fat Percentage and Lean Body Mass for a deeper 
            understanding of your health and fitness. 
            These metrics can help you track progress, set realistic goals, 
            and optimize your health.
        </p>

        <p class="info">
            Healthy ranges vary, but a body fat percentage of 
            <strong>14-24%</strong> for men and 
            <strong>21-31%</strong> for women is often considered optimal. 
            Values outside these ranges may indicate either too low or too high 
            fat levels, both of which carry health risks like 
            hormonal imbalances, metabolic issues, or cardiovascular disease. 
            Lean Body Mass (LBM), 
            which includes muscle, bone, and organs, is crucial for strength, 
            metabolism, and overall health.
        </p>

        <form id="body-fat-percentage-form">
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
                <div>
                    <input type="radio" id="male" 
                    name="${FORM_FIELDS.gender}" value="male">
                    <label for="male">Male</label>
                    <input type="radio" id="female" 
                    name="${FORM_FIELDS.gender}" 
                    value="female">
                    <label for="female">Female</label>
                </div>
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.weight}">Weight</label>
                <input type="text" id="${FORM_FIELDS.weight}" 
                name="${FORM_FIELDS.weight}" placeholder="kg">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.waist}">Waist - 
                Circumference</label>
                <input type="text" id="${FORM_FIELDS.waist}" 
                name="${FORM_FIELDS.waist}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.hip}">Hip -
                Circumference (for females only)</label>
                <input type="text" id="${FORM_FIELDS.hip}" 
                name="${FORM_FIELDS.hip}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.neck}">Neck - 
                Circumference</label>
                <input type="text" id="${FORM_FIELDS.neck}" 
                name="${FORM_FIELDS.neck}" placeholder="cm">
            </div>
            <div class="button-group">
                <button type="reset">Reset</button>
                <button type="submit">Calculate Body Fat Percentage</button>
            </div>
        </form>

        <div class="errorMessage"></div>
                <div class="results">
            <h2>Results</h2>
            <table class="resultTable">
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
            <li>American Council on Exercise (ACE) – 
            Body Fat Percentage Guidelines</li>
            <li>National Institutes of Health (NIH) – Health Research</li>
        </ul>
    </div>
</section>
`
