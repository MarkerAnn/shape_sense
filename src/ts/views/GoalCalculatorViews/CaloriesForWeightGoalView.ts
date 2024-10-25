/* eslint-disable max-len */
import { caloriesForWeightGoalTemplate } from '../../templates/GoalCalculationTemplates/caloriesForWeightGoalTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedCaloriesForWeightGoalResults } from '../../interfaces/FormattedResults'
/* eslint-enable max-len */

/**
 * View class for rendering and updating the Calories Needed to Reach Weight Goal calculator.
 * Extends the AbstractView to provide specific functionality for this calculator.
 *
 * @class
 * @extends {AbstractView}
 */
export class CaloriesForWeightGoalView extends AbstractView {
  /**
   * Creates an instance of CaloriesForWeightGoalView.
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

  /**
   * @inheritdoc
   */
  updateResults(data: IFormattedCaloriesForWeightGoalResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.dailyCalories
  }
}
