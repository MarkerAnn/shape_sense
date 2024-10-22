import { AbstractView } from '../AbstractView'
import { UnitSystem } from '../../enums/UnitSystem'
import { User } from '../../types/User'
import { bmiTemplate } from '../../templates/bmiTemplate'
import { HtmlSelectors } from '../../enums/HtmlSelectors'
import { InputFields } from '../../enums/InputFields'

export class BmiView extends AbstractView {
  private heightInput: HTMLInputElement | null = null
  private weightInput: HTMLInputElement | null = null
  private unitSystemSelect: HTMLSelectElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = bmiTemplate

    this.initializeCommonElements()
    this.initializeInputs([InputFields.HEIGHT, InputFields.WEIGHT])

    this.weightInput = this.getElement(HtmlSelectors.WEIGHT) as HTMLInputElement
    this.heightInput = this.getElement(HtmlSelectors.HEIGHT) as HTMLInputElement
    this.unitSystemSelect = this.getElement(
      HtmlSelectors.UNIT_SYSTEM
    ) as HTMLSelectElement

    this.unitSystemSelect?.addEventListener(
      'change',
      this.updatePlaceholders.bind(this)
    )
  }

  fillForm(data: Partial<User>): void {
    if (this.unitSystemSelect && data.unitSystem) {
      this.unitSystemSelect.value = data.unitSystem
    }

    this.setInputValue(this.heightInput, data.height)
    this.setInputValue(this.weightInput, data.weight)

    this.updatePlaceholders()
  }

  private setInputValue(
    input: HTMLInputElement | null,
    value: number | undefined
  ): void {
    if (input && value) {
      input.value = value.toString()
    }
  }

  updatePlaceholders(): void {
    const isImperial = this.unitSystemSelect?.value === UnitSystem.IMPERIAL
    const placeholders = isImperial
      ? { height: 'ft', weight: 'lbs' }
      : { height: 'm', weight: 'kg' }

    Object.keys(this.inputs).forEach((key) => {
      this.inputs[key].setAttribute(
        'placeholder',
        placeholders[key as keyof typeof placeholders]
      )
    })
  }

  bindCalculateEvent(handler: (data: FormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(this.form as HTMLFormElement)
      handler(formData)
    })
  }

  updateResults(data: {
    bmi: number
    category: string
    healthRisk: string
    idealWeight: [number, number]
  }): void {
    if (!this.resultsTable) {
      return
    }

    const rows = this.resultsTable.rows
    rows[0].cells[1].textContent = data.bmi.toFixed(2)
    rows[1].cells[1].textContent = data.category
    rows[2].cells[1].textContent = data.healthRisk

    const minWeight = data.idealWeight[0].toFixed(0)
    const maxWeight = data.idealWeight[1].toFixed(0)
    rows[3].cells[1].textContent = `${minWeight} - ${maxWeight} kg`
  }
}

// TODO: MAgic numbers
