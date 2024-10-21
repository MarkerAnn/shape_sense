var A=Object.defineProperty;var F=(i,t,e)=>t in i?A(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var l=(i,t,e)=>(F(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var p=(i=>(i[i.HOME=0]="HOME",i[i.BMI=1]="BMI",i[i.BMR=2]="BMR",i[i.TDEE=3]="TDEE",i[i.BODY_COMPOSITION=4]="BODY_COMPOSITION",i[i.CALORIE_CALCULATION=5]="CALORIE_CALCULATION",i[i.WAIST_TO_HIP=6]="WAIST_TO_HIP",i[i.WAIST_TO_HEIGHT=7]="WAIST_TO_HEIGHT",i[i.BODY_FAT_PERCENTAGE=8]="BODY_FAT_PERCENTAGE",i[i.LEAN_BODY_MASS=9]="LEAN_BODY_MASS",i))(p||{});const M={0:"/",1:"/bmi",2:"/bmr",3:"/tdee",4:"/body-composition",5:"/calorie-calculation",6:"/waist-to-hip",7:"/waist-to-height",8:"/body-fat-percentage",9:"/lean-body-mass"};function W(i){const t=Object.entries(M).find(([e,a])=>a===i);return t?Number(t[0]):void 0}var u=(i=>(i.BMI="bmi",i.BMR="bmr",i.TDEE="tdee",i.BODY_COMPOSITION="body-composition",i.CALORIE_CALCULATION="calorie-calculation",i))(u||{});class H{render(t){t.innerHTML=`
        <section class="container">
          <h2>Our Calculators</h2>
          ${this.renderCalculatorItems()}
        </section>
      `}renderCalculatorItems(){return Object.values(u).map(t=>`
        <div class="calculator-item">
          <div>
            <h3>${t}</h3>
            <p>${this.getCalculatorDescription(t)}</p>
            <div class="button-container">
            <a href="#/${t.toLowerCase()}" class="button">Calculate</a>
            </div>
          </div>
          <img src="./assets/images/${t.toLowerCase()}.png" 
          alt="${t} illustration">
        </div>
      `).join("")}getCalculatorDescription(t){return{[u.BMI]:"Body Mass Index (BMI) - A measure of body fat based on weight and height.",[u.BMR]:"Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.",[u.TDEE]:"Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.",[u.BODY_COMPOSITION]:"Body Composition - Calculate body fat percentage, waist-to-hip ratio, and lean body mass.",[u.CALORIE_CALCULATION]:"Calorie Calculations - Estimate daily calorie needs to reach your weight goal, and predict weight change based on your caloric intake."}[t]||"Description not available."}}class O{constructor(){l(this,"view");this.view=new H}init(t){this.view.render(t)}}class w{showError(t){const e=document.querySelector(".error-message");e instanceof HTMLElement&&(e.textContent=t,e.classList.remove("hidden"))}hideError(){const t=document.querySelector(".error-message");t instanceof HTMLElement&&(t.textContent="",t.classList.add("hidden"))}getElement(t){return document.querySelector(t)}createElement(t,e){const a=document.createElement(t);return e&&(a.className=e),a}}var m=(i=>(i.METRIC="metric",i.IMPERIAL="imperial",i))(m||{});const B=`
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
    `;class _ extends w{constructor(){super(...arguments);l(this,"form",null);l(this,"resultsTable",null);l(this,"heightInput",null);l(this,"weightInput",null);l(this,"unitSystemSelect",null)}render(e){var a;e.innerHTML=B,this.form=this.getElement("#bmi-form"),this.resultsTable=this.getElement(".results table"),this.weightInput=this.getElement("#weight"),this.heightInput=this.getElement("#height"),this.unitSystemSelect=this.getElement('select[name="unitSystem"]'),(a=this.unitSystemSelect)==null||a.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(e){this.unitSystemSelect&&e.unitSystem&&(this.unitSystemSelect.value=e.unitSystem),this.heightInput&&e.height&&(this.heightInput.value=e.height.toString()),this.weightInput&&e.weight&&(this.weightInput.value=e.weight.toString()),this.updatePlaceholders()}updatePlaceholders(){var r,s,n;const a=((r=this.unitSystemSelect)==null?void 0:r.value)===m.IMPERIAL?{height:"ft",weight:"lbs"}:{height:"m",weight:"kg"};(s=this.heightInput)==null||s.setAttribute("placeholder",a.height),(n=this.weightInput)==null||n.setAttribute("placeholder",a.weight)}bindCalculateEvent(e){var a;(a=this.form)==null||a.addEventListener("submit",r=>{r.preventDefault();const s=new FormData(this.form),n={unitSystem:s.get("unitSystem"),height:parseFloat(s.get("height")),weight:parseFloat(s.get("weight"))};e(n)})}updateResults(e,a,r,s){if(this.resultsTable){const n=this.resultsTable.rows;n[0].cells[1].textContent=e.toFixed(2),n[1].cells[1].textContent=a,n[2].cells[1].textContent=r,n[3].cells[1].textContent=`${s[0].toFixed(0)} - ${s[1].toFixed(0)} kg`}}bindResetEvent(e){var r;const a=(r=this.form)==null?void 0:r.querySelector('button[type="reset"]');a==null||a.addEventListener("click",s=>{s.preventDefault(),e()})}resetForm(){var e;(e=this.form)==null||e.reset(),this.clearResults(),this.updatePlaceholders()}clearResults(){if(this.resultsTable){const e=this.resultsTable.rows;for(let a=0;a<e.length;a++)e[a].cells[1].textContent="-"}}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class L{constructor(t,e,a,r,s,n){this.user=t,this.bmiCalculator=e,this.bodycompositionCalculator=a,this.bmrCalculator=r,this.tdeeCalculator=s,this.calorieCalculator=n}getBmi(){return this.bmiCalculator.calculateBmi(this.user)}getBmiType(){const t=this.getBmi();return this.bmiCalculator.calculateBmiType(t)}getBmiPrime(){const t=this.getBmi();return this.bmiCalculator.calculateBmiPrime(t)}getIdealWeight(){return this.bmiCalculator.calculateIdealWeight(this.user)}getWaistToHipRatio(){return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)}getWaistToHeightRatio(){return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)}getBodyFatPercentage(){return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)}getLeanBodyMass(){return this.bodycompositionCalculator.calculateLeanBodyMass(this.user)}getBmrHarrisBenedict(){return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)}getBmrMifflinStJeor(){return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)}getTdeeHarrisBenedict(){const t=this.getBmrHarrisBenedict();return this.tdeeCalculator.calculateTdeeHarrisBenedict(this.user,t)}getTdeeMifflinStJeor(){const t=this.getBmrMifflinStJeor();return this.tdeeCalculator.calculateTdeeMifflinStJeor(this.user,t)}getCaloricSurplusOrDeficit(){const t=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloricSurplusOrDeficit(this.user,t)}getEstimatedWeightChangeWeekly(){const t=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeWeekly(t,this.user)}getEstimatedWeightChangeMonthly(){const t=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeMonthly(t,this.user)}getEstimateTimeToWeightGoal(){const t=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeeksToWeightGoal(t,this.user)}getCaloriesForWeightGoal(){const t=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloriesForWeightGoal(this.user,t)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */var c;(function(i){i.UnderweightSevereThinness="underweight, severe thinness",i.UnderweightModerateThinness="underweight, moderate thinness",i.UnderweightMildThinness="underweight, mild thinness",i.Normal="normal weight",i.Overweight="overweight, pre-obese",i.ObeseFirstGrade="obese, class I",i.ObeseSecondGrade="obese, class II",i.ObeseThirdGrade="obese, class III"})(c||(c={}));const I=[{min:0,max:15.9,type:c.UnderweightSevereThinness},{min:16,max:16.9,type:c.UnderweightModerateThinness},{min:17,max:18.4,type:c.UnderweightMildThinness},{min:18.5,max:24.9,type:c.Normal},{min:25,max:29.9,type:c.Overweight},{min:30,max:34.9,type:c.ObeseFirstGrade},{min:35,max:39.9,type:c.ObeseSecondGrade},{min:40,max:100,type:c.ObeseThirdGrade}];var g;(function(i){i.Sedentary="sedentary",i.Lightly="lightly",i.Moderately="moderately",i.Very="very",i.Extremely="extremely"})(g||(g={}));/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class D{calculateBmi(t){this.validateWeightAndHeight(t);const e=2;return t.weight/Math.pow(t.height,e)}calculateBmiType(t){this.validateBmi(t);const e=this.roundBmi(t);return this.findBmiType(e)}calculateIdealWeight(t){this.validateHeight(t);const e=this.getNormalBmiRange(),a=this.calculateWeight(e.min,t.height),r=this.calculateWeight(e.max,t.height);return[a,r]}calculateBmiPrime(t){return t/25}validateWeightAndHeight(t){if(t.weight===void 0||t.height===void 0)throw new Error("Weight and height are required for BMI calculation.");if(typeof t.weight!="number"||typeof t.height!="number")throw new Error("Weight and height must be numbers.");if(t.weight<=0||t.height<=0)throw new Error("Weight and height must be positive numbers.")}validateHeight(t){if(t.height===void 0)throw new Error("Height is required for ideal weight calculation.");if(typeof t.height!="number")throw new Error("Height must be a number.");if(t.height<=0)throw new Error("Height must be a positive number.")}validateBmi(t){if(t<=0||t>100)throw new Error(`BMI out of range. Please check your values. BMI: ${t}`)}roundBmi(t){return Math.round(t)}findBmiType(t){for(const e of I)if(t>=e.min&&t<=e.max)return e.type;throw new Error("Bmi Type could not be found")}getNormalBmiRange(){const t=I.find(e=>e.type===c.Normal);if(!t)throw new Error("Could not find normal BMI range.");return t}calculateWeight(t,e){return t*Math.pow(e,2)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class k{constructor(){this.CM_PER_METER=100,this.PERCENTAGE=100,this.TOTAL_BODY_COMPOSITION=1,this.BODY_FAT={CONSTANT_FACTOR:495,SUBTRACTION_CONSTANT:450},this.BODY_FAT_MALE={CONSTANT:1.0324,WAIST_NECK_FACTOR:.19077,HEIGHT_FACTOR:.15456},this.BODY_FAT_FEMALE={CONSTANT:1.29579,WAIST_HIP_NECK_FACTOR:.35004,HEIGHT_FACTOR:.221}}calculateWaistToHipRatio(t){return this.validateWaistAndHip(t),t.waist/t.hip}calculateWaistToHeightRatio(t){this.validateWaistAndHeight(t);const e=this.convertHeightToCentimeter(t.height);return t.waist/e}calculateBodyFatPercentage(t){this.validateRequiredMeasurements(t);const e=this.convertHeightToCentimeter(t.height);return this.calculateBodyFatBasedOnGender(t,e)}calculateLeanBodyMass(t){this.validateRequiredMeasurements(t);const a=this.calculateBodyFatPercentage(t)/this.PERCENTAGE,r=this.TOTAL_BODY_COMPOSITION-a;return t.weight*r}convertHeightToCentimeter(t){return t*this.CM_PER_METER}calculateMaleBodyFat(t,e){this.validateWaistAndNeck(t);const{CONSTANT:a,WAIST_NECK_FACTOR:r,HEIGHT_FACTOR:s}=this.BODY_FAT_MALE,{CONSTANT_FACTOR:n,SUBTRACTION_CONSTANT:o}=this.BODY_FAT,h=a-r*Math.log10(t.waist-t.neck)+s*Math.log10(e);return n/h-o}calculateFemaleBodyFat(t,e){this.validateWaistHipAndNeck(t);const{CONSTANT:a,WAIST_HIP_NECK_FACTOR:r,HEIGHT_FACTOR:s}=this.BODY_FAT_FEMALE,{CONSTANT_FACTOR:n,SUBTRACTION_CONSTANT:o}=this.BODY_FAT,h=a-r*Math.log10(t.waist+t.hip-t.neck)+s*Math.log10(e);return n/h-o}validateWaistAndHip(t){if(!t.waist||!t.hip)throw new Error("Waist and hip measurements are required for waist to hip calculation.")}validateWaistAndHeight(t){if(!t.waist||!t.height)throw new Error("Waist and height measurements are required for waist to height calculation.")}validateWaistHipAndNeck(t){if(!t.waist||!t.neck||!t.hip)throw new Error("Waist, hip and neck is required to calculate body fat percentage for female")}validateWaistAndNeck(t){if(!t.waist||!t.neck)throw new Error("Waist and neck is required to calculate body fat percentage for male")}validateRequiredMeasurements(t){if(t.weight===void 0||t.height===void 0)throw new Error("Weight and height are required for body composition calculations.")}calculateBodyFatBasedOnGender(t,e){if(t.gender==="male")return this.calculateMaleBodyFat(t,e);if(t.gender==="female")return this.calculateFemaleBodyFat(t,e);throw new Error('Invalid gender. Gender must be either "male" or "female".')}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class N{constructor(){this.CM_PER_METER=100,this.MIFFLIN_ST_JEOR={WEIGHT_FACTOR:10,HEIGHT_FACTOR:6.25,AGE_FACTOR:5,MALE_ADJUSTMENT:5,FEMALE_ADJUSTMENT:-161},this.HARRIS_BENEDICT={FEMALE:{BASE:447.593,WEIGHT_FACTOR:9.247,HEIGHT_FACTOR:3.098,AGE_FACTOR:4.33},MALE:{BASE:88.362,WEIGHT_FACTOR:13.397,HEIGHT_FACTOR:4.799,AGE_FACTOR:5.677}}}calculateBmrHarrisBenedict(t){this.validateRequiredFields(t);const e=this.convertHeightToCentimeter(t.height);return this.calculateBmrBasedOnGender(t,e)}calculateBmrMifflinStJeor(t){this.validateRequiredFields(t);const e=this.convertHeightToCentimeter(t.height),a=this.MIFFLIN_ST_JEOR.WEIGHT_FACTOR*t.weight,r=this.MIFFLIN_ST_JEOR.HEIGHT_FACTOR*e,s=this.MIFFLIN_ST_JEOR.AGE_FACTOR*t.age,n=t.gender==="male"?this.MIFFLIN_ST_JEOR.MALE_ADJUSTMENT:this.MIFFLIN_ST_JEOR.FEMALE_ADJUSTMENT;return a+r-s+n}convertHeightToCentimeter(t){return t*this.CM_PER_METER}harrisBenedictFemale(t,e){const{BASE:a,WEIGHT_FACTOR:r,HEIGHT_FACTOR:s,AGE_FACTOR:n}=this.HARRIS_BENEDICT.FEMALE,o=r*t.weight,h=s*e,E=n*t.age;return a+o+h-E}harrisBenedictMale(t,e){const{BASE:a,WEIGHT_FACTOR:r,HEIGHT_FACTOR:s,AGE_FACTOR:n}=this.HARRIS_BENEDICT.MALE,o=r*t.weight,h=s*e,E=n*t.age;return a+o+h-E}calculateBmrBasedOnGender(t,e){if(t.gender==="male")return this.harrisBenedictMale(t,e);if(t.gender==="female")return this.harrisBenedictFemale(t,e);throw new Error("Invalid gender. Gender must be either 'male' or 'female'.")}validateRequiredFields(t){if(t.weight===void 0||typeof t.weight!="number"||t.weight<=0)throw new Error("Valid weight is required for BMR calculation.");if(t.height===void 0||typeof t.height!="number"||t.height<=0)throw new Error("Valid height is required for BMR calculation.");if(t.age===void 0||typeof t.age!="number"||t.age<=0)throw new Error("Valid age is required for BMR calculation.");if(t.gender===void 0||t.gender!=="male"&&t.gender!=="female")throw new Error("Valid gender is required for BMR calculation. Gender must be either 'male' or 'female'.")}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class G{constructor(){this.ACTIVITY_FACTORS={SEDENTARY:1.2,LIGHTLY:1.375,MODERATELY:1.55,VERY:1.725,EXTREMELY:1.9}}calculateTdeeMifflinStJeor(t,e){this.validateAgeAndActivityLevel(t);const a=e,r=this.getActivityFactor(t.activityLevel);return this.calculateTdee(a,r)}calculateTdeeHarrisBenedict(t,e){this.validateAgeAndActivityLevel(t);const a=e,r=this.getActivityFactor(t.activityLevel);return this.calculateTdee(a,r)}getActivityFactor(t){switch(t){case g.Sedentary:return this.ACTIVITY_FACTORS.SEDENTARY;case g.Lightly:return this.ACTIVITY_FACTORS.LIGHTLY;case g.Moderately:return this.ACTIVITY_FACTORS.MODERATELY;case g.Very:return this.ACTIVITY_FACTORS.VERY;case g.Extremely:return this.ACTIVITY_FACTORS.EXTREMELY;default:throw new Error("Activity level must be sedentary, lightly, moderately, very, or extremely")}}validateAgeAndActivityLevel(t){if(!t.age||!t.activityLevel)throw new Error("Age and activity level is required")}calculateTdee(t,e){return t*e}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */const P={min:0,max:700},x={min:0,max:1543},V={min:0,max:2.5},U={min:0,max:8.2};function q(i){try{J(i),i.weight!==void 0&&$(i),i.height!==void 0&&K(i),j(i),z(i),X(i),Y(i),Q(i),Z(i),tt(i)}catch(t){const e=`Validation error in user object: ${JSON.stringify(i)} - ${t.message}. Stack trace: ${t.stack}`;throw new Error(e)}}function J(i){["age","waist","hip","neck","dailyCalories","weightGoal","weeksToWeightGoal"].forEach(e=>{if(e in i&&i[e]!==void 0&&typeof i[e]!="number")throw new TypeError(`${e} must be a number if provided`)})}function Y(i){if(i.unitSystem===void 0)throw new Error("Unit system is required");if(typeof i.unitSystem!="string")throw new TypeError(`Unit system must be a string. Check the unitSystem value in ${JSON.stringify(i)}`);if(i.unitSystem!=="metric"&&i.unitSystem!=="imperial")throw new Error('Unit system must be either "metric" or "imperial"')}function R(i,t,e,a,r){if(i<t.min||i>t.max)throw new RangeError(`${e.charAt(0).toUpperCase()+e.slice(1)} using the ${a} system must be between ${t.min}-${t.max}. Check the ${e.toLowerCase()} value in ${JSON.stringify(r)}`)}function $(i){if(typeof i.weight!="number")throw new Error(`Weight must be a number if provided. Check the weight value in ${JSON.stringify(i)}`);const t=i.unitSystem==="metric"?P:x,e=i.unitSystem==="metric"?"metric":"imperial";R(i.weight,t,"weight",e,i)}function K(i){if(typeof i.height!="number")throw new Error(`Height must be a number if provided. Check the height value in ${JSON.stringify(i)}`);const t=i.unitSystem==="metric"?V:U,e=i.unitSystem==="metric"?"metric":"imperial";R(i.height,t,"height",e,i)}function j(i){if(i.gender!==void 0&&i.gender!=="male"&&i.gender!=="female")throw new TypeError(`Gender must be male or female. Check the gender value in ${JSON.stringify(i)}`)}function z(i){i.age!==void 0&&i.age<18&&console.warn(`Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(i)}`)}function X(i){const t=["sedentary","lightly","moderately","very","extremely"];if(i.activityLevel!==void 0&&!t.includes(i.activityLevel))throw new TypeError(`Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(i)}`)}function Q(i){if(i.dailyCalories!==void 0&&i.dailyCalories<0)throw new Error(`Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(i)}`)}function Z(i){if(i.weightGoal!==void 0&&i.weightGoal<0)throw new Error(`The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(i)}`)}function tt(i){if(i.weeksToWeightGoal!==void 0&&i.weeksToWeightGoal<0)throw new Error(`Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(i)}`)}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function et(i){return{...i}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function it(i){return i.unitSystem==="metric"?i:{...i,height:i.height!==void 0?at(i.height):void 0,weight:i.weight!==void 0?S(i.weight):void 0,waist:i.waist!==void 0?T(i.waist):void 0,hip:i.hip!==void 0?T(i.hip):void 0,neck:i.neck!==void 0?T(i.neck):void 0,weightGoal:i.weightGoal!==void 0?S(i.weightGoal):void 0,unitSystem:"metric"}}function at(i){return i!==void 0?i*.3048:void 0}function S(i){return i!==void 0?i*.453592:void 0}function T(i){return i!==void 0?i*2.54:void 0}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class rt{constructor(){this.DAYS_IN_WEEK=7,this.DAYS_IN_MONTH=30,this.CALORIES_PER_KILO=7700,this.REFERENCE_WEIGHT=70}calculateCaloricSurplusOrDeficit(t,e){return this.validateDailyCalories(t),e-t.dailyCalories}calculateEstimatedWeightChangeWeekly(t,e){return this.validateWeight(e),this.estimateWeightChange(t,e,this.DAYS_IN_WEEK)}calculateEstimatedWeightChangeMonthly(t,e){return this.validateWeight(e),this.estimateWeightChange(t,e,this.DAYS_IN_MONTH)}calculateEstimatedWeeksToWeightGoal(t,e){this.validateWeightGoal(e),this.validateWeight(e);const a=this.estimateWeightChange(t,e,this.DAYS_IN_WEEK),r=e.weightGoal-e.weight,n=Math.abs(r)/Math.abs(a);return Math.ceil(n)}calculateCaloriesForWeightGoal(t,e){this.validateWeightGoal(t),this.validateWeight(t),this.validateWeeksToWeightGoal(t);const a=t.weightGoal-t.weight,n=Math.abs(a)/t.weeksToWeightGoal*this.CALORIES_PER_KILO/this.DAYS_IN_WEEK;return a>0?Math.round(e+n):Math.round(e-n)}validateDailyCalories(t){if(t.dailyCalories===void 0||typeof t.dailyCalories!="number"||t.dailyCalories<0)throw new Error("Valid dailyCalories is required for calorie calculation")}validateWeightGoal(t){if(t.weightGoal===void 0||typeof t.weightGoal!="number"||t.weightGoal<=0)throw new Error("Valid weightGoal is required for some calorie calculations")}validateWeight(t){if(t.weight===void 0||typeof t.weight!="number"||t.weight<=0)throw new Error("Valid weight is required for some calorie calculations")}validateWeeksToWeightGoal(t){if(t.weeksToWeightGoal===void 0||typeof t.weeksToWeightGoal!="number"||t.weeksToWeightGoal<=0)throw new Error("Valid weeksToWeightGoal is required for some calorie calculations")}estimateWeightChange(t,e,a){const r=this.CALORIES_PER_KILO*(e.weight/this.REFERENCE_WEIGHT);return t*a/r}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class st{static createHealthCalculator(t){q(t);const e=et(t),a=it(e),r=new D,s=new k,n=new N,o=new G,h=new rt;return new L(a,r,s,n,o,h)}}var d=(i=>(i.UNDERWEIGHT_SEVERE="underweight, severe thinness",i.UNDERWEIGHT_MODERATE="underweight, moderate thinness",i.UNDERWEIGHT_MILD="underweight, mild thinness",i.NORMAL_WEIGHT="normal weight",i.OVERWEIGHT_PRE_OBESE="overweight, pre-obese",i.OBESE_CLASS_I="obese, class I",i.OBESE_CLASS_II="obese, class II",i.OBESE_CLASS_III="obese, class III",i))(d||{});class nt{static fromString(t){const e=t.toLowerCase().trim();for(const[a,r]of Object.entries(d))if(r.toLowerCase()===e)return d[a];throw new Error(`Invalid BMI category: ${t}`)}}function lt(i){switch(i){case d.UNDERWEIGHT_SEVERE:return"High risk of malnutrition, weakened immune system, and more.";case d.UNDERWEIGHT_MODERATE:return"Risks include nutrient deficiencies and weakened immune response.";case d.UNDERWEIGHT_MILD:return"Moderate risk of malnutrition.";case d.NORMAL_WEIGHT:return"Lowest health risks with a balanced lifestyle.";case d.OVERWEIGHT_PRE_OBESE:return"Increased risk of cardiovascular diseases and type 2 diabetes.";case d.OBESE_CLASS_I:return"Significant risk of metabolic syndrome and heart disease.";case d.OBESE_CLASS_II:return"Increased risk for heart disease and stroke.";case d.OBESE_CLASS_III:return"Severe health risks including reduced life expectancy.";default:return"Unknown health risk."}}class ot{constructor(t){l(this,"calculator");this.userModel=t,this.calculator=this.createCalculator()}createCalculator(){const t=this.userModel.getData();return st.createHealthCalculator({unitSystem:t.unitSystem,weight:t.weight??70,height:t.height??1.75,age:t.age,gender:t.gender,waist:t.waist,hip:t.hip,neck:t.neck,activityLevel:t.activityLevel,dailyCalories:t.dailyCalories,weightGoal:t.weightGoal,weeksToWeightGoal:t.weeksToWeightGoal})}getBmi(){return this.calculator=this.createCalculator(),this.calculator.getBmi()}getBmiType(){this.calculator=this.createCalculator();const t=this.calculator.getBmiType();return nt.fromString(t)}getHealthRisk(){return lt(this.getBmiType())}getBmiPrime(){return this.calculator=this.createCalculator(),this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator=this.createCalculator(),this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator=this.createCalculator(),this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator=this.createCalculator(),this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator=this.createCalculator(),this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeMonthly()}getEstimateTimeToWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getEstimateTimeToWeightGoal()}getCaloriesForWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getCaloriesForWeightGoal()}}class ht{constructor(t){l(this,"calculator");this.calculator=new ot(t)}getBmi(){return this.calculator.getBmi()}getBmiType(){return this.calculator.getBmiType()}getHealthRisk(){return this.calculator.getHealthRisk()}getBmiPrime(){return this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator.getEstimatedWeightChangeMonthly()}getCaloriesForWeightGoal(){return this.calculator.getCaloriesForWeightGoal()}getEstimateTimeToWeightGoal(){return this.calculator.getEstimateTimeToWeightGoal()}}class y{constructor(t,e){l(this,"user");l(this,"calculator");this.user=t,this.calculator=e}handleErrors(t){this.view.showError(t.message)}resetForm(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}fillFormWithUserData(){const t=this.user.getData();this.view.fillForm(t)}}var f=(i=>(i.MALE="male",i.FEMALE="female",i))(f||{});class v{validateBmiFormData(t){this.validateUnitSystem(t.unitSystem),this.validateNumericInput(t.height,"height"),this.validateNumericInput(t.weight,"weight")}validateWaistToHipRatioFormData(t){this.validateUnitSystem(t.unitSystem),this.validateNumericInput(t.waist,"waist"),this.validateNumericInput(t.hip,"hip")}validateWaistHeightRatioFormData(t){this.validateUnitSystem(t.unitSystem),this.validateNumericInput(t.waist,"waist"),this.validateNumericInput(t.height,"height")}validateBodyFatPercentageFormData(t){this.validateUnitSystem(t.unitSystem),this.validateGender(t.gender),this.validateNumericInput(t.weight,"weight"),this.validateNumericInput(t.waist,"waist"),this.validateNumericInput(t.neck,"neck"),t.gender===f.FEMALE&&t.hip!==void 0&&this.validateNumericInput(t.hip,"hip")}validateLeanBodyMassFormData(t){this.validateUnitSystem(t.unitSystem),this.validateGender(t.gender),this.validateNumericInput(t.weight,"weight"),this.validateNumericInput(t.height,"height")}validateUnitSystem(t){if(!Object.values(m).includes(t))throw new Error("Invalid unit system value")}validateGender(t){if(!Object.values(f).includes(t))throw new Error("Invalid gender value")}validateNumericInput(t,e){if(typeof t!="number"||isNaN(t)||t<=0)throw new Error(`Invalid ${e} value`)}}class ct extends y{constructor(e,a){super(e,a);l(this,"view");l(this,"formValidator");this.view=new _,this.formValidator=new v}init(e){this.view.render(e),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const e=this.user.getData();this.view.fillForm(e)}handleCalculate(e){try{this.formValidator.validateBmiFormData(e),this.user.setData(e),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}updateView(){const e=this.calculator.getBmi(),a=this.calculator.getBmiType(),r=this.calculator.getHealthRisk(),s=this.calculator.getIdealWeight();this.view.updateResults(e,a,r,s)}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}const dt=`
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
`;class ut extends w{constructor(){super(...arguments);l(this,"form",null);l(this,"resultsTable",null);l(this,"waistInput",null);l(this,"hipInput",null);l(this,"unitSystemSelect",null)}render(e){var a;e.innerHTML=dt,this.form=this.getElement("#waist-hip-ratio-form"),this.resultsTable=this.getElement(".results table"),this.waistInput=this.getElement("#waist"),this.hipInput=this.getElement("#hip"),this.unitSystemSelect=this.getElement('select[name="unitSystem"]'),(a=this.unitSystemSelect)==null||a.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(e){this.unitSystemSelect&&e.unitSystem&&(this.unitSystemSelect.value=e.unitSystem),this.waistInput&&e.waist&&(this.waistInput.value=e.waist.toString()),this.hipInput&&e.hip&&(this.hipInput.value=e.hip.toString()),this.updatePlaceholders()}updatePlaceholders(){var r,s,n;const a=((r=this.unitSystemSelect)==null?void 0:r.value)===m.IMPERIAL?{waist:"in",hip:"in"}:{waist:"cm",hip:"cm"};(s=this.waistInput)==null||s.setAttribute("placeholder",a.waist),(n=this.hipInput)==null||n.setAttribute("placeholder",a.hip)}bindCalculateEvent(e){var a;(a=this.form)==null||a.addEventListener("submit",r=>{r.preventDefault(),console.log("Form submitted");const s=new FormData(this.form),n={unitSystem:s.get("unitSystem"),waist:parseFloat(s.get("waist")),hip:parseFloat(s.get("hip"))};console.log("Form data:",n),e(n)})}updateResults(e){if(this.resultsTable){const a=this.resultsTable.querySelector("td:nth-child(2)");a&&(a.textContent=e.toFixed(2))}}bindResetEvent(e){var r;const a=(r=this.form)==null?void 0:r.querySelector('button[type="reset"]');a==null||a.addEventListener("click",s=>{s.preventDefault(),e()})}resetForm(){var e;(e=this.form)==null||e.reset(),this.clearResults(),this.updatePlaceholders()}clearResults(){if(this.resultsTable){const e=this.resultsTable.rows;for(let a=0;a<e.length;a++)e[a].cells[1].textContent="-"}}}class gt extends y{constructor(e,a){super(e,a);l(this,"view");l(this,"formValidator");this.view=new ut,this.formValidator=new v}init(e){this.view.render(e),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const e=this.user.getData();this.view.fillForm(e)}handleCalculate(e){try{console.log("handleCalculate called with:",e),this.formValidator.validateWaistToHipRatioFormData(e),this.user.setData(e),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}updateView(){const e=this.calculator.getWaistToHipRatio();console.log("Ratio:",e),this.view.updateResults(e)}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}const mt=`
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
`;class pt extends w{constructor(){super(...arguments);l(this,"form",null);l(this,"resultsTable",null);l(this,"waistInput",null);l(this,"heightInput",null);l(this,"unitSystemSelect",null)}render(e){var a;e.innerHTML=mt,this.form=this.getElement("#waist-height-ratio-form"),this.resultsTable=this.getElement(".results table"),this.waistInput=this.getElement("#waist"),this.heightInput=this.getElement("#height"),this.unitSystemSelect=this.getElement('select[name="unitSystem"]'),(a=this.unitSystemSelect)==null||a.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(e){this.unitSystemSelect&&e.unitSystem&&(this.unitSystemSelect.value=e.unitSystem),this.waistInput&&e.waist&&(this.waistInput.value=e.waist.toString()),this.heightInput&&e.height&&(this.heightInput.value=e.height.toString()),this.updatePlaceholders()}updatePlaceholders(){var r,s,n;const a=((r=this.unitSystemSelect)==null?void 0:r.value)===m.IMPERIAL?{waist:"in",height:"in"}:{waist:"cm",height:"cm"};(s=this.waistInput)==null||s.setAttribute("placeholder",a.waist),(n=this.heightInput)==null||n.setAttribute("placeholder",a.height)}bindCalculateEvent(e){var a;(a=this.form)==null||a.addEventListener("submit",r=>{r.preventDefault(),console.log("Form submitted");const s=new FormData(this.form),n={unitSystem:s.get("unitSystem"),waist:parseFloat(s.get("waist")),height:parseFloat(s.get("height"))};console.log("Form data:",n),e(n)})}updateResults(e){if(this.resultsTable){const a=this.resultsTable.querySelector("td:nth-child(2)");a&&(a.textContent=e.toFixed(2))}}bindResetEvent(e){var r;const a=(r=this.form)==null?void 0:r.querySelector('button[type="reset"]');a==null||a.addEventListener("click",s=>{s.preventDefault(),e()})}resetForm(){var e;(e=this.form)==null||e.reset(),this.clearResults(),this.updatePlaceholders()}clearResults(){if(this.resultsTable){const e=this.resultsTable.rows;for(let a=0;a<e.length;a++)e[a].cells[1].textContent="-"}}}class ft extends y{constructor(e,a){super(e,a);l(this,"view");l(this,"formValidator");this.view=new pt,this.formValidator=new v}init(e){this.view.render(e),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const e=this.user.getData();this.view.fillForm(e)}handleCalculate(e){try{console.log("handleCalculate called with:",e),this.formValidator.validateWaistHeightRatioFormData(e),this.user.setData(e),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}updateView(){const e=this.calculator.getWaistToHeightRatio();console.log("Ratio:",e),this.view.updateResults(e)}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}const wt=`
<section class="container">
    <h2>Body Fat Percentage Calculator</h2>
    <div class="content">
        <p class="description">
            Calculate your Body Fat Percentage for a deeper 
            understanding of your health and fitness.
        </p>

        <p class="info">
            Healthy ranges vary, but a body fat percentage of 
            <strong>14-24%</strong> for men and 
            <strong>21-31%</strong> for women is often considered optimal. 
            Values outside these ranges may indicate either too low or too high 
            fat levels, both of which carry health risks like 
            hormonal imbalances or cardiovascular disease.
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
`;class yt extends w{constructor(){super(...arguments);l(this,"form",null);l(this,"resultsTable",null);l(this,"weightInput",null);l(this,"waistInput",null);l(this,"hipInput",null);l(this,"neckInput",null);l(this,"unitSystemSelect",null);l(this,"genderInputs",[])}render(e){var r;e.innerHTML=wt,this.form=this.getElement("#body-fat-percentage-form"),this.resultsTable=this.getElement(".results table"),this.weightInput=this.getElement("#weight"),this.waistInput=this.getElement("#waist"),this.hipInput=this.getElement("#hip"),this.neckInput=this.getElement("#neck"),this.unitSystemSelect=this.getElement("#unitSystem");const a=this.form.querySelectorAll('input[name="gender"]');this.genderInputs=Array.from(a),(r=this.unitSystemSelect)==null||r.addEventListener("change",this.updatePlaceholders.bind(this)),this.genderInputs.forEach(s=>{s.addEventListener("change",this.updateHipInputVisibility.bind(this))}),this.updateHipInputVisibility()}fillForm(e){if(this.unitSystemSelect&&e.unitSystem&&(this.unitSystemSelect.value=e.unitSystem),this.weightInput&&e.weight&&(this.weightInput.value=e.weight.toString()),this.waistInput&&e.waist&&(this.waistInput.value=e.waist.toString()),this.neckInput&&e.neck&&(this.neckInput.value=e.neck.toString()),this.genderInputs.length&&e.gender){const a=this.genderInputs.find(r=>r.value===e.gender);a&&(a.checked=!0)}this.hipInput&&e.hip&&e.gender===f.FEMALE&&(this.hipInput.value=e.hip.toString()),this.updatePlaceholders(),this.updateHipInputVisibility()}resetForm(){var e;(e=this.form)==null||e.reset(),this.clearResults(),this.updatePlaceholders(),this.updateHipInputVisibility(),this.hideError()}updatePlaceholders(){var r,s,n,o,h;const a=((r=this.unitSystemSelect)==null?void 0:r.value)===m.IMPERIAL?{weight:"lbs",waist:"in",hip:"in",neck:"in"}:{weight:"kg",waist:"cm",hip:"cm",neck:"cm"};(s=this.weightInput)==null||s.setAttribute("placeholder",a.weight),(n=this.waistInput)==null||n.setAttribute("placeholder",a.waist),(o=this.hipInput)==null||o.setAttribute("placeholder",a.hip),(h=this.neckInput)==null||h.setAttribute("placeholder",a.neck)}updateHipInputVisibility(){var r;const e=this.getElement(".input-group:has(#hip)"),a=(r=this.getElement('input[value="female"]'))==null?void 0:r.checked;e&&(e.style.display=a?"block":"none")}bindCalculateEvent(e){var a;(a=this.form)==null||a.addEventListener("submit",r=>{r.preventDefault();const s=new FormData(this.form),n={unitSystem:s.get("unitSystem"),gender:s.get("gender"),weight:parseFloat(s.get("weight")),waist:parseFloat(s.get("waist")),neck:parseFloat(s.get("neck"))};if(n.gender===f.FEMALE){const o=s.get("hip");if(o)n.hip=parseFloat(o);else{this.showError("Hip measurement is required for females.");return}}this.hideError(),e(n)})}updateResults(e){if(this.resultsTable){const a=this.resultsTable.querySelector("td:nth-child(2)");a&&(a.textContent=e.toFixed(2)+"%")}}bindResetEvent(e){var r;const a=(r=this.form)==null?void 0:r.querySelector('button[type="reset"]');a==null||a.addEventListener("click",s=>{s.preventDefault(),e()})}clearResults(){if(this.resultsTable){const e=this.resultsTable.querySelector("td:nth-child(2)");e&&(e.textContent="-")}}}class vt extends y{constructor(e,a){super(e,a);l(this,"view");l(this,"formValidator");this.view=new yt,this.formValidator=new v}init(e){this.view.render(e),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const e=this.user.getData();this.view.fillForm(e)}handleCalculate(e){try{console.log("handleCalculate called with:",e),this.formValidator.validateBodyFatPercentageFormData(e),this.user.setData(e),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}updateView(){const e=this.calculator.getBodyFatPercentage();console.log("Body fat percentage:",e),this.view.updateResults(e)}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}class Et{constructor(t,e){this.user=t,this.calculator=e}createController(t){switch(t){case p.HOME:return new O;case p.BMI:return new ct(this.user,this.calculator);case p.WAIST_TO_HIP:return new gt(this.user,this.calculator);case p.WAIST_TO_HEIGHT:return new ft(this.user,this.calculator);case p.BODY_FAT_PERCENTAGE:return new vt(this.user,this.calculator);default:throw new Error("404 Not Found")}}}class Tt{constructor(t,e){l(this,"currentController",null);l(this,"controllerFactory");this.controllerFactory=new Et(t,e)}listen(){window.addEventListener("hashchange",()=>{const e=window.location.hash.slice(1);this.navigate(e)});const t=window.location.hash.slice(1)||"/";this.navigate(t)}navigate(t){const e=document.getElementById("app");if(!e)return;e.innerHTML="";const a=W(t);if(a!==void 0)try{this.currentController=this.controllerFactory.createController(a),this.currentController.init(e)}catch(r){console.error("Error creating controller:",r),e.innerHTML="<h2>An error occurred</h2>"}else e.innerHTML="<h2>404 Not Found</h2>"}}let C=null;class b{constructor(){l(this,"data");const t=sessionStorage.getItem("userModel");this.data=t?JSON.parse(t):{unitSystem:"metric"}}static getInstance(){return C||(C=new b),C}setData(t){Object.assign(this.data,t),this.saveToSession()}getData(){return{weight:this.data.weight,height:this.data.height,unitSystem:this.data.unitSystem,age:this.data.age,gender:this.data.gender,waist:this.data.waist,hip:this.data.hip,neck:this.data.neck,activityLevel:this.data.activityLevel,dailyCalories:this.data.dailyCalories,weightGoal:this.data.weightGoal,weeksToWeightGoal:this.data.weeksToWeightGoal}}resetData(){this.data={unitSystem:m.METRIC},this.saveToSession()}saveToSession(){sessionStorage.setItem("userModel",JSON.stringify(this.data))}}class Ct{constructor(){l(this,"dropdownToggle");l(this,"dropdownMenu");this.dropdownToggle=document.querySelector(".dropdown-toggle"),this.dropdownMenu=document.querySelector(".dropdown-menu"),this.initializeDropdown()}initializeDropdown(){this.dropdownToggle&&this.dropdownMenu&&(this.dropdownToggle.addEventListener("click",this.toggleDropdown.bind(this)),document.addEventListener("click",this.handleOutsideClick.bind(this)))}toggleDropdown(t){var e;t.preventDefault(),(e=this.dropdownMenu)==null||e.classList.toggle("show")}handleOutsideClick(t){var e;this.dropdownToggle&&!this.dropdownToggle.contains(t.target)&&((e=this.dropdownMenu)==null||e.classList.remove("show"))}}class bt{constructor(){l(this,"router");l(this,"user");l(this,"calculator");this.user=b.getInstance(),this.calculator=new ht(this.user),this.router=new Tt(this.user,this.calculator),new Ct}start(){this.router.listen();const t=window.location.hash.slice(1)||"/";this.router.navigate(t)}}const It=new bt;It.start();
