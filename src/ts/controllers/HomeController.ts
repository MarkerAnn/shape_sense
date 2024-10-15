import { Controller } from './AbstractController'
import { HealthCalculatorModel } from '../models/HealthCalculatorModel'
import { HomeView } from '../views/HomeView'
import { RouteEnum } from '../utils/Routes'

export class HomeController extends Controller<HomeView> {
  private onNavigate: (route: RouteEnum) => void

  constructor(
    model: HealthCalculatorModel,
    view: HomeView,
    onNavigate: (route: RouteEnum) => void
  ) {
    super(model, view)
    this.onNavigate = onNavigate
  }

  bindEvents(): void {
    this.view.bindCalculatorButtons(this.handleCalculatorButtonClick.bind(this))
  }

  private handleCalculatorButtonClick(calculatorType: RouteEnum): void {
    this.onNavigate(calculatorType)
    console.log(calculatorType)
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
