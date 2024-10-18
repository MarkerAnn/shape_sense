import { AbstractView } from './AbstractView'
import { BmiFormData } from '../types/FormTypes'
import { UnitSystem } from '../enums/UnitSystem'
import { User } from '../types/User'

export class BmiView extends AbstractView {
  private form: HTMLFormElement | null = null
  private errorMessage: HTMLElement | null = null
  private resultsTable: HTMLTableElement | null = null
  private heightInput: HTMLInputElement | null = null
  private weightInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = `
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
    `

    this.form = container.querySelector('#bmi-form')
    this.errorMessage = container.querySelector('.error-message')
    this.resultsTable = container.querySelector('.results table')
    this.weightInput = container.querySelector('#weight')
    this.heightInput = container.querySelector('#height')
    this.unitSystemSelect = container.querySelector('#unitSystem')

    this.unitSystemSelect?.addEventListener('change', () =>
      this.updatePlaceholders()
    )
  }

  fillForm(userData: Partial<User>): void {
    if (userData.unitSystem && this.unitSystemSelect) {
      this.unitSystemSelect.value = userData.unitSystem
    }
    if (userData.height && this.heightInput) {
      this.heightInput.value = userData.height.toString()
    }
    if (userData.weight && this.weightInput) {
      this.weightInput.value = userData.weight.toString()
    }
    console.log(userData)
    this.updatePlaceholders()
  }

  private updatePlaceholders(): void {
    if (this.unitSystemSelect?.value === 'imperial') {
      this.heightInput?.setAttribute('placeholder', 'ft')
      this.weightInput?.setAttribute('placeholder', 'lbs')
    } else {
      this.heightInput?.setAttribute('placeholder', 'm')
      this.weightInput?.setAttribute('placeholder', 'kg')
    }
  }

  bindCalculateEvent(handler: (data: BmiFormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(this.form as HTMLFormElement)
      const data: BmiFormData = {
        unitSystem: formData.get('unitSystem') as UnitSystem,
        height: parseFloat(formData.get('height') as string),
        weight: parseFloat(formData.get('weight') as string),
      }
      handler(data)
    })
  }

  showError(message: string): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = message
      this.errorMessage.style.display = 'block'
    }
  }

  hideError(): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = ''
      this.errorMessage.style.display = 'none'
    }
  }

  updateResults(
    bmi: number,
    category: string,
    healthRisk: string,
    idealWeight: [number, number]
  ): void {
    if (this.resultsTable) {
      const rows = this.resultsTable.rows
      rows[0].cells[1].textContent = bmi.toFixed(2)
      rows[1].cells[1].textContent = category
      rows[2].cells[1].textContent = healthRisk
      rows[3].cells[1].textContent = `${idealWeight[0].toFixed(0)} - ${idealWeight[1].toFixed(0)} kg`
    }
  }
  bindResetEvent(handler: () => void): void {
    this.form
      ?.querySelector('button[type="reset"]')
      ?.addEventListener('click', (event) => {
        event.preventDefault()
        handler()
      })
  }

  resetForm(): void {
    if (this.form) {
      this.form.reset()
      this.updatePlaceholders()
    }
    this.clearResults()
  }

  clearResults(): void {
    if (this.resultsTable) {
      const rows = this.resultsTable.rows
      rows[0].cells[1].textContent = '-'
      rows[1].cells[1].textContent = '-'
      rows[2].cells[1].textContent = '-'
    }
  }
}
