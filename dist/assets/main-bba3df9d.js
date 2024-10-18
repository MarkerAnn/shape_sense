var I=Object.defineProperty;var S=(i,e,t)=>e in i?I(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var l=(i,e,t)=>(S(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var f=(i=>(i[i.HOME=0]="HOME",i[i.BMI=1]="BMI",i[i.BMR=2]="BMR",i[i.TDEE=3]="TDEE",i[i.BODY_COMPOSITION=4]="BODY_COMPOSITION",i[i.CALORIE_CALCULATION=5]="CALORIE_CALCULATION",i))(f||{});const M={0:"/",1:"/bmi",2:"/bmr",3:"/tdee",4:"/body-composition",5:"/calorie-calculation"};function O(i){const e=Object.entries(M).find(([t,a])=>a===i);return e?Number(e[0]):void 0}class w{}var u=(i=>(i.BMI="bmi",i.BMR="bmr",i.TDEE="tdee",i.BODY_COMPOSITION="body-composition",i.CALORIE_CALCULATION="calorie-calculation",i))(u||{});class B extends w{render(e){e.innerHTML=`
        <section class="container">
          <h2>Our Calculators</h2>
          ${this.renderCalculatorItems()}
        </section>
      `}renderCalculatorItems(){return Object.values(u).map(e=>`
        <div class="calculator-item">
          <div>
            <h3>${e}</h3>
            <p>${this.getCalculatorDescription(e)}</p>
            <div class="button-container">
            <a href="#/${e.toLowerCase()}" class="button">Calculate</a>
            </div>
          </div>
          <img src="./assets/images/${e.toLowerCase()}.png" alt="${e} illustration">
        </div>
      `).join("")}getCalculatorDescription(e){return{[u.BMI]:"Body Mass Index (BMI) - A measure of body fat based on weight and height.",[u.BMR]:"Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.",[u.TDEE]:"Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.",[u.BODY_COMPOSITION]:"Body Composition - Calculate body fat percentage, waist-to-hip ratio, and lean body mass.",[u.CALORIE_CALCULATION]:"Calorie Calculations - Estimate daily calorie needs to reach your weight goal, and predict weight change based on your caloric intake."}[e]||"Description not available."}}class A{constructor(){l(this,"view");this.view=new B}init(e){this.view.render(e)}}const R=`
      <section class="container">
        <h2>BMI Calculator</h2>
        <div class="content">
        <p class="description">BMI is a measure of body fat based on height and weight that applies to adult men and women.</p>

        <div class="additional-info">
        <h2>What is BMI?</h2>
        <p>Body Mass Index (BMI) is a simple calculation used to assess a person's body weight in relation to their height. It's calculated by dividing an individual's weight (in kilograms) by the square of their height (in meters). BMI is commonly used as a general indicator of whether someone is underweight, normal weight, overweight, or obese.</p>
        <p>The BMI categories are:</p>
        <ul>
          <li>Underweight: BMI less than 18.5</li>
          <li>Normal weight: BMI between 18.5 and 24.9</li>
          <li>Overweight: BMI between 25 and 29.9</li>
          <li>Obesity: BMI 30 or greater</li>
        </ul>
        <h3>Limitations of BMI</h3>
        <p>While BMI is widely used, it has some limitations. It doesn't differentiate between muscle mass and fat mass, so individuals with high muscle mass (such as athletes) may be classified as overweight or obese even though they have low body fat. Additionally, BMI doesn't consider fat distribution, which is an important factor in assessing health risks. It also doesn't account for differences in body composition due to age, gender, or ethnicity.</p>
        <p>For a more comprehensive assessment of health, BMI should be used alongside other measurements, such as waist-to-hip ratio or body fat percentage.</p>
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
      <li>World Health Organization (WHO) – BMI Classification and Health Risks</li>
      <li>National Institutes of Health (NIH) – Health Risks Associated with Overweight and Obesity</li>
      <li>Centers for Disease Control and Prevention (CDC) – Body Mass Index and Health</li>
      <li>Harvard School of Public Health – Understanding Obesity-Related Health Risks</li>
    </ul>
  </div>
      </section>
    `;class F extends w{constructor(){super(...arguments);l(this,"form",null);l(this,"errorMessage",null);l(this,"resultsTable",null);l(this,"heightInput",null);l(this,"weightInput",null);l(this,"unitSystemSelect",null)}render(t){var a;t.innerHTML=R,this.form=t.querySelector("#bmi-form"),this.errorMessage=t.querySelector(".error-message"),this.resultsTable=t.querySelector(".results table"),this.weightInput=t.querySelector("#weight"),this.heightInput=t.querySelector("#height"),this.unitSystemSelect=t.querySelector('select[name="unitSystem"]'),(a=this.unitSystemSelect)==null||a.addEventListener("change",()=>this.updatePlaceholders())}fillForm(t){t.unitSystem&&this.unitSystemSelect&&(this.unitSystemSelect.value=t.unitSystem),t.height&&this.heightInput&&(this.heightInput.value=t.height.toString()),t.weight&&this.weightInput&&(this.weightInput.value=t.weight.toString()),console.log(t),this.updatePlaceholders()}updatePlaceholders(){var r;const a=((r=this.unitSystemSelect)==null?void 0:r.value)==="imperial"?{height:"ft",weight:"lbs"}:{height:"m",weight:"kg"};this.heightInput&&this.heightInput.setAttribute("placeholder",a.height),this.weightInput&&this.weightInput.setAttribute("placeholder",a.weight)}bindCalculateEvent(t){var a;(a=this.form)==null||a.addEventListener("submit",r=>{r.preventDefault();const s=new FormData(this.form),o={unitSystem:s.get("unitSystem"),height:parseFloat(s.get("height")),weight:parseFloat(s.get("weight"))};t(o)})}showError(t){this.errorMessage&&(this.errorMessage.textContent=t,this.errorMessage.style.display="block")}hideError(){this.errorMessage&&(this.errorMessage.textContent="",this.errorMessage.style.display="none")}updateResults(t,a,r,s){if(this.resultsTable){const o=this.resultsTable.rows;o[0].cells[1].textContent=t.toFixed(2),o[1].cells[1].textContent=a,o[2].cells[1].textContent=r,o[3].cells[1].textContent=`${s[0].toFixed(0)} - ${s[1].toFixed(0)} kg`}}bindResetEvent(t){var a,r;(r=(a=this.form)==null?void 0:a.querySelector('button[type="reset"]'))==null||r.addEventListener("click",s=>{s.preventDefault(),t()})}resetForm(){this.form&&(this.form.reset(),this.updatePlaceholders()),this.clearResults()}clearResults(){if(this.resultsTable){const t=this.resultsTable.rows;t[0].cells[1].textContent="-",t[1].cells[1].textContent="-",t[2].cells[1].textContent="-"}}}class H{constructor(e,t){l(this,"view");l(this,"user");l(this,"calculator");l(this,"handleCalculate",e=>{try{this.validateFormData(e),this.user.setData(e),this.updateView(),console.log(this.user.getData(),"handleCalculate"),this.view.hideError()}catch(t){this.view.showError(t.message)}});l(this,"handleReset",()=>{this.user.resetData(),this.view.resetForm(),this.view.hideError()});this.user=e,this.calculator=t,this.view=new F}init(e){this.view.render(e),this.fillFormWithUserData(),console.log(this.user.getData(),"init"),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const e=this.user.getData();console.log(e,"construktor"),this.view.fillForm(e)}validateFormData(e){if(e.height===void 0||isNaN(e.height)||e.height<=0)throw new Error("Invalid height value");if(e.weight===void 0||isNaN(e.weight)||e.weight<=0)throw new Error("Invalid weight value")}updateView(){const e=this.calculator.getBmi(),t=this.calculator.getBmiType(),a=this.calculator.getHealthRisk(),r=this.calculator.getIdealWeight();this.view.updateResults(e,t,a,r)}}const W=`
<section class="container">
    <h2>Body Composition Calculator</h2>
    <div class="content">
        <p class="description">Understand your body composition by calculating various metrics based on your body measurements. Get insights into your health status and risk factors.</p>

        <div class="additional-info">
            <h2>What is Body Composition?</h2>
            <p>Body composition refers to the proportion of fat and non-fat mass in your body. A balanced body composition indicates a healthier lifestyle and can help reduce the risk of various health issues. It provides a deeper understanding beyond simple weight measurements, giving a comprehensive view of your physical condition.</p>
            <h3>Key Measurements</h3>
            <p>This calculator provides results for Waist-to-Hip Ratio (WHR), Waist-to-Height Ratio (WHtR), Body Fat Percentage, and Lean Body Mass. These measurements offer insights into fat distribution, potential health risks, and overall fitness levels:</p>
            <ul>
                <li>
                    <strong>Waist-to-Hip Ratio (WHR):</strong> A useful indicator of fat distribution and potential risk for cardiovascular disease. 
                    <em>Note:</em> WHR does not account for overall body fat percentage and may not accurately reflect risk for all body types, such as those with more muscle mass.
                </li>
                <li>
                    <strong>Waist-to-Height Ratio (WHtR):</strong> An important measure for determining abdominal fat levels, which can be linked to health risks like diabetes and heart disease. 
                    <em>Note:</em> WHtR focuses solely on abdominal fat and does not consider fat distribution in other areas of the body.
                </li>
                <li>
                    <strong>Body Fat Percentage:</strong> The proportion of fat to your total body weight, providing a clearer picture of your health and fitness compared to BMI alone. 
                    <em>Note:</em> Estimating body fat percentage through basic measurements may not be as accurate as methods like DEXA scans or hydrostatic weighing.
                </li>
                <li>
                    <strong>Lean Body Mass:</strong> The weight of your muscles, bones, and organs, excluding fat. Understanding your lean body mass helps in setting fitness goals and managing weight. 
                    <em>Note:</em> Lean body mass calculations can be affected by inaccuracies in body fat estimation, leading to less precise results.
                </li>
            </ul>
        </div>

        <!-- Form for Waist-to-Hip Ratio -->
        <form id="waist-hip-ratio-form">
            <h3>Calculate Waist-to-Hip Ratio</h3>

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
          <button type="submit">Calculate WHR</button>
        </div>
      </form>

      <!-- Form for Waist-to-Height Ratio -->
      <form id="waist-height-ratio-form">
        <h3>Calculate Waist-to-Height Ratio</h3>
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
          <button type="submit">Calculate WHtR</button>
        </div>
      </form>

      <!-- Form for Body Fat Percentage -->
      <form id="body-fat-percentage-form">
        <h3>Calculate Body Fat Percentage</h3>
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
            <input type="radio" id="female" name="gender" value="female">
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
          <button type="submit">Calculate Body Fat Percentage</button>
        </div>
      </form>

            <!-- Form for Lean Body Mass -->
      <form id="lean-body-mass-form">
        <h3>Calculate Lean Body Mass</h3>
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
            <input type="radio" id="male-lbm" name="gender" value="male">
            <label for="male-lbm">Male</label>
            <input type="radio" id="female-lbm" name="gender" value="female">
            <label for="female-lbm">Female</label>
          </div>
        </div>
        <div class="input-group">
          <label for="weight">Weight</label>
          <input type="text" id="weight" name="weight" placeholder="kg">
        </div>
        <div class="input-group">
          <label for="height">Height</label>
          <input type="text" id="height" name="height" placeholder="cm">
        </div>
        <div class="button-group">
          <button type="submit">Calculate Lean Body Mass</button>
        </div>
      </form>
      
      <!-- Error message area -->
      <div class="error-message"></div>

      <!-- Results area -->
      <div class="results">
        <h2>Results</h2>
        <table>
          <tr>
            <td>Waist-to-Hip Ratio</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Waist-to-Height Ratio</td>
            <td>-</td>
          </tr>
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
        <li>Centers for Disease Control and Prevention (CDC) – Health Statistics</li>
        <li>American Council on Exercise – Body Fat Percentage Guidelines</li>
        <li>Harvard Medical School – Lean Body Mass Calculations</li>
      </ul>
    </div>
  </section>
`;class _ extends w{constructor(){super(...arguments);l(this,"forms",{});l(this,"errorMessage",null);l(this,"resultsTable",null);l(this,"unitSystemSelects",null)}render(t){var a;t.innerHTML=W,this.forms={waistHipRatio:t.querySelector("#waist-hip-ratio-form"),waistHeightRatio:t.querySelector("#waist-height-ratio-form"),bodyFatPercentage:t.querySelector("#body-fat-percentage-form"),leanBodyMass:t.querySelector("#lean-body-mass-form")},Object.entries(this.forms).forEach(([r,s])=>{s||console.error(`Form ${r} not found in the template`)}),this.errorMessage=t.querySelector(".error-message"),this.resultsTable=t.querySelector(".results table"),this.unitSystemSelects=t.querySelectorAll('select[name="unitSystem"]'),(a=this.unitSystemSelects)==null||a.forEach(r=>{r.addEventListener("change",()=>this.updatePlaceholders())})}fillForm(t){Object.entries(t).forEach(([a,r])=>{r!==void 0&&this.setFormValue(a,r.toString())}),this.updatePlaceholders()}setFormValue(t,a){Object.values(this.forms).forEach(r=>{const s=r.querySelector(`[name="${t}"]`);if(s)if(s instanceof HTMLSelectElement)s.value=a;else if(s.type==="radio"){const o=r.querySelector(`[name="${t}"][value="${a}"]`);o&&(o.checked=!0)}else s.value=a})}updatePlaceholders(){var a;const t={imperial:{waist:"in",hip:"in",height:"ft",weight:"lbs",neck:"in"},metric:{waist:"cm",hip:"cm",height:"m",weight:"kg",neck:"cm"}};(a=this.unitSystemSelects)==null||a.forEach(r=>{const s=r.value,o=r.closest("form");o&&Object.entries(t[s]).forEach(([n,d])=>{const m=o.querySelector(`[name="${n}"]`);m&&(m.placeholder=d)})})}bindCalculateEvents(t){Object.entries(this.forms).forEach(([a,r])=>{r.addEventListener("submit",s=>{s.preventDefault();const o=new FormData(r);t(a,o)})})}showError(t){this.errorMessage&&(this.errorMessage.textContent=t,this.errorMessage.style.display="block")}hideError(){this.errorMessage&&(this.errorMessage.textContent="",this.errorMessage.style.display="none")}updateResults(t){this.resultsTable&&Object.values(t).forEach((a,r)=>{const s=this.resultsTable.rows[r];s&&(s.cells[1].textContent=a.toFixed(2))})}resetForms(){Object.values(this.forms).forEach(t=>t.reset()),this.updatePlaceholders()}}class L{constructor(e,t){l(this,"view");l(this,"user");l(this,"calculator");this.user=e,this.calculator=t,this.view=new _}init(e){this.view.render(e),this.view.fillForm(this.user.getData()),this.view.bindCalculateEvents(this.handleCalculate.bind(this))}handleCalculate(e,t){try{const a=this.extractFormData(e,t);this.user.setData(a);let r={};switch(e){case"waistHipRatio":r.waistHipRatio=this.calculator.getWaistToHipRatio();break;case"waistHeightRatio":r.waistHeightRatio=this.calculator.getWaistToHeightRatio();break;case"bodyFatPercentage":r.bodyFatPercentage=this.calculator.getBodyFatPercentage();break;case"leanBodyMass":a.gender=t.get("gender"),a.weight=this.parseFloat(t.get("weight")),a.height=this.parseFloat(t.get("height"));break}this.view.updateResults(r),this.view.hideError()}catch(a){this.view.showError(a.message)}}extractFormData(e,t){const a={unitSystem:t.get("unitSystem")};switch(e){case"waistHipRatio":case"waistHeightRatio":a.waist=this.parseFloat(t.get("waist")),a.hip=this.parseFloat(t.get("hip")),a.height=this.parseFloat(t.get("height"));break;case"bodyFatPercentage":a.gender=t.get("gender"),a.weight=this.parseFloat(t.get("weight")),a.waist=this.parseFloat(t.get("waist")),a.neck=this.parseFloat(t.get("neck")),a.hip=this.parseFloat(t.get("hip"));break;case"leanBodyMass":a.weight=this.parseFloat(t.get("weight")),a.waist=this.parseFloat(t.get("waist"));break}return a}parseFloat(e){const t=parseFloat(e);if(isNaN(t))throw new Error("Invalid number input");return t}}class k{constructor(e,t){this.user=e,this.calculator=t}createController(e){switch(e){case f.HOME:return new A;case f.BMI:return new H(this.user,this.calculator);case f.BODY_COMPOSITION:return new L(this.user,this.calculator);default:throw new Error("404 Not Found")}}}class G{constructor(e,t){l(this,"currentController",null);l(this,"controllerFactory");this.controllerFactory=new k(e,t)}listen(){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1);this.navigate(t)});const e=window.location.hash.slice(1)||"/";this.navigate(e)}navigate(e){const t=document.getElementById("app");if(!t)return;t.innerHTML="";const a=O(e);if(a!==void 0)try{this.currentController=this.controllerFactory.createController(a),this.currentController.init(t)}catch(r){console.error("Error creating controller:",r),t.innerHTML="<h2>An error occurred</h2>"}else t.innerHTML="<h2>404 Not Found</h2>"}}var E=(i=>(i.METRIC="metric",i.IMPERIAL="imperial",i))(E||{});let p=null;class C{constructor(){l(this,"data");const e=sessionStorage.getItem("userModel");this.data=e?JSON.parse(e):{unitSystem:"metric"}}static getInstance(){return p||(p=new C),p}setData(e){Object.assign(this.data,e),this.saveToSession()}getData(){return{weight:this.data.weight,height:this.data.height,unitSystem:this.data.unitSystem,age:this.data.age,gender:this.data.gender,waist:this.data.waist,hip:this.data.hip,neck:this.data.neck,activityLevel:this.data.activityLevel,dailyCalories:this.data.dailyCalories,weightGoal:this.data.weightGoal,weeksToWeightGoal:this.data.weeksToWeightGoal}}resetData(){this.data={unitSystem:E.METRIC},this.saveToSession()}saveToSession(){sessionStorage.setItem("userModel",JSON.stringify(this.data))}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class N{constructor(e,t,a,r,s,o){this.user=e,this.bmiCalculator=t,this.bodycompositionCalculator=a,this.bmrCalculator=r,this.tdeeCalculator=s,this.calorieCalculator=o}getBmi(){return this.bmiCalculator.calculateBmi(this.user)}getBmiType(){const e=this.getBmi();return this.bmiCalculator.calculateBmiType(e)}getBmiPrime(){const e=this.getBmi();return this.bmiCalculator.calculateBmiPrime(e)}getIdealWeight(){return this.bmiCalculator.calculateIdealWeight(this.user)}getWaistToHipRatio(){return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)}getWaistToHeightRatio(){return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)}getBodyFatPercentage(){return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)}getLeanBodyMass(){return this.bodycompositionCalculator.calculateLeanBodyMass(this.user)}getBmrHarrisBenedict(){return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)}getBmrMifflinStJeor(){return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)}getTdeeHarrisBenedict(){const e=this.getBmrHarrisBenedict();return this.tdeeCalculator.calculateTdeeHarrisBenedict(this.user,e)}getTdeeMifflinStJeor(){const e=this.getBmrMifflinStJeor();return this.tdeeCalculator.calculateTdeeMifflinStJeor(this.user,e)}getCaloricSurplusOrDeficit(){const e=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloricSurplusOrDeficit(this.user,e)}getEstimatedWeightChangeWeekly(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeWeekly(e,this.user)}getEstimatedWeightChangeMonthly(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeMonthly(e,this.user)}getEstimateTimeToWeightGoal(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeeksToWeightGoal(e,this.user)}getCaloriesForWeightGoal(){const e=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloriesForWeightGoal(this.user,e)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */var c;(function(i){i.UnderweightSevereThinness="underweight, severe thinness",i.UnderweightModerateThinness="underweight, moderate thinness",i.UnderweightMildThinness="underweight, mild thinness",i.Normal="normal weight",i.Overweight="overweight, pre-obese",i.ObeseFirstGrade="obese, class I",i.ObeseSecondGrade="obese, class II",i.ObeseThirdGrade="obese, class III"})(c||(c={}));const v=[{min:0,max:15.9,type:c.UnderweightSevereThinness},{min:16,max:16.9,type:c.UnderweightModerateThinness},{min:17,max:18.4,type:c.UnderweightMildThinness},{min:18.5,max:24.9,type:c.Normal},{min:25,max:29.9,type:c.Overweight},{min:30,max:34.9,type:c.ObeseFirstGrade},{min:35,max:39.9,type:c.ObeseSecondGrade},{min:40,max:100,type:c.ObeseThirdGrade}];var g;(function(i){i.Sedentary="sedentary",i.Lightly="lightly",i.Moderately="moderately",i.Very="very",i.Extremely="extremely"})(g||(g={}));/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class D{calculateBmi(e){return e.weight/Math.pow(e.height,2)}calculateBmiType(e){this.validateBmi(e);const t=this.roundBmi(e);return this.findBmiType(t)}calculateIdealWeight(e){const t=this.getNormalBmiRange(),a=this.calculateWeight(t.min,e.height),r=this.calculateWeight(t.max,e.height);return[a,r]}calculateBmiPrime(e){return e/25}validateBmi(e){if(e<=0||e>100)throw new Error(`BMI out of range. Please check your values. BMI: ${e}`)}roundBmi(e){return Math.round(e)}findBmiType(e){for(const t of v)if(e>=t.min&&e<=t.max)return t.type;throw new Error("Bmi Type could not be found")}getNormalBmiRange(){const e=v.find(t=>t.type===c.Normal);if(!e)throw new Error("Could not find normal BMI range.");return e}calculateWeight(e,t){return e*Math.pow(t,2)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class x{constructor(){this.CM_PER_METER=100,this.BODY_FAT_MALE={HEIGHT_LOG_FACTOR:70.041,WAIST_NECK_LOG_FACTOR:86.01,CONSTANT_FACTOR:36.76},this.BODY_FAT_FEMALE={HEIGHT_LOG_FACTOR:97.684,WAIST_HIP_NECK_LOG_FACTOR:163.205,CONSTANT_FACTOR:78.387},this.LEAN_BODY_MASS_MALE={WEIGHT_FACTOR:.407,HEIGHT_FACTOR:.267,SUBTRACTION_CONSTANT:19.2},this.LEAN_BODY_MASS_FEMALE={WEIGHT_FACTOR:.252,HEIGHT_FACTOR:.473,SUBTRACTION_CONSTANT:48.3}}calculateWaistToHipRatio(e){return this.validateWaistAndHip(e),e.waist/e.hip}calculateWaistToHeightRatio(e){this.validateWaistAndHeight(e);const t=this.convertHeightToCentimeter(e.height);return e.waist/t}calculateBodyFatPercentage(e){const t=this.convertHeightToCentimeter(e.height);return this.calculateBodyFatBasedOnGender(e,t)}calculateLeanBodyMass(e){const t=this.convertHeightToCentimeter(e.height);return this.calculateLeanBodyMassBasedOnGender(e,t)}convertHeightToCentimeter(e){return e*this.CM_PER_METER}calculateMaleBodyFat(e,t){this.validateWaistAndNeck(e);const a=e.waist-e.neck;this.validateDifference(a,"Invalid values: waist must be greater than neck for males.");const{HEIGHT_LOG_FACTOR:r,WAIST_NECK_LOG_FACTOR:s,CONSTANT_FACTOR:o}=this.BODY_FAT_MALE,n=r*Math.log10(t);return s*Math.log10(a)-n+o}calculateFemaleBodyFat(e,t){this.validateWaistHipAndNeck(e);const a=e.waist+e.hip-e.neck;this.validateDifference(a,"Invalid values: the sum of waist + hip - neck must be greater than zero for females.");const{HEIGHT_LOG_FACTOR:r,WAIST_HIP_NECK_LOG_FACTOR:s,CONSTANT_FACTOR:o}=this.BODY_FAT_FEMALE,n=r*Math.log10(t);return s*Math.log10(a)-n-o}validateWaistAndHip(e){if(!e.waist||!e.hip)throw new Error("Waist and hip measurements are required for waist to hip calculation.")}validateWaistAndHeight(e){if(!e.waist||!e.height)throw new Error("Waist and height measurements are required for waist to height calculation.")}validateWaistHipAndNeck(e){if(!e.waist||!e.neck||!e.hip)throw new Error("Waist, hip and neck is required to calculate body fat percentage for female")}validateWaistAndNeck(e){if(!e.waist||!e.neck)throw new Error("Waist and neck is required to calculate body fat percentage for male")}validateDifference(e,t){if(e<=0)throw new Error(t)}calculateBodyFatBasedOnGender(e,t){if(e.gender==="male")return this.calculateMaleBodyFat(e,t);if(e.gender==="female")return this.calculateFemaleBodyFat(e,t);throw new Error('Invalid gender. Gender must be either "male" or "female".')}calculateLeanBodyMassBasedOnGender(e,t){if(e.gender==="male")return this.calculateMaleLeanBodyMass(e,t);if(e.gender==="female")return this.calculateFemaleLeanBodyMass(e,t);throw new Error('Invalid gender. Gender must be either "male" or "female".')}calculateMaleLeanBodyMass(e,t){const{WEIGHT_FACTOR:a,HEIGHT_FACTOR:r,SUBTRACTION_CONSTANT:s}=this.LEAN_BODY_MASS_MALE;return a*e.weight+r*t-s}calculateFemaleLeanBodyMass(e,t){const{WEIGHT_FACTOR:a,HEIGHT_FACTOR:r,SUBTRACTION_CONSTANT:s}=this.LEAN_BODY_MASS_FEMALE;return a*e.weight+r*t-s}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class P{constructor(){this.CM_PER_METER=100,this.MIFFLIN_ST_JEOR={WEIGHT_FACTOR:10,HEIGHT_FACTOR:6.25,AGE_FACTOR:5,MALE_ADJUSTMENT:5,FEMALE_ADJUSTMENT:-161},this.HARRIS_BENEDICT={FEMALE:{BASE:447.593,WEIGHT_FACTOR:9.247,HEIGHT_FACTOR:3.098,AGE_FACTOR:4.33},MALE:{BASE:88.362,WEIGHT_FACTOR:13.397,HEIGHT_FACTOR:4.799,AGE_FACTOR:5.677}}}calculateBmrHarrisBenedict(e){const t=this.convertHeightToCentimeter(e.height);return this.calculateBmrBasedOnGender(e,t)}calculateBmrMifflinStJeor(e){this.validateAge(e);const t=this.convertHeightToCentimeter(e.height),a=this.MIFFLIN_ST_JEOR.WEIGHT_FACTOR*e.weight,r=this.MIFFLIN_ST_JEOR.HEIGHT_FACTOR*t,s=this.MIFFLIN_ST_JEOR.AGE_FACTOR*e.age,o=e.gender==="male"?this.MIFFLIN_ST_JEOR.MALE_ADJUSTMENT:this.MIFFLIN_ST_JEOR.FEMALE_ADJUSTMENT;return a+r-s+o}convertHeightToCentimeter(e){return e*this.CM_PER_METER}harrisBenedictFemale(e,t){this.validateAge(e);const{BASE:a,WEIGHT_FACTOR:r,HEIGHT_FACTOR:s,AGE_FACTOR:o}=this.HARRIS_BENEDICT.FEMALE,n=r*e.weight,d=s*t,m=o*e.age;return a+n+d-m}harrisBenedictMale(e,t){this.validateAge(e);const{BASE:a,WEIGHT_FACTOR:r,HEIGHT_FACTOR:s,AGE_FACTOR:o}=this.HARRIS_BENEDICT.MALE,n=r*e.weight,d=s*t,m=o*e.age;return a+n+d-m}calculateBmrBasedOnGender(e,t){if(e.gender==="male")return this.harrisBenedictMale(e,t);if(e.gender==="female")return this.harrisBenedictFemale(e,t);throw new Error("Invalid gender, Gender must be either 'male' or 'female'.")}validateAge(e){if(!e.age)throw new Error("Age is required for calculateBmRHarrisBenedict method")}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class U{constructor(){this.ACTIVITY_FACTORS={SEDENTARY:1.2,LIGHTLY:1.375,MODERATELY:1.55,VERY:1.725,EXTREMELY:1.9}}calculateTdeeMifflinStJeor(e,t){this.validateAgeAndActivityLevel(e);const a=t,r=this.getActivityFactor(e.activityLevel);return this.calculateTdee(a,r)}calculateTdeeHarrisBenedict(e,t){this.validateAgeAndActivityLevel(e);const a=t,r=this.getActivityFactor(e.activityLevel);return this.calculateTdee(a,r)}getActivityFactor(e){switch(e){case g.Sedentary:return this.ACTIVITY_FACTORS.SEDENTARY;case g.Lightly:return this.ACTIVITY_FACTORS.LIGHTLY;case g.Moderately:return this.ACTIVITY_FACTORS.MODERATELY;case g.Very:return this.ACTIVITY_FACTORS.VERY;case g.Extremely:return this.ACTIVITY_FACTORS.EXTREMELY;default:throw new Error("Activity level must be sedentary, lightly, moderately, very, or extremely")}}validateAgeAndActivityLevel(e){if(!e.age||!e.activityLevel)throw new Error("Age and activity level is required")}calculateTdee(e,t){return e*t}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */const J={min:0,max:700},Y={min:0,max:1543},$={min:0,max:2.5},q={min:0,max:8.2};function V(i){try{j(i),z(i),X(i),Q(i),Z(i),ee(i),K(i),te(i),ie(i),ae(i)}catch(e){const t=`Validation error in user object: ${JSON.stringify(i)} - ${e.message}. Stack trace: ${e.stack}`;throw new Error(t)}}function j(i){["age","waist","hip","neck","dailyCalories","weightGoal","weeksToWeightGoal"].forEach(t=>{if(t in i&&i[t]!==void 0&&typeof i[t]!="number")throw new TypeError(`${t} must be a number if provided`)})}function K(i){if(typeof i.unitSystem!="string")throw new TypeError(`Unit system must be a string. Check the unitSystem value in ${JSON.stringify(i)}`);if(i.unitSystem===void 0)throw new Error(`Unit system is required, imperial or metric. Check the unitSystem value in ${JSON.stringify(i)}`)}function b(i,e,t,a,r){if(i<e.min||i>e.max)throw new RangeError(`${t.charAt(0).toUpperCase()+t.slice(1)} using the ${a} system must be between ${e.min}-${e.max}. Check the ${t.toLowerCase()} value in ${JSON.stringify(r)}`)}function z(i){if(i.weight===void 0||typeof i.weight!="number")throw new Error(`Weight is required and must be a number. Check the weight value in ${JSON.stringify(i)}`);const e=i.unitSystem==="metric"?J:Y,t=i.unitSystem==="metric"?"metric":"imperial";b(i.weight,e,"weight",t,i)}function X(i){if(i.height===void 0||typeof i.height!="number")throw new Error(`Height is required and must be a number. Check the height value in ${JSON.stringify(i)}`);const e=i.unitSystem==="metric"?$:q,t=i.unitSystem==="metric"?"metric":"imperial";b(i.height,e,"height",t,i)}function Q(i){if(i.gender!==void 0&&i.gender!=="male"&&i.gender!=="female")throw new TypeError(`Gender must be male or female. Check the gender value in ${JSON.stringify(i)}`)}function Z(i){i.age!==void 0&&i.age<18&&console.warn(`Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(i)}`)}function ee(i){const e=["sedentary","lightly","moderately","very","extremely"];if(i.activityLevel!==void 0&&!e.includes(i.activityLevel))throw new TypeError(`Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(i)}`)}function te(i){if(i.dailyCalories!==void 0&&i.dailyCalories<0)throw new Error(`Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(i)}`)}function ie(i){if(i.weightGoal!==void 0&&i.weightGoal<0)throw new Error(`The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(i)}`)}function ae(i){if(i.weeksToWeightGoal!==void 0&&i.weeksToWeightGoal<0)throw new Error(`Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(i)}`)}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function re(i){return{...i}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function se(i){return i.unitSystem==="metric"?i:{...i,height:oe(i.height),weight:T(i.weight),waist:i.waist!==void 0?y(i.waist):void 0,hip:i.hip!==void 0?y(i.hip):void 0,neck:i.neck!==void 0?y(i.neck):void 0,weightGoal:i.weightGoal!==void 0?T(i.weightGoal):void 0,unitSystem:"metric"}}function oe(i){return i*.3048}function T(i){return i*.453592}function y(i){return i*2.54}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class le{constructor(){this.DAYS_IN_WEEK=7,this.DAYS_IN_MONTH=30,this.CALORIES_PER_KILO=7700,this.REFERENCE_WEIGHT=70}calculateCaloricSurplusOrDeficit(e,t){return this.validateDailyCalories(e),t-e.dailyCalories}calculateEstimatedWeightChangeWeekly(e,t){return this.estimateWeightChange(e,t,this.DAYS_IN_WEEK)}calculateEstimatedWeightChangeMonthly(e,t){return this.estimateWeightChange(e,t,this.DAYS_IN_MONTH)}calculateEstimatedWeeksToWeightGoal(e,t){this.validateWeightGoal(t);const a=this.estimateWeightChange(e,t,this.DAYS_IN_WEEK),r=t.weightGoal-t.weight,o=Math.abs(r)/Math.abs(a);return Math.ceil(o)}calculateCaloriesForWeightGoal(e,t){this.validateWeightGoal(e),this.validateWeeksInUser(e);const a=e.weightGoal-e.weight,o=Math.abs(a)/e.weeksToWeightGoal*this.CALORIES_PER_KILO/this.DAYS_IN_WEEK;return a>0?Math.round(t+o):Math.round(t-o)}validateDailyCalories(e){if(!e.dailyCalories)throw new Error("dailyCalories is required for calorie calculation")}validateWeightGoal(e){if(!e.weightGoal)throw new Error("weightGoal is required for some calories calculation")}validateWeeksInUser(e){if(!e.weeksToWeightGoal)throw new Error("weeksToWeightGoal is required for some calories calculation")}estimateWeightChange(e,t,a){const r=this.CALORIES_PER_KILO*(t.weight/this.REFERENCE_WEIGHT);return e*a/r}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class ne{static createHealthCalculator(e){V(e);const t=re(e),a=se(t),r=new D,s=new x,o=new P,n=new U,d=new le;return new N(a,r,s,o,n,d)}}var h=(i=>(i.UNDERWEIGHT_SEVERE="underweight, severe thinness",i.UNDERWEIGHT_MODERATE="underweight, moderate thinness",i.UNDERWEIGHT_MILD="underweight, mild thinness",i.NORMAL_WEIGHT="normal weight",i.OVERWEIGHT_PRE_OBESE="overweight, pre-obese",i.OBESE_CLASS_I="obese, class I",i.OBESE_CLASS_II="obese, class II",i.OBESE_CLASS_III="obese, class III",i))(h||{});class ce{static fromString(e){const t=e.toLowerCase().trim();for(const[a,r]of Object.entries(h))if(r.toLowerCase()===t)return h[a];throw new Error(`Invalid BMI category: ${e}`)}}function he(i){switch(i){case h.UNDERWEIGHT_SEVERE:return"High risk of malnutrition, weakened immune system, and more.";case h.UNDERWEIGHT_MODERATE:return"Risks include nutrient deficiencies and weakened immune response.";case h.UNDERWEIGHT_MILD:return"Moderate risk of malnutrition.";case h.NORMAL_WEIGHT:return"Lowest health risks with a balanced lifestyle.";case h.OVERWEIGHT_PRE_OBESE:return"Increased risk of cardiovascular diseases and type 2 diabetes.";case h.OBESE_CLASS_I:return"Significant risk of metabolic syndrome and heart disease.";case h.OBESE_CLASS_II:return"Increased risk for heart disease and stroke.";case h.OBESE_CLASS_III:return"Severe health risks including reduced life expectancy.";default:return"Unknown health risk."}}class de{constructor(e){l(this,"calculator");this.userModel=e,this.calculator=this.createCalculator()}createCalculator(){const e=this.userModel.getData();return ne.createHealthCalculator({unitSystem:e.unitSystem,weight:e.weight??70,height:e.height??1.75,age:e.age,gender:e.gender,waist:e.waist,hip:e.hip,neck:e.neck,activityLevel:e.activityLevel,dailyCalories:e.dailyCalories,weightGoal:e.weightGoal,weeksToWeightGoal:e.weeksToWeightGoal})}getBmi(){return this.calculator=this.createCalculator(),this.calculator.getBmi()}getBmiType(){this.calculator=this.createCalculator();const e=this.calculator.getBmiType();return ce.fromString(e)}getHealthRisk(){return he(this.getBmiType())}getBmiPrime(){return this.calculator=this.createCalculator(),this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator=this.createCalculator(),this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator=this.createCalculator(),this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator=this.createCalculator(),this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator=this.createCalculator(),this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeMonthly()}getEstimateTimeToWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getEstimateTimeToWeightGoal()}getCaloriesForWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getCaloriesForWeightGoal()}}class ue{constructor(e){l(this,"calculator");this.calculator=new de(e)}getBmi(){return this.calculator.getBmi()}getBmiType(){return this.calculator.getBmiType()}getHealthRisk(){return this.calculator.getHealthRisk()}getBmiPrime(){return this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator.getEstimatedWeightChangeMonthly()}getCaloriesForWeightGoal(){return this.calculator.getCaloriesForWeightGoal()}getEstimateTimeToWeightGoal(){return this.calculator.getEstimateTimeToWeightGoal()}}class ge{constructor(){l(this,"router");l(this,"user");l(this,"calculator");this.user=C.getInstance(),this.calculator=new ue(this.user),this.router=new G(this.user,this.calculator)}start(){this.router.listen();const e=window.location.hash.slice(1)||"/";this.router.navigate(e)}}const me=new ge;me.start();
