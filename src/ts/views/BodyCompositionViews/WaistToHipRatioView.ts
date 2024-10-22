import { waistHipRatioTemplate } from '../../templates/bodyCompositionTemplates/waistToHipTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { User } from '../../types/User'

export class WaistToHipRatioView extends AbstractView {
  private waistInput: HTMLInputElement | null = null
  private hipInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = waistHipRatioTemplate

    this.initializeCommonElements()
    this.initializeInputs(['waist', 'hip'])

    this.waistInput = this.getElement('#waist') as HTMLInputElement
    this.hipInput = this.getElement('#hip') as HTMLInputElement
    this.unitSystemSelect = this.getElement('#unitSystem') as HTMLSelectElement

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

  updatePlaceholders(): void {
    const isImperial = this.unitSystemSelect?.value === UnitSystem.IMPERIAL
    const placeholders = isImperial
      ? { waist: 'in', hip: 'in' }
      : { waist: 'cm', hip: 'cm' }

    Object.keys(this.inputs).forEach((key) => {
      this.inputs[key].setAttribute(
        'placeholder',
        placeholders[key as keyof typeof placeholders]
      )
    })
  }

  bindCalculateEvent(handler: (data: FormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(this.form as HTMLFormElement)
      handler(formData)
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
}
