import { User } from '../types/User'
import { UnitSystem } from '../enums/UnitSystem'
import { FORM_SELECTORS, UNIT_PLACEHOLDERS } from '../constants/FormConstants'
import { InputFieldName, SelectFieldName } from '../types/FormFieldTypes'
import { debug } from '../utils/debug'

/**
 * Abstract base class for creating views. Provides common functionality for managing forms, inputs,
 * and displaying results and error messages.
 */
export abstract class AbstractView {
  protected form: HTMLFormElement | null = null
  protected resultsTable: HTMLTableElement | null = null
  protected errorMessage: HTMLElement | null = null
  protected inputs = new Map<InputFieldName, HTMLInputElement>()
  protected selects = new Map<SelectFieldName, HTMLSelectElement>()
  protected readonly getSelectedUnitSystem: () => UnitSystem

  /**
   * Constructs the AbstractView with a function to get the selected unit system.
   * @param getSelectedUnitSystem - A function returning the current unit system.
   */
  constructor(getSelectedUnitSystem: () => UnitSystem) {
    this.getSelectedUnitSystem = getSelectedUnitSystem
  }

  /**
   * Renders the view in the given container element.
   * @param container - The HTML element where the view will be rendered.
   */
  abstract render(container: HTMLElement): void

  /**
   * Updates the results displayed in the view based on the provided data.
   * @param data - The data to be displayed in the results section.
   */
  abstract updateResults(data: unknown): void

  /**
   * Initializes common elements such as the form, results table, and error message.
   */
  protected initializeCommonElements(): void {
    this.form = this.getElement(FORM_SELECTORS.common.form) as HTMLFormElement
    this.resultsTable = this.getElement(
      FORM_SELECTORS.common.resultTable
    ) as HTMLTableElement
    this.errorMessage = this.getElement(
      FORM_SELECTORS.common.errorMessage
    ) as HTMLElement
  }

  /**
   * Initializes input fields based on the provided field names.
   * @param fieldNames - An array of input field names to be initialized.
   */
  protected initializeInputs(fieldNames: InputFieldName[]): void {
    debug.log('=== Debug Input Initialization ===')
    debug.log('Initializing fields:', fieldNames)

    fieldNames.forEach((fieldName) => {
      debug.log(`Initializing field: ${fieldName}`)
      const selector = FORM_SELECTORS.inputs[fieldName]
      debug.log(`Using selector: ${selector}`)

      const input = this.getElement(selector) as HTMLInputElement
      debug.log('Found element:', input)

      if (input) {
        this.inputs.set(fieldName, input)
        debug.log(`Successfully stored ${fieldName} in inputs map`)
      } else {
        debug.log(`Failed to find element for ${fieldName}`)
      }
    })
  }
  // protected initializeInputs(fieldNames: InputFieldName[]): void {
  //   fieldNames.forEach((fieldName) => this.initializedInputField(fieldName))
  // }

  /**
   * Initializes a single input field and stores it in the inputs map.
   * @param fieldName - The name of the input field to be initialized.
   */
  protected initializedInputField(fieldName: InputFieldName): void {
    const input = this.getElement(
      FORM_SELECTORS.inputs[fieldName]
    ) as HTMLInputElement
    if (input) {
      this.inputs.set(fieldName, input)
    }
  }

  /**
   * Initializes a select field and stores it in the selects map.
   * @param fieldName - The name of the select field to be initialized.
   */
  protected initializeSelectField(fieldName: SelectFieldName): void {
    const select = this.getElement(
      FORM_SELECTORS.selects[fieldName]
    ) as HTMLSelectElement
    if (select) {
      this.selects.set(fieldName, select)
    }
  }

  /**
   * Binds event listeners to the form for submission and unit system changes.
   * @param calculateHandler - The handler function to call when the form is submitted.
   */
  public bindFormEvents(calculateHandler: (data: FormData) => void): void {
    this.form?.addEventListener('submit', (event: Event) => {
      event.preventDefault()
      const formData = new FormData(this.form as HTMLFormElement)
      calculateHandler(formData)
    })

    const unitSelect = this.selects.get('unitSystem')
    if (unitSelect) {
      unitSelect.addEventListener('change', () => this.updatePlaceholders())
    }
  }

  /**
   * Binds a reset event listener to the reset button.
   * @param resetHandler - The handler function to call when the form is reset.
   */

  public bindResetEvent(resetHandler: () => void): void {
    const resetButton = this.form?.querySelector('button[type="reset"]')
    resetButton?.addEventListener('click', (event: Event) => {
      event.preventDefault()
      resetHandler()
    })
  }

  /**
   * Sets the value of a select field.
   * @param key - The name of the select field.
   * @param value - The value to set in the select field.
   */

  public setSelectValue(key: SelectFieldName, value?: string): void {
    const select = this.selects.get(key)
    if (select && value) {
      select.value = value
    }
  }

  /**
   * Sets the value of an input field.
   * @param key - The name of the input field.
   * @param value - The numeric value to set in the input field.
   */
  public setInputValue(key: InputFieldName, value?: number): void {
    const input = this.inputs.get(key)
    if (input && value !== undefined) {
      input.value = value.toString()
    }
  }

  /**
   * Fills the form with the provided user data.
   * @param data - Partial user data to populate the form fields.
   */
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

  /**
   * Resets the form to its initial state.
   */
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

  /**
   * Updates the placeholders for the input fields based on the selected unit system.
   */
  public updatePlaceholders(): void {
    const unitSystem = this.getSelectedUnitSystem()
    debug.log('=== Debug Placeholder Update ===')
    debug.log('Current inputs in map:', Array.from(this.inputs.keys()))

    this.inputs.forEach((input, fieldName) => {
      debug.log(`Processing field: ${fieldName}`)
      const placeholder = UNIT_PLACEHOLDERS[unitSystem][fieldName]
      debug.log(
        `Found placeholder: ${placeholder} for unit system: ${unitSystem}`
      )

      if (placeholder) {
        const before = input.placeholder
        input.placeholder = placeholder
        debug.log(
          `Updated placeholder for ${fieldName}: ${before} -> ${placeholder}`
        )
      } else {
        debug.log(`No placeholder found for ${fieldName}`)
      }
    })
  }

  /**
   * Retrieves an HTML element based on the given selector.
   * @param selector - The CSS selector for the element.
   * @returns The HTML element or null if not found.
   */
  protected getElement<T extends HTMLElement>(selector: string): T | null {
    return document.querySelector<T>(selector)
  }

  /**
   * Creates a new HTML element with an optional class name.
   * @param tag - The tag name for the element (e.g., 'div').
   * @param className - Optional class name for the element.
   * @returns The created HTML element.
   */
  protected createElement(tag: string, className?: string): HTMLElement {
    const element = document.createElement(tag)
    if (className) element.className = className
    return element
  }

  /**
   * Displays an error message in the view.
   * @param message - The error message to display.
   */
  public showError(message: string): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = message
      this.errorMessage.style.display = 'block'
    }
  }

  /**
   * Hides the error message from the view.
   */
  public hideError(): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = ''
      this.errorMessage.style.display = 'none'
    }
  }
}
