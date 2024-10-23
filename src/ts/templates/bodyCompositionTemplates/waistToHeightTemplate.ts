import { FORM_FIELDS } from '../../constants/FormConstants'
import { UnitSystem } from '../../enums/UnitSystem'

export const waitToHeightRatioTemplate = `
<section class="container">
    <h2>"${FORM_FIELDS.WAIST}"-to-Height Ratio Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your "${FORM_FIELDS.WAIST}"-to-Height Ratio 
            (WHtR) to determine abdominal 
            fat levels and associated health risks.
        </p>

        <p class="info">
            A WHtR value of <strong>less than 0.5</strong> 
            is generally considered 
            healthy for both men and women. 
            Values above 0.5 may indicate an increased risk of cardiovascular d
            isease, type 2 diabetes, and other health conditions. 
            Keeping your "${FORM_FIELDS.WAIST}" 
            circumference below half of your height is a 
            guideline for maintaining a healthier profile.
        </p>

        <form id="${FORM_FIELDS.WAIST}"-height-ratio-form">
            <div class="input-group">
                <label for="${FORM_FIELDS.UNIT_SYSTEM}">Unit System</label>
                <select id="${FORM_FIELDS.UNIT_SYSTEM}" 
                name="${FORM_FIELDS.UNIT_SYSTEM}">
                    <option value="${UnitSystem.METRIC}">Metric</option>
                    <option value="${UnitSystem.IMPERIAL}">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.WAIST}">"${FORM_FIELDS.WAIST}" 
                Circumference</label>
                <input type="text" id="${FORM_FIELDS.WAIST}" 
                name="${FORM_FIELDS.WAIST}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.HEIGHT}">Height</label>
                <input type="text" id="${FORM_FIELDS.HEIGHT}" 
                name="${FORM_FIELDS.HEIGHT}" placeholder="m">
            </div>
            <div class="button-group">
                <button type="reset">Reset</button>
                <button type="submit">Calculate WHtR</button>
            </div>
        </form>

        <div class="errorMessage"></div>
                        <div class="results">
            <h2>Results</h2>
            <table class="resultTable">
                <tr>
                    <td>"${FORM_FIELDS.WAIST}"-to-Height Ratio</td>
                    <td>-</td>
                </tr>
            </table>
    </div>
    </div>
    <div class="sources">
        Sources:
        <ul>
            <li>Journal of Clinical Endocrinology & Metabolism – 
            "${FORM_FIELDS.WAIST}"-to-Height Ratio Research</li>
            <li>American Heart Association – Cardiovascular Health</li>
        </ul>
    </div>
</section>
`
