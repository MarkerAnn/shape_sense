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
            <h3>${this.capitalizeWords(type)}</h3>
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

  private capitalizeWords(text: string): string {
    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  private getCalculatorDescription(type: CalculatorType): string {
    const descriptions = {
      [CalculatorType.BMI]:
        'Body Mass Index (BMI) - A measure of body fat based on weight and height.',
      [CalculatorType.BMR]:
        'Basal Metabolic Rate (BMR) - The amount of energy your body needs to maintain basic functions while at rest.',
      [CalculatorType.TDEE]:
        'Total Daily Energy Expenditure (TDEE) - The number of calories you burn daily, including activities and exercise.',
      [CalculatorType.WAIST_TO_HIP_RATIO]:
        'Calculate the ratio between your waist and hip circumference.',
      [CalculatorType.WAIST_TO_HEIGHT_RATIO]:
        'Calculate the ratio between your waist circumference and height.',
      [CalculatorType.BODY_FAT_PERCENTAGE]:
        'Body Fat Percentage and Lean Body Mass - Estimate the percentage of fat in your body based on your measurements.',
      [CalculatorType.CALORIE_GOAL]:
        'Calorie Calculations - Estimate daily calorie needs to reach your weight goal',
      [CalculatorType.WEIGHT_GOAL]:
        'Weight Goal - Calculate the time needed to reach your desired weight based on your calorie intake.',
    }
    return descriptions[type] || 'Description not available.'
  }
}
