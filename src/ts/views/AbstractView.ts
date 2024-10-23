import { User } from '../types/User'
import { UnitSystem } from '../enums/UnitSystem'
import { FORM_FIELDS, FORM_SELECTORS } from '../constants/FormConstants'

export abstract class AbstractView {
  protected form: HTMLFormElement | null = null
  protected resultsTable: HTMLTableElement | null = null
  protected errorMessage: HTMLElement | null = null
  protected inputs: { [key: string]: HTMLInputElement } = {}
  protected getSelectedUnitSystem: () => UnitSystem

  constructor(getSelectedUnitSystem: () => UnitSystem) {
    this.getSelectedUnitSystem = getSelectedUnitSystem
  }

  abstract render(container: HTMLElement): void
  abstract fillForm(data: Partial<User>): void
  abstract bindCalculateEvent(handler: (data: FormData) => void): void
  abstract updateResults(data: unknown): void

  protected initializeCommonElements(): void {
    this.form = this.getElement(HtmlSelectors.FORM) as HTMLFormElement
    this.resultsTable = this.getElement(
      HtmlSelectors.RESULT_TABLE
    ) as HTMLTableElement
    this.errorMessage = this.getElement(
      HtmlSelectors.ERROR_MESSAGE
    ) as HTMLElement
  }

  protected initializeInputs(inputIds: string[]): void {
    inputIds.forEach((id) => {
      this.inputs[id] = this.getElement(`#${id}`) as HTMLInputElement
    })
  }

  resetForm(): void {
    this.form?.reset()
    this.clearResults()
    this.updatePlaceholders()
    this.hideError()
  }

  protected clearResults(): void {
    if (this.resultsTable) {
      const rows = this.resultsTable.rows
      for (let i = 0; i < rows.length; i++) {
        rows[i].cells[1].textContent = '-'
      }
    }
  }

  updatePlaceholders(): void {
    const selectedUnitSystem = this.getSelectedUnitSystem()
    const placeholders =
      UNIT_PLACEHOLDERS[selectedUnitSystem as keyof typeof UNIT_PLACEHOLDERS]

    Object.keys(this.inputs).forEach((key) => {
      if (key in placeholders) {
        this.inputs[key as MeasurementField].setAttribute(
          'placeholder',
          placeholders[key as MeasurementField]
        )
      }
    })
  }

  showError(message: string): void {
    if (this.errorMessage instanceof HTMLElement) {
      this.errorMessage.textContent = message
      this.errorMessage.classList.remove('hidden')
    }
  }

  hideError(): void {
    if (this.errorMessage instanceof HTMLElement) {
      this.errorMessage.textContent = ''
      this.errorMessage.classList.add('hidden')
    }
  }

  protected getElement(selector: string): HTMLElement | null {
    return document.querySelector(selector)
  }

  protected createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag)
    if (className) element.className = className
    return element
  }

  bindResetEvent(handler: () => void): void {
    const resetButton = this.form?.querySelector('button[type="reset"]')
    resetButton?.addEventListener('click', (event) => {
      event.preventDefault()
      handler()
    })
  }
}
