import { FORM_FIELDS } from '../../constants/FormConstants'
import { UnitSystem } from '../../enums/UnitSystem'
/**
 * Template for the Lean Body Mass Calculator.
 * This template includes a section explaining the concept of Lean Body Mass (LBM),
 * its significance in understanding muscle mass and setting fitness goals,
 * and a form for user input to calculate LBM based on various factors.
 *
 * @constant {string} leanBodyMassTemplate
 */
export const leanBodyMassTemplate = `
<section class="container">
    <h2>Lean Body Mass Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your Lean Body Mass (LBM) to understand your muscle mass 
            and set fitness goals.
        </p>

        <p class="info">
            Maintaining a high lean body mass relative to body fat is generally 
            associated with better physical performance and overall health. 
            For men, an LBM of <strong>60-90%</strong> 
            and for women, <strong>50-80%</strong> is typical. 
            Values outside these ranges might indicate 
            low muscle mass or higher fat levels, potentially impacting health 
            outcomes such as metabolic rate, physical endurance, 
            and strength levels.
        </p>

        <form id="lean-body-mass-form">
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
                    <input type="radio" id="male-lbm" 
                    name="${FORM_FIELDS.gender}" 
                    value="male">
                    <label for="male-lbm">Male</label>
                    <input type="radio" id="female-lbm" 
                    name="${FORM_FIELDS.gender}" 
                    value="female">
                    <label for="female-lbm">Female</label>
                </div>
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.weight}">Weight</label>
                <input type="text" id="${FORM_FIELDS.weight}" 
                name="${FORM_FIELDS.weight}" placeholder="kg">
            </div>
            <div class="input-group">
                <label for="${FORM_FIELDS.height}">Height</label>
                <input type="text" id="${FORM_FIELDS.height}" 
                name="${FORM_FIELDS.height}" placeholder="cm">
            </div>
            <div class="button-group">
                <button type="reset">Reset</button>
                <button type="submit">Calculate Lean Body Mass</button>
            </div>
        </form>

        <div class="errorMessage"></div>
                <div class="results">
            <h2>Results</h2>
            <table class="resultTable">
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
            <li>Harvard Medical School – Lean Body Mass Calculations</li>
            <li>National Institutes of Health (NIH) – 
            Research on Muscle Mass and Health Outcomes</li>
        </ul>
    </div>
</section>
`
