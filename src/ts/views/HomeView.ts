import { CalculatorDescriptions } from '../enums/CalculatorTypes'
import {
  CALCULATOR_ROUTES,
  CalculatorRouteType,
} from '../constants/RoutesConstants'

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
    return Object.entries(CALCULATOR_ROUTES)
      .map(
        ([type, route]) => `
        <div class="calculator-item">
          <div>
            <h3>${this.formatDisplayText(type)}</h3>
            <p>${this.getCalculatorDescription(type as CalculatorRouteType)}</p>
            <div class="button-container">
            <a href="#${route}" class="button">Calculate</a>
            </div>
          </div>
          <img src="./assets/images${route}.png" 
          alt="${this.formatDisplayText(type)} illustration">
        </div>
      `
      )
      .join('')
  }

  private formatDisplayText(text: string): string {
    return text
      .replace(/_/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  private getCalculatorDescription(type: CalculatorRouteType): string {
    return CalculatorDescriptions[type] ?? 'Description not available.'
  }
}
