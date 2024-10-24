import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { User } from '../../types/User'
import { bmiTemplate } from '../../templates/BmiTemplates/bmiTemplate'

export class BmiView extends AbstractView {
  constructor() {
    super(() => this.getUnitSystemValue())
  }

  render(container: HTMLElement): void {
    container.innerHTML = bmiTemplate

    this.initializeCommonElements()
    this.initializeInputs(['weight', 'height'])
    this.initializeSelectField('unitSystem')

    const unitSelect = this.selects.get('unitSystem')
    unitSelect?.addEventListener('change', () => this.updatePlaceholders())
  }

  fillForm(data: Partial<User>): void {
    this.fillFormData(data)
  }

  bindCalculateEvent(handler: (data: FormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(this.form as HTMLFormElement)
      handler(formData)
    })
  }

  updateResults(data: BmiResults): void {
    if (!this.resultsTable) return

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = this.formatValue(data.bmi)
    rows[1].cells[1].textContent = data.category
    rows[2].cells[1].textContent = data.healthRisk
    rows[3].cells[1].textContent = this.formatIdealWeight(data.idealWeight)
  }

  private formatValue(value: number): string {
    return value.toFixed(1)
  }

  private formatIdealWeight([min, max]: [number, number]): string {
    return `${this.formatValue(min)} - ${this.formatValue(max)} kg`
  }

  private getUnitSystemValue(): UnitSystem {
    const unitSelect = this.selects.get('unitSystem')
    return (unitSelect?.value as UnitSystem) ?? UnitSystem.METRIC
  }
}

// Interface för tydligare typning av resultat
interface BmiResults {
  bmi: number
  category: string
  healthRisk: string
  idealWeight: [number, number]
}
