// eslint-disable-next-line max-len
import { waistHeightRatioTemplate } from '../../templates/BodyCompositionTemplates/waistToHeightTemplate'
import { User } from '../../types/User'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { HtmlSelectors } from '../../enums/HtmlSelectors'
import { InputFields } from '../../enums/InputFields'

export class WaistToHeightRatioView extends AbstractView {
  private waistInput: HTMLInputElement | null = null
  private heightInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  constructor() {
    super(() => this.unitSystemSelect?.value as UnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = waistHeightRatioTemplate

    this.initializeCommonElements()
    this.initializeInputs([InputFields.WAIST, InputFields.HEIGHT])

    this.waistInput = this.getElement(HtmlSelectors.WAIST) as HTMLInputElement
    this.heightInput = this.getElement(HtmlSelectors.HEIGHT) as HTMLInputElement
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
    this.setInputValue(this.heightInput, data.height)

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
