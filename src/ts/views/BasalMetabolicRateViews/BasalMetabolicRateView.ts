/* eslint-disable max-len */
import { basalMetabolicRateTemplate } from '../../templates/BasalMetabolicRateTemplates/basalMetabolicRateTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormatBasaMetabolicRateResults } from '../../interfaces/FormattedResults'
import { SelectFieldName } from '../../types/FormFieldTypes'
/* eslint-enable max-len */

/**
 * View class for rendering and updating the Basal Metabolic Rate (BMR) calculator.
 * Extends the AbstractView to provide specific functionality for this calculator.
 *
 * @class
 * @extends {AbstractView}
 */
export class BasalMetabolicRateView extends AbstractView {
  /**
   * Creates an instance of BasalMetabolicRateView.
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
    container.innerHTML = basalMetabolicRateTemplate

    this.initializeCommonElements()
    this.initializeInputs(['weight', 'height', 'age'])
    this.initializeSelectFields(['unitSystem', 'gender'])
  }

  /**
   * @inheritdoc
   */
  updateResults(data: IFormatBasaMetabolicRateResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.basalMetabolicRateHarrisBenedict
    rows[1].cells[1].textContent = data.basalMetabolicRateMifflinStJeor
  }

  private initializeSelectFields(fieldNames: SelectFieldName[]): void {
    fieldNames.forEach((fieldName) => this.initializeSelectField(fieldName))
  }
}
