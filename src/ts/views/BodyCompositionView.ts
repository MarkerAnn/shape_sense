// import { AbstractView } from './AbstractView'
// import { bodyCompositionTemplate } from '../templates/bodyCompositionTemplate'
// import { User } from '../types/User'
// import { UnitSystem } from '../enums/UnitSystem'

// type FormName =
//   | 'waistHipRatio'
//   | 'waistHeightRatio'
//   | 'bodyFatPercentage'
//   | 'leanBodyMass'

// export class BodyCompositionView extends AbstractView {
//   private container: HTMLElement | null = null
//   private forms: Record<FormName, HTMLFormElement> | null = null
//   private errorMessage: HTMLElement | null = null
//   private resultsTable: HTMLTableElement | null = null

//   render(container: HTMLElement): void {
//     this.container = container
//     this.container.innerHTML = bodyCompositionTemplate

//     this.forms = {
//       waistHipRatio: this.getElement(
//         '#waist-hip-ratio-form'
//       ) as HTMLFormElement,
//       waistHeightRatio: this.getElement(
//         '#waist-height-ratio-form'
//       ) as HTMLFormElement,
//       bodyFatPercentage: this.getElement(
//         '#body-fat-percentage-form'
//       ) as HTMLFormElement,
//       leanBodyMass: this.getElement('#lean-body-mass-form') as HTMLFormElement,
//     }

//     this.errorMessage = this.getElement('.error-message')
//     this.resultsTable = this.getElement('.results table') as HTMLTableElement

//     this.initializeUnitSystemListeners()
//   }

//   fillForm(userData: Partial<User>): void {
//     Object.entries(userData).forEach(([key, value]) => {
//       if (value !== undefined) {
//         this.setFormValue(key, value.toString())
//       }
//     })
//     this.updatePlaceholders()
//   }

//   bindCalculateEvent(
//     formName: FormName,
//     handler: (formData: FormData) => void
//   ): void {
//     this.forms?.[formName].addEventListener('submit', (event) => {
//       event.preventDefault()
//       handler(new FormData(this.forms![formName]))
//     })
//   }

//   bindResetEvents(handler: () => void): void {
//     Object.values(this.forms!).forEach((form) => {
//       const resetButton = form.querySelector('button[type="reset"]')
//       resetButton?.addEventListener('click', (event) => {
//         event.preventDefault()
//         handler()
//       })
//     })
//   }

//   showError(message: string): void {
//     if (this.errorMessage instanceof HTMLElement) {
//       this.errorMessage.textContent = message
//       this.errorMessage.style.display = 'block'
//     }
//   }

//   hideError(): void {
//     if (this.errorMessage instanceof HTMLElement) {
//       this.errorMessage.textContent = ''
//       this.errorMessage.style.display = 'none'
//     }
//   }

//   updateResults(results: Record<string, number>): void {
//     if (this.resultsTable) {
//       Object.entries(results).forEach(([key, value]) => {
//         const row = this.resultsTable!.querySelector(`tr[data-result="${key}"]`)
//         if (row) {
//           const cell = row.querySelector('td:last-child')
//           if (cell) cell.textContent = value.toFixed(2)
//         }
//       })
//     }
//   }

//   resetForm(): void {
//     Object.values(this.forms!).forEach((form) => form.reset())
//     this.updatePlaceholders()
//     this.clearResults()
//   }

//   private clearResults(): void {
//     if (this.resultsTable) {
//       const resultCells = this.resultsTable.querySelectorAll('td:last-child')
//       resultCells.forEach((cell) => (cell.textContent = '-'))
//     }
//   }

//   private setFormValue(name: string, value: string): void {
//     Object.values(this.forms!).forEach((form) => {
//       const input = form.querySelector<HTMLInputElement | HTMLSelectElement>(
//         `[name="${name}"]`
//       )
//       if (input) {
//         if (input instanceof HTMLSelectElement) {
//           input.value = value
//         } else if (input.type === 'radio') {
//           const radio = form.querySelector<HTMLInputElement>(
//             `[name="${name}"][value="${value}"]`
//           )
//           if (radio) radio.checked = true
//         } else {
//           input.value = value
//         }
//       }
//     })
//   }

//   private initializeUnitSystemListeners(): void {
//     const unitSystemSelects =
//       this.container!.querySelectorAll<HTMLSelectElement>(
//         'select[name="unitSystem"]'
//       )
//     unitSystemSelects.forEach((select) => {
//       select.addEventListener('change', this.updatePlaceholders.bind(this))
//     })
//   }

//   private updatePlaceholders(): void {
//     const placeholders: Record<UnitSystem, Record<string, string>> = {
//       [UnitSystem.IMPERIAL]: {
//         waist: 'in',
//         hip: 'in',
//         height: 'ft',
//         weight: 'lbs',
//         neck: 'in',
//       },
//       [UnitSystem.METRIC]: {
//         waist: 'cm',
//         hip: 'cm',
//         height: 'm',
//         weight: 'kg',
//         neck: 'cm',
//       },
//     }

//     Object.values(this.forms!).forEach((form) => {
//       const unitSystem = (
//         form.querySelector('select[name="unitSystem"]') as HTMLSelectElement
//       ).value as UnitSystem
//       Object.entries(placeholders[unitSystem]).forEach(([name, unit]) => {
//         const input = form.querySelector<HTMLInputElement>(`[name="${name}"]`)
//         if (input) input.placeholder = unit
//       })
//     })
//   }
// }
