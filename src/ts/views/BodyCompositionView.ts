import { AbstractView } from './AbstractView'
import { bodyCompositionTemplate } from '../templates/bodyCompositionTemplate'

export class BodyCompositionView extends AbstractView {
  render(container: HTMLElement): void {
    container.innerHTML = bodyCompositionTemplate
  }
}
