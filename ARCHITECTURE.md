# Health Calculator Application - Detailed Architecture

## Core Architectural Design

### Single Page Application (SPA) Structure
The application is built as a SPA where all navigation and calculations occur client-side. This provides a seamless user experience without page reloads.

```typescript
// Router handles all navigation through hash-based routes
class Router {
    navigate(path: string): void {
        const route = getRouteFromPath(path)
        if (route) {
            const controller = this.controllerFactory.createController(route)
            controller.init(this.container)
        }
    }
}
```

### Dependency Injection & Composition
The system utilizes dependency injection to create loose coupling between components:

```typescript
// Example of dependency injection
class BmiController extends BaseController {
    constructor(
        user: UserModel,
        calculator: HealthCalculatorModel,
        formValidator: IFormValidator
    ) {
        super(user, calculator, formValidator)
        this.view = new BmiView(this.getUnitSystemValue.bind(this))
    }
}
```

## Data Flow & State Management

### State Management
UserModel acts as a central state manager for the application:

```typescript
class UserModel {
    private data: User
    
    public setData(newData: Partial<User>): void {
        // Updates state and persists to session storage
        Object.assign(this.data, newData)
        this.saveToSession()
    }
    
    private saveToSession(): void {
        sessionStorage.setItem('userModel', JSON.stringify(this.data))
    }
}
```

### Data Flow Pattern
1. User Input → Controller → Validation → Model → Calculation → View Update

```typescript
class BaseController {
    protected handleCalculate(formData: FormData): void {
        try {
            // 1. Parse form data
            const data = this.parseFormData(formData)
            
            // 2. Validate
            this.formValidator.validate(data)
            
            // 3. Update model
            this.user.setData(data)
            
            // 4. Perform calculation
            const result = this.calculator.calculate(data)
            
            // 5. Update view
            this.view.updateResults(result)
            
        } catch (error) {
            this.handleErrors(error)
        }
    }
}
```

## Advanced Features

### Unit System Conversion
The system handles dynamic conversion between measurement systems:

```typescript
class MeasurementValidator extends BaseValidator {
    validateWeight(weight: number, unitSystem: UnitSystem): void {
        const config = {
            min: VALIDATION_LIMITS.weight.min,
            max: VALIDATION_LIMITS.weight.max,
            shouldConvert: unitSystem === UnitSystem.IMPERIAL,
            conversionFactor: CONVERSION_FACTORS.POUNDS
        }
        
        const { min, max } = this.getConvertedLimits(config)
        this.validateRange({ value: weight, min, max, name: 'Weight', unit: unitSystem })
    }
}
```

### Form Validation Strategy
Validation uses a strategy-based approach for different types of input:

```typescript
class FormValidatorService implements IFormValidator {
    constructor() {
        this.measurementValidator = new MeasurementValidator()
        this.personalInfoValidator = new PersonalInfoValidator()
        this.goalValidator = new GoalValidator()
    }

    validateIBmiFormData(data: IBmiFormData): void {
        this.personalInfoValidator.validateUnitSystem(data.unitSystem)
        this.measurementValidator.validateWeight(data.weight, data.unitSystem)
        this.measurementValidator.validateHeight(data.height, data.unitSystem)
    }
}
```

## Health Calculation System

### Calculation Adapter Pattern
HealthCalculatorAdapter implements the adapter pattern to integrate with an external library:

```typescript
class HealthCalculatorAdapter implements IHealthCalculator {
    private calculator: ReturnType<typeof HealthCalculatorFactory.createHealthCalculator>
    
    private createCalculator() {
        const userData = this.userModel.getData()
        return HealthCalculatorFactory.createHealthCalculator({
            unitSystem: userData.unitSystem,
            weight: userData.weight,
            height: userData.height,
            // ... other properties
        })
    }
    
    public getBmi(): number {
        this.calculator = this.createCalculator()
        return this.calculator.getBmi()
    }
}
```

### Health Calculation Categories
The system is divided into distinct calculation categories:

1. **Basic Measurements**
   - BMI (Body Mass Index)
   - Ideal Weight Range

2. **Body Composition**
   - Body Fat Percentage
   - Lean Body Mass
   - Waist-to-Hip Ratio
   - Waist-to-Height Ratio

3. **Energy Calculations**
   - Basal Metabolic Rate (BMR)
   - Total Daily Energy Expenditure (TDEE)

4. **Goal Calculations**
   - Weight Goal Timeline
   - Required Caloric Intake

## View System Architecture

### Template Management
Each view implements a template-based approach:

```typescript
class AbstractView {
    protected initializeCommonElements(): void {
        this.form = this.getElement(FORM_SELECTORS.common.form)
        this.resultsTable = this.getElement(FORM_SELECTORS.common.resultTable)
        this.errorMessage = this.getElement(FORM_SELECTORS.common.errorMessage)
    }

    public bindFormEvents(calculateHandler: (data: FormData) => void): void {
        this.form?.addEventListener('submit', (event: Event) => {
            event.preventDefault()
            const formData = new FormData(this.form as HTMLFormElement)
            calculateHandler(formData)
        })
    }
}
```

### Dynamic Unit System Updates
Views dynamically update placeholder text based on the selected unit system:

```typescript
class AbstractView {
    public updatePlaceholders(): void {
        const unitSystem = this.getSelectedUnitSystem()
        this.inputs.forEach((input, fieldName) => {
            const placeholder = UNIT_PLACEHOLDERS[unitSystem][fieldName]
            if (placeholder) {
                input.placeholder = placeholder
            }
        })
    }
}
```

## Error Handling & User Feedback

### Centralized Error Handling
```typescript
class BaseController {
    protected handleErrors(error: Error): void {
        this.view.showError(error.message)
        // Potential logging or reporting
    }
}
```

### Validation Error System
```typescript
class BaseValidator {
    protected validateRange(config: IRangeValidationConfigurate): void {
        const { value, min, max, name, unit } = config
        if (value < min || value > max) {
            throw new Error(`${name} must be between ${min} and ${max} ${unit}`)
        }
    }
}
```

## Testability & Maintainability

### Testability Features
- Loose coupling through interfaces
- Dependency injection
- Pure functions for calculations
- Clear separation of concerns

### Maintainability Aspects
- Consistent error handling
- Centralized validation
- Documented interfaces
- Clear separation of concerns

## Future Extensibility

### Adding New Calculations
To add new calculations, you need to:
1. Create new Controller extending BaseController
2. Create corresponding View extending AbstractView
3. Add route and create the controller in ControllerFactory
4. Implement calculation logic in HealthCalculatorModel
5. Add validation in FormValidatorService

### Future Features Support
The system is prepared for:
- Localization/Internationalization
- Additional measurement systems
- User data persistence
- API integration
- Advanced result visualizations

## Design Patterns Used

### Key Patterns
1. **MVC Pattern**
   - Clear separation between Model, View, and Controller
   - Centralized data flow
   - Event-driven updates

2. **Factory Pattern**
   - ControllerFactory for creating controllers
   - Centralized object creation
   - Configuration management

3. **Adapter Pattern**
   - HealthCalculatorAdapter for external library integration
   - Clean interface abstraction
   - Decoupled dependencies

4. **Template Method Pattern**
   - BaseController and AbstractView for common functionality
   - Standardized implementation patterns
   - Code reusability

5. **Observer Pattern**
   - Event handling between views and controllers
   - State change notifications
   - Loose coupling

## Core Components

### Controllers
- Handle user input
- Manage data flow
- Coordinate between models and views
- Handle validation
- Process calculations

### Models
- Manage application state
- Handle data persistence
- Perform business logic
- Maintain data integrity

### Views
- Render user interface
- Handle user interaction
- Display results
- Show error messages
- Manage form inputs

### Validators
- Input validation
- Unit conversion
- Range checking
- Type validation
- Error message generation

