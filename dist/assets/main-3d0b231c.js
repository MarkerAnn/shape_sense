var F=Object.defineProperty;var A=(a,e,t)=>e in a?F(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var n=(a,e,t)=>(A(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const B={HOME:"/"},H={BMI:"/bmi",BMR:"/bmr",TDEE:"/tdee",WAIST_TO_HIP:"/waist-to-hip",WAIST_TO_HEIGHT:"/waist-to-height",BODY_FAT:"/body-fat-percentage",CALORIE_GOAL:"/calorie-goal",WEIGHT_GOAL:"/weight-goal"},G={...B,...H};function $(a){const t=Object.entries(G).find(([i,r])=>r===a);return t?t[0]:void 0}const L={BMI:"Body Mass Index (BMI) - A measure of body fat based on weight and height.",BMR:"Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.",TDEE:"Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily.",WAIST_TO_HIP:"Calculate the ratio between your waist and hip circumference.",WAIST_TO_HEIGHT:"Calculate the ratio between your waist circumference and height.",BODY_FAT:"Estimate the percentage of fat in your body based on measurements.",CALORIE_GOAL:"Estimate daily calorie needs to reach your weight goal",WEIGHT_GOAL:"Calculate the time needed to reach your desired weight."};class O{render(e){e.innerHTML=`
        <section class="container">
          <h2>Our Calculators</h2>
          ${this.renderCalculatorItems()}
        </section>
      `}renderCalculatorItems(){return Object.entries(H).map(([e,t])=>`
        <div class="calculator-item">
          <div>
            <h3>${this.formatDisplayText(e)}</h3>
            <p>${this.getCalculatorDescription(e)}</p>
            <div class="button-container">
            <a href="#${t}" class="button">Calculate</a>
            </div>
          </div>
          <img src="./assets/images${t}.png" 
          alt="${this.formatDisplayText(e)} illustration">
        </div>
      `).join("")}formatDisplayText(e){return e.replace(/_/g," ").split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(" ")}getCalculatorDescription(e){return L[e]??"Description not available."}}class V{constructor(){n(this,"view");this.view=new O}init(e){this.view.render(e)}}const s={weight:"weight",height:"height",age:"age",waist:"waist",hip:"hip",neck:"neck",weightGoal:"weightGoal",weeksToWeightGoal:"weeksToWeightGoal",dailyCalories:"dailyCalories",unitSystem:"unitSystem",gender:"gender",activityLevel:"activityLevel"},T={inputs:{weight:`#${s.weight}`,height:`#${s.height}`,age:`#${s.age}`,waist:`#${s.waist}`,hip:`#${s.hip}`,neck:`#${s.neck}`,weightGoal:`#${s.weightGoal}`,weeksToWeightGoal:`#${s.weeksToWeightGoal}`,dailyCalories:`#${s.dailyCalories}`},selects:{unitSystem:`#${s.unitSystem}`,gender:`#${s.gender}`,activityLevel:`#${s.activityLevel}`},common:{form:"form",resultTable:".resultTable",errorMessage:".errorMessage",inputGroup:".inputGroup"}},k={metric:{[s.height]:"m",[s.weight]:"kg",[s.waist]:"cm",[s.hip]:"cm",[s.neck]:"cm"},imperial:{[s.height]:"ft",[s.weight]:"lbs",[s.waist]:"in",[s.hip]:"in",[s.neck]:"in"}};class f{constructor(e){n(this,"form",null);n(this,"resultsTable",null);n(this,"errorMessage",null);n(this,"inputs",new Map);n(this,"selects",new Map);n(this,"getSelectedUnitSystem");this.getSelectedUnitSystem=e}initializeCommonElements(){this.form=this.getElement(T.common.form),this.resultsTable=this.getElement(T.common.resultTable),this.errorMessage=this.getElement(T.common.errorMessage)}initializeInputs(e){e.forEach(t=>this.initializedInputField(t))}initializedInputField(e){const t=this.getElement(T.inputs[e]);t&&this.inputs.set(e,t)}initializeSelectField(e){const t=this.getElement(T.selects[e]);t&&this.selects.set(e,t)}bindFormEvents(e){var i;(i=this.form)==null||i.addEventListener("submit",r=>{r.preventDefault();const o=new FormData(this.form);e(o)});const t=this.selects.get("unitSystem");t&&t.addEventListener("change",()=>this.updatePlaceholders())}bindResetEvent(e){var i;const t=(i=this.form)==null?void 0:i.querySelector('button[type="reset"]');t==null||t.addEventListener("click",r=>{r.preventDefault(),e()})}setSelectValue(e,t){const i=this.selects.get(e);i&&t&&(i.value=t)}setInputValue(e,t){const i=this.inputs.get(e);i&&t!==void 0&&(i.value=t.toString())}fillFormData(e){e.unitSystem&&this.setSelectValue("unitSystem",e.unitSystem),Object.entries(e).forEach(([t,i])=>{typeof i=="number"?this.setInputValue(t,i):typeof i=="string"&&t!=="unitSystem"&&this.setSelectValue(t,i)}),this.updatePlaceholders()}clearForm(){var e;(e=this.form)==null||e.reset()}clearResults(){if(this.resultsTable){const e=this.resultsTable.rows;for(let t=0;t<e.length;t++){const i=e[t].cells[1];i&&(i.textContent="-")}}}updatePlaceholders(){const e=this.getSelectedUnitSystem();this.inputs.forEach((t,i)=>{const r=k[e][i];r&&(t.placeholder=r)})}getElement(e){return document.querySelector(e)}createElement(e,t){const i=document.createElement(e);return t&&(i.className=t),i}showError(e){this.errorMessage&&(this.errorMessage.textContent=e,this.errorMessage.style.display="block")}hideError(){this.errorMessage&&(this.errorMessage.textContent="",this.errorMessage.style.display="none")}}var h=(a=>(a.METRIC="metric",a.IMPERIAL="imperial",a))(h||{});const _=`
      <section class="container">
        <h2>BMI Calculator</h2>
        <div class="content">
        <p class="description">BMI is a measure of body fat based 
        on height and weight that applies to adult men and women.</p>

        <div class="additional-info">
        <h2>What is BMI?</h2>
        <p>Body Mass Index (BMI) is a simple calculation 
        used to assess a person's body weight in relation 
        to their height. It's calculated by dividing an individual's 
        weight (in kilograms) by the square of their height (in meters). 
        BMI is commonly used as a general indicator of whether someone 
        is underweight, normal weight, overweight, or obese.</p>
        <p>The BMI categories are:</p>
        <ul>
          <li>Underweight: BMI less than 18.5</li>
          <li>Normal weight: BMI between 18.5 and 24.9</li>
          <li>Overweight: BMI between 25 and 29.9</li>
          <li>Obesity: BMI 30 or greater</li>
        </ul>
        <h3>Limitations of BMI</h3>
        <p>
        While BMI is widely used, it has some limitations. 
        It doesn't differentiate between muscle mass and fat mass, 
        so individuals with high muscle mass (such as athletes) 
        may be classified as overweight or obese even though 
        they have low body fat. Additionally, BMI doesn't consider 
        fat distribution, which is an important factor in 
        assessing health risks. It also doesn't account for 
        differences in body composition due to age, gender, or ethnicity.
        </p>
        <p>
        For a more comprehensive assessment of health, 
        BMI should be used alongside other measurements, 
        such as "${s.waist}"-to-"${s.hip}" 
        ratio or body fat percentage.
        </p>
        </div>

        <form id="bmi-form">
          <div class="input-group">
            <label for="${s.unitSystem}">Unit System</label>
            <select id="${s.unitSystem}" 
            name="${s.unitSystem}">
              <option value="${h.METRIC}">Metric</option>
              <option value="${h.IMPERIAL}">Imperial</option>
            </select>
          </div>
          <div class="input-group">
            <label for="${s.height}">Height</label>
            <input type="text" id="${s.height}" 
            name="${s.height}" placeholder="m">
          </div>
          <div class="input-group">
            <label for="${s.weight}">Weight</label>
            <input type="text" id="${s.weight}" 
            name="${s.weight}" placeholder="kg">
          </div>
          <div class="button-group">
            <button type="reset">Reset</button>
            <button type="submit">Calculate</button>
          </div>
        </form>

        <div class="errorMessage"></div>
        <div class="results">
          <h2>Results</h2>
          <table class="resultTable">
            <tr>
              <td>BMI</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Health Risk</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Ideal weight</td>
              <td>-</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="sources">
    Sources:
    <ul>
      <li>World Health Organization (WHO) – BMI Classification 
      and Health Risks</li>
      <li>National Institutes of Health (NIH) – 
      Health Risks Associated with Overweight and Obesity</li>
      <li>Centers for Disease Control and Prevention (CDC) – 
      Body Mass Index and Health</li>
      <li>Harvard School of Public Health – 
      Understanding Obesity-Related Health Risks</li>
    </ul>
  </div>
      </section>
    `;class x extends f{constructor(e){super(e)}render(e){e.innerHTML=_,this.initializeCommonElements(),this.initializeInputs(["weight","height"]),this.initializeSelectField("unitSystem")}updateResults(e){if(!this.resultsTable)return;const t=this.resultsTable.rows;t[0].cells[1].textContent=e.bmi,t[1].cells[1].textContent=e.category,t[2].cells[1].textContent=e.healthRisk,t[3].cells[1].textContent=e.idealWeight}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class D{constructor(e,t,i,r,o,l){this.user=e,this.bmiCalculator=t,this.bodycompositionCalculator=i,this.bmrCalculator=r,this.tdeeCalculator=o,this.calorieCalculator=l}getBmi(){return this.bmiCalculator.calculateBmi(this.user)}getBmiType(){const e=this.getBmi();return this.bmiCalculator.calculateBmiType(e)}getBmiPrime(){const e=this.getBmi();return this.bmiCalculator.calculateBmiPrime(e)}getIdealWeight(){return this.bmiCalculator.calculateIdealWeight(this.user)}getWaistToHipRatio(){return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)}getWaistToHeightRatio(){return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)}getBodyFatPercentage(){return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)}getLeanBodyMass(){return this.bodycompositionCalculator.calculateLeanBodyMass(this.user)}getBmrHarrisBenedict(){return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)}getBmrMifflinStJeor(){return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)}getTdeeHarrisBenedict(){const e=this.getBmrHarrisBenedict();return this.tdeeCalculator.calculateTdeeHarrisBenedict(this.user,e)}getTdeeMifflinStJeor(){const e=this.getBmrMifflinStJeor();return this.tdeeCalculator.calculateTdeeMifflinStJeor(this.user,e)}getCaloricSurplusOrDeficit(){const e=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloricSurplusOrDeficit(this.user,e)}getEstimatedWeightChangeWeekly(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeWeekly(e,this.user)}getEstimatedWeightChangeMonthly(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeMonthly(e,this.user)}getEstimateTimeToWeightGoal(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeeksToWeightGoal(e,this.user)}getCaloriesForWeightGoal(){const e=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloriesForWeightGoal(this.user,e)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */var g;(function(a){a.UnderweightSevereThinness="underweight, severe thinness",a.UnderweightModerateThinness="underweight, moderate thinness",a.UnderweightMildThinness="underweight, mild thinness",a.Normal="normal weight",a.Overweight="overweight, pre-obese",a.ObeseFirstGrade="obese, class I",a.ObeseSecondGrade="obese, class II",a.ObeseThirdGrade="obese, class III"})(g||(g={}));const M=[{min:0,max:15.9,type:g.UnderweightSevereThinness},{min:16,max:16.9,type:g.UnderweightModerateThinness},{min:17,max:18.4,type:g.UnderweightMildThinness},{min:18.5,max:24.9,type:g.Normal},{min:25,max:29.9,type:g.Overweight},{min:30,max:34.9,type:g.ObeseFirstGrade},{min:35,max:39.9,type:g.ObeseSecondGrade},{min:40,max:100,type:g.ObeseThirdGrade}];var E;(function(a){a.Sedentary="sedentary",a.Lightly="lightly",a.Moderately="moderately",a.Very="very",a.Extremely="extremely"})(E||(E={}));/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class N{calculateBmi(e){this.validateWeightAndHeight(e);const t=2;return e.weight/Math.pow(e.height,t)}calculateBmiType(e){this.validateBmi(e);const t=this.roundBmi(e);return this.findBmiType(t)}calculateIdealWeight(e){this.validateHeight(e);const t=this.getNormalBmiRange(),i=this.calculateWeight(t.min,e.height),r=this.calculateWeight(t.max,e.height);return[i,r]}calculateBmiPrime(e){return e/25}validateWeightAndHeight(e){if(e.weight===void 0||e.height===void 0)throw new Error("Weight and height are required for BMI calculation.");if(typeof e.weight!="number"||typeof e.height!="number")throw new Error("Weight and height must be numbers.");if(e.weight<=0||e.height<=0)throw new Error("Weight and height must be positive numbers.")}validateHeight(e){if(e.height===void 0)throw new Error("Height is required for ideal weight calculation.");if(typeof e.height!="number")throw new Error("Height must be a number.");if(e.height<=0)throw new Error("Height must be a positive number.")}validateBmi(e){if(e<=0||e>100)throw new Error(`BMI out of range. Please check your values. BMI: ${e}`)}roundBmi(e){return Math.round(e)}findBmiType(e){for(const t of M)if(e>=t.min&&e<=t.max)return t.type;throw new Error("Bmi Type could not be found")}getNormalBmiRange(){const e=M.find(t=>t.type===g.Normal);if(!e)throw new Error("Could not find normal BMI range.");return e}calculateWeight(e,t){return e*Math.pow(t,2)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class P{constructor(){this.CM_PER_METER=100,this.PERCENTAGE=100,this.TOTAL_BODY_COMPOSITION=1,this.BODY_FAT={CONSTANT_FACTOR:495,SUBTRACTION_CONSTANT:450},this.BODY_FAT_MALE={CONSTANT:1.0324,WAIST_NECK_FACTOR:.19077,HEIGHT_FACTOR:.15456},this.BODY_FAT_FEMALE={CONSTANT:1.29579,WAIST_HIP_NECK_FACTOR:.35004,HEIGHT_FACTOR:.221}}calculateWaistToHipRatio(e){return this.validateWaistAndHip(e),e.waist/e.hip}calculateWaistToHeightRatio(e){this.validateWaistAndHeight(e);const t=this.convertHeightToCentimeter(e.height);return e.waist/t}calculateBodyFatPercentage(e){this.validateRequiredMeasurements(e);const t=this.convertHeightToCentimeter(e.height);return this.calculateBodyFatBasedOnGender(e,t)}calculateLeanBodyMass(e){this.validateRequiredMeasurements(e);const i=this.calculateBodyFatPercentage(e)/this.PERCENTAGE,r=this.TOTAL_BODY_COMPOSITION-i;return e.weight*r}convertHeightToCentimeter(e){return e*this.CM_PER_METER}calculateMaleBodyFat(e,t){this.validateWaistAndNeck(e);const{CONSTANT:i,WAIST_NECK_FACTOR:r,HEIGHT_FACTOR:o}=this.BODY_FAT_MALE,{CONSTANT_FACTOR:l,SUBTRACTION_CONSTANT:u}=this.BODY_FAT,y=i-r*Math.log10(e.waist-e.neck)+o*Math.log10(t);return l/y-u}calculateFemaleBodyFat(e,t){this.validateWaistHipAndNeck(e);const{CONSTANT:i,WAIST_HIP_NECK_FACTOR:r,HEIGHT_FACTOR:o}=this.BODY_FAT_FEMALE,{CONSTANT_FACTOR:l,SUBTRACTION_CONSTANT:u}=this.BODY_FAT,y=i-r*Math.log10(e.waist+e.hip-e.neck)+o*Math.log10(t);return l/y-u}validateWaistAndHip(e){if(!e.waist||!e.hip)throw new Error("Waist and hip measurements are required for waist to hip calculation.")}validateWaistAndHeight(e){if(!e.waist||!e.height)throw new Error("Waist and height measurements are required for waist to height calculation.")}validateWaistHipAndNeck(e){if(!e.waist||!e.neck||!e.hip)throw new Error("Waist, hip and neck is required to calculate body fat percentage for female")}validateWaistAndNeck(e){if(!e.waist||!e.neck)throw new Error("Waist and neck is required to calculate body fat percentage for male")}validateRequiredMeasurements(e){if(e.weight===void 0||e.height===void 0)throw new Error("Weight and height are required for body composition calculations.")}calculateBodyFatBasedOnGender(e,t){if(e.gender==="male")return this.calculateMaleBodyFat(e,t);if(e.gender==="female")return this.calculateFemaleBodyFat(e,t);throw new Error('Invalid gender. Gender must be either "male" or "female".')}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class U{constructor(){this.CM_PER_METER=100,this.MIFFLIN_ST_JEOR={WEIGHT_FACTOR:10,HEIGHT_FACTOR:6.25,AGE_FACTOR:5,MALE_ADJUSTMENT:5,FEMALE_ADJUSTMENT:-161},this.HARRIS_BENEDICT={FEMALE:{BASE:447.593,WEIGHT_FACTOR:9.247,HEIGHT_FACTOR:3.098,AGE_FACTOR:4.33},MALE:{BASE:88.362,WEIGHT_FACTOR:13.397,HEIGHT_FACTOR:4.799,AGE_FACTOR:5.677}}}calculateBmrHarrisBenedict(e){this.validateRequiredFields(e);const t=this.convertHeightToCentimeter(e.height);return this.calculateBmrBasedOnGender(e,t)}calculateBmrMifflinStJeor(e){this.validateRequiredFields(e);const t=this.convertHeightToCentimeter(e.height),i=this.MIFFLIN_ST_JEOR.WEIGHT_FACTOR*e.weight,r=this.MIFFLIN_ST_JEOR.HEIGHT_FACTOR*t,o=this.MIFFLIN_ST_JEOR.AGE_FACTOR*e.age,l=e.gender==="male"?this.MIFFLIN_ST_JEOR.MALE_ADJUSTMENT:this.MIFFLIN_ST_JEOR.FEMALE_ADJUSTMENT;return i+r-o+l}convertHeightToCentimeter(e){return e*this.CM_PER_METER}harrisBenedictFemale(e,t){const{BASE:i,WEIGHT_FACTOR:r,HEIGHT_FACTOR:o,AGE_FACTOR:l}=this.HARRIS_BENEDICT.FEMALE,u=r*e.weight,y=o*t,C=l*e.age;return i+u+y-C}harrisBenedictMale(e,t){const{BASE:i,WEIGHT_FACTOR:r,HEIGHT_FACTOR:o,AGE_FACTOR:l}=this.HARRIS_BENEDICT.MALE,u=r*e.weight,y=o*t,C=l*e.age;return i+u+y-C}calculateBmrBasedOnGender(e,t){if(e.gender==="male")return this.harrisBenedictMale(e,t);if(e.gender==="female")return this.harrisBenedictFemale(e,t);throw new Error("Invalid gender. Gender must be either 'male' or 'female'.")}validateRequiredFields(e){if(e.weight===void 0||typeof e.weight!="number"||e.weight<=0)throw new Error("Valid weight is required for BMR calculation.");if(e.height===void 0||typeof e.height!="number"||e.height<=0)throw new Error("Valid height is required for BMR calculation.");if(e.age===void 0||typeof e.age!="number"||e.age<=0)throw new Error("Valid age is required for BMR calculation.");if(e.gender===void 0||e.gender!=="male"&&e.gender!=="female")throw new Error("Valid gender is required for BMR calculation. Gender must be either 'male' or 'female'.")}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class J{constructor(){this.ACTIVITY_FACTORS={SEDENTARY:1.2,LIGHTLY:1.375,MODERATELY:1.55,VERY:1.725,EXTREMELY:1.9}}calculateTdeeMifflinStJeor(e,t){this.validateAgeAndActivityLevel(e);const i=t,r=this.getActivityFactor(e.activityLevel);return this.calculateTdee(i,r)}calculateTdeeHarrisBenedict(e,t){this.validateAgeAndActivityLevel(e);const i=t,r=this.getActivityFactor(e.activityLevel);return this.calculateTdee(i,r)}getActivityFactor(e){switch(e){case E.Sedentary:return this.ACTIVITY_FACTORS.SEDENTARY;case E.Lightly:return this.ACTIVITY_FACTORS.LIGHTLY;case E.Moderately:return this.ACTIVITY_FACTORS.MODERATELY;case E.Very:return this.ACTIVITY_FACTORS.VERY;case E.Extremely:return this.ACTIVITY_FACTORS.EXTREMELY;default:throw new Error("Activity level must be sedentary, lightly, moderately, very, or extremely")}}validateAgeAndActivityLevel(e){if(!e.age||!e.activityLevel)throw new Error("Age and activity level is required")}calculateTdee(e,t){return e*t}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */const Y={min:0,max:700},q={min:0,max:1543},z={min:0,max:2.5},j={min:0,max:8.2};function K(a){try{X(a),a.weight!==void 0&&Z(a),a.height!==void 0&&ee(a),te(a),ie(a),ae(a),Q(a),se(a),re(a),oe(a)}catch(e){const t=`Validation error in user object: ${JSON.stringify(a)} - ${e.message}. Stack trace: ${e.stack}`;throw new Error(t)}}function X(a){["age","waist","hip","neck","dailyCalories","weightGoal","weeksToWeightGoal"].forEach(t=>{if(t in a&&a[t]!==void 0&&typeof a[t]!="number")throw new TypeError(`${t} must be a number if provided`)})}function Q(a){if(a.unitSystem===void 0)throw new Error("Unit system is required");if(typeof a.unitSystem!="string")throw new TypeError(`Unit system must be a string. Check the unitSystem value in ${JSON.stringify(a)}`);if(a.unitSystem!=="metric"&&a.unitSystem!=="imperial")throw new Error('Unit system must be either "metric" or "imperial"')}function W(a,e,t,i,r){if(a<e.min||a>e.max)throw new RangeError(`${t.charAt(0).toUpperCase()+t.slice(1)} using the ${i} system must be between ${e.min}-${e.max}. Check the ${t.toLowerCase()} value in ${JSON.stringify(r)}`)}function Z(a){if(typeof a.weight!="number")throw new Error(`Weight must be a number if provided. Check the weight value in ${JSON.stringify(a)}`);const e=a.unitSystem==="metric"?Y:q,t=a.unitSystem==="metric"?"metric":"imperial";W(a.weight,e,"weight",t,a)}function ee(a){if(typeof a.height!="number")throw new Error(`Height must be a number if provided. Check the height value in ${JSON.stringify(a)}`);const e=a.unitSystem==="metric"?z:j,t=a.unitSystem==="metric"?"metric":"imperial";W(a.height,e,"height",t,a)}function te(a){if(a.gender!==void 0&&a.gender!=="male"&&a.gender!=="female")throw new TypeError(`Gender must be male or female. Check the gender value in ${JSON.stringify(a)}`)}function ie(a){a.age!==void 0&&a.age<18&&console.warn(`Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(a)}`)}function ae(a){const e=["sedentary","lightly","moderately","very","extremely"];if(a.activityLevel!==void 0&&!e.includes(a.activityLevel))throw new TypeError(`Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(a)}`)}function se(a){if(a.dailyCalories!==void 0&&a.dailyCalories<0)throw new Error(`Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(a)}`)}function re(a){if(a.weightGoal!==void 0&&a.weightGoal<0)throw new Error(`The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(a)}`)}function oe(a){if(a.weeksToWeightGoal!==void 0&&a.weeksToWeightGoal<0)throw new Error(`Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(a)}`)}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function le(a){return{...a}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function ne(a){return a.unitSystem==="metric"?a:{...a,height:a.height!==void 0?he(a.height):void 0,weight:a.weight!==void 0?R(a.weight):void 0,waist:a.waist!==void 0?I(a.waist):void 0,hip:a.hip!==void 0?I(a.hip):void 0,neck:a.neck!==void 0?I(a.neck):void 0,weightGoal:a.weightGoal!==void 0?R(a.weightGoal):void 0,unitSystem:"metric"}}function he(a){return a!==void 0?a*.3048:void 0}function R(a){return a!==void 0?a*.453592:void 0}function I(a){return a!==void 0?a*2.54:void 0}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class ce{constructor(){this.DAYS_IN_WEEK=7,this.DAYS_IN_MONTH=30,this.CALORIES_PER_KILO=7700,this.REFERENCE_WEIGHT=70}calculateCaloricSurplusOrDeficit(e,t){return this.validateDailyCalories(e),t-e.dailyCalories}calculateEstimatedWeightChangeWeekly(e,t){return this.validateWeight(t),this.estimateWeightChange(e,t,this.DAYS_IN_WEEK)}calculateEstimatedWeightChangeMonthly(e,t){return this.validateWeight(t),this.estimateWeightChange(e,t,this.DAYS_IN_MONTH)}calculateEstimatedWeeksToWeightGoal(e,t){this.validateWeightGoal(t),this.validateWeight(t);const i=this.estimateWeightChange(e,t,this.DAYS_IN_WEEK),r=t.weightGoal-t.weight,l=Math.abs(r)/Math.abs(i);return Math.ceil(l)}calculateCaloriesForWeightGoal(e,t){this.validateWeightGoal(e),this.validateWeight(e),this.validateWeeksToWeightGoal(e);const i=e.weightGoal-e.weight,l=Math.abs(i)/e.weeksToWeightGoal*this.CALORIES_PER_KILO/this.DAYS_IN_WEEK;return i>0?Math.round(t+l):Math.round(t-l)}validateDailyCalories(e){if(e.dailyCalories===void 0||typeof e.dailyCalories!="number"||e.dailyCalories<0)throw new Error("Valid dailyCalories is required for calorie calculation")}validateWeightGoal(e){if(e.weightGoal===void 0||typeof e.weightGoal!="number"||e.weightGoal<=0)throw new Error("Valid weightGoal is required for some calorie calculations")}validateWeight(e){if(e.weight===void 0||typeof e.weight!="number"||e.weight<=0)throw new Error("Valid weight is required for some calorie calculations")}validateWeeksToWeightGoal(e){if(e.weeksToWeightGoal===void 0||typeof e.weeksToWeightGoal!="number"||e.weeksToWeightGoal<=0)throw new Error("Valid weeksToWeightGoal is required for some calorie calculations")}estimateWeightChange(e,t,i){const r=this.CALORIES_PER_KILO*(t.weight/this.REFERENCE_WEIGHT);return e*i/r}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class de{static createHealthCalculator(e){K(e);const t=le(e),i=ne(t),r=new N,o=new P,l=new U,u=new J,y=new ce;return new D(i,r,o,l,u,y)}}var m=(a=>(a.UNDERWEIGHT_SEVERE="underweight, severe thinness",a.UNDERWEIGHT_MODERATE="underweight, moderate thinness",a.UNDERWEIGHT_MILD="underweight, mild thinness",a.NORMAL_WEIGHT="normal weight",a.OVERWEIGHT_PRE_OBESE="overweight, pre-obese",a.OBESE_CLASS_I="obese, class I",a.OBESE_CLASS_II="obese, class II",a.OBESE_CLASS_III="obese, class III",a))(m||{});const ue={[m.UNDERWEIGHT_SEVERE]:"High risk of malnutrition, weakened immune system, and more.",[m.UNDERWEIGHT_MODERATE]:"Risks include nutrient deficiencies and weakened immune response.",[m.UNDERWEIGHT_MILD]:"Moderate risk of malnutrition.",[m.NORMAL_WEIGHT]:"Lowest health risks with a balanced lifestyle.",[m.OVERWEIGHT_PRE_OBESE]:"Increased risk of cardiovascular diseases and type 2 diabetes.",[m.OBESE_CLASS_I]:"Significant risk of metabolic syndrome and heart disease.",[m.OBESE_CLASS_II]:"Increased risk for heart disease and stroke.",[m.OBESE_CLASS_III]:"Severe health risks including reduced life expectancy."};function ge(a){return ue[a]||"Unknown health risk."}class me{constructor(e){n(this,"calculator");this.userModel=e,this.calculator=this.createCalculator()}createCalculator(){const e=this.userModel.getData();return de.createHealthCalculator({unitSystem:e.unitSystem,weight:e.weight,height:e.height,age:e.age,gender:e.gender,waist:e.waist,hip:e.hip,neck:e.neck,activityLevel:e.activityLevel,dailyCalories:e.dailyCalories,weightGoal:e.weightGoal,weeksToWeightGoal:e.weeksToWeightGoal})}getBmi(){return this.calculator=this.createCalculator(),this.calculator.getBmi()}getBmiType(){this.calculator=this.createCalculator();const e=this.calculator.getBmiType();return this.convertBmiCategoryFromString(e)}convertBmiCategoryFromString(e){const t=e.toLowerCase().trim();for(const[i,r]of Object.entries(m))if(r.toLowerCase()===t)return m[i];throw new Error(`Invalid BMI category: ${e}`)}getHealthRisk(){return ge(this.getBmiType())}getBmiPrime(){return this.calculator=this.createCalculator(),this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator=this.createCalculator(),this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator=this.createCalculator(),this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator=this.createCalculator(),this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator=this.createCalculator(),this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeMonthly()}getEstimateTimeToWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getEstimateTimeToWeightGoal()}getCaloriesForWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getCaloriesForWeightGoal()}}class pe{constructor(e){n(this,"calculator");this.calculator=new me(e)}getBmi(){return this.calculator.getBmi()}getBmiType(){return this.calculator.getBmiType()}getHealthRisk(){return this.calculator.getHealthRisk()}getBmiPrime(){return this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator.getEstimatedWeightChangeMonthly()}getCaloriesForWeightGoal(){return this.calculator.getCaloriesForWeightGoal()}getEstimateTimeToWeightGoal(){return this.calculator.getEstimateTimeToWeightGoal()}}class w{constructor(e,t,i){n(this,"user");n(this,"calculator");n(this,"formValidator");this.user=e,this.calculator=t,this.formValidator=i}bindFormEvents(e){this.view.bindFormEvents(t=>{e(t)}),this.view.bindResetEvent(()=>{this.handleReset()})}handleErrors(e){this.view.showError(e.message)}resetForm(){this.user.resetData(),this.view.clearForm(),this.view.clearResults(),this.view.hideError(),this.view.updatePlaceholders()}fillFormData(e){e.unitSystem&&this.view.setSelectValue("unitSystem",e.unitSystem),Object.entries(e).forEach(([t,i])=>{typeof i=="number"?this.view.setInputValue(t,i):typeof i=="string"&&this.view.setSelectValue(t,i)}),this.updatePlaceholders()}updatePlaceholders(){this.view.updatePlaceholders()}handleFormSubmit(e){e.preventDefault();const t=new FormData(e.target);this.handleCalculate(t)}handleReset(){this.resetForm()}}class ye extends w{constructor(t,i,r){super(t,i,r);n(this,"view");this.view=new x(this.getUnitSystemValue.bind(this))}init(t){this.view.render(t),this.fillFormData(this.user.getData()),this.bindFormEvents(this.handleCalculate.bind(this))}getUnitSystemValue(){return this.user.getData().unitSystem??h.METRIC}handleCalculate(t){try{const i=this.parseFormData(t);this.formValidator.validateIBmiFormData(i),this.user.setData(i),this.updateView(),this.view.hideError()}catch(i){this.handleErrors(i)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),weight:parseFloat(t.get("weight")),height:parseFloat(t.get("height"))}}updateView(){const t=this.calculator.getBmi(),i=this.calculator.getBmiType(),r=this.calculator.getHealthRisk(),o=this.calculator.getIdealWeight(),l={bmi:this.formatValue(t),category:i,healthRisk:r,idealWeight:this.formatIdealWeight(o)};this.view.updateResults(l)}formatValue(t){return t.toFixed(1)}formatIdealWeight([t,i]){return`${this.formatValue(t)} - ${this.formatValue(i)} kg`}}const ve=`
<section class="container">
    <h2>Waist to Hip Ratio Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your Waist-to-Hip 
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

        <form id="${s.waist}"-"${s.hip}"-ratio-form">
            <div class="input-group">
                <label for="${s.unitSystem}">Unit System</label>
                <select id="${s.unitSystem}" 
                name="${s.unitSystem}">
                    <option value="${h.METRIC}">Metric</option>
                    <option value="${h.IMPERIAL}">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="${s.waist}">Waist - 
                Circumference</label>
                <input type="text" id="${s.waist}" 
                name="${s.waist}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${s.hip}">Hip -
                Circumference</label>
                <input type="text" id="${s.hip}" 
                name="${s.hip}" placeholder="cm">
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
                    <td>Waist to Hip Ratio</td>
                    <td>-</td>
                </tr>
            </table>
    </div>
    <div class="sources">
        Sources:
        <ul>
            <li>World Health Organization (WHO) – 
            waist-to-hip Ratio</li>
            <li>Centers for Disease Control and Prevention (CDC) – 
            Health Guidelines</li>
        </ul>
    </div>
</section>
`;class fe extends f{constructor(e){super(e)}render(e){e.innerHTML=ve,this.initializeCommonElements(),this.initializeInputs(["hip","waist"]),this.initializeSelectField("unitSystem")}updateResults(e){if(!this.resultsTable)return;const t=this.resultsTable.rows;t[0].cells[1].textContent=e.waistToHipRatio}}class we extends w{constructor(t,i,r){super(t,i,r);n(this,"view");this.view=new fe(this.getUnitSystemValue.bind(this))}init(t){this.view.render(t),this.fillFormData(this.user.getData()),this.bindFormEvents(this.handleCalculate.bind(this))}getUnitSystemValue(){return this.user.getData().unitSystem??h.METRIC}handleCalculate(t){try{const i=this.parseFormData(t);this.formValidator.validateWaistToHipRatioFormData(i),this.user.setData(i),this.updateView(),this.view.hideError()}catch(i){this.handleErrors(i)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),waist:parseFloat(t.get("waist")),hip:parseFloat(t.get("hip"))}}updateView(){const t=this.calculator.getWaistToHipRatio(),i={waistToHipRatio:this.formatValue(t)};this.view.updateResults(i)}formatValue(t){return t.toFixed(2)}}const Ee=`
<section class="container">
    <h2>Waist-to-Height Ratio Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your "${s.waist}"-to-Height Ratio 
            (WHtR) to determine abdominal 
            fat levels and associated health risks.
        </p>

        <p class="info">
            A WHtR value of <strong>less than 0.5</strong> 
            is generally considered 
            healthy for both men and women. 
            Values above 0.5 may indicate an increased risk of cardiovascular d
            isease, type 2 diabetes, and other health conditions. 
            Keeping your "${s.waist}" 
            circumference below half of your height is a 
            guideline for maintaining a healthier profile.
        </p>

        <form id="${s.waist}"-height-ratio-form">
            <div class="input-group">
                <label for="${s.unitSystem}">Unit System</label>
                <select id="${s.unitSystem}" 
                name="${s.unitSystem}">
                    <option value="${h.METRIC}">Metric</option>
                    <option value="${h.IMPERIAL}">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="${s.waist}">Waist -
                Circumference</label>
                <input type="text" id="${s.waist}" 
                name="${s.waist}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${s.height}">Height</label>
                <input type="text" id="${s.height}" 
                name="${s.height}" placeholder="m">
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
                    <td>Waist-to-Height Ratio</td>
                    <td>-</td>
                </tr>
            </table>
    </div>
    </div>
    <div class="sources">
        Sources:
        <ul>
            <li>Journal of Clinical Endocrinology & Metabolism – 
            Waist-to-Height Ratio Research</li>
            <li>American Heart Association – Cardiovascular Health</li>
        </ul>
    </div>
</section>
`;class Te extends f{constructor(e){super(e)}render(e){e.innerHTML=Ee,this.initializeCommonElements(),this.initializeInputs(["waist","height"]),this.initializeSelectField("unitSystem")}updateResults(e){if(!this.resultsTable)return;const t=this.resultsTable.rows;t[0].cells[1].textContent=e.waistToHeightRatio}}class be extends w{constructor(t,i,r){super(t,i,r);n(this,"view");this.view=new Te(this.getUnitSystemValue.bind(this))}init(t){this.view.render(t),this.fillFormData(this.user.getData()),this.bindFormEvents(this.handleCalculate.bind(this))}getUnitSystemValue(){return this.user.getData().unitSystem??h.METRIC}handleCalculate(t){try{const i=this.parseFormData(t);this.formValidator.validateIWaistHeightRatioFormData(i),this.user.setData(i),this.updateView(),this.view.hideError()}catch(i){this.handleErrors(i)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),waist:parseFloat(t.get("waist")),height:parseFloat(t.get("height"))}}updateView(){const t=this.calculator.getWaistToHeightRatio(),i={waistToHeightRatio:this.formatValue(t)};this.view.updateResults(i)}formatValue(t){return t.toFixed(2)}}const Ce=`
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
                <label for="${s.unitSystem}">Unit System</label>
                <select id="${s.unitSystem}" 
                name="${s.unitSystem}">
                    <option value="${h.METRIC}">Metric</option>
                    <option value="${h.IMPERIAL}">Imperial</option>
                </select>
            </div>
            <div class="input-group">
                <label for="${s.gender}">Gender</label>
                <div>
                    <input type="radio" id="male" 
                    name="${s.gender}" value="male">
                    <label for="male">Male</label>
                    <input type="radio" id="female" 
                    name="${s.gender}" 
                    value="female">
                    <label for="female">Female</label>
                </div>
            </div>
            <div class="input-group">
                <label for="${s.weight}">Weight</label>
                <input type="text" id="${s.weight}" 
                name="${s.weight}" placeholder="kg">
            </div>
            <div class="input-group">
                <label for="${s.waist}">Waist - 
                Circumference</label>
                <input type="text" id="${s.waist}" 
                name="${s.waist}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${s.hip}">Hip -
                Circumference (for females only)</label>
                <input type="text" id="${s.hip}" 
                name="${s.hip}" placeholder="cm">
            </div>
            <div class="input-group">
                <label for="${s.neck}">Neck - 
                Circumference</label>
                <input type="text" id="${s.neck}" 
                name="${s.neck}" placeholder="cm">
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
`;class Ie extends f{constructor(t){super(t);n(this,"hipInputGroup",null)}render(t){t.innerHTML=Ce,this.initializeCommonElements(),this.initializeInputs(["weight","waist","hip","neck"]),this.initializeSelectField("unitSystem"),this.hipInputGroup=this.getHipInputGroup()}bindGenderChange(t){document.querySelectorAll('input[name="gender"]').forEach(r=>{r.addEventListener("change",o=>{const l=o.target;t(l.value)})})}setGenderSelection(t){const i=document.querySelector(`input[value="${t}"]`);i&&(i.checked=!0)}toggleHipInputVisibility(t){this.hipInputGroup&&(this.hipInputGroup.style.display=t?"block":"none")}clearHipInput(){const t=this.inputs.get("hip");t&&(t.value="")}getHipInputGroup(){const t=this.inputs.get("hip");return(t==null?void 0:t.closest(".input-group"))||null}updateResults(t){if(!this.resultsTable)return;const i=this.resultsTable.rows;i[0].cells[1].textContent=t.bodyFatPercentage,i[1].cells[1].textContent=t.leanBodyMass}}var p=(a=>(a.MALE="male",a.FEMALE="female",a))(p||{});class Se extends w{constructor(t,i,r){super(t,i,r);n(this,"view");this.view=new Ie(this.getUnitSystemValue.bind(this))}init(t){this.view.render(t),this.view.bindGenderChange(this.handleGenderChange.bind(this));const i=this.user.getData();this.fillFormData(i),i.gender?this.handleGenderChange(i.gender):this.view.toggleHipInputVisibility(!1),this.bindFormEvents(this.handleCalculate.bind(this))}handleGenderChange(t){const i=t===p.FEMALE;this.view.toggleHipInputVisibility(i),i||this.view.clearHipInput()}getUnitSystemValue(){return this.user.getData().unitSystem??h.METRIC}handleCalculate(t){try{const i=this.parseFormData(t);this.formValidator.validateIBodyFatPercentageFormData(i),this.user.setData(i),this.updateView(),this.view.hideError()}catch(i){this.handleErrors(i)}}parseFormData(t){const i={unitSystem:t.get("unitSystem"),gender:t.get("gender"),weight:parseFloat(t.get("weight")),waist:parseFloat(t.get("waist")),neck:parseFloat(t.get("neck"))};if(i.gender===p.FEMALE){const r=t.get("hip");if(r)i.hip=parseFloat(r);else throw new Error("Hip measurement is required for females.")}return i}updateView(){const t=this.calculator.getBodyFatPercentage(),i=this.calculator.getLeanBodyMass(),r={bodyFatPercentage:this.formatBodyFatPercentage(t),leanBodyMass:this.formatLeanBodyMass(i)};this.view.updateResults(r)}formatBodyFatPercentage(t){return`${t.toFixed(2)} %`}formatLeanBodyMass(t){return`${t.toFixed(2)} kg`}}var c=(a=>(a.SEDENTARY="sedentary",a.LIGHTLY="lightly",a.MODERATELY="moderately",a.VERY="very",a.EXTREMELY="extremely",a))(c||{});const Me=`
  <section class="container">
    <h2>TDEE Calculator (Harris-Benedict & Mifflin-St Jeor)</h2>
    <div class="content">

      <div class="additional-info">
        <h2>What is TDEE?</h2>
        <p>
        TDEE (Total Daily Energy Expenditure) 
        is the total amount of energy (calories) 
        your body needs per day to maintain its 
        current weight. It takes into account 
        your Basal Metabolic Rate (BMR) and your activity level. 
        TDEE represents the sum of calories burned 
        through basic bodily functions, 
        physical activity, and the thermic effect of food.
        </p>
        <p>
        The Harris-Benedict and Mifflin-St Jeor 
        equations are commonly used to estimate BMR, 
        which is then adjusted based on activity level to determine TDEE. 
        These formulas consider weight, height, age, 
        gender, and activity level to provide an estimate 
        of daily energy needs.
        </p>

        <h3>Limitations of TDEE Calculations</h3>
        <p>
        While both the Harris-Benedict and 
        Mifflin-St Jeor equations offer useful estimates of TDEE, 
        they do not account for variations in muscle mass, body fat percentage, 
        or other metabolic factors that may affect calorie needs. 
        It is recommended to use these TDEE 
        values as part of a broader assessment 
        when planning dietary and fitness goals.
        </p>
      </div>

      <form id="tdee-form">
        <div class="input-group">
          <label for="${s.unitSystem}">Unit System</label>
          <select id="${s.unitSystem}" 
          name="${s.unitSystem}">
            <option value="${h.METRIC}">Metric</option>
            <option value="${h.IMPERIAL}">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.gender}">Gender</label>
          <select id="${s.gender}" name="${s.gender}">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.height}">Height</label>
          <input type="text" id="${s.height}" 
          name="${s.height}" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="${s.weight}">Weight</label>
          <input type="text" id="${s.weight}" 
          name="${s.weight}" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="${s.age}">Age</label>
          <input type="number" id="${s.age}" 
          name="${s.age}" placeholder="years">
        </div>
        <div class="input-group">
          <label for="${s.activityLevel}">Activity Level</label>
          <select id="${s.activityLevel}" 
          name="${s.activityLevel}">
            <option value="${c.SEDENTARY}">Sedentary
            </option>
            <option value="${c.LIGHTLY}">Lightly Active
            </option>
            <option value="${c.MODERATELY}">Moderately Active
            </option>
            <option value="${c.VERY}">Very Active</option>
            <option value="${c.EXTREMELY}">Extremely Active
            </option>
          </select>
        </div>
        <div class="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>

      <div class="errorMessage"></div>
      <div class="results">
        <h2>Results</h2>
        <table class="resultTable">
          <tr>
            <td>TDEE (Harris-Benedict)</td>
            <td>-</td>
          </tr>
          <tr>
            <td>TDEE (Mifflin-St Jeor)</td>
            <td>-</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>Harris, J.A. & Benedict, F.G. (1918) – 
        A Biometric Study of Basal Metabolism in Man</li>
        <li>Mifflin, M.D., et al. (1990) – 
        A New Predictive Equation for Resting Energy Expenditure 
        in Healthy Individuals</li>
        <li>National Institutes of Health (NIH) – 
        Understanding Caloric Needs</li>
        <li>World Health Organization (WHO) – 
        Energy Requirements and Health Risks</li>
        <li>American Council on Exercise (ACE) – 
        Understanding Activity Levels and TDEE</li>
      </ul>
    </div>
  </section>
`;class Re extends f{constructor(e){super(e)}render(e){e.innerHTML=Me,this.initializeCommonElements(),this.initializeInputs(["weight","height","age"]),this.initializeSelectField("unitSystem")}updateResults(e){if(!this.resultsTable)return;const t=this.resultsTable.rows;t[0].cells[1].textContent=e.totalDailyEnergyExpenditureHarris,t[1].cells[1].textContent=e.totalDailyEnergyExpenditureMifflin}}class He extends w{constructor(t,i,r){super(t,i,r);n(this,"view");this.view=new Re(this.getUnitSystemValue.bind(this))}init(t){this.view.render(t),this.fillFormData(this.user.getData()),this.bindFormEvents(this.handleCalculate.bind(this))}getUnitSystemValue(){return this.user.getData().unitSystem??h.METRIC}handleCalculate(t){try{const i=this.parseFormData(t);this.formValidator.validateITotalDailyEnergyExpenditureFormData(i),this.user.setData(i),this.updateView(),this.view.hideError()}catch(i){this.handleErrors(i)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),gender:t.get("gender"),weight:parseFloat(t.get("weight")),height:parseFloat(t.get("height")),age:parseFloat(t.get("age")),activityLevel:t.get("activityLevel")}}updateView(){const t=this.calculator.getTdeeHarrisBenedict(),i=this.calculator.getTdeeMifflinStJeor(),r={totalDailyEnergyExpenditureHarris:this.formatValue(t),totalDailyEnergyExpenditureMifflin:this.formatValue(i)};this.view.updateResults(r)}formatValue(t){return`${t.toFixed(0)} kcal/day`}}const We=`
  <section class="container">
    <h2>BMR Calculator (Harris-Benedict & Mifflin-St Jeor)</h2>
    <div class="content">

      <div class="additional-info">
        <h2>What is BMR?</h2>
        <p>
        BMR is a measure of the amount of energy (calories) your body requires 
        to maintain basic physiological functions like breathing, circulation, 
        and cell production while at rest. It forms the basis for calculating 
        daily energy needs.
        </p>
        <p>
        The Harris-Benedict and Mifflin-St Jeor equations are two of the most 
        commonly used formulas to estimate BMR. 
        These formulas take into account variables such as 
        weight, height, age, and gender to provide an estimate 
        of daily energy requirements.
        </p>

        <h3>Limitations of BMR Calculations</h3>
        <p>
        While both the Harris-Benedict and Mifflin-St Jeor equations provide 
        useful estimates of BMR, they do not consider variations 
        in muscle mass, body fat percentage, or other 
        metabolic factors that may affect calorie needs. 
        It is recommended to use these BMR values 
        as part of a broader assessment 
        of daily calorie needs.
        </p>
      </div>

      <form id="bmr-form">
        <div class="input-group">
          <label for="${s.unitSystem}">Unit System</label>
          <select id="${s.unitSystem}" 
          name="${s.unitSystem}">
            <option value="${h.METRIC}">Metric</option>
            <option value="${h.IMPERIAL}">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.gender}">Gender</label>
          <select id="${s.gender}" name="${s.gender}">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.height}">Height</label>
          <input type="text" id="${s.height}" 
          name="${s.height}" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="${s.weight}">Weight</label>
          <input type="text" id="${s.weight}" 
          name="${s.weight}" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="${s.age}">Age</label>
          <input type="number" id="${s.age}" 
          name="${s.age}" placeholder="years">
        </div>
        <div class="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>

      <div class="errorMessage"></div>
      <div class="results">
        <h2>Results</h2>
        <table class="resultTable">
          <tr>
            <td>BMR (Harris-Benedict)</td>
            <td>-</td>
          </tr>
          <tr>
            <td>BMR (Mifflin-St Jeor)</td>
            <td>-</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>Harris, J.A. & Benedict, F.G. (1918) – 
        A Biometric Study of Basal Metabolism in Man</li>
        <li>Mifflin, M.D., et al. (1990) – 
        A New Predictive Equation for Resting Energy Expenditure 
        in Healthy Individuals</li>
        <li>National Institutes of Health (NIH) – 
        Understanding Caloric Needs</li>
        <li>World Health Organization (WHO) – 
        Energy Requirements and Health Risks</li>
      </ul>
    </div>
  </section>
`;class Fe extends f{constructor(e){super(e)}render(e){e.innerHTML=We,this.initializeCommonElements(),this.initializeInputs(["weight","height","age"]),this.initializeSelectFields(["unitSystem","gender"])}updateResults(e){if(!this.resultsTable)return;const t=this.resultsTable.rows;t[0].cells[1].textContent=e.basalMetabolicRateHarrisBenedict,t[1].cells[1].textContent=e.basalMetabolicRateMifflinStJeor}initializeSelectFields(e){e.forEach(t=>this.initializeSelectField(t))}}class Ae extends w{constructor(t,i,r){super(t,i,r);n(this,"view");this.view=new Fe(this.getUnitSystemValue.bind(this))}init(t){this.view.render(t),this.fillFormData(this.user.getData()),this.bindFormEvents(this.handleCalculate.bind(this))}getUnitSystemValue(){return this.user.getData().unitSystem??h.METRIC}handleCalculate(t){try{const i=this.parseFormData(t);this.formValidator.validateIBasalMetabolicRateFormData(i),this.user.setData(i),this.updateView(),this.view.hideError()}catch(i){this.handleErrors(i)}}parseFormData(t){const i={unitSystem:t.get("unitSystem"),gender:t.get("gender"),weight:parseFloat(t.get("weight")),height:parseFloat(t.get("height")),age:parseFloat(t.get("age"))};if(!Object.values(p).includes(i.gender))throw new Error("Invalid gender value");return i}updateView(){const t=this.calculator.getBmrHarrisBenedict(),i=this.calculator.getBmrMifflinStJeor(),r={basalMetabolicRateHarrisBenedict:this.formatValue(t),basalMetabolicRateMifflinStJeor:this.formatValue(i)};this.view.updateResults(r)}formatValue(t){return`${t.toFixed(0)} kcal/day`}}const Be=`
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
          <label for="${s.unitSystem}">Unit System</label>
          <select id="${s.unitSystem}" 
          name="${s.unitSystem}">
            <option value="${h.METRIC}">Metric</option>
            <option value="${h.IMPERIAL}">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.gender}">Gender</label>
          <select id="${s.gender}" 
          name="${s.gender}">
            <option value="${p.MALE}">Male</option>
            <option value=${p.FEMALE}>Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.height}">Height</label>
          <input type="text" id="${s.height}" 
          name="${s.height}" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="${s.weight}">Weight</label>
          <input type="text" id="${s.weight}" 
          name="${s.weight}" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="${s.age}">Age</label>
          <input type="number" id="${s.age}" 
          name="${s.age}" placeholder="years">
        </div>
        <div class="input-group">
          <label for="${s.activityLevel}">Activity Level</label>
          <select id="${s.activityLevel}" 
          name="${s.activityLevel}">
            <option value="${c.SEDENTARY}">Sedentary
            </option>
            <option value="${c.LIGHTLY}">Lightly Active
            </option>
            <option value="${c.MODERATELY}">Moderately Active
            </option>
            <option value="${c.VERY}">Very Active</option>
            <option value="${c.EXTREMELY}">Extremely Active<
            /option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.dailyCalories}">Daily Caloric Intake
          </label>
          <input type="text" id="${s.dailyCalories}" 
          name="${s.dailyCalories}" placeholder="kcal">
        </div>
        <div class="input-group">
          <label for="${s.weightGoal}">Weight Goal</label>
          <input type="text" id="${s.weightGoal}" 
          name="${s.weightGoal}" placeholder="kg">
        </div>
        <div class="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>

    <div class="errorMessage"></div>
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
`;class Ge extends f{constructor(e){super(e)}render(e){e.innerHTML=Be,this.initializeCommonElements(),this.initializeInputs(["weight","height","age","weightGoal","dailyCalories"]),this.initializeSelectField("unitSystem")}updateResults(e){if(!this.resultsTable)return;const t=this.resultsTable.rows;t[0].cells[1].textContent=e.weeksToWeightGoal}}class $e extends w{constructor(t,i,r){super(t,i,r);n(this,"view");this.view=new Ge(this.getUnitSystemValue.bind(this))}init(t){this.view.render(t),this.fillFormData(this.user.getData()),this.bindFormEvents(this.handleCalculate.bind(this))}getUnitSystemValue(){return this.user.getData().unitSystem??h.METRIC}handleCalculate(t){try{const i=this.parseFormData(t);this.formValidator.validateITotalDailyEnergyExpenditureFormData(i),this.user.setData(i),this.updateView(),this.view.hideError()}catch(i){this.handleErrors(i)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),gender:t.get("gender"),weight:parseFloat(t.get("weight")),height:parseFloat(t.get("height")),age:parseFloat(t.get("age")),activityLevel:t.get("activityLevel"),weightGoal:parseFloat(t.get("weightGoal")),dailyCalories:parseFloat(t.get("dailyCalories"))}}updateView(){const t=this.calculator.getEstimateTimeToWeightGoal(),i={weeksToWeightGoal:this.formatValue(t)};this.view.updateResults(i)}formatValue(t){return`${t.toFixed(1)} weeks`}}const Le=`
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
          <label for="${s.unitSystem}">Unit System</label>
          <select id="${s.unitSystem}" 
          name="${s.unitSystem}">
            <option value="${h.METRIC}">Metric</option>
            <option value="${h.IMPERIAL}">Imperial</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.gender}">Gender</label>
          <select id="${s.gender}" 
          name="${s.gender}">
            <option value="${p.MALE}">Male</option>
            <option value=${p.FEMALE}>Female</option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.height}">Height</label>
          <input type="text" id="${s.height}" 
          name="${s.height}" placeholder="cm">
        </div>
        <div class="input-group">
          <label for="${s.weight}">Weight</label>
          <input type="text" id="${s.weight}" 
          name="${s.weight}" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="${s.age}">Age</label>
          <input type="number" id="${s.age}" 
          name="${s.age}" placeholder="years">
        </div>
        <div class="input-group">
          <label for="${s.activityLevel}">Activity Level</label>
          <select id="${s.activityLevel}" 
          name="${s.activityLevel}">
            <option value="${c.SEDENTARY}">Sedentary
            </option>
            <option value="${c.LIGHTLY}">Lightly Active
            </option>
            <option value="${c.MODERATELY}">Moderately Active
            </option>
            <option value="${c.VERY}">Very Active</option>
            <option value="${c.EXTREMELY}">Extremely Active<
            /option>
          </select>
        </div>
        <div class="input-group">
          <label for="${s.weightGoal}">Weight Goal</label>
          <input type="text" id="${s.weightGoal}" 
          name="${s.weightGoal}" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="${s.weeksToWeightGoal}">
          Weeks to Reach Goal</label>
          <input type="text" id="${s.weeksToWeightGoal}" 
          name="${s.weeksToWeightGoal}" placeholder="weeks">
        </div>
        <div class="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Calculate</button>
        </div>
      </form>

      <div class="errorMessage"></div>
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
`;class Oe extends f{constructor(e){super(e)}render(e){e.innerHTML=Le,this.initializeCommonElements(),this.initializeInputs(["weight","height","age","weightGoal","weeksToWeightGoal"]),this.initializeSelectField("unitSystem")}updateResults(e){if(!this.resultsTable)return;const t=this.resultsTable.rows;t[0].cells[1].textContent=e.dailyCalories}}class Ve extends w{constructor(t,i,r){super(t,i,r);n(this,"view");this.view=new Oe(this.getUnitSystemValue.bind(this))}init(t){this.view.render(t),this.fillFormData(this.user.getData()),this.bindFormEvents(this.handleCalculate.bind(this))}getUnitSystemValue(){return this.user.getData().unitSystem??h.METRIC}handleCalculate(t){try{const i=this.parseFormData(t);this.formValidator.validateITotalDailyEnergyExpenditureFormData(i),this.user.setData(i),this.updateView(),this.view.hideError()}catch(i){this.handleErrors(i)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),gender:t.get("gender"),weight:parseFloat(t.get("weight")),height:parseFloat(t.get("height")),age:parseFloat(t.get("age")),activityLevel:t.get("activityLevel"),weightGoal:parseFloat(t.get("weightGoal")),weeksToWeightGoal:parseFloat(t.get("weeksToWeightGoal"))}}updateView(){const t=this.calculator.getCaloriesForWeightGoal(),i={dailyCalories:this.formatValue(t)};this.view.updateResults(i)}formatValue(t){return`${t.toFixed(0)} kcal/day`}}class S{validateNumericInput(e,t){if(typeof e!="number"||isNaN(e)||e<=0)throw new Error(`Invalid ${t} value`)}getConvertedLimits(e){const{min:t,max:i,shouldConvert:r,conversionFactor:o}=e;return r?{min:Math.round(t*o),max:Math.round(i*o)}:{min:t,max:i}}validateRange(e){const{value:t,min:i,max:r,name:o,unit:l}=e;if(t<i||t>r)throw new Error(`${o} must be between ${i} and ${r} ${l}`)}}const ke=2.54,b={POUNDS:2.20462,FEET:3.28084,INCHES:1/ke},v={METRIC:{WEIGHT:"kg",HEIGHT:"m",MEASUREMENT:"cm"},IMPERIAL:{WEIGHT:"lbs",HEIGHT:"ft",MEASUREMENT:"inches"}},d={weight:{min:20,max:500},height:{min:.5,max:2.5},age:{min:18,max:120},waist:{min:40,max:200},hip:{min:50,max:200},neck:{min:20,max:80},calories:{min:500,max:1e4},weeksToWeightGoal:{min:1,max:520}};class _e extends S{validateWeight(e,t){this.validateNumericInput(e,"Weight");const i=t===h.IMPERIAL,{min:r,max:o}=this.getConvertedLimits({min:d.weight.min,max:d.weight.max,shouldConvert:i,conversionFactor:b.POUNDS});this.validateRange({value:e,min:r,max:o,name:"Weight",unit:i?v.IMPERIAL.WEIGHT:v.METRIC.WEIGHT})}validateHeight(e,t){this.validateNumericInput(e,"Height");const i=t===h.IMPERIAL,{min:r,max:o}=this.getConvertedLimits({min:d.height.min,max:d.height.max,shouldConvert:i,conversionFactor:b.FEET});this.validateRange({value:e,min:r,max:o,name:"Height",unit:i?v.IMPERIAL.HEIGHT:v.METRIC.HEIGHT})}validateBodyMeasurement(e,t,i){this.validateNumericInput(e,t);const r=i===h.IMPERIAL,{min:o,max:l}=this.getConvertedLimits({min:d[t].min,max:d[t].max,shouldConvert:r,conversionFactor:b.INCHES});this.validateRange({value:e,min:o,max:l,name:t.charAt(0).toUpperCase()+t.slice(1),unit:r?v.IMPERIAL.MEASUREMENT:v.METRIC.MEASUREMENT})}}class xe extends S{validateAge(e){this.validateNumericInput(e,"Age");const t=d.age;if(e<t.min||e>t.max)throw new Error(`Age must be between ${t.min} and ${t.max} years`)}validateGender(e){if(!Object.values(p).includes(e))throw new Error("Invalid gender value")}validateActivityLevel(e){if(!Object.values(c).includes(e))throw new Error("Invalid activity level value")}validateUnitSystem(e){if(!Object.values(h).includes(e))throw new Error("Invalid unit system value")}}class De extends S{validateWeightGoal(e,t){this.validateNumericInput(e,"Weight goal");const i=t===h.IMPERIAL,{min:r,max:o}=this.getConvertedLimits({min:d.weight.min,max:d.weight.max,shouldConvert:i,conversionFactor:b.POUNDS});this.validateRange({value:e,min:r,max:o,name:"Weight goal",unit:i?v.IMPERIAL.WEIGHT:v.METRIC.WEIGHT})}validateWeeksToWeightGoal(e){this.validateNumericInput(e,"Weeks to weight goal"),this.validateRange({value:e,min:d.weeksToWeightGoal.min,max:d.weeksToWeightGoal.max,name:"Weeks to goal",unit:"weeks"})}validateDailyCalories(e){this.validateNumericInput(e,"Daily calories"),this.validateRange({value:e,min:d.calories.min,max:d.calories.max,name:"Daily calories",unit:"calories"})}}class Ne{constructor(){n(this,"measurementValidator");n(this,"personalInfoValidator");n(this,"goalValidator");this.measurementValidator=new _e,this.personalInfoValidator=new xe,this.goalValidator=new De}validateIBmiFormData(e){this.personalInfoValidator.validateUnitSystem(e.unitSystem),this.measurementValidator.validateWeight(e.weight,e.unitSystem),this.measurementValidator.validateHeight(e.height,e.unitSystem)}validateITotalDailyEnergyExpenditureFormData(e){this.personalInfoValidator.validateUnitSystem(e.unitSystem),this.personalInfoValidator.validateGender(e.gender),this.measurementValidator.validateWeight(e.weight,e.unitSystem),this.measurementValidator.validateHeight(e.height,e.unitSystem),this.personalInfoValidator.validateAge(e.age),this.personalInfoValidator.validateActivityLevel(e.activityLevel)}validateWaistToHipRatioFormData(e){this.personalInfoValidator.validateUnitSystem(e.unitSystem),this.measurementValidator.validateBodyMeasurement(e.waist,"waist",e.unitSystem),this.measurementValidator.validateBodyMeasurement(e.hip,"hip",e.unitSystem)}validateIWaistHeightRatioFormData(e){this.personalInfoValidator.validateUnitSystem(e.unitSystem),this.measurementValidator.validateBodyMeasurement(e.waist,"waist",e.unitSystem),this.measurementValidator.validateHeight(e.height,e.unitSystem)}validateIBodyFatPercentageFormData(e){this.personalInfoValidator.validateUnitSystem(e.unitSystem),this.personalInfoValidator.validateGender(e.gender),this.measurementValidator.validateWeight(e.weight,e.unitSystem),this.measurementValidator.validateBodyMeasurement(e.waist,"waist",e.unitSystem),this.measurementValidator.validateBodyMeasurement(e.neck,"neck",e.unitSystem),e.gender===p.FEMALE&&e.hip!==void 0&&this.measurementValidator.validateBodyMeasurement(e.hip,"hip",e.unitSystem)}validateIBasalMetabolicRateFormData(e){this.personalInfoValidator.validateUnitSystem(e.unitSystem),this.personalInfoValidator.validateGender(e.gender),this.measurementValidator.validateWeight(e.weight,e.unitSystem),this.measurementValidator.validateHeight(e.height,e.unitSystem),this.personalInfoValidator.validateAge(e.age)}validateICaloriesForWeightGoalFormData(e){this.personalInfoValidator.validateUnitSystem(e.unitSystem),this.personalInfoValidator.validateGender(e.gender),this.measurementValidator.validateWeight(e.weight,e.unitSystem),this.measurementValidator.validateHeight(e.height,e.unitSystem),this.personalInfoValidator.validateAge(e.age),this.personalInfoValidator.validateActivityLevel(e.activityLevel),this.goalValidator.validateWeightGoal(e.weightGoal,e.unitSystem),this.goalValidator.validateWeeksToWeightGoal(e.weeksToWeightGoal)}validateIEstimateTimeToWeightGoalFormData(e){this.personalInfoValidator.validateUnitSystem(e.unitSystem),this.personalInfoValidator.validateGender(e.gender),this.personalInfoValidator.validateActivityLevel(e.activityLevel),this.measurementValidator.validateWeight(e.weight,e.unitSystem),this.measurementValidator.validateHeight(e.height,e.unitSystem),this.personalInfoValidator.validateAge(e.age),this.goalValidator.validateDailyCalories(e.dailyCalories),this.goalValidator.validateWeightGoal(e.weightGoal,e.unitSystem)}}class Pe{constructor(e,t){n(this,"formValidator");this.user=e,this.calculator=t,this.formValidator=new Ne}createController(e){const i={HOME:()=>this.createHomeController(),BMI:()=>this.createBmiController(),WAIST_TO_HIP:()=>this.createWaistToHipController(),WAIST_TO_HEIGHT:()=>this.createWaistToHeightController(),BODY_FAT:()=>this.createBodyFatController(),BMR:()=>this.createBmrController(),TDEE:()=>this.createTdeeController(),WEIGHT_GOAL:()=>this.createWeightGoalController(),CALORIE_GOAL:()=>this.createCalorieGoalController()}[e];if(!i)throw new Error(`No controller found for route: ${e}`);return i()}createHomeController(){return new V}createBmiController(){return new ye(this.user,this.calculator,this.formValidator)}createWaistToHipController(){return new we(this.user,this.calculator,this.formValidator)}createWaistToHeightController(){return new be(this.user,this.calculator,this.formValidator)}createBodyFatController(){return new Se(this.user,this.calculator,this.formValidator)}createBmrController(){return new Ae(this.user,this.calculator,this.formValidator)}createTdeeController(){return new He(this.user,this.calculator,this.formValidator)}createWeightGoalController(){return new $e(this.user,this.calculator,this.formValidator)}createCalorieGoalController(){return new Ve(this.user,this.calculator,this.formValidator)}}class Ue{constructor(e,t){n(this,"currentController",null);n(this,"controllerFactory");this.controllerFactory=new Pe(e,t)}listen(){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1);this.navigate(t)});const e=window.location.hash.slice(1)||"/";this.navigate(e)}navigate(e){const t=document.getElementById("app");if(!t)return;t.innerHTML="";const i=$(e);if(i!==void 0)try{this.currentController=this.controllerFactory.createController(i),this.currentController.init(t)}catch{t.innerHTML="<h2>An error occurred</h2>"}else t.innerHTML="<h2>404 Not Found</h2>"}}class Je{constructor(){n(this,"data");const e=sessionStorage.getItem("userModel");this.data=e?JSON.parse(e):{unitSystem:"metric"}}setData(e){Object.assign(this.data,e),this.saveToSession()}getData(){return{weight:this.data.weight,height:this.data.height,unitSystem:this.data.unitSystem,age:this.data.age,gender:this.data.gender,waist:this.data.waist,hip:this.data.hip,neck:this.data.neck,activityLevel:this.data.activityLevel,dailyCalories:this.data.dailyCalories,weightGoal:this.data.weightGoal,weeksToWeightGoal:this.data.weeksToWeightGoal}}resetData(){this.data={unitSystem:h.METRIC},this.saveToSession()}saveToSession(){sessionStorage.setItem("userModel",JSON.stringify(this.data))}}class Ye{constructor(){n(this,"dropdownToggles");n(this,"dropdownMenus");this.dropdownToggles=Array.from(document.querySelectorAll(".dropdown-toggle")),this.dropdownMenus=Array.from(document.querySelectorAll(".dropdown-menu")),this.initializeDropdowns()}initializeDropdowns(){this.dropdownToggles.forEach(e=>{e.addEventListener("click",this.toggleDropdown.bind(this))}),document.addEventListener("click",this.handleOutsideClick.bind(this))}toggleDropdown(e){var r;e.preventDefault(),this.dropdownMenus.forEach(o=>{var l;(l=o.parentElement)==null||l.classList.remove("show")});const t=e.currentTarget,i=t.nextElementSibling;i&&i.classList.contains("dropdown-menu")&&((r=t.parentElement)==null||r.classList.toggle("show"))}handleOutsideClick(e){const t=e.target;this.dropdownToggles.some(r=>r.contains(t))||this.dropdownMenus.forEach(r=>{var o;(o=r.parentElement)==null||o.classList.remove("show")})}}class qe{constructor(){n(this,"router");n(this,"user");n(this,"calculator");this.user=new Je,this.calculator=new pe(this.user),this.router=new Ue(this.user,this.calculator),new Ye}start(){this.router.listen();const e=window.location.hash.slice(1)||"/";this.router.navigate(e)}}const ze=new qe;ze.start();
