/* eslint-disable max-len */
import { estimateTimeToWeightGoalTemplate } from '../../templates/GoalCalculationTemplates/estimateTimeToWeightGoalTemplate'
import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { IFormattedTimeToWeightGoalResults } from '../../interfaces/FormattedResults'
/* eslint-disable max-len */

/**
 * View class for rendering and updating the Estimated Time to Reach Weight Goal calculator.
 * Extends the AbstractView to provide specific functionality for this calculator.
 *
 * @class
 * @extends {AbstractView}
 */
export class EstimateTimeToWeightGoalView extends AbstractView {
  /**
   * Creates an instance of EstimateTimeToWeightGoalView.
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

  /**
   * @inheritdoc
   */
  updateResults(data: IFormattedTimeToWeightGoalResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.weeksToWeightGoal
  }
}
