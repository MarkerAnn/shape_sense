var M=Object.defineProperty;var O=(i,t,e)=>t in i?M(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var o=(i,t,e)=>(O(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var f=(i=>(i[i.HOME=0]="HOME",i[i.BMI=1]="BMI",i[i.BMR=2]="BMR",i[i.TDEE=3]="TDEE",i[i.BODY_COMPOSITION=4]="BODY_COMPOSITION",i[i.CALORIE_CALCULATION=5]="CALORIE_CALCULATION",i[i.WAIST_TO_HIP=6]="WAIST_TO_HIP",i[i.WAIST_TO_HEIGHT=7]="WAIST_TO_HEIGHT",i[i.BODY_FAT_PERCENTAGE=8]="BODY_FAT_PERCENTAGE",i[i.LEAN_BODY_MASS=9]="LEAN_BODY_MASS",i))(f||{});const R={0:"/",1:"/bmi",2:"/bmr",3:"/tdee",4:"/body-composition",5:"/calorie-calculation",6:"/waist-to-hip",7:"/waist-to-height",8:"/body-fat-percentage",9:"/lean-body-mass"};function W(i){const t=Object.entries(R).find(([e,a])=>a===i);return t?Number(t[0]):void 0}var u=(i=>(i.BMI="bmi",i.BMR="bmr",i.TDEE="tdee",i.BODY_COMPOSITION="body-composition",i.CALORIE_CALCULATION="calorie-calculation",i))(u||{});class B{render(t){t.innerHTML=`
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
      `).join("")}getCalculatorDescription(t){return{[u.BMI]:"Body Mass Index (BMI) - A measure of body fat based on weight and height.",[u.BMR]:"Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.",[u.TDEE]:"Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.",[u.BODY_COMPOSITION]:"Body Composition - Calculate body fat percentage, waist-to-hip ratio, and lean body mass.",[u.CALORIE_CALCULATION]:"Calorie Calculations - Estimate daily calorie needs to reach your weight goal, and predict weight change based on your caloric intake."}[t]||"Description not available."}}class H{constructor(){o(this,"view");this.view=new B}init(t){this.view.render(t)}}class I{showError(t){const e=document.querySelector(".error-message");e instanceof HTMLElement&&(e.textContent=t,e.classList.remove("hidden"))}hideError(){const t=document.querySelector(".error-message");t instanceof HTMLElement&&(t.textContent="",t.classList.add("hidden"))}getElement(t){return document.querySelector(t)}createElement(t,e){const a=document.createElement(t);return e&&(a.className=e),a}}var m=(i=>(i.METRIC="metric",i.IMPERIAL="imperial",i))(m||{});const F=`
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
    `;class _ extends I{constructor(){super(...arguments);o(this,"form",null);o(this,"resultsTable",null);o(this,"heightInput",null);o(this,"weightInput",null);o(this,"unitSystemSelect",null)}render(e){var a;e.innerHTML=F,this.form=this.getElement("#bmi-form"),this.resultsTable=this.getElement(".results table"),this.weightInput=this.getElement("#weight"),this.heightInput=this.getElement("#height"),this.unitSystemSelect=this.getElement('select[name="unitSystem"]'),(a=this.unitSystemSelect)==null||a.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(e){this.unitSystemSelect&&e.unitSystem&&(this.unitSystemSelect.value=e.unitSystem),this.heightInput&&e.height&&(this.heightInput.value=e.height.toString()),this.weightInput&&e.weight&&(this.weightInput.value=e.weight.toString()),this.updatePlaceholders()}updatePlaceholders(){var r,s,n;const a=((r=this.unitSystemSelect)==null?void 0:r.value)===m.IMPERIAL?{height:"ft",weight:"lbs"}:{height:"m",weight:"kg"};(s=this.heightInput)==null||s.setAttribute("placeholder",a.height),(n=this.weightInput)==null||n.setAttribute("placeholder",a.weight)}bindCalculateEvent(e){var a;(a=this.form)==null||a.addEventListener("submit",r=>{r.preventDefault();const s=new FormData(this.form),n={unitSystem:s.get("unitSystem"),height:parseFloat(s.get("height")),weight:parseFloat(s.get("weight"))};e(n)})}updateResults(e,a,r,s){if(this.resultsTable){const n=this.resultsTable.rows;n[0].cells[1].textContent=e.toFixed(2),n[1].cells[1].textContent=a,n[2].cells[1].textContent=r,n[3].cells[1].textContent=`${s[0].toFixed(0)} - ${s[1].toFixed(0)} kg`}}bindResetEvent(e){var r;const a=(r=this.form)==null?void 0:r.querySelector('button[type="reset"]');a==null||a.addEventListener("click",s=>{s.preventDefault(),e()})}resetForm(){var e;(e=this.form)==null||e.reset(),this.clearResults(),this.updatePlaceholders()}clearResults(){if(this.resultsTable){const e=this.resultsTable.rows;for(let a=0;a<e.length;a++)e[a].cells[1].textContent="-"}}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class L{constructor(t,e,a,r,s,n){this.user=t,this.bmiCalculator=e,this.bodycompositionCalculator=a,this.bmrCalculator=r,this.tdeeCalculator=s,this.calorieCalculator=n}getBmi(){return this.bmiCalculator.calculateBmi(this.user)}getBmiType(){const t=this.getBmi();return this.bmiCalculator.calculateBmiType(t)}getBmiPrime(){const t=this.getBmi();return this.bmiCalculator.calculateBmiPrime(t)}getIdealWeight(){return this.bmiCalculator.calculateIdealWeight(this.user)}getWaistToHipRatio(){return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)}getWaistToHeightRatio(){return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)}getBodyFatPercentage(){return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)}getLeanBodyMass(){return this.bodycompositionCalculator.calculateLeanBodyMass(this.user)}getBmrHarrisBenedict(){return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)}getBmrMifflinStJeor(){return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)}getTdeeHarrisBenedict(){const t=this.getBmrHarrisBenedict();return this.tdeeCalculator.calculateTdeeHarrisBenedict(this.user,t)}getTdeeMifflinStJeor(){const t=this.getBmrMifflinStJeor();return this.tdeeCalculator.calculateTdeeMifflinStJeor(this.user,t)}getCaloricSurplusOrDeficit(){const t=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloricSurplusOrDeficit(this.user,t)}getEstimatedWeightChangeWeekly(){const t=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeWeekly(t,this.user)}getEstimatedWeightChangeMonthly(){const t=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeMonthly(t,this.user)}getEstimateTimeToWeightGoal(){const t=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeeksToWeightGoal(t,this.user)}getCaloriesForWeightGoal(){const t=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloriesForWeightGoal(this.user,t)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */var h;(function(i){i.UnderweightSevereThinness="underweight, severe thinness",i.UnderweightModerateThinness="underweight, moderate thinness",i.UnderweightMildThinness="underweight, mild thinness",i.Normal="normal weight",i.Overweight="overweight, pre-obese",i.ObeseFirstGrade="obese, class I",i.ObeseSecondGrade="obese, class II",i.ObeseThirdGrade="obese, class III"})(h||(h={}));const v=[{min:0,max:15.9,type:h.UnderweightSevereThinness},{min:16,max:16.9,type:h.UnderweightModerateThinness},{min:17,max:18.4,type:h.UnderweightMildThinness},{min:18.5,max:24.9,type:h.Normal},{min:25,max:29.9,type:h.Overweight},{min:30,max:34.9,type:h.ObeseFirstGrade},{min:35,max:39.9,type:h.ObeseSecondGrade},{min:40,max:100,type:h.ObeseThirdGrade}];var g;(function(i){i.Sedentary="sedentary",i.Lightly="lightly",i.Moderately="moderately",i.Very="very",i.Extremely="extremely"})(g||(g={}));/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class N{calculateBmi(t){this.validateWeightAndHeight(t);const e=2;return t.weight/Math.pow(t.height,e)}calculateBmiType(t){this.validateBmi(t);const e=this.roundBmi(t);return this.findBmiType(e)}calculateIdealWeight(t){this.validateHeight(t);const e=this.getNormalBmiRange(),a=this.calculateWeight(e.min,t.height),r=this.calculateWeight(e.max,t.height);return[a,r]}calculateBmiPrime(t){return t/25}validateWeightAndHeight(t){if(t.weight===void 0||t.height===void 0)throw new Error("Weight and height are required for BMI calculation.");if(typeof t.weight!="number"||typeof t.height!="number")throw new Error("Weight and height must be numbers.");if(t.weight<=0||t.height<=0)throw new Error("Weight and height must be positive numbers.")}validateHeight(t){if(t.height===void 0)throw new Error("Height is required for ideal weight calculation.");if(typeof t.height!="number")throw new Error("Height must be a number.");if(t.height<=0)throw new Error("Height must be a positive number.")}validateBmi(t){if(t<=0||t>100)throw new Error(`BMI out of range. Please check your values. BMI: ${t}`)}roundBmi(t){return Math.round(t)}findBmiType(t){for(const e of v)if(t>=e.min&&t<=e.max)return e.type;throw new Error("Bmi Type could not be found")}getNormalBmiRange(){const t=v.find(e=>e.type===h.Normal);if(!t)throw new Error("Could not find normal BMI range.");return t}calculateWeight(t,e){return t*Math.pow(e,2)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class G{constructor(){this.CM_PER_METER=100,this.PERCENTAGE=100,this.TOTAL_BODY_COMPOSITION=1,this.BODY_FAT={CONSTANT_FACTOR:495,SUBTRACTION_CONSTANT:450},this.BODY_FAT_MALE={CONSTANT:1.0324,WAIST_NECK_FACTOR:.19077,HEIGHT_FACTOR:.15456},this.BODY_FAT_FEMALE={CONSTANT:1.29579,WAIST_HIP_NECK_FACTOR:.35004,HEIGHT_FACTOR:.221}}calculateWaistToHipRatio(t){return this.validateWaistAndHip(t),t.waist/t.hip}calculateWaistToHeightRatio(t){this.validateWaistAndHeight(t);const e=this.convertHeightToCentimeter(t.height);return t.waist/e}calculateBodyFatPercentage(t){this.validateRequiredMeasurements(t);const e=this.convertHeightToCentimeter(t.height);return this.calculateBodyFatBasedOnGender(t,e)}calculateLeanBodyMass(t){this.validateRequiredMeasurements(t);const a=this.calculateBodyFatPercentage(t)/this.PERCENTAGE,r=this.TOTAL_BODY_COMPOSITION-a;return t.weight*r}convertHeightToCentimeter(t){return t*this.CM_PER_METER}calculateMaleBodyFat(t,e){this.validateWaistAndNeck(t);const{CONSTANT:a,WAIST_NECK_FACTOR:r,HEIGHT_FACTOR:s}=this.BODY_FAT_MALE,{CONSTANT_FACTOR:n,SUBTRACTION_CONSTANT:l}=this.BODY_FAT,d=a-r*Math.log10(t.waist-t.neck)+s*Math.log10(e);return n/d-l}calculateFemaleBodyFat(t,e){this.validateWaistHipAndNeck(t);const{CONSTANT:a,WAIST_HIP_NECK_FACTOR:r,HEIGHT_FACTOR:s}=this.BODY_FAT_FEMALE,{CONSTANT_FACTOR:n,SUBTRACTION_CONSTANT:l}=this.BODY_FAT,d=a-r*Math.log10(t.waist+t.hip-t.neck)+s*Math.log10(e);return n/d-l}validateWaistAndHip(t){if(!t.waist||!t.hip)throw new Error("Waist and hip measurements are required for waist to hip calculation.")}validateWaistAndHeight(t){if(!t.waist||!t.height)throw new Error("Waist and height measurements are required for waist to height calculation.")}validateWaistHipAndNeck(t){if(!t.waist||!t.neck||!t.hip)throw new Error("Waist, hip and neck is required to calculate body fat percentage for female")}validateWaistAndNeck(t){if(!t.waist||!t.neck)throw new Error("Waist and neck is required to calculate body fat percentage for male")}validateRequiredMeasurements(t){if(t.weight===void 0||t.height===void 0)throw new Error("Weight and height are required for body composition calculations.")}calculateBodyFatBasedOnGender(t,e){if(t.gender==="male")return this.calculateMaleBodyFat(t,e);if(t.gender==="female")return this.calculateFemaleBodyFat(t,e);throw new Error('Invalid gender. Gender must be either "male" or "female".')}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class D{constructor(){this.CM_PER_METER=100,this.MIFFLIN_ST_JEOR={WEIGHT_FACTOR:10,HEIGHT_FACTOR:6.25,AGE_FACTOR:5,MALE_ADJUSTMENT:5,FEMALE_ADJUSTMENT:-161},this.HARRIS_BENEDICT={FEMALE:{BASE:447.593,WEIGHT_FACTOR:9.247,HEIGHT_FACTOR:3.098,AGE_FACTOR:4.33},MALE:{BASE:88.362,WEIGHT_FACTOR:13.397,HEIGHT_FACTOR:4.799,AGE_FACTOR:5.677}}}calculateBmrHarrisBenedict(t){this.validateRequiredFields(t);const e=this.convertHeightToCentimeter(t.height);return this.calculateBmrBasedOnGender(t,e)}calculateBmrMifflinStJeor(t){this.validateRequiredFields(t);const e=this.convertHeightToCentimeter(t.height),a=this.MIFFLIN_ST_JEOR.WEIGHT_FACTOR*t.weight,r=this.MIFFLIN_ST_JEOR.HEIGHT_FACTOR*e,s=this.MIFFLIN_ST_JEOR.AGE_FACTOR*t.age,n=t.gender==="male"?this.MIFFLIN_ST_JEOR.MALE_ADJUSTMENT:this.MIFFLIN_ST_JEOR.FEMALE_ADJUSTMENT;return a+r-s+n}convertHeightToCentimeter(t){return t*this.CM_PER_METER}harrisBenedictFemale(t,e){const{BASE:a,WEIGHT_FACTOR:r,HEIGHT_FACTOR:s,AGE_FACTOR:n}=this.HARRIS_BENEDICT.FEMALE,l=r*t.weight,d=s*e,w=n*t.age;return a+l+d-w}harrisBenedictMale(t,e){const{BASE:a,WEIGHT_FACTOR:r,HEIGHT_FACTOR:s,AGE_FACTOR:n}=this.HARRIS_BENEDICT.MALE,l=r*t.weight,d=s*e,w=n*t.age;return a+l+d-w}calculateBmrBasedOnGender(t,e){if(t.gender==="male")return this.harrisBenedictMale(t,e);if(t.gender==="female")return this.harrisBenedictFemale(t,e);throw new Error("Invalid gender. Gender must be either 'male' or 'female'.")}validateRequiredFields(t){if(t.weight===void 0||typeof t.weight!="number"||t.weight<=0)throw new Error("Valid weight is required for BMR calculation.");if(t.height===void 0||typeof t.height!="number"||t.height<=0)throw new Error("Valid height is required for BMR calculation.");if(t.age===void 0||typeof t.age!="number"||t.age<=0)throw new Error("Valid age is required for BMR calculation.");if(t.gender===void 0||t.gender!=="male"&&t.gender!=="female")throw new Error("Valid gender is required for BMR calculation. Gender must be either 'male' or 'female'.")}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class k{constructor(){this.ACTIVITY_FACTORS={SEDENTARY:1.2,LIGHTLY:1.375,MODERATELY:1.55,VERY:1.725,EXTREMELY:1.9}}calculateTdeeMifflinStJeor(t,e){this.validateAgeAndActivityLevel(t);const a=e,r=this.getActivityFactor(t.activityLevel);return this.calculateTdee(a,r)}calculateTdeeHarrisBenedict(t,e){this.validateAgeAndActivityLevel(t);const a=e,r=this.getActivityFactor(t.activityLevel);return this.calculateTdee(a,r)}getActivityFactor(t){switch(t){case g.Sedentary:return this.ACTIVITY_FACTORS.SEDENTARY;case g.Lightly:return this.ACTIVITY_FACTORS.LIGHTLY;case g.Moderately:return this.ACTIVITY_FACTORS.MODERATELY;case g.Very:return this.ACTIVITY_FACTORS.VERY;case g.Extremely:return this.ACTIVITY_FACTORS.EXTREMELY;default:throw new Error("Activity level must be sedentary, lightly, moderately, very, or extremely")}}validateAgeAndActivityLevel(t){if(!t.age||!t.activityLevel)throw new Error("Age and activity level is required")}calculateTdee(t,e){return t*e}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */const P={min:0,max:700},x={min:0,max:1543},U={min:0,max:2.5},J={min:0,max:8.2};function Y(i){try{V(i),i.weight!==void 0&&$(i),i.height!==void 0&&K(i),j(i),z(i),X(i),q(i),Q(i),Z(i),tt(i)}catch(t){const e=`Validation error in user object: ${JSON.stringify(i)} - ${t.message}. Stack trace: ${t.stack}`;throw new Error(e)}}function V(i){["age","waist","hip","neck","dailyCalories","weightGoal","weeksToWeightGoal"].forEach(e=>{if(e in i&&i[e]!==void 0&&typeof i[e]!="number")throw new TypeError(`${e} must be a number if provided`)})}function q(i){if(i.unitSystem===void 0)throw new Error("Unit system is required");if(typeof i.unitSystem!="string")throw new TypeError(`Unit system must be a string. Check the unitSystem value in ${JSON.stringify(i)}`);if(i.unitSystem!=="metric"&&i.unitSystem!=="imperial")throw new Error('Unit system must be either "metric" or "imperial"')}function S(i,t,e,a,r){if(i<t.min||i>t.max)throw new RangeError(`${e.charAt(0).toUpperCase()+e.slice(1)} using the ${a} system must be between ${t.min}-${t.max}. Check the ${e.toLowerCase()} value in ${JSON.stringify(r)}`)}function $(i){if(typeof i.weight!="number")throw new Error(`Weight must be a number if provided. Check the weight value in ${JSON.stringify(i)}`);const t=i.unitSystem==="metric"?P:x,e=i.unitSystem==="metric"?"metric":"imperial";S(i.weight,t,"weight",e,i)}function K(i){if(typeof i.height!="number")throw new Error(`Height must be a number if provided. Check the height value in ${JSON.stringify(i)}`);const t=i.unitSystem==="metric"?U:J,e=i.unitSystem==="metric"?"metric":"imperial";S(i.height,t,"height",e,i)}function j(i){if(i.gender!==void 0&&i.gender!=="male"&&i.gender!=="female")throw new TypeError(`Gender must be male or female. Check the gender value in ${JSON.stringify(i)}`)}function z(i){i.age!==void 0&&i.age<18&&console.warn(`Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(i)}`)}function X(i){const t=["sedentary","lightly","moderately","very","extremely"];if(i.activityLevel!==void 0&&!t.includes(i.activityLevel))throw new TypeError(`Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(i)}`)}function Q(i){if(i.dailyCalories!==void 0&&i.dailyCalories<0)throw new Error(`Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(i)}`)}function Z(i){if(i.weightGoal!==void 0&&i.weightGoal<0)throw new Error(`The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(i)}`)}function tt(i){if(i.weeksToWeightGoal!==void 0&&i.weeksToWeightGoal<0)throw new Error(`Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(i)}`)}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function et(i){return{...i}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function it(i){return i.unitSystem==="metric"?i:{...i,height:i.height!==void 0?at(i.height):void 0,weight:i.weight!==void 0?C(i.weight):void 0,waist:i.waist!==void 0?p(i.waist):void 0,hip:i.hip!==void 0?p(i.hip):void 0,neck:i.neck!==void 0?p(i.neck):void 0,weightGoal:i.weightGoal!==void 0?C(i.weightGoal):void 0,unitSystem:"metric"}}function at(i){return i!==void 0?i*.3048:void 0}function C(i){return i!==void 0?i*.453592:void 0}function p(i){return i!==void 0?i*2.54:void 0}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class rt{constructor(){this.DAYS_IN_WEEK=7,this.DAYS_IN_MONTH=30,this.CALORIES_PER_KILO=7700,this.REFERENCE_WEIGHT=70}calculateCaloricSurplusOrDeficit(t,e){return this.validateDailyCalories(t),e-t.dailyCalories}calculateEstimatedWeightChangeWeekly(t,e){return this.validateWeight(e),this.estimateWeightChange(t,e,this.DAYS_IN_WEEK)}calculateEstimatedWeightChangeMonthly(t,e){return this.validateWeight(e),this.estimateWeightChange(t,e,this.DAYS_IN_MONTH)}calculateEstimatedWeeksToWeightGoal(t,e){this.validateWeightGoal(e),this.validateWeight(e);const a=this.estimateWeightChange(t,e,this.DAYS_IN_WEEK),r=e.weightGoal-e.weight,n=Math.abs(r)/Math.abs(a);return Math.ceil(n)}calculateCaloriesForWeightGoal(t,e){this.validateWeightGoal(t),this.validateWeight(t),this.validateWeeksToWeightGoal(t);const a=t.weightGoal-t.weight,n=Math.abs(a)/t.weeksToWeightGoal*this.CALORIES_PER_KILO/this.DAYS_IN_WEEK;return a>0?Math.round(e+n):Math.round(e-n)}validateDailyCalories(t){if(t.dailyCalories===void 0||typeof t.dailyCalories!="number"||t.dailyCalories<0)throw new Error("Valid dailyCalories is required for calorie calculation")}validateWeightGoal(t){if(t.weightGoal===void 0||typeof t.weightGoal!="number"||t.weightGoal<=0)throw new Error("Valid weightGoal is required for some calorie calculations")}validateWeight(t){if(t.weight===void 0||typeof t.weight!="number"||t.weight<=0)throw new Error("Valid weight is required for some calorie calculations")}validateWeeksToWeightGoal(t){if(t.weeksToWeightGoal===void 0||typeof t.weeksToWeightGoal!="number"||t.weeksToWeightGoal<=0)throw new Error("Valid weeksToWeightGoal is required for some calorie calculations")}estimateWeightChange(t,e,a){const r=this.CALORIES_PER_KILO*(e.weight/this.REFERENCE_WEIGHT);return t*a/r}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class st{static createHealthCalculator(t){Y(t);const e=et(t),a=it(e),r=new N,s=new G,n=new D,l=new k,d=new rt;return new L(a,r,s,n,l,d)}}var c=(i=>(i.UNDERWEIGHT_SEVERE="underweight, severe thinness",i.UNDERWEIGHT_MODERATE="underweight, moderate thinness",i.UNDERWEIGHT_MILD="underweight, mild thinness",i.NORMAL_WEIGHT="normal weight",i.OVERWEIGHT_PRE_OBESE="overweight, pre-obese",i.OBESE_CLASS_I="obese, class I",i.OBESE_CLASS_II="obese, class II",i.OBESE_CLASS_III="obese, class III",i))(c||{});class nt{static fromString(t){const e=t.toLowerCase().trim();for(const[a,r]of Object.entries(c))if(r.toLowerCase()===e)return c[a];throw new Error(`Invalid BMI category: ${t}`)}}function ot(i){switch(i){case c.UNDERWEIGHT_SEVERE:return"High risk of malnutrition, weakened immune system, and more.";case c.UNDERWEIGHT_MODERATE:return"Risks include nutrient deficiencies and weakened immune response.";case c.UNDERWEIGHT_MILD:return"Moderate risk of malnutrition.";case c.NORMAL_WEIGHT:return"Lowest health risks with a balanced lifestyle.";case c.OVERWEIGHT_PRE_OBESE:return"Increased risk of cardiovascular diseases and type 2 diabetes.";case c.OBESE_CLASS_I:return"Significant risk of metabolic syndrome and heart disease.";case c.OBESE_CLASS_II:return"Increased risk for heart disease and stroke.";case c.OBESE_CLASS_III:return"Severe health risks including reduced life expectancy.";default:return"Unknown health risk."}}class lt{constructor(t){o(this,"calculator");this.userModel=t,this.calculator=this.createCalculator()}createCalculator(){const t=this.userModel.getData();return st.createHealthCalculator({unitSystem:t.unitSystem,weight:t.weight??70,height:t.height??1.75,age:t.age,gender:t.gender,waist:t.waist,hip:t.hip,neck:t.neck,activityLevel:t.activityLevel,dailyCalories:t.dailyCalories,weightGoal:t.weightGoal,weeksToWeightGoal:t.weeksToWeightGoal})}getBmi(){return this.calculator=this.createCalculator(),this.calculator.getBmi()}getBmiType(){this.calculator=this.createCalculator();const t=this.calculator.getBmiType();return nt.fromString(t)}getHealthRisk(){return ot(this.getBmiType())}getBmiPrime(){return this.calculator=this.createCalculator(),this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator=this.createCalculator(),this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator=this.createCalculator(),this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator=this.createCalculator(),this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator=this.createCalculator(),this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeMonthly()}getEstimateTimeToWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getEstimateTimeToWeightGoal()}getCaloriesForWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getCaloriesForWeightGoal()}}class ht{constructor(t){o(this,"calculator");this.calculator=new lt(t)}getBmi(){return this.calculator.getBmi()}getBmiType(){return this.calculator.getBmiType()}getHealthRisk(){return this.calculator.getHealthRisk()}getBmiPrime(){return this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator.getEstimatedWeightChangeMonthly()}getCaloriesForWeightGoal(){return this.calculator.getCaloriesForWeightGoal()}getEstimateTimeToWeightGoal(){return this.calculator.getEstimateTimeToWeightGoal()}}class b{constructor(t,e){o(this,"user");o(this,"calculator");this.user=t,this.calculator=e}handleErrors(t){this.view.showError(t.message)}resetForm(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}fillFormWithUserData(){const t=this.user.getData();this.view.fillForm(t)}}var y=(i=>(i.MALE="male",i.FEMALE="female",i))(y||{});class A{validateBmiFormData(t){this.validateUnitSystem(t.unitSystem),this.validateNumericInput(t.height,"height"),this.validateNumericInput(t.weight,"weight")}validateWaistToHipRatioFormData(t){this.validateUnitSystem(t.unitSystem),this.validateNumericInput(t.waist,"waist"),this.validateNumericInput(t.hip,"hip")}validateWaistHeightRatioFormData(t){this.validateUnitSystem(t.unitSystem),this.validateNumericInput(t.waist,"waist"),this.validateNumericInput(t.height,"height")}validateBodyFatPercentageFormData(t){this.validateUnitSystem(t.unitSystem),this.validateGender(t.gender),this.validateNumericInput(t.weight,"weight"),this.validateNumericInput(t.waist,"waist"),this.validateNumericInput(t.neck,"neck"),t.gender===y.FEMALE&&t.hip!==void 0&&this.validateNumericInput(t.hip,"hip")}validateLeanBodyMassFormData(t){this.validateUnitSystem(t.unitSystem),this.validateGender(t.gender),this.validateNumericInput(t.weight,"weight"),this.validateNumericInput(t.height,"height")}validateUnitSystem(t){if(!Object.values(m).includes(t))throw new Error("Invalid unit system value")}validateGender(t){if(!Object.values(y).includes(t))throw new Error("Invalid gender value")}validateNumericInput(t,e){if(typeof t!="number"||isNaN(t)||t<=0)throw new Error(`Invalid ${e} value`)}}class ct extends b{constructor(e,a){super(e,a);o(this,"view");o(this,"formValidator");this.view=new _,this.formValidator=new A}init(e){this.view.render(e),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const e=this.user.getData();this.view.fillForm(e)}handleCalculate(e){try{this.formValidator.validateBmiFormData(e),this.user.setData(e),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}updateView(){const e=this.calculator.getBmi(),a=this.calculator.getBmiType(),r=this.calculator.getHealthRisk(),s=this.calculator.getIdealWeight();this.view.updateResults(e,a,r,s)}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}const dt=`
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
`;class ut extends I{constructor(){super(...arguments);o(this,"form",null);o(this,"resultsTable",null);o(this,"waistInput",null);o(this,"hipInput",null);o(this,"unitSystemSelect",null)}render(e){var a;e.innerHTML=dt,this.form=this.getElement("#waist-hip-ratio-form"),this.resultsTable=this.getElement(".results table"),this.waistInput=this.getElement("#waist"),this.hipInput=this.getElement("#hip"),this.unitSystemSelect=this.getElement('select[name="unitSystem"]'),(a=this.unitSystemSelect)==null||a.addEventListener("change",this.updatePlaceholders.bind(this))}fillForm(e){this.unitSystemSelect&&e.unitSystem&&(this.unitSystemSelect.value=e.unitSystem),this.waistInput&&e.waist&&(this.waistInput.value=e.waist.toString()),this.hipInput&&e.hip&&(this.hipInput.value=e.hip.toString()),this.updatePlaceholders()}updatePlaceholders(){var r,s,n;const a=((r=this.unitSystemSelect)==null?void 0:r.value)===m.IMPERIAL?{waist:"in",hip:"in"}:{waist:"cm",hip:"cm"};(s=this.waistInput)==null||s.setAttribute("placeholder",a.waist),(n=this.hipInput)==null||n.setAttribute("placeholder",a.hip)}bindCalculateEvent(e){var a;(a=this.form)==null||a.addEventListener("submit",r=>{r.preventDefault(),console.log("Form submitted");const s=new FormData(this.form),n={unitSystem:s.get("unitSystem"),waist:parseFloat(s.get("waist")),hip:parseFloat(s.get("hip"))};console.log("Form data:",n),e(n)})}updateResults(e){if(this.resultsTable){const a=this.resultsTable.querySelector("td:nth-child(2)");a&&(a.textContent=e.toFixed(2))}}bindResetEvent(e){var r;const a=(r=this.form)==null?void 0:r.querySelector('button[type="reset"]');a==null||a.addEventListener("click",s=>{s.preventDefault(),e()})}resetForm(){var e;(e=this.form)==null||e.reset(),this.clearResults(),this.updatePlaceholders()}clearResults(){if(this.resultsTable){const e=this.resultsTable.rows;for(let a=0;a<e.length;a++)e[a].cells[1].textContent="-"}}}class gt extends b{constructor(e,a){super(e,a);o(this,"view");o(this,"formValidator");this.view=new ut,this.formValidator=new A}init(e){this.view.render(e),this.fillFormWithUserData(),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const e=this.user.getData();this.view.fillForm(e)}handleCalculate(e){try{console.log("handleCalculate called with:",e),this.formValidator.validateWaistToHipRatioFormData(e),this.user.setData(e),this.updateView(),this.view.hideError()}catch(a){this.handleErrors(a)}}updateView(){const e=this.calculator.getWaistToHipRatio();console.log("Ratio:",e),this.view.updateResults(e)}handleReset(){this.user.resetData(),this.view.resetForm(),this.view.hideError()}}class mt{constructor(t,e){this.user=t,this.calculator=e}createController(t){switch(t){case f.HOME:return new H;case f.BMI:return new ct(this.user,this.calculator);case f.WAIST_TO_HIP:return new gt(this.user,this.calculator);default:throw new Error("404 Not Found")}}}class ft{constructor(t,e){o(this,"currentController",null);o(this,"controllerFactory");this.controllerFactory=new mt(t,e)}listen(){window.addEventListener("hashchange",()=>{const e=window.location.hash.slice(1);this.navigate(e)});const t=window.location.hash.slice(1)||"/";this.navigate(t)}navigate(t){const e=document.getElementById("app");if(!e)return;e.innerHTML="";const a=W(t);if(a!==void 0)try{this.currentController=this.controllerFactory.createController(a),this.currentController.init(e)}catch(r){console.error("Error creating controller:",r),e.innerHTML="<h2>An error occurred</h2>"}else e.innerHTML="<h2>404 Not Found</h2>"}}let T=null;class E{constructor(){o(this,"data");const t=sessionStorage.getItem("userModel");this.data=t?JSON.parse(t):{unitSystem:"metric"}}static getInstance(){return T||(T=new E),T}setData(t){Object.assign(this.data,t),this.saveToSession()}getData(){return{weight:this.data.weight,height:this.data.height,unitSystem:this.data.unitSystem,age:this.data.age,gender:this.data.gender,waist:this.data.waist,hip:this.data.hip,neck:this.data.neck,activityLevel:this.data.activityLevel,dailyCalories:this.data.dailyCalories,weightGoal:this.data.weightGoal,weeksToWeightGoal:this.data.weeksToWeightGoal}}resetData(){this.data={unitSystem:m.METRIC},this.saveToSession()}saveToSession(){sessionStorage.setItem("userModel",JSON.stringify(this.data))}}class wt{constructor(){o(this,"dropdownToggle");o(this,"dropdownMenu");this.dropdownToggle=document.querySelector(".dropdown-toggle"),this.dropdownMenu=document.querySelector(".dropdown-menu"),this.initializeDropdown()}initializeDropdown(){this.dropdownToggle&&this.dropdownMenu&&(this.dropdownToggle.addEventListener("click",this.toggleDropdown.bind(this)),document.addEventListener("click",this.handleOutsideClick.bind(this)))}toggleDropdown(t){var e;t.preventDefault(),(e=this.dropdownMenu)==null||e.classList.toggle("show")}handleOutsideClick(t){var e;this.dropdownToggle&&!this.dropdownToggle.contains(t.target)&&((e=this.dropdownMenu)==null||e.classList.remove("show"))}}class pt{constructor(){o(this,"router");o(this,"user");o(this,"calculator");this.user=E.getInstance(),this.calculator=new ht(this.user),this.router=new ft(this.user,this.calculator),new wt}start(){this.router.listen();const t=window.location.hash.slice(1)||"/";this.router.navigate(t)}}const Tt=new pt;Tt.start();
