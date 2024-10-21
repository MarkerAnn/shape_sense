import { AbstractView } from './AbstractView'
import { BmiFormData } from '../types/FormTypes'
import { UnitSystem } from '../enums/UnitSystem'
import { User } from '../types/User'
import { bmiTemplate } from '../templates/bmiTemplate'

export class BmiView extends AbstractView {
  private form: HTMLFormElement | null = null
  // private errorMessage: HTMLElement | null = null
  private resultsTable: HTMLTableElement | null = null
  private heightInput: HTMLInputElement | null = null
  private weightInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = bmiTemplate

    this.form = this.getElement('#bmi-form') as HTMLFormElement
    // this.errorMessage = this.getElement('.error-message')
    this.resultsTable = this.getElement('.results table') as HTMLTableElement
    this.weightInput = this.getElement('#weight') as HTMLInputElement
    this.heightInput = this.getElement('#height') as HTMLInputElement
    this.unitSystemSelect = this.getElement(
      'select[name="unitSystem"]'
    ) as HTMLSelectElement

    this.unitSystemSelect?.addEventListener(
      'change',
      this.updatePlaceholders.bind(this)
    )
  }

  fillForm(data: Partial<User>): void {
    if (this.unitSystemSelect && data.unitSystem)
      this.unitSystemSelect.value = data.unitSystem
    if (this.heightInput && data.height)
      this.heightInput.value = data.height.toString()
    if (this.weightInput && data.weight)
      this.weightInput.value = data.weight.toString()
    this.updatePlaceholders()
  }

  private updatePlaceholders(): void {
    const isImperial = this.unitSystemSelect?.value === UnitSystem.IMPERIAL
    const placeholders = isImperial
      ? { height: 'ft', weight: 'lbs' }
      : { height: 'm', weight: 'kg' }

    this.heightInput?.setAttribute('placeholder', placeholders.height)
    this.weightInput?.setAttribute('placeholder', placeholders.weight)
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
    const resetButton = this.form?.querySelector('button[type="reset"]')
    resetButton?.addEventListener('click', (event) => {
      event.preventDefault()
      handler()
    })
  }

  resetForm(): void {
    this.form?.reset()
    this.clearResults()
    this.updatePlaceholders()
  }

  private clearResults(): void {
    if (this.resultsTable) {
      const rows = this.resultsTable.rows
      for (let i = 0; i < rows.length; i++) {
        rows[i].cells[1].textContent = '-'
      }
    }
  }
}
