import { AbstractView } from './AbstractView'
import { bodyCompositionTemplate } from '../templates/bodyCompositionTemplate'

export class BodyCompositionView extends AbstractView {
  private form: HTMLFormElement | null = null
  private errorMessage: HTMLElement | null = null
  private resultsTable: HTMLTableElement | null = null

  render(container: HTMLElement): void {
    container.innerHTML = bodyCompositionTemplate
  }
}
