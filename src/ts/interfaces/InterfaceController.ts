/**
 * Interface representing a controller.
 * Provides a method to initialize the controller with a given container element.
 *
 * @interface IController
 */
export interface IController {
  /**
   * Initializes the controller with the specified container element.
   * @param {HTMLElement} container - The container element to initialize the controller with.
   */
  init(container: HTMLElement): void
}

// 4 rader
