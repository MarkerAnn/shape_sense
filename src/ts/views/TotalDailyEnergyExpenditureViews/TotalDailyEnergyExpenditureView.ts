// eslint-disable-next-line max-len
import { totalDailyEnergyExpenditureTemplate } from '../../templates/TotalDailyEnergyExpenditure/totalDailyEnergyExpenditureTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedTdeeResults } from '../../interfaces/FormattedResults'

/**
 * View class for rendering and updating the Total Daily Energy Expenditure (TDEE) calculator.
 * Extends the AbstractView to provide specific functionality for the TDEE calculator.
 *
 * @class
 * @extends {AbstractView}
 */
export class TotalDailyEnergyExpenditureView extends AbstractView {
  /**
   * Creates an instance of TotalDailyEnergyExpenditureView.
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
    container.innerHTML = totalDailyEnergyExpenditureTemplate

    this.initializeCommonElements()
    this.initializeInputs(['weight', 'height', 'age'])
    this.initializeSelectField('unitSystem')
  }

  /**
   * @inheritdoc
   */
  updateResults(data: IFormattedTdeeResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.totalDailyEnergyExpenditureHarris
    rows[1].cells[1].textContent = data.totalDailyEnergyExpenditureMifflin
  }
}
