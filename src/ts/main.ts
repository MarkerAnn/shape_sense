// main.ts
class App {
  private calculatorButtons: NodeListOf<HTMLButtonElement>

  constructor() {
    this.calculatorButtons = document.querySelectorAll(
      '.calculator-item button'
    )
    this.init()
  }

  private init(): void {
    this.setupEventListeners()
  }

  private setupEventListeners(): void {
    this.calculatorButtons.forEach((button) => {
      button.addEventListener(
        'click',
        this.handleCalculatorButtonClick.bind(this)
      )
    })
  }

  private handleCalculatorButtonClick(event: Event): void {
    const button = event.target as HTMLButtonElement
    const calculatorType = button.id.replace('calculate-', '')
    console.log(`Opening calculator: ${calculatorType}`)
    // Add logic to open the calculators
  }
}

// Start the application when DOm loaded
document.addEventListener('DOMContentLoaded', () => {
  new App()
})
