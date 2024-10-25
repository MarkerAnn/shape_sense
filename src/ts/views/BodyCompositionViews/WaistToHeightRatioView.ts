/* eslint-disable max-len */
import { waistToHeightRatioTemplate } from '../../templates/BodyCompositionTemplates/waistToHeightTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedWaistToHeightRatioResults } from '../../interfaces/FormattedResults'
/* eslint-enable max-len */

/**
 * View class for rendering and updating the Waist to Height Ratio calculator.
 * Extends the AbstractView to provide specific functionality for this calculator.
 *
 * @class
 * @extends {AbstractView}
 */
export class WaistToHeightRatioView extends AbstractView {
  /**
   * Creates an instance of WaistToHeightRatioView.
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
    container.innerHTML = waistToHeightRatioTemplate

    this.initializeCommonElements()
    this.initializeInputs(['waist', 'height'])
    this.initializeSelectField('unitSystem')
  }

  /**
   * @inheritdoc
   */
  updateResults(data: IFormattedWaistToHeightRatioResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.waistToHeightRatio
  }
}
