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
                <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
                <select id="${FORM_FIELDS.UNIT_SYSTEM}" 
                name="${FORM_FIELDS.UNIT_SYSTEM}">
                    <option value="${UnitSystem.METRIC}">Metric</option>
                    <option value="${UnitSystem.IMPERIAL}">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.GENDER}">Gender</label>
                <div>
                    <input type="radio" id="male" 
                    name="${FORM_FIELDS.GENDER}" value="male">
                    <label for="male">Male</label>
                    <input type="radio" id="female" 
                    name="${FORM_FIELDS.GENDER}" 
                    value="female">
                    <label for="female">Female</label>
                </div>
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.WEIGHT}">Weight</label>
                <input type="text" id="${FORM_FIELDS.WEIGHT}" 
                name="${FORM_FIELDS.WEIGHT}" placeholder="kg">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.WAIST}">"${FORM_FIELDS.WAIST}" 
                Circumference</label>
                <input type="text" id="${FORM_FIELDS.WAIST}" 
                name="${FORM_FIELDS.WAIST}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.HIP}">"${FORM_FIELDS.HIP}" 
                Circumference (for females only)</label>
                <input type="text" id="${FORM_FIELDS.HIP}" 
                name="${FORM_FIELDS.HIP}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.NECK}">"${FORM_FIELDS.NECK}" 
                Circumference</label>
                <input type="text" id="${FORM_FIELDS.NECK}" 
                name="${FORM_FIELDS.NECK}" placeholder="cm">
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
