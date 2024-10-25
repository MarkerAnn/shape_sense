/* eslint-disable max-len */
import { waistToHipRatioTemplate } from '../../templates/BodyCompositionTemplates/waistToHipTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedWaistToHipRationResults } from '../../interfaces/FormattedResults'
/* eslint-enable max-len */

/**
 * View class for rendering and updating the Waist to Hip Ratio calculator.
 * Extends the AbstractView to provide specific functionality for this calculator.
 *
 * @class
 * @extends {AbstractView}
 */
export class WaistToHipRatioView extends AbstractView {
  /**
   * Creates an instance of WaistToHipRatioView.
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
    container.innerHTML = waistToHipRatioTemplate

    this.initializeCommonElements()
    this.initializeInputs(['hip', 'waist'])
    this.initializeSelectField('unitSystem')
  }

  /**
   * @inheritdoc
   */
  updateResults(data: IFormattedWaistToHipRationResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.waistToHipRatio
  }
}
