import { AbstractView } from '../AbstractView'
import { bmiTemplate } from '../../templates/BmiTemplates/bmiTemplate'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedBmiResults } from '../../interfaces/FormattedResults'

export class BmiView extends AbstractView {
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = bmiTemplate
    this.initializeCommonElements()
    this.initializeInputs(['weight', 'height'])
    this.initializeSelectField('unitSystem')
  }

  updateResults(data: IFormattedBmiResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.bmi
    rows[1].cells[1].textContent = data.category
    rows[2].cells[1].textContent = data.healthRisk
    rows[3].cells[1].textContent = data.idealWeight
  }
}
