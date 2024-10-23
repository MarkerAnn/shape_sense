// eslint-disable-next-line max-len
import { totalDailyEnergyExpenditureTemplate } from '../../templates/TotalDailyEnergyExpenditure/totalDailyEnergyExpenditureTemplate'
import { AbstractView } from '../AbstractView'
import { User } from '../../types/User'
import { HtmlSelectors } from '../../enums/HtmlSelectors'
import { InputFields } from '../../enums/InputFields'
import { UnitSystem } from '../../enums/UnitSystem'
// import { Gender } from "../../enums/Gender'
// import { ActivityLevel } from "../../enums/ActivityLevel"

export class TotalDailyEnergyExpenditureView extends AbstractView {
  private weightInput: HTMLInputElement | null = null
  private heightInput: HTMLInputElement | null = null
  private ageInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null
  private genderSelect: HTMLSelectElement | null = null
  private activityLevelSelect: HTMLSelectElement | null = null

  constructor() {
    super(() => this.unitSystemSelect?.value as UnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = totalDailyEnergyExpenditureTemplate

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
    this.genderSelect = this.getElement(
      HtmlSelectors.GENDER
    ) as HTMLSelectElement
    this.activityLevelSelect = this.getElement(
      HtmlSelectors.ACTIVITY_LEVEL
    ) as HTMLSelectElement

    this.unitSystemSelect?.addEventListener('change', () =>
      this.updatePlaceholders()
    )
  }

  fillForm(data: Partial<User>): void {
    if (this.unitSystemSelect && data.unitSystem) {
      this.unitSystemSelect.value = data.unitSystem
    }
    if (this.genderSelect && data.gender) {
      this.genderSelect.value = data.gender
    }
    if (this.activityLevelSelect && data.activityLevel) {
      this.activityLevelSelect.value = data.activityLevel
    }

    this.setInputValue(this.weightInput, data.weight)
    this.setInputValue(this.heightInput, data.height)
    this.setInputValue(this.ageInput, data.age)
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

      if (this.genderSelect) {
        formData.set('gender', this.genderSelect.value)
      }
      if (this.activityLevelSelect) {
        formData.set('activityLevel', this.activityLevelSelect.value)
      }

      handler(formData)
    })
  }

  updateResults(data: {
    totalDailyEnergyExpenditureHarris: number
    totalDailyEnergyExpenditureMifflin: number
  }): void {
    if (!this.resultsTable) {
      return
    }

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent =
      data.totalDailyEnergyExpenditureHarris.toFixed(0) + ' kcal/day'
    rows[1].cells[1].textContent =
      data.totalDailyEnergyExpenditureMifflin.toFixed(0) + ' kcal/day'
  }
}
