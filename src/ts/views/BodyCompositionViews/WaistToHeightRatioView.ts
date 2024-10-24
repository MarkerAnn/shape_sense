// eslint-disable-next-line max-len
import { waistToHeightRatioTemplate } from '../../templates/BodyCompositionTemplates/waistToHeightTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
// eslint-disable-next-line max-len
import { IFormattedWaistToHeightRatioResults } from '../../interfaces/FormattedResults'

export class WaistToHeightRatioView extends AbstractView {
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = waistToHeightRatioTemplate

    this.initializeCommonElements()
    this.initializeInputs(['waist', 'height'])
    this.initializeSelectField('unitSystem')
  }

  updateResults(data: IFormattedWaistToHeightRatioResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.waistToHeightRatio
  }
}
