import { HomeView } from '../views/HomeView'
import { IController } from '../interfaces/InterfaceController'

export class HomeController implements IController {
  private view: HomeView

  constructor() {
    this.view = new HomeView()
  }

  init(container: HTMLElement): void {
    this.view.render(container)
  }
}
