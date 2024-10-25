import { AbstractView } from '../AbstractView'
import { bmiTemplate } from '../../templates/BmiTemplates/bmiTemplate'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedBmiResults } from '../../interfaces/FormattedResults'

/**
 * View class for rendering and updating the Body Mass Index (BMI) calculator.
 * Extends the AbstractView to provide specific functionality for this calculator.
 *
 * @class
 * @extends {AbstractView}
 */
export class BmiView extends AbstractView {
  /**
   * Creates an instance of BmiView.
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
    container.innerHTML = bmiTemplate
    this.initializeCommonElements()
    this.initializeInputs(['weight', 'height'])
    this.initializeSelectField('unitSystem')
  }

  /**
   * @inheritdoc
   */
  updateResults(data: IFormattedBmiResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.bmi
    rows[1].cells[1].textContent = data.category
    rows[2].cells[1].textContent = data.healthRisk
    rows[3].cells[1].textContent = data.idealWeight
  }
}
