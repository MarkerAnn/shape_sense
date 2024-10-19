var S=Object.defineProperty;var I=(i,e,t)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var n=(i,e,t)=>(I(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var m=(i=>(i[i.HOME=0]="HOME",i[i.BMI=1]="BMI",i[i.BMR=2]="BMR",i[i.TDEE=3]="TDEE",i[i.BODY_COMPOSITION=4]="BODY_COMPOSITION",i[i.CALORIE_CALCULATION=5]="CALORIE_CALCULATION",i))(m||{});const M={0:"/",1:"/bmi",2:"/bmr",3:"/tdee",4:"/body-composition",5:"/calorie-calculation"};function R(i){const e=Object.entries(M).find(([t,a])=>a===i);return e?Number(e[0]):void 0}class w{}var u=(i=>(i.BMI="bmi",i.BMR="bmr",i.TDEE="tdee",i.BODY_COMPOSITION="body-composition",i.CALORIE_CALCULATION="calorie-calculation",i))(u||{});class B extends w{render(e){e.innerHTML=`
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
          <img src="./assets/images/${e.toLowerCase()}.png" 
          alt="${e} illustration">
        </div>
      `).join("")}getCalculatorDescription(e){return{[u.BMI]:"Body Mass Index (BMI) - A measure of body fat based on weight and height.",[u.BMR]:"Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.",[u.TDEE]:"Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.",[u.BODY_COMPOSITION]:"Body Composition - Calculate body fat percentage, waist-to-hip ratio, and lean body mass.",[u.CALORIE_CALCULATION]:"Calorie Calculations - Estimate daily calorie needs to reach your weight goal, and predict weight change based on your caloric intake."}[e]||"Description not available."}}class W{constructor(){n(this,"view");this.view=new B}init(e){this.view.render(e)}}const H=`
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
    `;class F extends w{constructor(){super(...arguments);n(this,"form",null);n(this,"errorMessage",null);n(this,"resultsTable",null);n(this,"heightInput",null);n(this,"weightInput",null);n(this,"unitSystemSelect",null)}render(t){var a;t.innerHTML=H,this.form=t.querySelector("#bmi-form"),this.errorMessage=t.querySelector(".error-message"),this.resultsTable=t.querySelector(".results table"),this.weightInput=t.querySelector("#weight"),this.heightInput=t.querySelector("#height"),this.unitSystemSelect=t.querySelector('select[name="unitSystem"]'),(a=this.unitSystemSelect)==null||a.addEventListener("change",()=>this.updatePlaceholders())}fillForm(t){t.unitSystem&&this.unitSystemSelect&&(this.unitSystemSelect.value=t.unitSystem),t.height&&this.heightInput&&(this.heightInput.value=t.height.toString()),t.weight&&this.weightInput&&(this.weightInput.value=t.weight.toString()),console.log(t),this.updatePlaceholders()}updatePlaceholders(){var r;const a=((r=this.unitSystemSelect)==null?void 0:r.value)==="imperial"?{height:"ft",weight:"lbs"}:{height:"m",weight:"kg"};this.heightInput&&this.heightInput.setAttribute("placeholder",a.height),this.weightInput&&this.weightInput.setAttribute("placeholder",a.weight)}bindCalculateEvent(t){var a;(a=this.form)==null||a.addEventListener("submit",r=>{r.preventDefault();const s=new FormData(this.form),o={unitSystem:s.get("unitSystem"),height:parseFloat(s.get("height")),weight:parseFloat(s.get("weight"))};t(o)})}showError(t){this.errorMessage&&(this.errorMessage.textContent=t,this.errorMessage.style.display="block")}hideError(){this.errorMessage&&(this.errorMessage.textContent="",this.errorMessage.style.display="none")}updateResults(t,a,r,s){if(this.resultsTable){const o=this.resultsTable.rows;o[0].cells[1].textContent=t.toFixed(2),o[1].cells[1].textContent=a,o[2].cells[1].textContent=r,o[3].cells[1].textContent=`${s[0].toFixed(0)} - ${s[1].toFixed(0)} kg`}}bindResetEvent(t){var a,r;(r=(a=this.form)==null?void 0:a.querySelector('button[type="reset"]'))==null||r.addEventListener("click",s=>{s.preventDefault(),t()})}resetForm(){this.form&&(this.form.reset(),this.updatePlaceholders()),this.clearResults()}clearResults(){if(this.resultsTable){const t=this.resultsTable.rows;t[0].cells[1].textContent="-",t[1].cells[1].textContent="-",t[2].cells[1].textContent="-"}}}class O{constructor(e,t){n(this,"view");n(this,"user");n(this,"calculator");n(this,"handleCalculate",e=>{try{this.validateFormData(e),this.user.setData(e),this.updateView(),console.log(this.user.getData(),"handleCalculate"),this.view.hideError()}catch(t){this.view.showError(t.message)}});n(this,"handleReset",()=>{this.user.resetData(),this.view.resetForm(),this.view.hideError()});this.user=e,this.calculator=t,this.view=new F}init(e){this.view.render(e),this.fillFormWithUserData(),console.log(this.user.getData(),"init"),this.view.bindCalculateEvent(this.handleCalculate.bind(this)),this.view.bindResetEvent(this.handleReset.bind(this))}fillFormWithUserData(){const e=this.user.getData();console.log(e,"construktor"),this.view.fillForm(e)}validateFormData(e){if(e.height===void 0||isNaN(e.height)||e.height<=0)throw new Error("Invalid height value");if(e.weight===void 0||isNaN(e.weight)||e.weight<=0)throw new Error("Invalid weight value")}updateView(){const e=this.calculator.getBmi(),t=this.calculator.getBmiType(),a=this.calculator.getHealthRisk(),r=this.calculator.getIdealWeight();this.view.updateResults(e,t,a,r)}}const A=`
<section class="container">
    <h2>Body Composition Calculator</h2>
    <div class="content">
        <p class="description">
        Understand your body composition by calculating 
        various metrics based on your body measurements.
        Get insights into your health status and risk factors.</p>

        <div class="additional-info">
            <h2>What is Body Composition?</h2>
            <p>
            Body composition refers to the proportion
            of fat and non-fat mass in your body. 
            A balanced body composition indicates a healthier
            lifestyle and can help reduce the risk of various health issues.
            It provides a deeper understanding beyond simple
            weight measurements, giving a comprehensive view
            of your physical condition.</p>
            <h3>Key Measurements</h3>
            <p>
            This calculator provides results for 
            Waist-to-Hip Ratio (WHR), Waist-to-Height Ratio (WHtR),
            Body Fat Percentage, and Lean Body Mass. 
            These measurements offer insights into fat distribution, 
            potential health risks, and overall fitness levels:</p>
            <ul>
                <li>
                    <strong>Waist-to-Hip Ratio (WHR):</strong> 
                    A useful indicator of fat distribution 
                    and potential risk for cardiovascular disease. 
                    <em>Note:</em> 
                    WHR does not account for overall body fat percentage 
                    and may not accurately reflect risk for all body types, 
                    such as those with more muscle mass.
                </li>
                <li>
                    <strong>Waist-to-Height Ratio (WHtR):</strong> 
                    An important measure for determining abdominal fat levels, 
                    which can be linked to health risks like 
                    diabetes and heart disease. 
                    <em>Note:</em> 
                    WHtR focuses solely on abdominal fat 
                    and does not consider fat distribution 
                    in other areas of the body.
                </li>
                <li>
                    <strong>Body Fat Percentage:</strong> 
                    The proportion of fat to your total body weight, 
                    providing a clearer picture of your health and fitness 
                    compared to BMI alone. 
                    <em>Note:</em> 
                    Estimating body fat percentage 
                    through basic measurements may not be as 
                    accurate as methods like DEXA scans or hydrostatic weighing.
                </li>
                <li>
                    <strong>Lean Body Mass:</strong> 
                    The weight of your muscles, bones, and organs, 
                    excluding fat. 
                    Understanding your lean body mass helps in setting 
                    fitness goals and managing weight. 
                    <em>Note:</em> 
                    Lean body mass calculations can be 
                    affected by inaccuracies in body fat estimation, 
                    leading to less precise results.
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
          <button type="reset">Reset</button>
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
          <button type="reset">Reset</button>
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
          <button type="reset">Reset</button>
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
          <button type="reset">Reset</button>
          <button type="submit">Calculate Lean Body Mass</button>
        </div>
      </form>
      
      <!-- Error message area -->
      <div class="error-message"></div>

      <!-- Results area -->
      <div class="results">
        <h2>Results</h2>
        <table>
          <tr data-result="waistHipRatio">
            <td>Waist-to-Hip Ratio</td>
            <td>-</td>
          </tr>
          <tr data-result="waistHeightRatio">
            <td>Waist-to-Height Ratio</td>
            <td>-</td>
          </tr>
          <tr data-result="bodyFatPercentage">
            <td>Body Fat Percentage</td>
            <td>-</td>
          </tr>
          <tr data-result="leanBodyMass">
            <td>Lean Body Mass</td>
            <td>-</td>
          </tr>
        </table>

      </div>
    </div>
    <div class="sources">
      Sources:
      <ul>
        <li>Centers for Disease Control and Prevention (CDC) – 
        Health Statistics</li>
        <li>American Council on Exercise – Body Fat Percentage Guidelines</li>
        <li>Harvard Medical School – Lean Body Mass Calculations</li>
      </ul>
    </div>
  </section>
`;class _ extends w{constructor(){super(...arguments);n(this,"container",null);n(this,"forms",null);n(this,"errorMessage",null);n(this,"resultsTable",null)}render(t){this.container=t,this.container.innerHTML=A,this.forms={waistHipRatio:this.container.querySelector("#waist-hip-ratio-form"),waistHeightRatio:this.container.querySelector("#waist-height-ratio-form"),bodyFatPercentage:this.container.querySelector("#body-fat-percentage-form"),leanBodyMass:this.container.querySelector("#lean-body-mass-form")},this.errorMessage=this.container.querySelector(".error-message"),this.resultsTable=this.container.querySelector(".results table"),this.initializeUnitSystemListeners()}fillForm(t){Object.entries(t).forEach(([a,r])=>{r!==void 0&&this.setFormValue(a,r.toString())}),this.updatePlaceholders()}bindWaistHipRatioEvent(t){var a;(a=this.forms)==null||a.waistHipRatio.addEventListener("submit",r=>{r.preventDefault(),console.log(FormData),t(new FormData(this.forms.waistHipRatio))})}bindWaistHeightRatioEvent(t){var a;(a=this.forms)==null||a.waistHeightRatio.addEventListener("submit",r=>{r.preventDefault(),t(new FormData(this.forms.waistHeightRatio))})}bindBodyFatPercentageEvent(t){var a;(a=this.forms)==null||a.bodyFatPercentage.addEventListener("submit",r=>{r.preventDefault(),t(new FormData(this.forms.bodyFatPercentage))})}bindLeanBodyMassEvent(t){var a;(a=this.forms)==null||a.leanBodyMass.addEventListener("submit",r=>{r.preventDefault(),t(new FormData(this.forms.leanBodyMass))})}bindResetEvents(t){Object.values(this.forms).forEach(a=>{const r=a.querySelector('button[type="reset"]');r&&r.addEventListener("click",s=>{s.preventDefault(),t()})})}showError(t){this.errorMessage&&(this.errorMessage.textContent=t,this.errorMessage.style.display="block")}hideError(){this.errorMessage&&(this.errorMessage.textContent="",this.errorMessage.style.display="none")}updateResults(t){this.resultsTable&&Object.entries(t).forEach(([a,r])=>{const s=this.resultsTable.querySelector(`tr[data-result="${a}"]`);s&&(s.querySelector("td:last-child").textContent=r.toFixed(2))})}resetForms(){Object.values(this.forms).forEach(t=>t.reset()),this.updatePlaceholders(),this.resultsTable&&this.resultsTable.querySelectorAll("td:last-child").forEach(a=>a.textContent="-")}setFormValue(t,a){Object.values(this.forms).forEach(r=>{const s=r.querySelector(`[name="${t}"]`);if(s)if(s instanceof HTMLSelectElement)s.value=a;else if(s.type==="radio"){const o=r.querySelector(`[name="${t}"][value="${a}"]`);o&&(o.checked=!0)}else s.value=a})}initializeUnitSystemListeners(){this.container.querySelectorAll('select[name="unitSystem"]').forEach(a=>{a.addEventListener("change",()=>this.updatePlaceholders())})}updatePlaceholders(){const t={imperial:{waist:"in",hip:"in",height:"ft",weight:"lbs",neck:"in"},metric:{waist:"cm",hip:"cm",height:"m",weight:"kg",neck:"cm"}};Object.values(this.forms).forEach(a=>{const s=a.querySelector('select[name="unitSystem"]').value;Object.entries(t[s]).forEach(([o,l])=>{const h=a.querySelector(`[name="${o}"]`);h&&(h.placeholder=l)})})}}class L{constructor(e,t){n(this,"view");n(this,"user");n(this,"calculator");n(this,"handleWaistHipRatio",e=>{try{const t=this.extractWaistHipRatioData(e);this.user.setData(t);const a=this.calculator.getWaistToHipRatio();this.view.updateResults({waistHipRatio:a}),this.view.hideError()}catch(t){this.view.showError(t.message)}});n(this,"handleWaistHeightRatio",e=>{try{const t=this.extractWaistHeightRatioData(e);this.user.setData(t);const a=this.calculator.getWaistToHeightRatio();this.view.updateResults({waistHeightRatio:a}),this.view.hideError()}catch(t){this.view.showError(t.message)}});n(this,"handleBodyFatPercentage",e=>{try{const t=this.extractBodyFatPercentageData(e);this.user.setData(t);const a=this.calculator.getBodyFatPercentage();this.view.updateResults({bodyFatPercentage:a}),this.view.hideError()}catch(t){this.view.showError(t.message)}});n(this,"handleLeanBodyMass",e=>{try{const t=this.extractLeanBodyMassData(e);this.user.setData(t);const a=this.calculator.getLeanBodyMass();this.view.updateResults({leanBodyMass:a}),this.view.hideError()}catch(t){this.view.showError(t.message)}});n(this,"handleReset",()=>{this.user.resetData(),this.view.resetForms(),this.view.hideError()});this.user=e,this.calculator=t,this.view=new _}init(e){this.view.render(e),this.fillFormWithUserData(),this.bindFormHandlers()}fillFormWithUserData(){const e=this.user.getData();this.view.fillForm(e)}bindFormHandlers(){this.view.bindWaistHipRatioEvent(this.handleWaistHipRatio.bind(this)),this.view.bindWaistHeightRatioEvent(this.handleWaistHeightRatio.bind(this)),this.view.bindBodyFatPercentageEvent(this.handleBodyFatPercentage.bind(this)),this.view.bindLeanBodyMassEvent(this.handleLeanBodyMass.bind(this)),this.view.bindResetEvents(this.handleReset.bind(this))}extractWaistHipRatioData(e){return{unitSystem:e.get("unitSystem"),waist:this.parseFloat(e.get("waist")),hip:this.parseFloat(e.get("hip"))}}extractWaistHeightRatioData(e){return{unitSystem:e.get("unitSystem"),waist:this.parseFloat(e.get("waist")),height:this.parseFloat(e.get("height"))}}extractBodyFatPercentageData(e){return{unitSystem:e.get("unitSystem"),gender:e.get("gender"),weight:this.parseFloat(e.get("weight")),waist:this.parseFloat(e.get("waist")),neck:this.parseFloat(e.get("neck")),hip:this.parseFloat(e.get("hip"))}}extractLeanBodyMassData(e){return{unitSystem:e.get("unitSystem"),gender:e.get("gender"),weight:this.parseFloat(e.get("weight")),height:this.parseFloat(e.get("height"))}}parseFloat(e){const t=parseFloat(e);if(isNaN(t))throw new Error("Invalid number input");return t}}class k{constructor(e,t){this.user=e,this.calculator=t}createController(e){switch(e){case m.HOME:return new W;case m.BMI:return new O(this.user,this.calculator);case m.BODY_COMPOSITION:return new L(this.user,this.calculator);default:throw new Error("404 Not Found")}}}class N{constructor(e,t){n(this,"currentController",null);n(this,"controllerFactory");this.controllerFactory=new k(e,t)}listen(){window.addEventListener("hashchange",()=>{const t=window.location.hash.slice(1);this.navigate(t)});const e=window.location.hash.slice(1)||"/";this.navigate(e)}navigate(e){const t=document.getElementById("app");if(!t)return;t.innerHTML="";const a=R(e);if(a!==void 0)try{this.currentController=this.controllerFactory.createController(a),this.currentController.init(t)}catch(r){console.error("Error creating controller:",r),t.innerHTML="<h2>An error occurred</h2>"}else t.innerHTML="<h2>404 Not Found</h2>"}}var C=(i=>(i.METRIC="metric",i.IMPERIAL="imperial",i))(C||{});let y=null;class v{constructor(){n(this,"data");const e=sessionStorage.getItem("userModel");this.data=e?JSON.parse(e):{unitSystem:"metric"}}static getInstance(){return y||(y=new v),y}setData(e){Object.assign(this.data,e),this.saveToSession()}getData(){return{weight:this.data.weight,height:this.data.height,unitSystem:this.data.unitSystem,age:this.data.age,gender:this.data.gender,waist:this.data.waist,hip:this.data.hip,neck:this.data.neck,activityLevel:this.data.activityLevel,dailyCalories:this.data.dailyCalories,weightGoal:this.data.weightGoal,weeksToWeightGoal:this.data.weeksToWeightGoal}}resetData(){this.data={unitSystem:C.METRIC},this.saveToSession()}saveToSession(){sessionStorage.setItem("userModel",JSON.stringify(this.data))}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class G{constructor(e,t,a,r,s,o){this.user=e,this.bmiCalculator=t,this.bodycompositionCalculator=a,this.bmrCalculator=r,this.tdeeCalculator=s,this.calorieCalculator=o}getBmi(){return this.bmiCalculator.calculateBmi(this.user)}getBmiType(){const e=this.getBmi();return this.bmiCalculator.calculateBmiType(e)}getBmiPrime(){const e=this.getBmi();return this.bmiCalculator.calculateBmiPrime(e)}getIdealWeight(){return this.bmiCalculator.calculateIdealWeight(this.user)}getWaistToHipRatio(){return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)}getWaistToHeightRatio(){return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)}getBodyFatPercentage(){return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)}getLeanBodyMass(){return this.bodycompositionCalculator.calculateLeanBodyMass(this.user)}getBmrHarrisBenedict(){return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)}getBmrMifflinStJeor(){return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)}getTdeeHarrisBenedict(){const e=this.getBmrHarrisBenedict();return this.tdeeCalculator.calculateTdeeHarrisBenedict(this.user,e)}getTdeeMifflinStJeor(){const e=this.getBmrMifflinStJeor();return this.tdeeCalculator.calculateTdeeMifflinStJeor(this.user,e)}getCaloricSurplusOrDeficit(){const e=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloricSurplusOrDeficit(this.user,e)}getEstimatedWeightChangeWeekly(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeWeekly(e,this.user)}getEstimatedWeightChangeMonthly(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeightChangeMonthly(e,this.user)}getEstimateTimeToWeightGoal(){const e=this.getCaloricSurplusOrDeficit();return this.calorieCalculator.calculateEstimatedWeeksToWeightGoal(e,this.user)}getCaloriesForWeightGoal(){const e=this.getTdeeHarrisBenedict();return this.calorieCalculator.calculateCaloriesForWeightGoal(this.user,e)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */var c;(function(i){i.UnderweightSevereThinness="underweight, severe thinness",i.UnderweightModerateThinness="underweight, moderate thinness",i.UnderweightMildThinness="underweight, mild thinness",i.Normal="normal weight",i.Overweight="overweight, pre-obese",i.ObeseFirstGrade="obese, class I",i.ObeseSecondGrade="obese, class II",i.ObeseThirdGrade="obese, class III"})(c||(c={}));const b=[{min:0,max:15.9,type:c.UnderweightSevereThinness},{min:16,max:16.9,type:c.UnderweightModerateThinness},{min:17,max:18.4,type:c.UnderweightMildThinness},{min:18.5,max:24.9,type:c.Normal},{min:25,max:29.9,type:c.Overweight},{min:30,max:34.9,type:c.ObeseFirstGrade},{min:35,max:39.9,type:c.ObeseSecondGrade},{min:40,max:100,type:c.ObeseThirdGrade}];var g;(function(i){i.Sedentary="sedentary",i.Lightly="lightly",i.Moderately="moderately",i.Very="very",i.Extremely="extremely"})(g||(g={}));/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class D{calculateBmi(e){this.validateWeightAndHeight(e);const t=2;return e.weight/Math.pow(e.height,t)}calculateBmiType(e){this.validateBmi(e);const t=this.roundBmi(e);return this.findBmiType(t)}calculateIdealWeight(e){this.validateHeight(e);const t=this.getNormalBmiRange(),a=this.calculateWeight(t.min,e.height),r=this.calculateWeight(t.max,e.height);return[a,r]}calculateBmiPrime(e){return e/25}validateWeightAndHeight(e){if(e.weight===void 0||e.height===void 0)throw new Error("Weight and height are required for BMI calculation.");if(typeof e.weight!="number"||typeof e.height!="number")throw new Error("Weight and height must be numbers.");if(e.weight<=0||e.height<=0)throw new Error("Weight and height must be positive numbers.")}validateHeight(e){if(e.height===void 0)throw new Error("Height is required for ideal weight calculation.");if(typeof e.height!="number")throw new Error("Height must be a number.");if(e.height<=0)throw new Error("Height must be a positive number.")}validateBmi(e){if(e<=0||e>100)throw new Error(`BMI out of range. Please check your values. BMI: ${e}`)}roundBmi(e){return Math.round(e)}findBmiType(e){for(const t of b)if(e>=t.min&&e<=t.max)return t.type;throw new Error("Bmi Type could not be found")}getNormalBmiRange(){const e=b.find(t=>t.type===c.Normal);if(!e)throw new Error("Could not find normal BMI range.");return e}calculateWeight(e,t){return e*Math.pow(t,2)}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class P{constructor(){this.CM_PER_METER=100,this.PERCENTAGE=100,this.TOTAL_BODY_COMPOSITION=1,this.BODY_FAT={CONSTANT_FACTOR:495,SUBTRACTION_CONSTANT:450},this.BODY_FAT_MALE={CONSTANT:1.0324,WAIST_NECK_FACTOR:.19077,HEIGHT_FACTOR:.15456},this.BODY_FAT_FEMALE={CONSTANT:1.29579,WAIST_HIP_NECK_FACTOR:.35004,HEIGHT_FACTOR:.221}}calculateWaistToHipRatio(e){return this.validateWaistAndHip(e),e.waist/e.hip}calculateWaistToHeightRatio(e){this.validateWaistAndHeight(e);const t=this.convertHeightToCentimeter(e.height);return e.waist/t}calculateBodyFatPercentage(e){this.validateRequiredMeasurements(e);const t=this.convertHeightToCentimeter(e.height);return this.calculateBodyFatBasedOnGender(e,t)}calculateLeanBodyMass(e){this.validateRequiredMeasurements(e);const a=this.calculateBodyFatPercentage(e)/this.PERCENTAGE,r=this.TOTAL_BODY_COMPOSITION-a;return e.weight*r}convertHeightToCentimeter(e){return e*this.CM_PER_METER}calculateMaleBodyFat(e,t){this.validateWaistAndNeck(e);const{CONSTANT:a,WAIST_NECK_FACTOR:r,HEIGHT_FACTOR:s}=this.BODY_FAT_MALE,{CONSTANT_FACTOR:o,SUBTRACTION_CONSTANT:l}=this.BODY_FAT,h=a-r*Math.log10(e.waist-e.neck)+s*Math.log10(t);return o/h-l}calculateFemaleBodyFat(e,t){this.validateWaistHipAndNeck(e);const{CONSTANT:a,WAIST_HIP_NECK_FACTOR:r,HEIGHT_FACTOR:s}=this.BODY_FAT_FEMALE,{CONSTANT_FACTOR:o,SUBTRACTION_CONSTANT:l}=this.BODY_FAT,h=a-r*Math.log10(e.waist+e.hip-e.neck)+s*Math.log10(t);return o/h-l}validateWaistAndHip(e){if(!e.waist||!e.hip)throw new Error("Waist and hip measurements are required for waist to hip calculation.")}validateWaistAndHeight(e){if(!e.waist||!e.height)throw new Error("Waist and height measurements are required for waist to height calculation.")}validateWaistHipAndNeck(e){if(!e.waist||!e.neck||!e.hip)throw new Error("Waist, hip and neck is required to calculate body fat percentage for female")}validateWaistAndNeck(e){if(!e.waist||!e.neck)throw new Error("Waist and neck is required to calculate body fat percentage for male")}validateRequiredMeasurements(e){if(e.weight===void 0||e.height===void 0)throw new Error("Weight and height are required for body composition calculations.")}calculateBodyFatBasedOnGender(e,t){if(e.gender==="male")return this.calculateMaleBodyFat(e,t);if(e.gender==="female")return this.calculateFemaleBodyFat(e,t);throw new Error('Invalid gender. Gender must be either "male" or "female".')}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class x{constructor(){this.CM_PER_METER=100,this.MIFFLIN_ST_JEOR={WEIGHT_FACTOR:10,HEIGHT_FACTOR:6.25,AGE_FACTOR:5,MALE_ADJUSTMENT:5,FEMALE_ADJUSTMENT:-161},this.HARRIS_BENEDICT={FEMALE:{BASE:447.593,WEIGHT_FACTOR:9.247,HEIGHT_FACTOR:3.098,AGE_FACTOR:4.33},MALE:{BASE:88.362,WEIGHT_FACTOR:13.397,HEIGHT_FACTOR:4.799,AGE_FACTOR:5.677}}}calculateBmrHarrisBenedict(e){this.validateRequiredFields(e);const t=this.convertHeightToCentimeter(e.height);return this.calculateBmrBasedOnGender(e,t)}calculateBmrMifflinStJeor(e){this.validateRequiredFields(e);const t=this.convertHeightToCentimeter(e.height),a=this.MIFFLIN_ST_JEOR.WEIGHT_FACTOR*e.weight,r=this.MIFFLIN_ST_JEOR.HEIGHT_FACTOR*t,s=this.MIFFLIN_ST_JEOR.AGE_FACTOR*e.age,o=e.gender==="male"?this.MIFFLIN_ST_JEOR.MALE_ADJUSTMENT:this.MIFFLIN_ST_JEOR.FEMALE_ADJUSTMENT;return a+r-s+o}convertHeightToCentimeter(e){return e*this.CM_PER_METER}harrisBenedictFemale(e,t){const{BASE:a,WEIGHT_FACTOR:r,HEIGHT_FACTOR:s,AGE_FACTOR:o}=this.HARRIS_BENEDICT.FEMALE,l=r*e.weight,h=s*t,f=o*e.age;return a+l+h-f}harrisBenedictMale(e,t){const{BASE:a,WEIGHT_FACTOR:r,HEIGHT_FACTOR:s,AGE_FACTOR:o}=this.HARRIS_BENEDICT.MALE,l=r*e.weight,h=s*t,f=o*e.age;return a+l+h-f}calculateBmrBasedOnGender(e,t){if(e.gender==="male")return this.harrisBenedictMale(e,t);if(e.gender==="female")return this.harrisBenedictFemale(e,t);throw new Error("Invalid gender. Gender must be either 'male' or 'female'.")}validateRequiredFields(e){if(e.weight===void 0||typeof e.weight!="number"||e.weight<=0)throw new Error("Valid weight is required for BMR calculation.");if(e.height===void 0||typeof e.height!="number"||e.height<=0)throw new Error("Valid height is required for BMR calculation.");if(e.age===void 0||typeof e.age!="number"||e.age<=0)throw new Error("Valid age is required for BMR calculation.");if(e.gender===void 0||e.gender!=="male"&&e.gender!=="female")throw new Error("Valid gender is required for BMR calculation. Gender must be either 'male' or 'female'.")}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class U{constructor(){this.ACTIVITY_FACTORS={SEDENTARY:1.2,LIGHTLY:1.375,MODERATELY:1.55,VERY:1.725,EXTREMELY:1.9}}calculateTdeeMifflinStJeor(e,t){this.validateAgeAndActivityLevel(e);const a=t,r=this.getActivityFactor(e.activityLevel);return this.calculateTdee(a,r)}calculateTdeeHarrisBenedict(e,t){this.validateAgeAndActivityLevel(e);const a=t,r=this.getActivityFactor(e.activityLevel);return this.calculateTdee(a,r)}getActivityFactor(e){switch(e){case g.Sedentary:return this.ACTIVITY_FACTORS.SEDENTARY;case g.Lightly:return this.ACTIVITY_FACTORS.LIGHTLY;case g.Moderately:return this.ACTIVITY_FACTORS.MODERATELY;case g.Very:return this.ACTIVITY_FACTORS.VERY;case g.Extremely:return this.ACTIVITY_FACTORS.EXTREMELY;default:throw new Error("Activity level must be sedentary, lightly, moderately, very, or extremely")}}validateAgeAndActivityLevel(e){if(!e.age||!e.activityLevel)throw new Error("Age and activity level is required")}calculateTdee(e,t){return e*t}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */const q={min:0,max:700},J={min:0,max:1543},Y={min:0,max:2.5},$={min:0,max:8.2};function V(i){try{j(i),i.weight!==void 0&&z(i),i.height!==void 0&&X(i),Q(i),Z(i),ee(i),K(i),te(i),ie(i),ae(i)}catch(e){const t=`Validation error in user object: ${JSON.stringify(i)} - ${e.message}. Stack trace: ${e.stack}`;throw new Error(t)}}function j(i){["age","waist","hip","neck","dailyCalories","weightGoal","weeksToWeightGoal"].forEach(t=>{if(t in i&&i[t]!==void 0&&typeof i[t]!="number")throw new TypeError(`${t} must be a number if provided`)})}function K(i){if(i.unitSystem===void 0)throw new Error("Unit system is required");if(typeof i.unitSystem!="string")throw new TypeError(`Unit system must be a string. Check the unitSystem value in ${JSON.stringify(i)}`);if(i.unitSystem!=="metric"&&i.unitSystem!=="imperial")throw new Error('Unit system must be either "metric" or "imperial"')}function T(i,e,t,a,r){if(i<e.min||i>e.max)throw new RangeError(`${t.charAt(0).toUpperCase()+t.slice(1)} using the ${a} system must be between ${e.min}-${e.max}. Check the ${t.toLowerCase()} value in ${JSON.stringify(r)}`)}function z(i){if(typeof i.weight!="number")throw new Error(`Weight must be a number if provided. Check the weight value in ${JSON.stringify(i)}`);const e=i.unitSystem==="metric"?q:J,t=i.unitSystem==="metric"?"metric":"imperial";T(i.weight,e,"weight",t,i)}function X(i){if(typeof i.height!="number")throw new Error(`Height must be a number if provided. Check the height value in ${JSON.stringify(i)}`);const e=i.unitSystem==="metric"?Y:$,t=i.unitSystem==="metric"?"metric":"imperial";T(i.height,e,"height",t,i)}function Q(i){if(i.gender!==void 0&&i.gender!=="male"&&i.gender!=="female")throw new TypeError(`Gender must be male or female. Check the gender value in ${JSON.stringify(i)}`)}function Z(i){i.age!==void 0&&i.age<18&&console.warn(`Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(i)}`)}function ee(i){const e=["sedentary","lightly","moderately","very","extremely"];if(i.activityLevel!==void 0&&!e.includes(i.activityLevel))throw new TypeError(`Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(i)}`)}function te(i){if(i.dailyCalories!==void 0&&i.dailyCalories<0)throw new Error(`Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(i)}`)}function ie(i){if(i.weightGoal!==void 0&&i.weightGoal<0)throw new Error(`The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(i)}`)}function ae(i){if(i.weeksToWeightGoal!==void 0&&i.weeksToWeightGoal<0)throw new Error(`Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(i)}`)}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function re(i){return{...i}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */function se(i){return i.unitSystem==="metric"?i:{...i,height:i.height!==void 0?oe(i.height):void 0,weight:i.weight!==void 0?E(i.weight):void 0,waist:i.waist!==void 0?p(i.waist):void 0,hip:i.hip!==void 0?p(i.hip):void 0,neck:i.neck!==void 0?p(i.neck):void 0,weightGoal:i.weightGoal!==void 0?E(i.weightGoal):void 0,unitSystem:"metric"}}function oe(i){return i!==void 0?i*.3048:void 0}function E(i){return i!==void 0?i*.453592:void 0}function p(i){return i!==void 0?i*2.54:void 0}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class ne{constructor(){this.DAYS_IN_WEEK=7,this.DAYS_IN_MONTH=30,this.CALORIES_PER_KILO=7700,this.REFERENCE_WEIGHT=70}calculateCaloricSurplusOrDeficit(e,t){return this.validateDailyCalories(e),t-e.dailyCalories}calculateEstimatedWeightChangeWeekly(e,t){return this.validateWeight(t),this.estimateWeightChange(e,t,this.DAYS_IN_WEEK)}calculateEstimatedWeightChangeMonthly(e,t){return this.validateWeight(t),this.estimateWeightChange(e,t,this.DAYS_IN_MONTH)}calculateEstimatedWeeksToWeightGoal(e,t){this.validateWeightGoal(t),this.validateWeight(t);const a=this.estimateWeightChange(e,t,this.DAYS_IN_WEEK),r=t.weightGoal-t.weight,o=Math.abs(r)/Math.abs(a);return Math.ceil(o)}calculateCaloriesForWeightGoal(e,t){this.validateWeightGoal(e),this.validateWeight(e),this.validateWeeksToWeightGoal(e);const a=e.weightGoal-e.weight,o=Math.abs(a)/e.weeksToWeightGoal*this.CALORIES_PER_KILO/this.DAYS_IN_WEEK;return a>0?Math.round(t+o):Math.round(t-o)}validateDailyCalories(e){if(e.dailyCalories===void 0||typeof e.dailyCalories!="number"||e.dailyCalories<0)throw new Error("Valid dailyCalories is required for calorie calculation")}validateWeightGoal(e){if(e.weightGoal===void 0||typeof e.weightGoal!="number"||e.weightGoal<=0)throw new Error("Valid weightGoal is required for some calorie calculations")}validateWeight(e){if(e.weight===void 0||typeof e.weight!="number"||e.weight<=0)throw new Error("Valid weight is required for some calorie calculations")}validateWeeksToWeightGoal(e){if(e.weeksToWeightGoal===void 0||typeof e.weeksToWeightGoal!="number"||e.weeksToWeightGoal<=0)throw new Error("Valid weeksToWeightGoal is required for some calorie calculations")}estimateWeightChange(e,t,a){const r=this.CALORIES_PER_KILO*(t.weight/this.REFERENCE_WEIGHT);return e*a/r}}/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */class le{static createHealthCalculator(e){V(e);const t=re(e),a=se(t),r=new D,s=new P,o=new x,l=new U,h=new ne;return new G(a,r,s,o,l,h)}}var d=(i=>(i.UNDERWEIGHT_SEVERE="underweight, severe thinness",i.UNDERWEIGHT_MODERATE="underweight, moderate thinness",i.UNDERWEIGHT_MILD="underweight, mild thinness",i.NORMAL_WEIGHT="normal weight",i.OVERWEIGHT_PRE_OBESE="overweight, pre-obese",i.OBESE_CLASS_I="obese, class I",i.OBESE_CLASS_II="obese, class II",i.OBESE_CLASS_III="obese, class III",i))(d||{});class he{static fromString(e){const t=e.toLowerCase().trim();for(const[a,r]of Object.entries(d))if(r.toLowerCase()===t)return d[a];throw new Error(`Invalid BMI category: ${e}`)}}function ce(i){switch(i){case d.UNDERWEIGHT_SEVERE:return"High risk of malnutrition, weakened immune system, and more.";case d.UNDERWEIGHT_MODERATE:return"Risks include nutrient deficiencies and weakened immune response.";case d.UNDERWEIGHT_MILD:return"Moderate risk of malnutrition.";case d.NORMAL_WEIGHT:return"Lowest health risks with a balanced lifestyle.";case d.OVERWEIGHT_PRE_OBESE:return"Increased risk of cardiovascular diseases and type 2 diabetes.";case d.OBESE_CLASS_I:return"Significant risk of metabolic syndrome and heart disease.";case d.OBESE_CLASS_II:return"Increased risk for heart disease and stroke.";case d.OBESE_CLASS_III:return"Severe health risks including reduced life expectancy.";default:return"Unknown health risk."}}class de{constructor(e){n(this,"calculator");this.userModel=e,this.calculator=this.createCalculator()}createCalculator(){const e=this.userModel.getData();return le.createHealthCalculator({unitSystem:e.unitSystem,weight:e.weight??70,height:e.height??1.75,age:e.age,gender:e.gender,waist:e.waist,hip:e.hip,neck:e.neck,activityLevel:e.activityLevel,dailyCalories:e.dailyCalories,weightGoal:e.weightGoal,weeksToWeightGoal:e.weeksToWeightGoal})}getBmi(){return this.calculator=this.createCalculator(),this.calculator.getBmi()}getBmiType(){this.calculator=this.createCalculator();const e=this.calculator.getBmiType();return he.fromString(e)}getHealthRisk(){return ce(this.getBmiType())}getBmiPrime(){return this.calculator=this.createCalculator(),this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator=this.createCalculator(),this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator=this.createCalculator(),this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator=this.createCalculator(),this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator=this.createCalculator(),this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator=this.createCalculator(),this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator=this.createCalculator(),this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator=this.createCalculator(),this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator=this.createCalculator(),this.calculator.getEstimatedWeightChangeMonthly()}getEstimateTimeToWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getEstimateTimeToWeightGoal()}getCaloriesForWeightGoal(){return this.calculator=this.createCalculator(),this.calculator.getCaloriesForWeightGoal()}}class ue{constructor(e){n(this,"calculator");this.calculator=new de(e)}getBmi(){return this.calculator.getBmi()}getBmiType(){return this.calculator.getBmiType()}getHealthRisk(){return this.calculator.getHealthRisk()}getBmiPrime(){return this.calculator.getBmiPrime()}getIdealWeight(){return this.calculator.getIdealWeight()}getBodyFatPercentage(){return this.calculator.getBodyFatPercentage()}getWaistToHipRatio(){return this.calculator.getWaistToHipRatio()}getWaistToHeightRatio(){return this.calculator.getWaistToHeightRatio()}getLeanBodyMass(){return this.calculator.getLeanBodyMass()}getBmrMifflinStJeor(){return this.calculator.getBmrMifflinStJeor()}getBmrHarrisBenedict(){return this.calculator.getBmrHarrisBenedict()}getTdeeMifflinStJeor(){return this.calculator.getTdeeMifflinStJeor()}getTdeeHarrisBenedict(){return this.calculator.getTdeeHarrisBenedict()}getCaloricSurplusOrDeficit(){return this.calculator.getCaloricSurplusOrDeficit()}getEstimatedWeightChangeWeekly(){return this.calculator.getEstimatedWeightChangeWeekly()}getEstimatedWeightChangeMonthly(){return this.calculator.getEstimatedWeightChangeMonthly()}getCaloriesForWeightGoal(){return this.calculator.getCaloriesForWeightGoal()}getEstimateTimeToWeightGoal(){return this.calculator.getEstimateTimeToWeightGoal()}}class ge{constructor(){n(this,"router");n(this,"user");n(this,"calculator");this.user=v.getInstance(),this.calculator=new ue(this.user),this.router=new N(this.user,this.calculator)}start(){this.router.listen();const e=window.location.hash.slice(1)||"/";this.router.navigate(e)}}const me=new ge;me.start();
