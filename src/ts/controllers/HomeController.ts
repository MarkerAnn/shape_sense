import { HomeView } from '../views/HomeView'
import { IController } from '../interfaces/InterfaceController'

/**
 * Class representing the HomeController.
 * Implements the IController interface and manages the home view.
 *
 * @class
 * @implements {IController}
 */
export class HomeController implements IController {
  private view: HomeView

  /**
   * Creates an instance of HomeController.
   * Initializes the HomeView.
   */
  constructor() {
    this.view = new HomeView()
  }

  /**
   * Initializes the controller by rendering the home view into the specified container.
   *
   * @param {HTMLElement} container - The container element to render the home view into.
   */
  init(container: HTMLElement): void {
    this.view.render(container)
  }
}

// 15 rader
