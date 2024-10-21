import { User } from '../types/User'

export abstract class AbstractView {
  abstract render(container: HTMLElement): void

  abstract fillForm(data: Partial<User>): void

  abstract resetForm(): void

  showError(message: string): void {
    const errorElement = document.querySelector('.error-message')
    if (errorElement instanceof HTMLElement) {
      errorElement.textContent = message
      errorElement.classList.remove('hidden')
    }
  }

  hideError(): void {
    const errorElement = document.querySelector('.error-message')
    if (errorElement instanceof HTMLElement) {
      errorElement.textContent = ''
      errorElement.classList.add('hidden')
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
}
