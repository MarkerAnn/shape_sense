/**
 * Class representing a HeaderManager.
 * Manages the behavior of dropdown menus in the header.
 */
export class HeaderManager {
  private dropdownToggles: Element[]
  private dropdownMenus: Element[]

  /**
   * Creates an instance of HeaderManager.
   * Initializes the dropdown toggles and menus, and sets up event listeners.
   */
  constructor() {
    this.dropdownToggles = Array.from(
      document.querySelectorAll('.dropdown-toggle')
    )
    this.dropdownMenus = Array.from(document.querySelectorAll('.dropdown-menu'))
    this.initializeDropdowns()
  }

  /**
   * Initializes the dropdowns by adding event listeners to the toggles and the document.
   * @private
   */
  private initializeDropdowns(): void {
    this.dropdownToggles.forEach((toggle) => {
      toggle.addEventListener('click', this.toggleDropdown.bind(this))
    })
    document.addEventListener('click', this.handleOutsideClick.bind(this))
  }

  /**
   * Toggles the visibility of the dropdown menu when a toggle is clicked.
   * @param {Event} event - The click event.
   * @private
   */
  private toggleDropdown(event: Event): void {
    event.preventDefault()

    this.dropdownMenus.forEach((menu) => {
      menu.parentElement?.classList.remove('show')
    })

    const toggle = event.currentTarget as HTMLElement
    const menu = toggle.nextElementSibling

    if (menu && menu.classList.contains('dropdown-menu')) {
      toggle.parentElement?.classList.toggle('show')
    }
  }

  /**
   * Handles clicks outside of the dropdown menus to close any open menus.
   * @param {Event} event - The click event.
   * @private
   */
  private handleOutsideClick(event: Event): void {
    const target = event.target as Node

    const isClickInsideDropdown = this.dropdownToggles.some((toggle) =>
      toggle.contains(target)
    )

    if (!isClickInsideDropdown) {
      this.dropdownMenus.forEach((menu) => {
        menu.parentElement?.classList.remove('show')
      })
    }
  }
}
