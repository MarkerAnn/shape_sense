# Shape Sense Zone - Health Calculator Application

A web application for calculating various health metrics including BMI, BMR, TDEE, and body composition measurements.

Live demo: [shape-sense-zone.netlify.app](https://shape-sense-zone.netlify.app)

## Overview

Shape Sense Zone is a TypeScript-based single-page application that provides various health and fitness calculators. The application uses modern development practices, follows the MVC pattern, and implements robust error handling and input validation.

## Features

- BMI Calculator with health risk assessment
- Body Composition Calculations (Body Fat %, Waist-to-Hip Ratio, etc.)
- Basal Metabolic Rate (BMR) Calculator
- Total Daily Energy Expenditure (TDEE) Calculator
- Weight Goal Planning Tools
- Support for both Metric and Imperial units
- Session-based data persistence
- Responsive design
- No external dependencies for calculations (using custom body-measurements package)

## Technology Stack

- TypeScript
- Vite
- ESLint
- Prettier
- HTML5
- CSS3
- body-measurements (custom package)

## Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm (v9.x or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MarkerAnn/shape_sense.git
cd health-calc-application
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Development Scripts

```bash
npm run dev          # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
npm run type-check  # Run TypeScript type checking
```

## Project Structure

You can read more about the architecture of the application [here](ARCHITECTURE.md)

```
src/
├── ts/
│   ├── adapters/          # External integrations
│   ├── constants/         # Application constants
│   ├── controllers/       # MVC Controllers
│   │   ├── BasalMetabolicRate/
│   │   ├── BmiControllers/
│   │   ├── BodyCompositionControllers/
│   │   └── GoalCalculatorControllers/
│   ├── enums/            # Enumeration types
│   ├── interfaces/       # TypeScript interfaces
│   ├── models/          # Data models
│   ├── services/        # Business logic
│   ├── templates/       # HTML templates
│   ├── types/          # Type definitions
│   ├── utils/          # Utility functions
│   ├── validators/     # Input validation
│   └── views/          # MVC Views
├── style/             # CSS styles
└── index.html        # Main HTML file
```

## Contributing

### Code Standards

You can read about the code standarde [here](CODESTANDARD.md)

### Git Workflow

1. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

2. Commit your changes:

```bash
git commit -m "feat: add your feature description"
```

Use conventional commit messages:

- feat: New feature
- fix: Bug fix
- refactor: Code change that neither fixes a bug nor adds a feature
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code
- test: Adding missing tests or correcting existing tests
- chore: Changes to the build process or auxiliary tools

3. Push to your branch:

```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request

### Before Submitting

- Run all checks:

```bash
npm run lint
npm run type-check
npm run format
```

- Test your changes thoroughly
- Update documentation if necessary
- Add appropriate test coverage

## Deployment

The application is automatically deployed to Netlify when changes are pushed to the main branch. The deployment process includes:

1. Automated builds on Netlify
2. Automatic deployment to [shape-sense-zone.netlify.app](https://shape-sense-zone.netlify.app)
3. Preview deployments for pull requests

### Manual Deployment

To deploy manually:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Testing

Currently, the project doesn't have automated tests. Contributions to add testing are welcome. Consider:

- Unit tests for calculations
- Integration tests for form submissions
- E2E tests for critical user journeys

## License

ISC License - see LICENSE file for details

## Support

For support, please open an issue in the repository.

## Acknowledgments

- Body measurements calculation package created internally
- Design inspiration from various health applications
- If you want to contribute to the module, here is the link https://github.com/MarkerAnn/health-calculator
