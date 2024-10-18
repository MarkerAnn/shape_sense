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
// import { InterfaceController } from '../Interfaces/InterfaceController'
// import { HomeView } from '../views/HomeView'
// import { CalculatorType } from '../utils/CalculatorTypes'
// import { Router } from '../Router'

// export class HomeController implements InterfaceController {
//   private view: HomeView
//   private router: Router

//   constructor(router: Router) {
//     this.view = new HomeView()
//     this.router = router
//   }

//   initialize(): void {
//     const appContainer = document.querySelector('#app')
//     if (appContainer) {
//       appContainer.innerHTML = ''
//       appContainer.appendChild(this.view.render())
//       this.view.bindCalculateButtonEvents(this.handleCalculateButton.bind(this))
//     } else {
//       console.error('App container not found')
//     }
//   }

//   private handleCalculateButton(calculatorType: CalculatorType): void {
//     console.log(`Calculate ${calculatorType}`)
//     this.router.navigate
//     // Add my logic to navigate to the calulators
//   }
// }
