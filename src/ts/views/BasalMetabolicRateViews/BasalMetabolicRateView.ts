import { basalMetabolicRateTemplate } from '../../templates/BasalMetabolicRateTemplates/basalMetabolicRateTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormatBasaMetabolicRateResults } from '../../interfaces/FormattedResults'
import { SelectFieldName } from '../../types/FormFieldTypes'

export class BasalMetabolicRateView extends AbstractView {
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = basalMetabolicRateTemplate

    this.initializeCommonElements()
    this.initializeInputs(['weight', 'height', 'age'])
    this.initializeSelectFields(['unitSystem', 'gender'])
  }

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
