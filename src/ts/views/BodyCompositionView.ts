import { AbstractView } from './AbstractView'
import { bodyCompositionTemplate } from '../templates/bodyCompositionTemplate'
import { User } from '../types/User'

export class BodyCompositionView extends AbstractView {
  private forms: { [key: string]: HTMLFormElement } = {}
  private errorMessage: HTMLElement | null = null
  private resultsTable: HTMLTableElement | null = null
  private unitSystemSelects: NodeListOf<HTMLSelectElement> | null = null

  render(container: HTMLElement): void {
    container.innerHTML = bodyCompositionTemplate

    this.forms = {
      waistHipRatio: container.querySelector(
        '#waist-hip-ratio-form'
      ) as HTMLFormElement,
      waistHeightRatio: container.querySelector(
        '#waist-height-ratio-form'
      ) as HTMLFormElement,
      bodyFatPercentage: container.querySelector(
        '#body-fat-percentage-form'
      ) as HTMLFormElement,
      leanBodyMass: container.querySelector(
        '#lean-body-mass-form'
      ) as HTMLFormElement,
    }

    // Check if all of the forms have been rendered
    Object.entries(this.forms).forEach(([key, form]) => {
      if (!form) {
        console.error(`Form ${key} not found in the template`)
      }
    })

    this.errorMessage = container.querySelector('.error-message')
    this.resultsTable = container.querySelector('.results table')
    this.unitSystemSelects = container.querySelectorAll(
      'select[name="unitSystem"]'
    )

    this.unitSystemSelects?.forEach((select) => {
      select.addEventListener('change', () => this.updatePlaceholders())
    })
  }

  fillForm(userData: Partial<User>): void {
    Object.entries(userData).forEach(([key, value]) => {
      if (value !== undefined) {
        this.setFormValue(key, value.toString())
      }
    })
    this.updatePlaceholders()
  }

  private setFormValue(name: string, value: string): void {
    Object.values(this.forms).forEach((form) => {
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

    this.unitSystemSelects?.forEach((select) => {
      const system = select.value as keyof typeof placeholders
      const form = select.closest('form')
      if (form) {
        Object.entries(placeholders[system]).forEach(([name, unit]) => {
          const input = form.querySelector<HTMLInputElement>(`[name="${name}"]`)
          if (input) {
            input.placeholder = unit
          }
        })
      }
    })
  }

  bindCalculateEvents(
    handler: (formId: string, formData: FormData) => void
  ): void {
    Object.entries(this.forms).forEach(([formId, form]) => {
      form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form)
        handler(formId, formData)
      })
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
      Object.values(results).forEach((value, index) => {
        const row = this.resultsTable!.rows[index]
        if (row) {
          row.cells[1].textContent = value.toFixed(2)
        }
      })
    }
  }

  resetForms(): void {
    Object.values(this.forms).forEach((form) => form.reset())
    this.updatePlaceholders()
  }
}
