import { AbstractView } from './AbstractView'
import { tdeeTemplate } from '../templates/tdeeTemplate'

export class TdeeView extends AbstractView {
  render(container: HTMLElement): void {
    container.innerHTML = tdeeTemplate
  }
}
