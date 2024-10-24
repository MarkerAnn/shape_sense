// eslint-disable-next-line max-len
import { estimateTimeToWeightGoalTemplate } from '../../templates/GoalCalculationTemplates/estimateTimeToWeightGoalTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedTimeToWeightGoalResults } from '../../interfaces/FormattedResults'

export class EstimateTimeToWeightGoalView extends AbstractView {
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }
  render(container: HTMLElement): void {
    container.innerHTML = estimateTimeToWeightGoalTemplate

    this.initializeCommonElements()
    this.initializeInputs([
      'weight',
      'height',
      'age',
      'weightGoal',
      'dailyCalories',
    ])
    this.initializeSelectField('unitSystem')
  }

  updateResults(data: IFormattedTimeToWeightGoalResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.weeksToWeightGoal
  }
}
