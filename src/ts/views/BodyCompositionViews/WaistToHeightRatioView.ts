import { User } from '../../types/User'
import { AbstractView } from '../AbstractView'
import { waistHeightRatioTemplate } from '../../templates/bodyCompositionTemplates/waistToHeightTemplate'
import { UnitSystem } from '../../enums/UnitSystem'
import { WaistHeightRatioFormData } from '../../types/FormTypes'

export class WaistToHeightRatioView extends AbstractView {
  private form: HTMLFormElement | null = null
  private resultsTable: HTMLTableElement | null = null
  private waistInput: HTMLInputElement | null = null
  private heightInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = waistHeightRatioTemplate

    this.form = this.getElement('#waist-height-ratio-form') as HTMLFormElement
    this.resultsTable = this.getElement('.results table') as HTMLTableElement
    this.waistInput = this.getElement('#waist') as HTMLInputElement
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
    if (this.waistInput && data.waist)
      this.waistInput.value = data.waist.toString()
    if (this.heightInput && data.height)
      this.heightInput.value = data.height.toString()
    this.updatePlaceholders()
  }

  private updatePlaceholders(): void {
    const isImperial = this.unitSystemSelect?.value === UnitSystem.IMPERIAL
    const placeholders = isImperial
      ? { waist: 'in', height: 'in' }
      : { waist: 'cm', height: 'cm' }

    this.waistInput?.setAttribute('placeholder', placeholders.waist)
    this.heightInput?.setAttribute('placeholder', placeholders.height)
  }

  bindCalculateEvent(handler: (data: WaistHeightRatioFormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      console.log('Form submitted')
      const formData = new FormData(this.form as HTMLFormElement)
      const data: WaistHeightRatioFormData = {
        unitSystem: formData.get('unitSystem') as UnitSystem,
        waist: parseFloat(formData.get('waist') as string),
        height: parseFloat(formData.get('height') as string),
      }
      console.log('Form data:', data)
      handler(data)
    })
  }

  updateResults(waistHeightRatio: number): void {
    if (this.resultsTable) {
      const resultCell = this.resultsTable.querySelector(
        'td:nth-child(2)'
      ) as HTMLTableCellElement
      if (resultCell) {
        resultCell.textContent = waistHeightRatio.toFixed(2)
      }
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
