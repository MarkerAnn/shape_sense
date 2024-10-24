/* eslint-disable max-len */
import { waistToHipRatioTemplate } from '../../templates/BodyCompositionTemplates/waistToHipTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedWaistToHipRationResults } from '../../interfaces/FormattedResults'
/* eslint-enable max-len */

export class WaistToHipRatioView extends AbstractView {
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = waistToHipRatioTemplate

    this.initializeCommonElements()
    this.initializeInputs(['hip', 'waist'])
    this.initializeSelectField('unitSystem')
  }

  updateResults(data: IFormattedWaistToHipRationResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.waistToHipRatio
  }
}
