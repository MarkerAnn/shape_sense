// eslint-disable-next-line max-len
import { bodyFatPercentageTemplate } from '../../templates/BodyCompositionTemplates/bodyFatPercentageTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { User } from '../../types/User'
import { Gender } from '../../enums/Gender'
import { HtmlSelectors } from '../../enums/HtmlSelectors'
import { InputFields } from '../../enums/InputFields'

export class BodyFatPercentageView extends AbstractView {
  private weightInput: HTMLInputElement | null = null
  private waistInput: HTMLInputElement | null = null
  private hipInput: HTMLInputElement | null = null
  private neckInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null
  private genderInputs: HTMLInputElement[] = []

  constructor() {
    super(() => this.unitSystemSelect?.value as UnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = bodyFatPercentageTemplate

    this.initializeCommonElements()
    this.initializeInputs([
      InputFields.WEIGHT,
      InputFields.WAIST,
      InputFields.HIP,
      InputFields.NECK,
    ])

    this.weightInput = this.getElement(HtmlSelectors.WEIGHT) as HTMLInputElement
    this.waistInput = this.getElement(HtmlSelectors.WAIST) as HTMLInputElement
    this.hipInput = this.getElement(HtmlSelectors.HIP) as HTMLInputElement
    this.neckInput = this.getElement(HtmlSelectors.NECK) as HTMLInputElement
    this.unitSystemSelect = this.getElement(
      HtmlSelectors.UNIT_SYSTEM
    ) as HTMLSelectElement
    const inputs = this.form?.querySelectorAll('input[name="gender"]')
    this.genderInputs = Array.from(inputs || []) as HTMLInputElement[]

    this.unitSystemSelect?.addEventListener(
      'change',
      this.updatePlaceholders.bind(this)
    )
    this.genderInputs.forEach((input) => {
      input.addEventListener('change', this.updateHipInputVisibility.bind(this))
    })

    this.updateHipInputVisibility()
  }

  fillForm(data: Partial<User>): void {
    if (this.unitSystemSelect && data.unitSystem) {
      this.unitSystemSelect.value = data.unitSystem
    }

    this.setInputValue(this.weightInput, data.weight)
    this.setInputValue(this.waistInput, data.waist)
    this.setInputValue(this.neckInput, data.neck)

    if (data.gender) {
      this.setGender(data.gender)
      this.handleHipInput(data)
    }

    this.updatePlaceholders()
    this.updateHipInputVisibility()
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

  private handleHipInput(data: Partial<User>): void {
    if (this.hipInput && data.hip && data.gender === Gender.FEMALE) {
      this.hipInput.value = data.hip.toString()
    }
  }

  private updateHipInputVisibility(): void {
    const hipInputGroup = this.getElement(
      '.input-group:has(#hip)'
    ) as HTMLElement
    const isFemale = (
      this.getElement('input[value="female"]') as HTMLInputElement
    )?.checked

    if (hipInputGroup) {
      hipInputGroup.style.display = isFemale ? 'block' : 'none'
    }
  }

  bindCalculateEvent(handler: (data: FormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(this.form as HTMLFormElement)
      handler(formData)
    })
  }

  updateResults(data: {
    bodyFatPercentage: number
    leanBodyMass: number
  }): void {
    if (!this.resultsTable) {
      return
    }

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.bodyFatPercentage.toFixed(2) + '%'
    rows[1].cells[1].textContent = data.leanBodyMass.toFixed(2) + ' kg'
  }
}

// TODO: Fortsätt fylla i de andra vyerna med enums och typer
