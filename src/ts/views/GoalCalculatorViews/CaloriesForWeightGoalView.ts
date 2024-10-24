/* eslint-disable max-len */
import { caloriesForWeightGoalTemplate } from '../../templates/GoalCalculationTemplates/caloriesForWeightGoalTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedCaloriesForWeightGoalResults } from '../../interfaces/FormattedResults'
/* eslint-enable max-len */

export class CaloriesForWeightGoalView extends AbstractView {
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    super(getSelectedUnitSystem)
  }

  render(container: HTMLElement): void {
    container.innerHTML = caloriesForWeightGoalTemplate

    this.initializeCommonElements()
    this.initializeInputs([
      'weight',
      'height',
      'age',
      'weightGoal',
      'weeksToWeightGoal',
    ])
    this.initializeSelectField('unitSystem')
  }

  updateResults(data: IFormattedCaloriesForWeightGoalResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.dailyCalories
  }
}
