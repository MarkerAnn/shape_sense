import { waistHipRatioTemplate } from '../../templates/bodyCompositionTemplates.ts/waistToHipTemplate'
import { WaistHipRatioFormData } from '../../types/FormTypes'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { User } from '../../types/User'

export class WaistToHipRatioView extends AbstractView {
  private form: HTMLFormElement | null = null
  private resultsTable: HTMLTableElement | null = null
  private waistInput: HTMLInputElement | null = null
  private hipInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = waistHipRatioTemplate

    this.form = this.getElement('#waist-hip-ratio-form') as HTMLFormElement
    this.resultsTable = this.getElement('.results table') as HTMLTableElement
    this.waistInput = this.getElement('#waist') as HTMLInputElement
    this.hipInput = this.getElement('#hip') as HTMLInputElement
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
    if (this.hipInput && data.hip) this.hipInput.value = data.hip.toString()
    this.updatePlaceholders()
  }

  private updatePlaceholders(): void {
    const isImperial = this.unitSystemSelect?.value === UnitSystem.IMPERIAL
    const placeholders = isImperial
      ? { waist: 'in', hip: 'in' }
      : { waist: 'cm', hip: 'cm' }

    this.waistInput?.setAttribute('placeholder', placeholders.waist)
    this.hipInput?.setAttribute('placeholder', placeholders.hip)
  }

  bindCalculateEvent(handler: (data: WaistHipRatioFormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      console.log('Form submitted')
      const formData = new FormData(this.form as HTMLFormElement)
      const data: WaistHipRatioFormData = {
        unitSystem: formData.get('unitSystem') as UnitSystem,
        waist: parseFloat(formData.get('waist') as string),
        hip: parseFloat(formData.get('hip') as string),
      }
      console.log('Form data:', data)
      handler(data)
    })
  }

  updateResults(waistHipRatio: number): void {
    if (this.resultsTable) {
      const resultCell = this.resultsTable.querySelector(
        'td:nth-child(2)'
      ) as HTMLTableCellElement
      if (resultCell) {
        resultCell.textContent = waistHipRatio.toFixed(2)
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
