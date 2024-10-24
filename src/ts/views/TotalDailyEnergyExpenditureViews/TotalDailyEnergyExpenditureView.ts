// eslint-disable-next-line max-len
import { totalDailyEnergyExpenditureTemplate } from '../../templates/TotalDailyEnergyExpenditure/totalDailyEnergyExpenditureTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedTdeeResults } from '../../interfaces/FormattedResults'

export class TotalDailyEnergyExpenditureView extends AbstractView {
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = totalDailyEnergyExpenditureTemplate

    this.initializeCommonElements()
    this.initializeInputs(['weight', 'height', 'age'])
    this.initializeSelectField('unitSystem')
  }

  updateResults(data: IFormattedTdeeResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.totalDailyEnergyExpenditureHarris
    rows[1].cells[1].textContent = data.totalDailyEnergyExpenditureMifflin
  }
}
