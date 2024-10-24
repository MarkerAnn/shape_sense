import { User } from '../types/User'
import { UnitSystem } from '../enums/UnitSystem'
import { FORM_SELECTORS, UNIT_PLACEHOLDERS } from '../constants/FormConstants'
import { InputFieldName, SelectFieldName } from '../types/FormFieldTypes'

export abstract class AbstractView {
  protected form: HTMLFormElement | null = null
  protected resultsTable: HTMLTableElement | null = null
  protected errorMessage: HTMLElement | null = null
  protected inputs = new Map<InputFieldName, HTMLInputElement>()
  protected selects = new Map<SelectFieldName, HTMLSelectElement>()
  protected readonly getSelectedUnitSystem: () => UnitSystem

  constructor(getSelectedUnitSystem: () => UnitSystem) {
    this.getSelectedUnitSystem = getSelectedUnitSystem
  }

  abstract render(container: HTMLElement): void
  abstract updateResults(data: unknown): void

  protected initializeCommonElements(): void {
    this.form = this.getElement(FORM_SELECTORS.common.form) as HTMLFormElement
    this.resultsTable = this.getElement(
      FORM_SELECTORS.common.resultTable
    ) as HTMLTableElement
    this.errorMessage = this.getElement(
      FORM_SELECTORS.common.errorMessage
    ) as HTMLElement
  }

  protected initializeInputs(fieldNames: InputFieldName[]): void {
    fieldNames.forEach((fieldName) => this.initializedInputField(fieldName))
  }

  protected initializedInputField(fieldName: InputFieldName): void {
    const input = this.getElement(
      FORM_SELECTORS.inputs[fieldName]
    ) as HTMLInputElement
    if (input) {
      this.inputs.set(fieldName, input)
    }
  }

  protected initializeSelectField(fieldName: SelectFieldName): void {
    const select = this.getElement(
      FORM_SELECTORS.selects[fieldName]
    ) as HTMLSelectElement
    if (select) {
      this.selects.set(fieldName, select)
    }
  }

  public bindFormEvents(calculateHandler: (data: FormData) => void): void {
    this.form?.addEventListener('submit', (event) => {
      event.preventDefault()
      const formData = new FormData(this.form as HTMLFormElement)
      calculateHandler(formData)
    })

    this.bindResetEvent()

    const unitSelect = this.selects.get('unitSystem')
    if (unitSelect) {
      unitSelect.addEventListener('change', () => this.updatePlaceholders())
    }
  }

  public setSelectValue(key: SelectFieldName, value?: string): void {
    const select = this.selects.get(key)
    if (select && value) {
      select.value = value
    }
  }

  public setInputValue(key: InputFieldName, value?: number): void {
    const input = this.inputs.get(key)
    if (input && value !== undefined) {
      input.value = value.toString()
    }
  }

  public fillFormData(data: Partial<User>): void {
    if (data.unitSystem) {
      this.setSelectValue('unitSystem', data.unitSystem)
    }

    Object.entries(data).forEach(([key, value]) => {
      if (typeof value === 'number') {
        this.setInputValue(key as InputFieldName, value)
      } else if (typeof value === 'string' && key !== 'unitSystem') {
        this.setSelectValue(key as SelectFieldName, value)
      }
    })

    this.updatePlaceholders()
  }

  protected bindResetEvent(): void {
    const resetButton = this.form?.querySelector('button[type="reset"]')
    resetButton?.addEventListener('click', (event) => {
      event.preventDefault()
      this.clearForm()
      this.clearResults()
      this.hideError()
      this.updatePlaceholders()
    })
  }

  public clearForm(): void {
    this.form?.reset()
  }

  public clearResults(): void {
    if (this.resultsTable) {
      const rows = this.resultsTable.rows
      for (let i = 0; i < rows.length; i++) {
        const cell = rows[i].cells[1]
        if (cell) {
          cell.textContent = '-'
        }
      }
    }
  }

  public updatePlaceholders(): void {
    const unitSystem = this.getSelectedUnitSystem()
    this.inputs.forEach((input, fieldName) => {
      const placeholder = UNIT_PLACEHOLDERS[unitSystem][fieldName]
      if (placeholder) {
        input.placeholder = placeholder
      }
    })
  }

  protected getElement<T extends HTMLElement>(selector: string): T | null {
    return document.querySelector<T>(selector)
  }

  protected createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag)
    if (className) element.className = className
    return element
  }

  public showError(message: string): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = message
      this.errorMessage.style.display = 'block'
    }
  }

  public hideError(): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = ''
      this.errorMessage.style.display = 'none'
    }
  }
}
