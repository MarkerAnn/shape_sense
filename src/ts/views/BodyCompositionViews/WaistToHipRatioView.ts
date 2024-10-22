// eslint-disable-next-line max-len
import { waistHipRatioTemplate } from '../../templates/bodyCompositionTemplates/waistToHipTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { User } from '../../types/User'
import { HtmlSelectors } from '../../enums/HtmlSelectors'
import { InputFields } from '../../enums/InputFields'

export class WaistToHipRatioView extends AbstractView {
  private waistInput: HTMLInputElement | null = null
  private hipInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = waistHipRatioTemplate

    this.initializeCommonElements()
    this.initializeInputs([InputFields.WAIST, InputFields.HIP])

    this.waistInput = this.getElement(HtmlSelectors.WAIST) as HTMLInputElement
    this.hipInput = this.getElement(HtmlSelectors.HIP) as HTMLInputElement
    this.unitSystemSelect = this.getElement('#unitSystem') as HTMLSelectElement

    this.unitSystemSelect?.addEventListener(
      'change',
      this.updatePlaceholders.bind(this)
    )
  }

  fillForm(data: Partial<User>): void {
    if (this.unitSystemSelect && data.unitSystem) {
      this.unitSystemSelect.value = data.unitSystem
    }

    this.setInputValue(this.waistInput, data.waist)
    this.setInputValue(this.hipInput, data.hip)

    this.updatePlaceholders()
  }

  private setInputValue(
    input: HTMLInputElement | null,
    value: number | undefined
  ): void {
    if (input && value) {
      input.value = value.toString()
    }
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
