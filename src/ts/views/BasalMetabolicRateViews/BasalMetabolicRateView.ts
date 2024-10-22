// eslint-disable-next-line max-len
import { basalMetabolicRateTemplate } from '../../templates/BasalMetabolicRateTemplates/basalMetabolicRateTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { User } from '../../types/User'
import { Gender } from '../../enums/Gender'
import { HtmlSelectors } from '../../enums/HtmlSelectors'
import { InputFields } from '../../enums/InputFields'
// import { unitPlaceholders } from '../../constants/UnitPlaceholders'

export class BasalMetabolicRateView extends AbstractView {
  private weightInput: HTMLInputElement | null = null
  private heightInput: HTMLInputElement | null = null
  private ageInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null
  private genderInputs: HTMLInputElement[] = []

  render(container: HTMLElement): void {
    container.innerHTML = basalMetabolicRateTemplate

    this.initializeCommonElements()
    this.initializeInputs([
      InputFields.WEIGHT,
      InputFields.HEIGHT,
      InputFields.AGE,
    ])

    this.weightInput = this.getElement(HtmlSelectors.WEIGHT) as HTMLInputElement
    this.heightInput = this.getElement(HtmlSelectors.HEIGHT) as HTMLInputElement
    this.ageInput = this.getElement(HtmlSelectors.AGE) as HTMLInputElement
    this.unitSystemSelect = this.getElement(
      HtmlSelectors.UNIT_SYSTEM
    ) as HTMLSelectElement
    const inputs = this.form?.querySelectorAll('input[name="gender"]')
    this.genderInputs = Array.from(inputs || []) as HTMLInputElement[]

    this.unitSystemSelect?.addEventListener(
      'change',
      this.updatePlaceholders.bind(this)
    )
  }

  fillForm(data: Partial<User>): void {
    if (this.unitSystemSelect && data.unitSystem) {
      this.unitSystemSelect.value = data.unitSystem
    }

    this.setInputValue(this.weightInput, data.weight)
    this.setInputValue(this.heightInput, data.height)
    this.setInputValue(this.ageInput, data.age)

    if (data.gender) {
      this.setGender(data.gender)
    }

    this.updatePlaceholders()
  }

  private setInputValue(
    input: HTMLInputElement | null,
    value: number | undefined
  ): void {
    if (input && value !== undefined) {
      input.value = value.toString()
    }
  }

  private setGender(gender: Gender): void {
    const genderInput = this.genderInputs.find(
      (input) => input.value === gender
    )
    if (genderInput) {
      genderInput.checked = true
    }
  }

  protected updatePlaceholders(): void {
    const isImperial = this.unitSystemSelect?.value === UnitSystem.IMPERIAL
    const placeholders = isImperial
      ? { weight: 'lb', height: 'in', age: 'years' }
      : { weight: 'kg', height: 'cm', age: 'years' }

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

  updateResults(data: {
    basalMetabolicRateHarrisBenedict: number
    basalMetabolicRateMifflinStJeor: number
  }): void {
    if (!this.resultsTable) {
      return
    }

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent =
      data.basalMetabolicRateHarrisBenedict.toFixed(0) + ' kcal/day'
    rows[1].cells[1].textContent =
      data.basalMetabolicRateMifflinStJeor.toFixed(0) + ' kcal/day'
  }
}
// TODO: Implement a constant for magic strings in updatePlaceholders
