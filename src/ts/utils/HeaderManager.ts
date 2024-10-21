export class HeaderManager {
  private dropdownToggle: Element | null
  private dropdownMenu: Element | null

  constructor() {
    this.dropdownToggle = document.querySelector('.dropdown-toggle')
    this.dropdownMenu = document.querySelector('.dropdown-menu')
    this.initializeDropdown()
  }

  private initializeDropdown(): void {
    if (this.dropdownToggle && this.dropdownMenu) {
      this.dropdownToggle.addEventListener(
        'click',
        this.toggleDropdown.bind(this)
      )
      document.addEventListener('click', this.handleOutsideClick.bind(this))
    }
  }

  private toggleDropdown(event: Event): void {
    event.preventDefault()
    this.dropdownMenu?.classList.toggle('show')
  }

  private handleOutsideClick(event: Event): void {
    if (
      this.dropdownToggle &&
      !this.dropdownToggle.contains(event.target as Node)
    ) {
      this.dropdownMenu?.classList.remove('show')
    }
  }
}
