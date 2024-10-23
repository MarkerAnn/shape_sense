export class HeaderManager {
  private dropdownToggles: Element[]
  private dropdownMenus: Element[]

  constructor() {
    this.dropdownToggles = Array.from(
      document.querySelectorAll('.dropdown-toggle')
    )
    this.dropdownMenus = Array.from(document.querySelectorAll('.dropdown-menu'))
    this.initializeDropdowns()
  }

  private initializeDropdowns(): void {
    this.dropdownToggles.forEach((toggle) => {
      toggle.addEventListener('click', this.toggleDropdown.bind(this))
    })
    document.addEventListener('click', this.handleOutsideClick.bind(this))
  }

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
