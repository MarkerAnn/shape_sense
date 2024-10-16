var l=Object.defineProperty;var u=(t,e,o)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var n=(t,e,o)=>(u(t,typeof e!="symbol"?e+"":e,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();class d{}var s=(t=>(t.BMI="bmi",t.BMR="bmr",t.TDEE="tdee",t.BODY_COMPOSITION="body-composition",t.CALORIE_CALCULATION="calorie-calculation",t))(s||{});class h extends d{render(e){e.innerHTML=`
        <section class="hero">
          <div class="hero-text">
            <h1>Welcome to Shape Sense Zone</h1>
            <p>
              We offer a variety of health calculators to help you track your
              progress and set your goals. Choose a calculator below to get
              started.
            </p>
          </div>
        </section>
        <section class="calculators">
          <h2>Our Calculators</h2>
          ${this.renderCalculatorItems()}
        </section>
      `}renderCalculatorItems(){return Object.values(s).map(e=>`
        <div class="calculator-item">
          <div>
            <h3>${e}</h3>
            <p>${this.getCalculatorDescription(e)}</p>
            <a href="#/${e.toLowerCase()}" class="button">Calculate</a>
          </div>
          <img src="./assets/images/${e.toLowerCase()}.png" alt="${e} illustration">
        </div>
      `).join("")}getCalculatorDescription(e){return{[s.BMI]:"Body Mass Index (BMI) - A measure of body fat based on weight and height.",[s.BMR]:"Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.",[s.TDEE]:"Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.",[s.BODY_COMPOSITION]:"Body Composition - Calculate body fat percentage, waist-to-hip ratio, and lean body mass.",[s.CALORIE_CALCULATION]:"Calorie Calculations - Estimate daily calorie needs to reach your weight goal, and predict weight change based on your caloric intake."}[e]||"Description not available."}}class f{constructor(){n(this,"view");this.view=new h}init(e){this.view.render(e)}}class p{constructor(){n(this,"currentController",null)}listen(){window.addEventListener("hashchange",()=>{const o=window.location.hash.slice(1);this.navigate(o)});const e=window.location.hash.slice(1)||"/";this.navigate(e)}navigate(e){const o=document.getElementById("app");if(o){switch(o.innerHTML="",e){case"/":this.currentController=new f;break;case"/bmi":break;default:o.innerHTML="<h2>404 Not Found</h2>";return}this.currentController&&this.currentController.init(o)}}}class m{constructor(){n(this,"router");this.router=new p}start(){this.router.listen();const e=window.location.hash.slice(1)||"/";this.router.navigate(e)}}const g=new m;g.start();
