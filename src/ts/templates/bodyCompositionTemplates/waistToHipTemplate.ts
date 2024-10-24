import { FORM_FIELDS } from '../../constants/FormConstants'
import { UnitSystem } from '../../enums/UnitSystem'

export const waistToHipRatioTemplate = `
<section class="container">
    <h2>"${FORM_FIELDS.waist}"-to-"${FORM_FIELDS.hip}" Ratio Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your "${FORM_FIELDS.waist}"-to-"${FORM_FIELDS.hip}" 
            Ratio (WHR) to understand your fat 
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

        <form id="${FORM_FIELDS.waist}"-"${FORM_FIELDS.hip}"-ratio-form">
            <div class="input-group">
                <label for="${FORM_FIELDS.unitSystem}">Unit System</label>
                <select id="${FORM_FIELDS.unitSystem}" 
                name="${FORM_FIELDS.unitSystem}">
                    <option value="${UnitSystem.METRIC}">Metric</option>
                    <option value="${UnitSystem.IMPERIAL}">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.waist}">"${FORM_FIELDS.waist}" 
                Circumference</label>
                <input type="text" id="${FORM_FIELDS.waist}" 
                name="${FORM_FIELDS.waist}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.hip}">"${FORM_FIELDS.hip}" 
                Circumference</label>
                <input type="text" id="${FORM_FIELDS.hip}" 
                name="${FORM_FIELDS.hip}" placeholder="cm">
            </div>
            <div class="button-group">
                <button type="reset">Reset</button>
                <button type="submit">Calculate WHR</button>
            </div>
        </form>

        <div class="errorMessage"></div>
                <div class="results">
            <h2>Results</h2>
            <table class="resultTable">
                <tr>
                    <td>"${FORM_FIELDS.waist}"-to-"${FORM_FIELDS.hip}" 
                    Ratio</td>
                    <td>-</td>
                </tr>
            </table>
    </div>
    <div class="sources">
        Sources:
        <ul>
            <li>World Health Organization (WHO) – 
            "${FORM_FIELDS.waist}"-to-"${FORM_FIELDS.hip}" Ratio</li>
            <li>Centers for Disease Control and Prevention (CDC) – 
            Health Guidelines</li>
        </ul>
    </div>
</section>
`
