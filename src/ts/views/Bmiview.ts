// import { AbstractView } from './AbstractView'
// import { BmiController } from '../controllers/BmiController'

// export class BmiView extends AbstractView {
//   render(app: HTMLElement): void {
//     app.innerHTML = `<section class="container">
//       <h1>BMI Calculator</h1>
//       <p class="description">BMI is a measure of body fat based on height and weight that applies to adult men and women.</p>

//       <div class="additional-info">
//         <h2>What is BMI?</h2>
//         <p>Body Mass Index (BMI) is a simple calculation used to assess a person's body weight in relation to their height. It's calculated by dividing an individual's weight (in kilograms) by the square of their height (in meters). BMI is commonly used as a general indicator of whether someone is underweight, normal weight, overweight, or obese.</p>
//         <p>The BMI categories are:</p>
//         <ul>
//           <li>Underweight: BMI less than 18.5</li>
//           <li>Normal weight: BMI between 18.5 and 24.9</li>
//           <li>Overweight: BMI between 25 and 29.9</li>
//           <li>Obesity: BMI 30 or greater</li>
//         </ul>
//         <h3>Limitations of BMI</h3>
//         <p>While BMI is widely used, it has some limitations. It doesn't differentiate between muscle mass and fat mass, so individuals with high muscle mass (such as athletes) may be classified as overweight or obese even though they have low body fat. Additionally, BMI doesn't consider fat distribution, which is an important factor in assessing health risks. It also doesn't account for differences in body composition due to age, gender, or ethnicity.</p>
//         <p>For a more comprehensive assessment of health, BMI should be used alongside other measurements, such as waist-to-hip ratio or body fat percentage.</p>
//       </div>

//       <form id="bmi-form">
//         <div class="input-group">
//           <label for="unitSystem">Unit System</label>
//           <select id="unitSystem" name="unitSystem">
//             <option value="metric">Metric</option>
//             <option value="imperial">Imperial</option>
//           </select>
//         </div>
//         <div class="input-group">
//           <label for="height">Height</label>
//           <input type="text" id="height" name="height" placeholder="m">
//         </div>
//         <div class="input-group">
//           <label for="weight">Weight</label>
//           <input type="text" id="weight" name="weight" placeholder="kg">
//         </div>
//         <div class="button-group">
//           <button type="reset">Reset</button>
//           <button type="submit">Calculate</button>
//         </div>
//       </form>

//       <div class="error-message"></div>
//       <div class="results">
//         <h2>Results</h2>
//         <table>
//           <tr>
//             <td>BMI</td>
//             <td>-</td>
//           </tr>
//           <tr>
//             <td>Category</td>
//             <td>-</td>
//           </tr>
//           <tr>
//             <td>Health Risk</td>
//             <td>-</td>
//           </tr>
//         </table>
//       </div>
//     </section>
//     `

//     const form = document.getElementById('bmi-form') as HTMLFormElement
//     form.addEventListener('submit', (event) => {
//       event.preventDefault()

//       const weight = parseFloat(
//         (document.getElementById('weight') as HTMLInputElement).value
//       )
//       const height = parseFloat(
//         (document.getElementById('height') as HTMLInputElement).value
//       )
//       const unitSystem = (
//         document.getElementById('unitSystem') as HTMLSelectElement
//       ).value

//       // Kalla controller för att göra BMI-beräkningen
//       this.controller.calculateBMI(weight, height, unitSystem)
//     })
//   }

//   displayResult(bmi: number, category: string, risk: string): void {
//     const bmiResult = document.getElementById('bmiResult')
//     const bmiCategory = document.getElementById('bmiCategory')
//     const healthRisk = document.getElementById('healthRisk')

//     if (bmiResult) bmiResult.innerHTML = bmi.toFixed(2)
//     if (bmiCategory) bmiCategory.innerHTML = category
//     if (healthRisk) healthRisk.innerHTML = risk
//   }
// }
