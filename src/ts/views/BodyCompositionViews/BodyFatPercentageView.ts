// eslint-disable-next-line max-len
import { bodyFatPercentageTemplate } from '../../templates/BodyCompositionTemplates/bodyFatPercentageTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
// eslint-disable-next-line max-len
import { IFormattedBodyFatPercentageResults } from '../../interfaces/FormattedResults'
import { Gender } from '../../enums/Gender'

export class BodyFatPercentageView extends AbstractView {
  private hipInputGroup: HTMLElement | null = null

  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = bodyFatPercentageTemplate

    this.initializeCommonElements()
    this.initializeInputs(['weight', 'waist', 'hip', 'neck'])
    this.initializeSelectField('unitSystem')

    this.hipInputGroup = this.getHipInputGroup()
  }

  public bindGenderChange(handler: (gender: Gender) => void): void {
    const genderInputs = document.querySelectorAll('input[name="gender"]')
    genderInputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement
        handler(target.value as Gender)
      })
    })
  }

  public setGenderSelection(gender: Gender): void {
    const genderInput = document.querySelector(
      `input[value="${gender}"]`
    ) as HTMLInputElement
    if (genderInput) {
      genderInput.checked = true
    }
  }

  public toggleHipInputVisibility(show: boolean): void {
    if (this.hipInputGroup) {
      this.hipInputGroup.style.display = show ? 'block' : 'none'
    }
  }

  public clearHipInput(): void {
    const hipInput = this.inputs.get('hip')
    if (hipInput) {
      hipInput.value = ''
    }
  }

  private getHipInputGroup(): HTMLElement | null {
    const hipInput = this.inputs.get('hip')
    return hipInput?.closest('.input-group') || null
  }

  updateResults(data: IFormattedBodyFatPercentageResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.bodyFatPercentage
    rows[1].cells[1].textContent = data.leanBodyMass
  }
}
