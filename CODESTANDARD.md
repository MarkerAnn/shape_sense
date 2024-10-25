# Code Standards Documentation

## TypeScript Configuration & Standards

### TypeScript Configuration

The project uses a strict TypeScript configuration as defined in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "bundler"
  }
}
```

### Type Safety

- Strict type checking enabled
- No implicit any
- Explicit return types required
- Null checks enforced

## ESLint Configuration

### Core Rules

```javascript
export default [
  {
    files: ['src/**/*.ts'],
    rules: {
      // Function complexity limits
      complexity: ['error', 5],

      // Function length limits
      'max-lines-per-function': ['error', { max: 30 }],

      // Variable naming
      'id-length': ['error', { min: 2, exceptions: ['i', 'j', 'k'] }],

      // Function declarations
      'func-style': ['error', 'declaration'],

      // Callback nesting
      'max-nested-callbacks': ['error', 3],

      // Function parameters
      'max-params': ['error', 3],
    },
  },
]
```

### Naming Conventions

```javascript
'@typescript-eslint/naming-convention': [
  'error',
  { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
  { selector: 'function', format: ['camelCase'] },
  { selector: 'class', format: ['PascalCase'] },
  { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
]
```

## Code Organization

### File Structure

```
src/
  ├── ts/
  │   ├── adapters/       # External integrations
  │   ├── constants/      # Application constants
  │   ├── controllers/    # MVC Controllers
  │   ├── enums/         # Enumeration types
  │   ├── interfaces/    # TypeScript interfaces
  │   ├── models/        # Data models
  │   ├── services/      # Business logic services
  │   ├── templates/     # HTML templates
  │   ├── types/         # TypeScript type definitions
  │   ├── utils/         # Utility functions
  │   ├── validators/    # Input validation
  │   └── views/         # MVC Views
  ├── style/             # CSS styles
  └── index.html         # Main HTML file
```

### File Naming

- PascalCase for class and template files: `BmiController.ts`, `BmiTemplate.ts`
- camelCase for utility files: `headerManager.ts`

## Code Style Guidelines

### Class Structure

```typescript
export class ExampleClass {
  // 1. Private members
  private readonly data: Type

  // 2. Constructor
  constructor(dependency: IDependency) {
    this.data = dependency
  }

  // 3. Public methods
  public doSomething(): void {
    // Implementation
  }

  // 4. Protected methods
  protected handleEvent(): void {
    // Implementation
  }

  // 5. Private methods
  private helperMethod(): void {
    // Implementation
  }
}
```

### Method Standards

- Maximum length: 30 lines
- Maximum horisontal length: 80
- Maximum parameters: 3
- Clear return types
- Single responsibility

### Comments and Documentation

```typescript
/**
 * Calculates the BMI value based on weight and height.
 * @param weight - Weight in kilograms
 * @param height - Height in meters
 * @returns The calculated BMI value
 * @throws {ValidationError} If input values are invalid
 */
public calculateBmi(weight: number, height: number): number {
    // Implementation
}
```

## Testing Standards

### Test Organization

```typescript
describe('BmiCalculator', () => {
  describe('calculateBmi', () => {
    it('should calculate correct BMI for normal weight', () => {
      // Test implementation
    })

    it('should throw error for invalid input', () => {
      // Test implementation
    })
  })
})
```

## Code Quality Checks

### Pre-commit Checks

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier --write \"src/**/*.{ts,html,css}\"",
    "type-check": "tsc --noEmit",
    "lint:fix": "eslint . --fix",
    "lint:check": "eslint . && npm run format:check"
  }
}
```

## Build and Deployment

### Vite Configuration

```typescript
export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    cssMinify: true,
  },
  server: {
    open: true,
    hmr: true,
  },
})
```

## Best Practices

### Dependency Injection

```typescript
// Preferred
class Calculator {
  constructor(private validator: IValidator) {}
}

// Avoid
class Calculator {
  private validator = new Validator()
}
```

### Interface Segregation

```typescript
// Preferred
interface ICalculator {
  calculate(): number
}

interface IValidator {
  validate(): boolean
}

// Avoid
interface ICalculatorWithValidation {
  calculate(): number
  validate(): boolean
}
```

### Single Responsibility

```typescript
// Preferred
class BmiCalculator {
  calculateBmi(): number
}

class BmiValidator {
  validateInput(): boolean
}

// Avoid
class BmiHandler {
  calculateBmi(): number
  validateInput(): boolean
  updateUI(): void
}
```

### Branch Naming

- feature/feature-name
- bugfix/bug-description
- refactor/refactor-description

### Commit Messages

```
feat: add BMI calculation feature
fix: correct validation error in height input
refactor: improve error handling in BaseController
docs: update README with setup instructions
```
