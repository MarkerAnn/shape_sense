import { HomeView } from '../views/HomeView'
import { InterfaceController } from '../interfaces/InterfaceController'

export class HomeController implements InterfaceController {
  private view: HomeView

  constructor() {
    this.view = new HomeView()
  }

  init(container: HTMLElement): void {
    this.view.render(container)
  }
}
