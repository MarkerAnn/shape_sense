import { AbstractView } from './AbstractView'
import { BmiFormData } from '../types/FormTypes'
import { UnitSystem } from '../enums/UnitSystem'
import { User } from '../types/User'
import { bmiTemplate } from '../templates/bmiTemplate'

export class BmiView extends AbstractView {
  private form: HTMLFormElement | null = null
  private errorMessage: HTMLElement | null = null
  private resultsTable: HTMLTableElement | null = null
  private heightInput: HTMLInputElement | null = null
  private weightInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = bmiTemplate

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
