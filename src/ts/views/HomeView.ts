import {
  CalculatorType,
  CalculatorDescriptions,
} from '../enums/CalculatorTypes'
import { CALCULATOR_ROUTES } from '../constants/FormConstants'

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
    return Object.keys(CALCULATOR_ROUTES)
      .map(
        (type) => `
        <div class="calculator-item">
          <div>
            <h3>${this.capitalizeWords(type)}</h3>
            <p>${this.getCalculatorDescription(type as CalculatorType)}</p>
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
    return CalculatorDescriptions[type] || 'Description not available.'
  }
}
