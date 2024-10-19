import { AbstractView } from './AbstractView'
import { bodyCompositionTemplate } from '../templates/bodyCompositionTemplate'
import { User } from '../types/User'

export class BodyCompositionView extends AbstractView {
  private container: HTMLElement | null = null
  private forms: {
    waistHipRatio: HTMLFormElement
    waistHeightRatio: HTMLFormElement
    bodyFatPercentage: HTMLFormElement
    leanBodyMass: HTMLFormElement
  } | null = null
  private errorMessage: HTMLElement | null = null
  private resultsTable: HTMLTableElement | null = null

  render(container: HTMLElement): void {
    this.container = container
    this.container.innerHTML = bodyCompositionTemplate

    this.forms = {
      waistHipRatio: this.container.querySelector(
        '#waist-hip-ratio-form'
      ) as HTMLFormElement,
      waistHeightRatio: this.container.querySelector(
        '#waist-height-ratio-form'
      ) as HTMLFormElement,
      bodyFatPercentage: this.container.querySelector(
        '#body-fat-percentage-form'
      ) as HTMLFormElement,
      leanBodyMass: this.container.querySelector(
        '#lean-body-mass-form'
      ) as HTMLFormElement,
    }

    this.errorMessage = this.container.querySelector('.error-message')
    this.resultsTable = this.container.querySelector('.results table')

    this.initializeUnitSystemListeners()
  }

  fillForm(userData: Partial<User>): void {
    Object.entries(userData).forEach(([key, value]) => {
      if (value !== undefined) {
        this.setFormValue(key, value.toString())
      }
    })
    this.updatePlaceholders()
  }

  bindWaistHipRatioEvent(handler: (formData: FormData) => void): void {
    this.forms?.waistHipRatio.addEventListener('submit', (event) => {
      event.preventDefault()
      console.log(FormData)
      handler(new FormData(this.forms!.waistHipRatio))
    })
  }

  bindWaistHeightRatioEvent(handler: (formData: FormData) => void): void {
    this.forms?.waistHeightRatio.addEventListener('submit', (event) => {
      event.preventDefault()
      handler(new FormData(this.forms!.waistHeightRatio))
    })
  }

  bindBodyFatPercentageEvent(handler: (formData: FormData) => void): void {
    this.forms?.bodyFatPercentage.addEventListener('submit', (event) => {
      event.preventDefault()
      handler(new FormData(this.forms!.bodyFatPercentage))
    })
  }

  bindLeanBodyMassEvent(handler: (formData: FormData) => void): void {
    this.forms?.leanBodyMass.addEventListener('submit', (event) => {
      event.preventDefault()
      handler(new FormData(this.forms!.leanBodyMass))
    })
  }

  bindResetEvents(handler: () => void): void {
    Object.values(this.forms!).forEach((form) => {
      const resetButton = form.querySelector('button[type="reset"]')
      if (resetButton) {
        resetButton.addEventListener('click', (event) => {
          event.preventDefault()
          handler()
        })
      }
    })
  }

  showError(message: string): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = message
      this.errorMessage.style.display = 'block'
    }
  }

  hideError(): void {
    if (this.errorMessage) {
      this.errorMessage.textContent = ''
      this.errorMessage.style.display = 'none'
    }
  }

  updateResults(results: Record<string, number>): void {
    if (this.resultsTable) {
      Object.entries(results).forEach(([key, value]) => {
        const row = this.resultsTable!.querySelector(`tr[data-result="${key}"]`)
        if (row) {
          row.querySelector('td:last-child')!.textContent = value.toFixed(2)
        }
      })
    }
  }

  resetForms(): void {
    Object.values(this.forms!).forEach((form) => form.reset())
    this.updatePlaceholders()
    if (this.resultsTable) {
      const resultCells = this.resultsTable.querySelectorAll('td:last-child')
      resultCells.forEach((cell) => (cell.textContent = '-'))
    }
  }

  private setFormValue(name: string, value: string): void {
    Object.values(this.forms!).forEach((form) => {
      const input = form.querySelector<HTMLInputElement | HTMLSelectElement>(
        `[name="${name}"]`
      )
      if (input) {
        if (input instanceof HTMLSelectElement) {
          input.value = value
        } else if (input.type === 'radio') {
          const radio = form.querySelector<HTMLInputElement>(
            `[name="${name}"][value="${value}"]`
          )
          if (radio) {
            radio.checked = true
          }
        } else {
          input.value = value
        }
      }
    })
  }

  private initializeUnitSystemListeners(): void {
    const unitSystemSelects =
      this.container!.querySelectorAll<HTMLSelectElement>(
        'select[name="unitSystem"]'
      )
    unitSystemSelects.forEach((select) => {
      select.addEventListener('change', () => this.updatePlaceholders())
    })
  }

  private updatePlaceholders(): void {
    const placeholders = {
      imperial: {
        waist: 'in',
        hip: 'in',
        height: 'ft',
        weight: 'lbs',
        neck: 'in',
      },
      metric: { waist: 'cm', hip: 'cm', height: 'm', weight: 'kg', neck: 'cm' },
    }

    Object.values(this.forms!).forEach((form) => {
      const unitSystem = (
        form.querySelector('select[name="unitSystem"]') as HTMLSelectElement
      ).value
      const system = unitSystem as keyof typeof placeholders
      Object.entries(placeholders[system]).forEach(([name, unit]) => {
        const input = form.querySelector<HTMLInputElement>(`[name="${name}"]`)
        if (input) {
          input.placeholder = unit
        }
      })
    })
  }
}
