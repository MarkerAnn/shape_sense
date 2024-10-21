import { bodyFatPercentageTemplate } from '../../templates/bodyCompositionTemplates/bodyFatPercentageTemplate'
import { BodyFatPercentageFormData } from '../../types/FormTypes'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { User } from '../../types/User'
import { Gender } from '../../enums/Gender'

export class BodyFatPercentageView extends AbstractView {
  private form: HTMLFormElement | null = null
  private resultsTable: HTMLTableElement | null = null
  private weightInput: HTMLInputElement | null = null
  private waistInput: HTMLInputElement | null = null
  private hipInput: HTMLInputElement | null = null
  private neckInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null
  private genderInputs: HTMLInputElement[] = []

  render(container: HTMLElement): void {
    container.innerHTML = bodyFatPercentageTemplate

    this.form = this.getElement('#body-fat-percentage-form') as HTMLFormElement
    this.resultsTable = this.getElement('.results table') as HTMLTableElement
    this.weightInput = this.getElement('#weight') as HTMLInputElement
    this.waistInput = this.getElement('#waist') as HTMLInputElement
    this.hipInput = this.getElement('#hip') as HTMLInputElement
    this.neckInput = this.getElement('#neck') as HTMLInputElement
    this.unitSystemSelect = this.getElement('#unitSystem') as HTMLSelectElement
    const inputs = this.form.querySelectorAll('input[name="gender"]')
    this.genderInputs = Array.from(inputs) as HTMLInputElement[]

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
    if (this.unitSystemSelect && data.unitSystem)
      this.unitSystemSelect.value = data.unitSystem
    if (this.weightInput && data.weight)
      this.weightInput.value = data.weight.toString()
    if (this.waistInput && data.waist)
      this.waistInput.value = data.waist.toString()
    if (this.neckInput && data.neck) this.neckInput.value = data.neck.toString()
    if (this.genderInputs.length && data.gender) {
      const genderInput = this.genderInputs.find(
        (input) => input.value === data.gender
      )
      if (genderInput) genderInput.checked = true
    }
    if (this.hipInput && data.hip && data.gender === Gender.FEMALE) {
      this.hipInput.value = data.hip.toString()
    }
    this.updatePlaceholders()
    this.updateHipInputVisibility()
  }

  resetForm(): void {
    this.form?.reset()
    this.clearResults()
    this.updatePlaceholders()
    this.updateHipInputVisibility()
    this.hideError()
  }

  private updatePlaceholders(): void {
    const isImperial = this.unitSystemSelect?.value === UnitSystem.IMPERIAL
    const placeholders = isImperial
      ? { weight: 'lbs', waist: 'in', hip: 'in', neck: 'in' }
      : { weight: 'kg', waist: 'cm', hip: 'cm', neck: 'cm' }

    this.weightInput?.setAttribute('placeholder', placeholders.weight)
    this.waistInput?.setAttribute('placeholder', placeholders.waist)
    this.hipInput?.setAttribute('placeholder', placeholders.hip)
    this.neckInput?.setAttribute('placeholder', placeholders.neck)
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

  bindCalculateEvent(handler: (data: BodyFatPercentageFormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(this.form as HTMLFormElement)
      const data: BodyFatPercentageFormData = {
        unitSystem: formData.get('unitSystem') as UnitSystem,
        gender: formData.get('gender') as Gender,
        weight: parseFloat(formData.get('weight') as string),
        waist: parseFloat(formData.get('waist') as string),
        neck: parseFloat(formData.get('neck') as string),
      }

      if (data.gender === Gender.FEMALE) {
        const hipValue = formData.get('hip')
        if (hipValue) {
          data.hip = parseFloat(hipValue as string)
        } else {
          this.showError('Hip measurement is required for females.')
          return
        }
      }

      this.hideError()
      handler(data)
    })
  }

  updateResults(bodyFatPercentage: number): void {
    if (this.resultsTable) {
      const resultCell = this.resultsTable.querySelector(
        'td:nth-child(2)'
      ) as HTMLTableCellElement
      if (resultCell) {
        resultCell.textContent = bodyFatPercentage.toFixed(2) + '%'
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

  private clearResults(): void {
    if (this.resultsTable) {
      const resultCell = this.resultsTable.querySelector(
        'td:nth-child(2)'
      ) as HTMLTableCellElement
      if (resultCell) {
        resultCell.textContent = '-'
      }
    }
  }
}
