/* eslint-disable max-len */
import { bodyFatPercentageTemplate } from '../../templates/BodyCompositionTemplates/bodyFatPercentageTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedBodyFatPercentageResults } from '../../interfaces/FormattedResults'
import { Gender } from '../../enums/Gender'
/* eslint-enable max-len */

/**
 * View class for rendering and updating the Body Fat Percentage calculator.
 * Extends the AbstractView to provide specific functionality for this calculator.
 *
 * @class
 * @extends {AbstractView}
 */
export class BodyFatPercentageView extends AbstractView {
  private hipInputGroup: HTMLElement | null = null

  /**
   * Creates an instance of BodyFatPercentageView.
   *
   * @param {() => UnitSystem} getSelectedUnitSystem - Function to get the selected unit system.
   */
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }

  /**
   * @inheritdoc
   */
  render(container: HTMLElement): void {
    container.innerHTML = bodyFatPercentageTemplate

    this.initializeCommonElements()
    this.initializeInputs(['height', 'waist', 'hip', 'neck'])
    this.initializeSelectField('unitSystem')

    this.hipInputGroup = this.getHipInputGroup()
  }

  /**
   * Binds the gender change event to the provided handler.
   *
   * @param {(gender: Gender) => void} handler - The handler to call when the gender changes.
   */
  public bindGenderChange(handler: (gender: Gender) => void): void {
    const genderInputs = document.querySelectorAll('input[name="gender"]')
    genderInputs.forEach((input) => {
      input.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement
        handler(target.value as Gender)
      })
    })
  }

  /**
   * Sets the gender selection in the form.
   *
   * @param {Gender} gender - The gender to select.
   */
  public setGenderSelection(gender: Gender): void {
    const genderInput = document.querySelector(
      `input[value="${gender}"]`
    ) as HTMLInputElement
    if (genderInput) {
      genderInput.checked = true
    }
  }

  /**
   * Toggles the visibility of the hip input group based on the gender.
   *
   * @param {boolean} isVisible - Whether the hip input group should be visible.
   */
  public toggleHipInputVisibility(show: boolean): void {
    if (this.hipInputGroup) {
      this.hipInputGroup.style.display = show ? 'block' : 'none'
    }
  }

  /**
   * Clears the hip input field.
   */
  public clearHipInput(): void {
    const hipInput = this.inputs.get('hip')
    if (hipInput) {
      hipInput.value = ''
    }
  }

  /**
   * Gets the hip input group element.
   *
   * @private
   * @returns {HTMLElement | null} The hip input group element.
   */
  private getHipInputGroup(): HTMLElement | null {
    const hipInput = this.inputs.get('hip')
    return hipInput?.closest('.input-group') || null
  }

  /**
   * @inheritdoc
   */
  updateResults(data: IFormattedBodyFatPercentageResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.bodyFatPercentage
    rows[1].cells[1].textContent = data.leanBodyMass
  }
}
