import { CALCULATOR_DESCRIPTION } from '../enums/CalculatorTypes'
import {
  CALCULATOR_ROUTES,
  CalculatorRouteType,
} from '../constants/RoutesConstants'

/**
 * Class representing the home view for the application, displaying available calculators.
 */
export class HomeView {
  render(container: HTMLElement): void {
    container.innerHTML = `
        <section class="container">
          <h2>Our Calculators</h2>
          ${this.renderCalculatorItems()}
        </section>
      `
  }

  /**
   * Renders the calculator items as HTML strings.
   * To display the different calculators on the home page.
   * @returns A string containing the HTML for each calculator item.
   */
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

  /**
   * Formats a string by replacing underscores with spaces and capitalizing each word.
   * @param text - The text to format.
   * @returns The formatted text with capitalized words.
   */
  private formatDisplayText(text: string): string {
    return text
      .replace(/_/g, ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  /**
   * Retrieves the description for the specified calculator type.
   * @param type - The type of calculator as a key for retrieving its description.
   * @returns The description of the calculator, or a default message if not found.
   */
  private getCalculatorDescription(type: CalculatorRouteType): string {
    return CALCULATOR_DESCRIPTION[type] ?? 'Description not available.'
  }
}
