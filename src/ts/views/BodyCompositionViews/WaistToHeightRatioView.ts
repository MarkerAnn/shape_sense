import { User } from '../../types/User'
import { AbstractView } from '../AbstractView'
import { waistHeightRatioTemplate } from '../../templates/bodyCompositionTemplates/waistToHeightTemplate'
import { UnitSystem } from '../../enums/UnitSystem'

export class WaistToHeightRatioView extends AbstractView {
  private waistInput: HTMLInputElement | null = null
  private heightInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = waistHeightRatioTemplate

    this.initializeCommonElements()
    this.initializeInputs(['waist', 'height'])

    this.waistInput = this.getElement('#waist') as HTMLInputElement
    this.heightInput = this.getElement('#height') as HTMLInputElement
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
    if (this.heightInput && data.height)
      this.heightInput.value = data.height.toString()
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
}
