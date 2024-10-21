import { CalculatorType } from '../enums/CalculatorTypes'

export class HomeView {
  render(container: HTMLElement): void {
    container.innerHTML = `
        <section class="container">
          <h2>Our Calculators</h2>
          ${this.renderCalculatorItems()}
        </section>
      `
  }

  private renderCalculatorItems(): string {
    return Object.values(CalculatorType)
      .map(
        (type) => `
        <div class="calculator-item">
          <div>
            <h3>${type}</h3>
            <p>${this.getCalculatorDescription(type)}</p>
            <div class="button-container">
            <a href="#/${type.toLowerCase()}" class="button">Calculate</a>
            </div>
          </div>
          <img src="./assets/images/${type.toLowerCase()}.png" 
          alt="${type} illustration">
        </div>
      `
      )
      .join('')
  }

  private getCalculatorDescription(type: CalculatorType): string {
    const descriptions = {
      [CalculatorType.BMI]:
        'Body Mass Index (BMI) - A measure of body fat based on weight and height.',
      [CalculatorType.BMR]:
        'Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.',
      [CalculatorType.TDEE]:
        'Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.',
      [CalculatorType.BODY_COMPOSITION]:
        'Body Composition - Calculate body fat percentage, waist-to-hip ratio, and lean body mass.',
      [CalculatorType.CALORIE_CALCULATION]:
        'Calorie Calculations - Estimate daily calorie needs to reach your weight goal, and predict weight change based on your caloric intake.',
    }
    return descriptions[type] || 'Description not available.'
  }
}
