var H=Object.defineProperty;var W=(i,e,t)=>e in i?H(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var n=(i,e,t)=>(W(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var p=(i=>(i[i.HOME=0]="HOME",i[i.BMI=1]="BMI",i[i.BASAL_METABOLIC_RATE=2]="BASAL_METABOLIC_RATE",i[i.TDEE=3]="TDEE",i[i.BODY_COMPOSITION=4]="BODY_COMPOSITION",i[i.CALORIE_CALCULATION=5]="CALORIE_CALCULATION",i[i.WAIST_TO_HIP=6]="WAIST_TO_HIP",i[i.WAIST_TO_HEIGHT=7]="WAIST_TO_HEIGHT",i[i.BODY_FAT_PERCENTAGE=8]="BODY_FAT_PERCENTAGE",i))(p||{});const B={0:"/",1:"/bmi",2:"/bmr",3:"/tdee",4:"/body-composition",5:"/calorie-calculation",6:"/waist-to-hip",7:"/waist-to-height",8:"/body-fat-percentage"};function F(i){const e=Object.entries(B).find(([t,a])=>a===i);return e?Number(e[0]):void 0}var f=(i=>(i.BMI="bmi",i.BMR="bmr",i.TDEE="tdee",i.BODY_COMPOSITION="body-composition",i.CALORIE_CALCULATION="calorie-calculation",i))(f||{});class O{render(e){e.innerHTML=`
        <section class="container">
          <h2>Our Calculators</h2>
          ${this.renderCalculatorItems()}
        </section>
      `}renderCalculatorItems(){return Object.values(f).map(e=>`
        <div class="calculator-item">
          <div>
            <h3>${e}</h3>
            <p>${this.getCalculatorDescription(e)}</p>
            <div class="button-container">
            <a href="#/${e.toLowerCase()}" class="button">Calculate</a>
            </div>
          </div>
          <img src="./assets/images/${e.toLowerCase()}.png" 
          alt="${e} illustration">
        </div>
      `).join("")}getCalculatorDescription(e){return{[f.BMI]:"Body Mass Index (BMI) - A measure of body fat based on weight and height.",[f.BMR]:"Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.",[f.TDEE]:"Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.",[f.BODY_COMPOSITION]:"Body Composition - Calculate body fat percentage, waist-to-hip ratio, and lean body mass.",[f.CALORIE_CALCULATION]:"Calorie Calculations - Estimate daily calorie needs to reach your weight goal, and predict weight change based on your caloric intake."}[e]||"Description not available."}}class _{constructor(){n(this,"view");this.view=new O}init(e){this.view.render(e)}}var o=(i=>(i.WEIGHT="#weight",i.HEIGHT="#height",i.WAIST="#waist",i.NECK="#neck",i.HIP="#hip",i.AGE="#age",i.UNIT_SYSTEM="#unitSystem",i.RESULT_TABLE=".resultTable",i.ERROR_MESSAGE=".errorMessage",i.FORM="form",i))(o||{});class v{constructor(){n(this,"form",null);n(this,"resultsTable",null);n(this,"errorMessage",null);n(this,"inputs",{})}initializeCommonElements(){this.form=this.getElement(o.FORM),this.resultsTable=this.getElement(o.RESULT_TABLE),this.errorMessage=this.getElement(o.ERROR_MESSAGE)}initializeInputs(e){e.forEach(t=>{this.inputs[t]=this.getElement(`#${t}`)})}resetForm(){var e;(e=this.form)==null||e.reset(),this.clearResults(),this.updatePlaceholders(),this.hideError()}clearResults(){if(this.resultsTable){const e=this.resultsTable.rows;for(let t=0;t<e.length;t++)e[t].cells[1].textContent="-"}}updatePlaceholders(){}showError(e){this.errorMessage instanceof HTMLElement&&(this.errorMessage.textContent=e,this.errorMessage.classList.remove("hidden"))}hideError(){this.errorMessage instanceof HTMLElement&&(this.errorMessage.textContent="",this.errorMessage.classList.add("hidden"))}getElement(e){return document.querySelector(e)}createElement(e,t){const a=document.createElement(e);return t&&(a.className=t),a}bindResetEvent(e){var a;const t=(a=this.form)==null?void 0:a.querySelector('button[type="reset"]');t==null||t.addEventListener("click",s=>{s.preventDefault(),e()})}}var m=(i=>(i.METRIC="metric",i.IMPERIAL="imperial",i))(m||{});const L=`
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
        such as waist-to-hip ratio or body fat percentage.
        </p>
        </div>

        <form id="bmi-form">
          <div class="input-group">
            <label for="unitSystem">Unit System</label>
            <select id="unitSystem" name="unitSystem">
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </div>
          <div class="input-group">
            <label for="height">Height</label>
            <input type="text" id="height" name="height" placeholder="m">
          </div>
          <div class="input-group">
            <label for="weight">Weight</label>
            <input type="text" id="weight" name="weight" placeholder="kg">
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
    `;var h=(i=>(i.WEIGHT="weight",i.HEIGHT="height",i.WAIST="waist",i.NECK="neck",i.HIP="hip",i.AGE="age",i))(h||{});class G extends v{constructor(){super(...arguments);n(this,"heightInput",null);n(this,"weightInput",null);n(this,"unitSystemSelect",null)}render(t){var a;t.innerHTML=L,this.initializeCommonElements(),this.initializeInputs([h.HEIGHT,h.WEIGHT]),this.weightInput=this.getElement(o.WEIGHT),this.heightInput=this.getElement(o.HEIGHT),this.unitSystemSelect=this.getElement(o.UNIT_SYSTEM),(a=this.unitSystemSelect)==null||a.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(t){this.unitSystemSelect&&t.unitSystem&&(this.unitSystemSelect.value=t.unitSystem),this.setInputValue(this.heightInput,t.height),this.setInputValue(this.weightInput,t.weight),this.updatePlaceholders()}setInputValue(t,a){t&&a&&(t.value=a.toString())}updatePlaceholders(){var s;const a=((s=this.unitSystemSelect)==null?void 0:s.value)===m.IMPERIAL?{height:"ft",weight:"lbs"}:{height:"m",weight:"kg"};Object.keys(this.inputs).forEach(r=>{this.inputs[r].setAttribute("placeholder",a[r])})}bindCalculateEvent(t){var a;(a=this.form)==null||a.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(this.form);t(r)})}updateResults(t){if(!this.resultsTable)return;const a=this.resultsTable.rows;a[0].cells[1].textContent=t.bmi.toFixed(2),a[1].cells[1].textContent=t.category,a[2].cells[1].textContent=t.healthRisk;const s=t.idealWeight[0].toFixed(0),r=t.idealWeight[1].toFixed(0);a[3].cells[1].textContent=`${s} - ${r} kg`}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class D{constructor(e,t,a,s,r,l){this.user=e,this.bmiCalculator=t,this.bodycompositionCalculator=a,this.bmrCalculator=s,this.tdeeCalculator=r,this.calorieCalculator=l}getBmi(){return this.bmiCalculator.calculateBmi(this.user)}getBmiType(){const e=this.getBmi();return this.bmiCalculator.calculateBmiType(e)}getBmiPrime(){const e=this.getBmi();return this.bmiCalculator.calculateBmiPrime(e)}getIdealWeight(){return this.bmiCalculator.calculateIdealWeight(this.user)}getWaistToHipRatio(){return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)}getWaistToHeightRatio(){return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)}getBodyFatPercentage(){return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)}getLeanBodyMass(){return this.bodycompositionCalculator.calculateLeanBodyMass(this.user)}getBmrHarrisBenedict(){return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)}getBmrMifflinStJeor(){return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)}getTdeeHarrisBenedict(){const e=this.getBmrHarrisBenedict();return this.tdeeCalculator.calculateTdeeHarrisBenedict(this.user,e)}getTdeeMifflinStJeor(){const e=this.getBmrMifflinStJeor();return this.tdeeCalculator.calculateTdeeMifflinStJeor(this.user,e)}getCaloricSurplusOrDeficit(){const e=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloricSurplusOrDeficit(this.user,e)}getEstimatedWeightChangeWeekly(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeWeekly(e,this.user)}getEstimatedWeightChangeMonthly(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeMonthly(e,this.user)}getEstimateTimeToWeightGoal(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeeksToWeightGoal(e,this.user)}getCaloriesForWeightGoal(){const e=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloriesForWeightGoal(this.user,e)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */var d;(function(i){i.UnderweightSevereThinness="underweight, severe thinness",i.UnderweightModerateThinness="underweight, moderate thinness",i.UnderweightMildThinness="underweight, mild thinness",i.Normal="normal weight",i.Overweight="overweight, pre-obese",i.ObeseFirstGrade="obese, class I",i.ObeseSecondGrade="obese, class II",i.ObeseThirdGrade="obese, class III"})(d||(d={}));const M=[{min:0,max:15.9,type:d.UnderweightSevereThinness},{min:16,max:16.9,type:d.UnderweightModerateThinness},{min:17,max:18.4,type:d.UnderweightMildThinness},{min:18.5,max:24.9,type:d.Normal},{min:25,max:29.9,type:d.Overweight},{min:30,max:34.9,type:d.ObeseFirstGrade},{min:35,max:39.9,type:d.ObeseSecondGrade},{min:40,max:100,type:d.ObeseThirdGrade}];var w;(function(i){i.Sedentary="sedentary",i.Lightly="lightly",i.Moderately="moderately",i.Very="very",i.Extremely="extremely"})(w||(w={}));/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class N{calculateBmi(e){this.validateWeightAndHeight(e);const t=2;return e.weight/Math.pow(e.height,t)}calculateBmiType(e){this.validateBmi(e);const t=this.roundBmi(e);return this.findBmiType(t)}calculateIdealWeight(e){this.validateHeight(e);const t=this.getNormalBmiRange(),a=this.calculateWeight(t.min,e.height),s=this.calculateWeight(t.max,e.height);return[a,s]}calculateBmiPrime(e){return e/25}validateWeightAndHeight(e){if(e.weight===void 0||e.height===void 0)throw new Error("Weight and height are required for BMI calculation.");if(typeof e.weight!="number"||typeof e.height!="number")throw new Error("Weight and height must be numbers.");if(e.weight<=0||e.height<=0)throw new Error("Weight and height must be positive numbers.")}validateHeight(e){if(e.height===void 0)throw new Error("Height is required for ideal weight calculation.");if(typeof e.height!="number")throw new Error("Height must be a number.");if(e.height<=0)throw new Error("Height must be a positive number.")}validateBmi(e){if(e<=0||e>100)throw new Error(`BMI out of range. Please check your values. BMI: ${e}`)}roundBmi(e){return Math.round(e)}findBmiType(e){for(const t of M)if(e>=t.min&&e<=t.max)return t.type;throw new Error("Bmi Type could not be found")}getNormalBmiRange(){const e=M.find(t=>t.type===d.Normal);if(!e)throw new Error("Could not find normal BMI range.");return e}calculateWeight(e,t){return e*Math.pow(t,2)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class k{constructor(){this.CM_PER_METER=100,this.PERCENTAGE=100,this.TOTAL_BODY_COMPOSITION=1,this.BODY_FAT={CONSTANT_FACTOR:495,SUBTRACTION_CONSTANT:450},this.BODY_FAT_MALE={CONSTANT:1.0324,WAIST_NECK_FACTOR:.19077,HEIGHT_FACTOR:.15456},this.BODY_FAT_FEMALE={CONSTANT:1.29579,WAIST_HIP_NECK_FACTOR:.35004,HEIGHT_FACTOR:.221}}calculateWaistToHipRatio(e){return this.validateWaistAndHip(e),e.waist/e.hip}calculateWaistToHeightRatio(e){this.validateWaistAndHeight(e);const t=this.convertHeightToCentimeter(e.height);return e.waist/t}calculateBodyFatPercentage(e){this.validateRequiredMeasurements(e);const t=this.convertHeightToCentimeter(e.height);return this.calculateBodyFatBasedOnGender(e,t)}calculateLeanBodyMass(e){this.validateRequiredMeasurements(e);const a=this.calculateBodyFatPercentage(e)/this.PERCENTAGE,s=this.TOTAL_BODY_COMPOSITION-a;return e.weight*s}convertHeightToCentimeter(e){return e*this.CM_PER_METER}calculateMaleBodyFat(e,t){this.validateWaistAndNeck(e);const{CONSTANT:a,WAIST_NECK_FACTOR:s,HEIGHT_FACTOR:r}=this.BODY_FAT_MALE,{CONSTANT_FACTOR:l,SUBTRACTION_CONSTANT:c}=this.BODY_FAT,g=a-s*Math.log10(e.waist-e.neck)+r*Math.log10(t);return l/g-c}calculateFemaleBodyFat(e,t){this.validateWaistHipAndNeck(e);const{CONSTANT:a,WAIST_HIP_NECK_FACTOR:s,HEIGHT_FACTOR:r}=this.BODY_FAT_FEMALE,{CONSTANT_FACTOR:l,SUBTRACTION_CONSTANT:c}=this.BODY_FAT,g=a-s*Math.log10(e.waist+e.hip-e.neck)+r*Math.log10(t);return l/g-c}validateWaistAndHip(e){if(!e.waist||!e.hip)throw new Error("Waist and hip measurements are required for waist to hip calculation.")}validateWaistAndHeight(e){if(!e.waist||!e.height)throw new Error("Waist and height measurements are required for waist to height calculation.")}validateWaistHipAndNeck(e){if(!e.waist||!e.neck||!e.hip)throw new Error("Waist, hip and neck is required to calculate body fat percentage for female")}validateWaistAndNeck(e){if(!e.waist||!e.neck)throw new Error("Waist and neck is required to calculate body fat percentage for male")}validateRequiredMeasurements(e){if(e.weight===void 0||e.height===void 0)throw new Error("Weight and height are required for body composition calculations.")}calculateBodyFatBasedOnGender(e,t){if(e.gender==="male")return this.calculateMaleBodyFat(e,t);if(e.gender==="female")return this.calculateFemaleBodyFat(e,t);throw new Error('Invalid gender. Gender must be either "male" or "female".')}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class P{constructor(){this.CM_PER_METER=100,this.MIFFLIN_ST_JEOR={WEIGHT_FACTOR:10,HEIGHT_FACTOR:6.25,AGE_FACTOR:5,MALE_ADJUSTMENT:5,FEMALE_ADJUSTMENT:-161},this.HARRIS_BENEDICT={FEMALE:{BASE:447.593,WEIGHT_FACTOR:9.247,HEIGHT_FACTOR:3.098,AGE_FACTOR:4.33},MALE:{BASE:88.362,WEIGHT_FACTOR:13.397,HEIGHT_FACTOR:4.799,AGE_FACTOR:5.677}}}calculateBmrHarrisBenedict(e){this.validateRequiredFields(e);const t=this.convertHeightToCentimeter(e.height);return this.calculateBmrBasedOnGender(e,t)}calculateBmrMifflinStJeor(e){this.validateRequiredFields(e);const t=this.convertHeightToCentimeter(e.height),a=this.MIFFLIN_ST_JEOR.WEIGHT_FACTOR*e.weight,s=this.MIFFLIN_ST_JEOR.HEIGHT_FACTOR*t,r=this.MIFFLIN_ST_JEOR.AGE_FACTOR*e.age,l=e.gender==="male"?this.MIFFLIN_ST_JEOR.MALE_ADJUSTMENT:this.MIFFLIN_ST_JEOR.FEMALE_ADJUSTMENT;return a+s-r+l}convertHeightToCentimeter(e){return e*this.CM_PER_METER}harrisBenedictFemale(e,t){const{BASE:a,WEIGHT_FACTOR:s,HEIGHT_FACTOR:r,AGE_FACTOR:l}=this.HARRIS_BENEDICT.FEMALE,c=s*e.weight,g=r*t,I=l*e.age;return a+c+g-I}harrisBenedictMale(e,t){const{BASE:a,WEIGHT_FACTOR:s,HEIGHT_FACTOR:r,AGE_FACTOR:l}=this.HARRIS_BENEDICT.MALE,c=s*e.weight,g=r*t,I=l*e.age;return a+c+g-I}calculateBmrBasedOnGender(e,t){if(e.gender==="male")return this.harrisBenedictMale(e,t);if(e.gender==="female")return this.harrisBenedictFemale(e,t);throw new Error("Invalid gender. Gender must be either 'male' or 'female'.")}validateRequiredFields(e){if(e.weight===void 0||typeof e.weight!="number"||e.weight<=0)throw new Error("Valid weight is required for BMR calculation.");if(e.height===void 0||typeof e.height!="number"||e.height<=0)throw new Error("Valid height is required for BMR calculation.");if(e.age===void 0||typeof e.age!="number"||e.age<=0)throw new Error("Valid age is required for BMR calculation.");if(e.gender===void 0||e.gender!=="male"&&e.gender!=="female")throw new Error("Valid gender is required for BMR calculation. Gender must be either 'male' or 'female'.")}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class x{constructor(){this.ACTIVITY_FACTORS={SEDENTARY:1.2,LIGHTLY:1.375,MODERATELY:1.55,VERY:1.725,EXTREMELY:1.9}}calculateTdeeMifflinStJeor(e,t){this.validateAgeAndActivityLevel(e);const a=t,s=this.getActivityFactor(e.activityLevel);return this.calculateTdee(a,s)}calculateTdeeHarrisBenedict(e,t){this.validateAgeAndActivityLevel(e);const a=t,s=this.getActivityFactor(e.activityLevel);return this.calculateTdee(a,s)}getActivityFactor(e){switch(e){case w.Sedentary:return this.ACTIVITY_FACTORS.SEDENTARY;case w.Lightly:return this.ACTIVITY_FACTORS.LIGHTLY;case w.Moderately:return this.ACTIVITY_FACTORS.MODERATELY;case w.Very:return this.ACTIVITY_FACTORS.VERY;case w.Extremely:return this.ACTIVITY_FACTORS.EXTREMELY;default:throw new Error("Activity level must be sedentary, lightly, moderately, very, or extremely")}}validateAgeAndActivityLevel(e){if(!e.age||!e.activityLevel)throw new Error("Age and activity level is required")}calculateTdee(e,t){return e*t}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */const V={min:0,max:700},U={min:0,max:1543},J={min:0,max:2.5},Y={min:0,max:8.2};function q(i){try{$(i),i.weight!==void 0&&z(i),i.height!==void 0&&j(i),X(i),Q(i),Z(i),K(i),ee(i),te(i),ie(i)}catch(e){const t=`Validation error in user object: ${JSON.stringify(i)} - ${e.message}. Stack trace: ${e.stack}`;throw new Error(t)}}function $(i){["age","waist","hip","neck","dailyCalories","weightGoal","weeksToWeightGoal"].forEach(t=>{if(t in i&&i[t]!==void 0&&typeof i[t]!="number")throw new TypeError(`${t} must be a number if provided`)})}function K(i){if(i.unitSystem===void 0)throw new Error("Unit system is required");if(typeof i.unitSystem!="string")throw new TypeError(`Unit system must be a string. Check the unitSystem value in ${JSON.stringify(i)}`);if(i.unitSystem!=="metric"&&i.unitSystem!=="imperial")throw new Error('Unit system must be either "metric" or "imperial"')}function A(i,e,t,a,s){if(i<e.min||i>e.max)throw new RangeError(`${t.charAt(0).toUpperCase()+t.slice(1)} using the ${a} system must be between ${e.min}-${e.max}. Check the ${t.toLowerCase()} value in ${JSON.stringify(s)}`)}function z(i){if(typeof i.weight!="number")throw new Error(`Weight must be a number if provided. Check the weight value in ${JSON.stringify(i)}`);const e=i.unitSystem==="metric"?V:U,t=i.unitSystem==="metric"?"metric":"imperial";A(i.weight,e,"weight",t,i)}function j(i){if(typeof i.height!="number")throw new Error(`Height must be a number if provided. Check the height value in ${JSON.stringify(i)}`);const e=i.unitSystem==="metric"?J:Y,t=i.unitSystem==="metric"?"metric":"imperial";A(i.height,e,"height",t,i)}function X(i){if(i.gender!==void 0&&i.gender!=="male"&&i.gender!=="female")throw new TypeError(`Gender must be male or female. Check the gender value in ${JSON.stringify(i)}`)}function Q(i){i.age!==void 0&&i.age<18&&console.warn(`Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(i)}`)}function Z(i){const e=["sedentary","lightly","moderately","very","extremely"];if(i.activityLevel!==void 0&&!e.includes(i.activityLevel))throw new TypeError(`Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(i)}`)}function ee(i){if(i.dailyCalories!==void 0&&i.dailyCalories<0)throw new Error(`Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(i)}`)}function te(i){if(i.weightGoal!==void 0&&i.weightGoal<0)throw new Error(`The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(i)}`)}function ie(i){if(i.weeksToWeightGoal!==void 0&&i.weeksToWeightGoal<0)throw new Error(`Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(i)}`)}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function ae(i){return{...i}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function se(i){return i.unitSystem==="metric"?i:{...i,height:i.height!==void 0?re(i.height):void 0,weight:i.weight!==void 0?R(i.weight):void 0,waist:i.waist!==void 0?b(i.waist):void 0,hip:i.hip!==void 0?b(i.hip):void 0,neck:i.neck!==void 0?b(i.neck):void 0,weightGoal:i.weightGoal!==void 0?R(i.weightGoal):void 0,unitSystem:"metric"}}function re(i){return i!==void 0?i*.3048:void 0}function R(i){return i!==void 0?i*.453592:void 0}function b(i){return i!==void 0?i*2.54:void 0}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class ne{constructor(){this.DAYS_IN_WEEK=7,this.DAYS_IN_MONTH=30,this.CALORIES_PER_KILO=7700,this.REFERENCE_WEIGHT=70}calculateCaloricSurplusOrDeficit(e,t){return this.validateDailyCalories(e),t-e.dailyCalories}calculateEstimatedWeightChangeWeekly(e,t){return this.validateWeight(t),this.estimateWeightChange(e,t,this.DAYS_IN_WEEK)}calculateEstimatedWeightChangeMonthly(e,t){return this.validateWeight(t),this.estimateWeightChange(e,t,this.DAYS_IN_MONTH)}calculateEstimatedWeeksToWeightGoal(e,t){this.validateWeightGoal(t),this.validateWeight(t);const a=this.estimateWeightChange(e,t,this.DAYS_IN_WEEK),s=t.weightGoal-t.weight,l=Math.abs(s)/Math.abs(a);return Math.ceil(l)}calculateCaloriesForWeightGoal(e,t){this.validateWeightGoal(e),this.validateWeight(e),this.validateWeeksToWeightGoal(e);const a=e.weightGoal-e.weight,l=Math.abs(a)/e.weeksToWeightGoal*this.CALORIES_PER_KILO/this.DAYS_IN_WEEK;return a>0?Math.round(t+l):Math.round(t-l)}validateDailyCalories(e){if(e.dailyCalories===void 0||typeof e.dailyCalories!="number"||e.dailyCalories<0)throw new Error("Valid dailyCalories is required for calorie calculation")}validateWeightGoal(e){if(e.weightGoal===void 0||typeof e.weightGoal!="number"||e.weightGoal<=0)throw new Error("Valid weightGoal is required for some calorie calculations")}validateWeight(e){if(e.weight===void 0||typeof e.weight!="number"||e.weight<=0)throw new Error("Valid weight is required for some calorie calculations")}validateWeeksToWeightGoal(e){if(e.weeksToWeightGoal===void 0||typeof e.weeksToWeightGoal!="number"||e.weeksToWeightGoal<=0)throw new Error("Valid weeksToWeightGoal is required for some calorie calculations")}estimateWeightChange(e,t,a){const s=this.CALORIES_PER_KILO*(t.weight/this.REFERENCE_WEIGHT);return e*a/s}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class le{static createHealthCalculator(e){q(e);const t=ae(e),a=se(t),s=new N,r=new k,l=new P,c=new x,g=new ne;return new D(a,s,r,l,c,g)}}var u=(i=>(i.UNDERWEIGHT_SEVERE="underweight, severe thinness",i.UNDERWEIGHT_MODERATE="underweight, moderate thinness",i.UNDERWEIGHT_MILD="underweight, mild thinness",i.NORMAL_WEIGHT="normal weight",i.OVERWEIGHT_PRE_OBESE="overweight, pre-obese",i.OBESE_CLASS_I="obese, class I",i.OBESE_CLASS_II="obese, class II",i.OBESE_CLASS_III="obese, class III",i))(u||{});class oe{static fromString(e){const t=e.toLowerCase().trim();for(const[a,s]of Object.entries(u))if(s.toLowerCase()===t)return u[a];throw new Error(`Invalid BMI category: ${e}`)}}function he(i){switch(i){case u.UNDERWEIGHT_SEVERE:return"High risk of malnutrition, weakened immune system, and more.";case u.UNDERWEIGHT_MODERATE:return"Risks include nutrient deficiencies and weakened immune response.";case u.UNDERWEIGHT_MILD:return"Moderate risk of malnutrition.";case u.NORMAL_WEIGHT:return"Lowest health risks with a balanced lifestyle.";case u.OVERWEIGHT_PRE_OBESE:return"Increased risk of cardiovascular diseases and type 2 diabetes.";case u.OBESE_CLASS_I:return"Significant risk of metabolic syndrome and heart disease.";case u.OBESE_CLASS_II:return"Increased risk for heart disease and stroke.";case u.OBESE_CLASS_III:return"Severe health risks including reduced life expectancy.";default:return"Unknown health risk."}}class ce{constructor(e){n(this,"calculator");this.userModel=e,this.calculator=this.createCalculator()}createCalculator(){const e=this.userModel.getData();return le.createHealthCalculator({unitSystem:e.unitSystem,weight:e.weight??70,height:e.height??1.75,age:e.age,gender:e.gender,waist:e.waist,hip:e.hip,neck:e.neck,activityLevel:e.activityLevel,dailyCalories:e.dailyCalories,weightGoal:e.weightGoal,weeksToWeightGoal:e.weeksToWeightGoal})}getBmi(){return this.calculator=this.createCalculator(),this.calculator.getBmi()}getBmiType(){this.calculator=this.createCalculator();const e=this.calculator.getBmiType();return oe.fromString(e)}getHealthRisk(){return he(this.getBmiType())}getBmiPrime(){return this.calculator=this.createCalculator(),this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator=this.createCalculator(),this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator=this.createCalculator(),this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator=this.createCalculator(),this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator=this.createCalculator(),this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeMonthly()}getEstimateTimeToWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getEstimateTimeToWeightGoal()}getCaloriesForWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getCaloriesForWeightGoal()}}class de{constructor(e){n(this,"calculator");this.calculator=new ce(e)}getBmi(){return this.calculator.getBmi()}getBmiType(){return this.calculator.getBmiType()}getHealthRisk(){return this.calculator.getHealthRisk()}getBmiPrime(){return this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator.getEstimatedWeightChangeMonthly()}getCaloriesForWeightGoal(){return this.calculator.getCaloriesForWeightGoal()}getEstimateTimeToWeightGoal(){return this.calculator.getEstimateTimeToWeightGoal()}}class E{constructor(e,t){n(this,"user");n(this,"calculator");this.user=e,this.calculator=t}handleErrors(e){this.view.showError(e.message)}resetForm(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}fillFormWithUserData(){const e=this.user.getData();this.view.fillForm(e)}}var y=(i=>(i.MALE="male",i.FEMALE="female",i))(y||{});class T{validateBmiFormData(e){this.validateUnitSystem(e.unitSystem),this.validateNumericInput(e.height,"height"),this.validateNumericInput(e.weight,"weight")}validateWaistToHipRatioFormData(e){this.validateUnitSystem(e.unitSystem),this.validateNumericInput(e.waist,"waist"),this.validateNumericInput(e.hip,"hip")}validateWaistHeightRatioFormData(e){this.validateUnitSystem(e.unitSystem),this.validateNumericInput(e.waist,"waist"),this.validateNumericInput(e.height,"height")}validateBodyFatPercentageFormData(e){this.validateUnitSystem(e.unitSystem),this.validateGender(e.gender),this.validateNumericInput(e.weight,"weight"),this.validateNumericInput(e.waist,"waist"),this.validateNumericInput(e.neck,"neck"),e.gender===y.FEMALE&&e.hip!==void 0&&this.validateNumericInput(e.hip,"hip")}validateBasalMetabolicRateFormData(e){this.validateUnitSystem(e.unitSystem),this.validateGender(e.gender),this.validateNumericInput(e.weight,"weight"),this.validateNumericInput(e.height,"height"),this.validateNumericInput(e.age,"age")}validateUnitSystem(e){if(!Object.values(m).includes(e))throw new Error("Invalid unit system value")}validateGender(e){if(!Object.values(y).includes(e))throw new Error("Invalid gender value")}validateNumericInput(e,t){if(typeof e!="number"||isNaN(e)||e<=0)throw new Error(`Invalid ${t} value`)}}class ue extends E{constructor(t,a){super(t,a);n(this,"view");n(this,"formValidator");this.view=new G,this.formValidator=new T}init(t){this.view.render(t),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const t=this.user.getData();this.view.fillForm(t)}handleCalculate(t){try{const a=this.parseFormData(t);this.formValidator.validateBmiFormData(a),this.user.setData(a),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),weight:parseFloat(t.get("weight")),height:parseFloat(t.get("height"))}}updateView(){const t=this.calculator.getBmi(),a=this.calculator.getBmiType(),s=this.calculator.getHealthRisk(),r=this.calculator.getIdealWeight();this.view.updateResults({bmi:t,category:a,healthRisk:s,idealWeight:r})}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}const ge=`
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
`;class me extends v{constructor(){super(...arguments);n(this,"waistInput",null);n(this,"hipInput",null);n(this,"unitSystemSelect",null)}render(t){var a;t.innerHTML=ge,this.initializeCommonElements(),this.initializeInputs([h.WAIST,h.HIP]),this.waistInput=this.getElement(o.WAIST),this.hipInput=this.getElement(o.HIP),this.unitSystemSelect=this.getElement("#unitSystem"),(a=this.unitSystemSelect)==null||a.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(t){this.unitSystemSelect&&t.unitSystem&&(this.unitSystemSelect.value=t.unitSystem),this.setInputValue(this.waistInput,t.waist),this.setInputValue(this.hipInput,t.hip),this.updatePlaceholders()}setInputValue(t,a){t&&a&&(t.value=a.toString())}updatePlaceholders(){var s;const a=((s=this.unitSystemSelect)==null?void 0:s.value)===m.IMPERIAL?{waist:"in",hip:"in"}:{waist:"cm",hip:"cm"};Object.keys(this.inputs).forEach(r=>{this.inputs[r].setAttribute("placeholder",a[r])})}bindCalculateEvent(t){var a;(a=this.form)==null||a.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(this.form);t(r)})}updateResults(t){if(this.resultsTable){const a=this.resultsTable.querySelector("td:nth-child(2)");a&&(a.textContent=t.toFixed(2))}}}class pe extends E{constructor(t,a){super(t,a);n(this,"view");n(this,"formValidator");this.view=new me,this.formValidator=new T}init(t){this.view.render(t),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const t=this.user.getData();this.view.fillForm(t)}handleCalculate(t){try{console.log("handleCalculate called with:",t);const a=this.parseFormData(t);this.formValidator.validateWaistToHipRatioFormData(a),this.user.setData(a),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),waist:parseFloat(t.get("waist")),hip:parseFloat(t.get("hip"))}}updateView(){const t=this.calculator.getWaistToHipRatio();console.log("Ratio:",t),this.view.updateResults(t)}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}const fe=`
<section class="container">
    <h2>Waist-to-Height Ratio Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your Waist-to-Height Ratio (WHtR) to determine abdominal 
            fat levels and associated health risks.
        </p>

        <p class="info">
            A WHtR value of <strong>less than 0.5</strong> 
            is generally considered 
            healthy for both men and women. 
            Values above 0.5 may indicate an increased risk of cardiovascular d
            isease, type 2 diabetes, and other health conditions. 
            Keeping your waist circumference below half of your height is a 
            guideline for maintaining a healthier profile.
        </p>

        <form id="waist-height-ratio-form">
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
                <button type="reset">Reset</button>
                <button type="submit">Calculate WHtR</button>
            </div>
        </form>

        <div class="error-message"></div>
                        <div class="results">
            <h2>Results</h2>
            <table>
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
`;class we extends v{constructor(){super(...arguments);n(this,"waistInput",null);n(this,"heightInput",null);n(this,"unitSystemSelect",null)}render(t){var a;t.innerHTML=fe,this.initializeCommonElements(),this.initializeInputs([h.WAIST,h.HEIGHT]),this.waistInput=this.getElement(o.WAIST),this.heightInput=this.getElement(o.HEIGHT),this.unitSystemSelect=this.getElement("#unitSystem"),(a=this.unitSystemSelect)==null||a.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(t){this.unitSystemSelect&&t.unitSystem&&(this.unitSystemSelect.value=t.unitSystem),this.setInputValue(this.waistInput,t.waist),this.setInputValue(this.heightInput,t.height),this.updatePlaceholders()}setInputValue(t,a){t&&a&&(t.value=a.toString())}updatePlaceholders(){var s;const a=((s=this.unitSystemSelect)==null?void 0:s.value)===m.IMPERIAL?{waist:"in",hip:"in"}:{waist:"cm",hip:"cm"};Object.keys(this.inputs).forEach(r=>{this.inputs[r].setAttribute("placeholder",a[r])})}bindCalculateEvent(t){var a;(a=this.form)==null||a.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(this.form);t(r)})}updateResults(t){if(this.resultsTable){const a=this.resultsTable.querySelector("td:nth-child(2)");a&&(a.textContent=t.toFixed(2))}}}class ye extends E{constructor(t,a){super(t,a);n(this,"view");n(this,"formValidator");this.view=new we,this.formValidator=new T}init(t){this.view.render(t),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const t=this.user.getData();this.view.fillForm(t)}handleCalculate(t){try{console.log("handleCalculate called with:",t);const a=this.parseFormData(t);this.formValidator.validateWaistHeightRatioFormData(a),this.user.setData(a),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),waist:parseFloat(t.get("waist")),height:parseFloat(t.get("height"))}}updateView(){const t=this.calculator.getWaistToHeightRatio();this.view.updateResults(t)}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}const ve=`
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
                    <input type="radio" id="female" name="gender" 
                    value="female">
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
                <button type="reset">Reset</button>
                <button type="submit">Calculate Body Fat Percentage</button>
            </div>
        </form>

        <div class="error-message"></div>
                <div class="results">
            <h2>Results</h2>
            <table>
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
`;class Ee extends v{constructor(){super(...arguments);n(this,"weightInput",null);n(this,"waistInput",null);n(this,"hipInput",null);n(this,"neckInput",null);n(this,"unitSystemSelect",null);n(this,"genderInputs",[])}render(t){var s,r;t.innerHTML=ve,this.initializeCommonElements(),this.initializeInputs([h.WEIGHT,h.WAIST,h.HIP,h.NECK]),this.weightInput=this.getElement(o.WEIGHT),this.waistInput=this.getElement(o.WAIST),this.hipInput=this.getElement(o.HIP),this.neckInput=this.getElement(o.NECK),this.unitSystemSelect=this.getElement(o.UNIT_SYSTEM);const a=(s=this.form)==null?void 0:s.querySelectorAll('input[name="gender"]');this.genderInputs=Array.from(a||[]),(r=this.unitSystemSelect)==null||r.addEventListener("change",this.updatePlaceholders.bind(this)),this.genderInputs.forEach(l=>{l.addEventListener("change",this.updateHipInputVisibility.bind(this))}),this.updateHipInputVisibility()}fillForm(t){this.unitSystemSelect&&t.unitSystem&&(this.unitSystemSelect.value=t.unitSystem),this.setInputValue(this.weightInput,t.weight),this.setInputValue(this.waistInput,t.waist),this.setInputValue(this.neckInput,t.neck),t.gender&&(this.setGender(t.gender),this.handleHipInput(t)),this.updatePlaceholders(),this.updateHipInputVisibility()}setInputValue(t,a){t&&a!==void 0&&(t.value=a.toString())}setGender(t){const a=this.genderInputs.find(s=>s.value===t);a&&(a.checked=!0)}handleHipInput(t){this.hipInput&&t.hip&&t.gender===y.FEMALE&&(this.hipInput.value=t.hip.toString())}updatePlaceholders(){var s;const a=((s=this.unitSystemSelect)==null?void 0:s.value)===m.IMPERIAL?{weight:"lbs",waist:"in",hip:"in",neck:"in"}:{weight:"kg",waist:"cm",hip:"cm",neck:"cm"};Object.keys(this.inputs).forEach(r=>{this.inputs[r].setAttribute("placeholder",a[r])})}updateHipInputVisibility(){var s;const t=this.getElement(".input-group:has(#hip)"),a=(s=this.getElement('input[value="female"]'))==null?void 0:s.checked;t&&(t.style.display=a?"block":"none")}bindCalculateEvent(t){var a;(a=this.form)==null||a.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(this.form);t(r)})}updateResults(t){if(!this.resultsTable)return;const a=this.resultsTable.rows;a[0].cells[1].textContent=t.bodyFatPercentage.toFixed(2)+"%",a[1].cells[1].textContent=t.leanBodyMass.toFixed(2)+" kg"}}class Te extends E{constructor(t,a){super(t,a);n(this,"view");n(this,"formValidator");this.view=new Ee,this.formValidator=new T}init(t){this.view.render(t),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const t=this.user.getData();this.view.fillForm(t)}handleCalculate(t){try{console.log("handleCalculate called with:",t);const a=this.parseFormData(t);this.formValidator.validateBodyFatPercentageFormData(a),this.user.setData(a),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}parseFormData(t){const a={unitSystem:t.get("unitSystem"),gender:t.get("gender"),weight:parseFloat(t.get("weight")),waist:parseFloat(t.get("waist")),neck:parseFloat(t.get("neck"))};if(a.gender===y.FEMALE){const s=t.get("hip");if(s)a.hip=parseFloat(s);else throw new Error("Hip measurement is required for females.")}return a}updateView(){const t=this.calculator.getBodyFatPercentage(),a=this.calculator.getLeanBodyMass();this.view.updateResults({bodyFatPercentage:t,leanBodyMass:a})}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}const Ie=`
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
`;class be extends v{constructor(){super(...arguments);n(this,"weightInput",null);n(this,"heightInput",null);n(this,"ageInput",null);n(this,"unitSystemSelect",null);n(this,"genderInputs",[])}render(t){var s,r;t.innerHTML=Ie,this.initializeCommonElements(),this.initializeInputs([h.WEIGHT,h.HEIGHT,h.AGE]),this.weightInput=this.getElement(o.WEIGHT),this.heightInput=this.getElement(o.HEIGHT),this.ageInput=this.getElement(o.AGE),this.unitSystemSelect=this.getElement(o.UNIT_SYSTEM);const a=(s=this.form)==null?void 0:s.querySelectorAll('input[name="gender"]');this.genderInputs=Array.from(a||[]),(r=this.unitSystemSelect)==null||r.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(t){this.unitSystemSelect&&t.unitSystem&&(this.unitSystemSelect.value=t.unitSystem),this.setInputValue(this.weightInput,t.weight),this.setInputValue(this.heightInput,t.height),this.setInputValue(this.ageInput,t.age),t.gender&&this.setGender(t.gender),this.updatePlaceholders()}setInputValue(t,a){t&&a!==void 0&&(t.value=a.toString())}setGender(t){const a=this.genderInputs.find(s=>s.value===t);a&&(a.checked=!0)}updatePlaceholders(){var s;const a=((s=this.unitSystemSelect)==null?void 0:s.value)===m.IMPERIAL?{weight:"lb",height:"in",age:"years"}:{weight:"kg",height:"cm",age:"years"};Object.keys(this.inputs).forEach(r=>{this.inputs[r].setAttribute("placeholder",a[r])})}bindCalculateEvent(t){var a;(a=this.form)==null||a.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(this.form);t(r)})}updateResults(t){if(!this.resultsTable)return;const a=this.resultsTable.rows;a[0].cells[1].textContent=t.basalMetabolicRateHarrisBenedict.toFixed(0)+" kcal/day",a[1].cells[1].textContent=t.basalMetabolicRateMifflinStJeor.toFixed(0)+" kcal/day"}}class Ce extends E{constructor(t,a){super(t,a);n(this,"view");n(this,"formValidator");this.view=new be,this.formValidator=new T}init(t){this.view.render(t),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const t=this.user.getData();this.view.fillForm(t)}handleCalculate(t){try{const a=this.parseFormData(t);this.formValidator.validateBasalMetabolicRateFormData(a),this.user.setData(a),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}parseFormData(t){return{unitSystem:t.get("unitSystem"),gender:t.get("gender"),weight:parseFloat(t.get("weight")),height:parseFloat(t.get("height")),age:parseFloat(t.get("age"))}}updateView(){const t=this.calculator.getBmrHarrisBenedict(),a=this.calculator.getBmrMifflinStJeor();this.view.updateResults({basalMetabolicRateHarrisBenedict:t,basalMetabolicRateMifflinStJeor:a})}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}class Se{constructor(e,t){this.user=e,this.calculator=t}createController(e){switch(e){case p.HOME:return new _;case p.BMI:return new ue(this.user,this.calculator);case p.WAIST_TO_HIP:return new pe(this.user,this.calculator);case p.WAIST_TO_HEIGHT:return new ye(this.user,this.calculator);case p.BODY_FAT_PERCENTAGE:return new Te(this.user,this.calculator);case p.BASAL_METABOLIC_RATE:return new Ce(this.user,this.calculator);default:throw new Error("404 Not Found")}}}class Me{constructor(e,t){n(this,"currentController",null);n(this,"controllerFactory");this.controllerFactory=new Se(e,t)}listen(){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1);this.navigate(t)});const e=window.location.hash.slice(1)||"/";this.navigate(e)}navigate(e){const t=document.getElementById("app");if(!t)return;t.innerHTML="";const a=F(e);if(a!==void 0)try{this.currentController=this.controllerFactory.createController(a),this.currentController.init(t)}catch(s){console.error("Error creating controller:",s),t.innerHTML="<h2>An error occurred</h2>"}else t.innerHTML="<h2>404 Not Found</h2>"}}let C=null;class S{constructor(){n(this,"data");const e=sessionStorage.getItem("userModel");this.data=e?JSON.parse(e):{unitSystem:"metric"}}static getInstance(){return C||(C=new S),C}setData(e){Object.assign(this.data,e),this.saveToSession()}getData(){return{weight:this.data.weight,height:this.data.height,unitSystem:this.data.unitSystem,age:this.data.age,gender:this.data.gender,waist:this.data.waist,hip:this.data.hip,neck:this.data.neck,activityLevel:this.data.activityLevel,dailyCalories:this.data.dailyCalories,weightGoal:this.data.weightGoal,weeksToWeightGoal:this.data.weeksToWeightGoal}}resetData(){this.data={unitSystem:m.METRIC},this.saveToSession()}saveToSession(){sessionStorage.setItem("userModel",JSON.stringify(this.data))}}class Re{constructor(){n(this,"dropdownToggle");n(this,"dropdownMenu");this.dropdownToggle=document.querySelector(".dropdown-toggle"),this.dropdownMenu=document.querySelector(".dropdown-menu"),this.initializeDropdown()}initializeDropdown(){this.dropdownToggle&&this.dropdownMenu&&(this.dropdownToggle.addEventListener("click",this.toggleDropdown.bind(this)),document.addEventListener("click",this.handleOutsideClick.bind(this)))}toggleDropdown(e){var t;e.preventDefault(),(t=this.dropdownMenu)==null||t.classList.toggle("show")}handleOutsideClick(e){var t;this.dropdownToggle&&!this.dropdownToggle.contains(e.target)&&((t=this.dropdownMenu)==null||t.classList.remove("show"))}}class Ae{constructor(){n(this,"router");n(this,"user");n(this,"calculator");this.user=S.getInstance(),this.calculator=new de(this.user),this.router=new Me(this.user,this.calculator),new Re}start(){this.router.listen();const e=window.location.hash.slice(1)||"/";this.router.navigate(e)}}const He=new Ae;He.start();
