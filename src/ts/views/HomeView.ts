import { View } from './AbstractView'
import { ViewContainer } from '../utils/ViewContainer'
import { CalculatorType } from '../utils/CalculatorTypes'
import { RouteEnum } from '../utils/Routes'

export class HomeView extends View {
  constructor() {
    super(ViewContainer.MAIN)
  }

  render(): void {
    this.container.innerHTML = `<section class="hero">
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

    <div class="calculator-item">
      <div>
        <h3>BMI</h3>
        <p>Body Mass Index (BMI)</p>
        <p>
          A measure of body fat based on weight and height. Helps assess
          weight category (underweight, normal weight, overweight, obese).
        </p>
        <button data-calculator="${CalculatorType.BMI}">Calculate</button>
      </div>
      <img
        src="./assets/images/bmi.png"
        alt="A scale in abstract environment sourrunded by fruits"
      />
    </div>

    <div class="calculator-item">
      <div>
        <h3>BMR</h3>
        <p>Basal Metabolic Rate (BMR)</p>
        <p>
          The amount of energy your body needs to maintain basic functions
          while at rest.
        </p>
        <button data-calculator="${CalculatorType.BMR}">Calculate</button>
      </div>
      <img
        src="./assets/images/bmr.png"
        alt="An abstract painting of a human shape in resting position"
      />
    </div>

    <div class="calculator-item">
      <div>
        <h3>TDEE</h3>
        <p>Total Daily Energy Expenditure (TDEE)</p>
        <p>
          The number of calories you burn daily, including activities and
          exercise.
        </p>
        <button data-calculator="${CalculatorType.TDEE}">Calculate</button>
      </div>
      <img
        src="./assets/images/tdee.png"
        alt="A human silhouette running with leaves and fruits in the background, abstract"
      />
    </div>

    <div class="calculator-item">
      <div>
        <h3>Body Composition</h3>
        <p>Body Fat and Lean Mass</p>
        <p>
          Calculate body fat percentage, waist-to-hip ratio, and lean body
          mass.
        </p>
        <button data-calculator="${CalculatorType.BODY_COMPOSITION}">Calculate</button>
      </div>
      <img
        src="./assets/images/composition.png"
        alt="Abstract art with pieces of puzzle"
      />
    </div>

    <div class="calculator-item">
      <div>
        <h3>Calorie Calculations</h3>
        <p>Caloric Needs and Weight Changes</p>
        <p>
          Estimate daily calorie needs to reach your weight goal, and
          predict weight change based on your caloric intake.
        </p>
        <button data-calculator="${CalculatorType.CALORIE_CALCULATION}">Calculate</button>

      </div>
      <img
        src="./assets/images/calorie.png"
        alt="An abstract painting with two arms and a plate, abstract fruits and leafes in the air"
      />
    </div>
  </section>`
  }

  bindCalculatorButtons(handler: (route: RouteEnum) => void): void {
    const buttons = this.container.querySelectorAll('button[data-calculator]')
    buttons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const routeString = (event.target as HTMLButtonElement).dataset
          .calculator
        if (
          routeString &&
          Object.values(RouteEnum).includes(Number(routeString) as RouteEnum)
        ) {
          handler(Number(routeString) as RouteEnum)
        } else {
          console.error(`Invalid route: ${routeString}`)
        }
      })
    })
  }
}
