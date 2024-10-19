import globals from 'globals'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import eslintPluginJs from '@eslint/js'
import eslintPrettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: eslintPrettier,
    },
    settings: {},
    rules: {
      // ESLint's recommended JS rules
      ...eslintPluginJs.configs.recommended.rules,

      // TypeScript-ESLint recommended rules
      ...typescriptPlugin.configs.recommended.rules,

      // Prettier rules
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 80,
          bracketSpacing: true,
          arrowParens: 'always',
          tabWidth: 2,
          printWidth: 80,
        },
      ],

      // Enforce no semicolons (as per my Prettier config)
      semi: ['error', 'never'],

      // Use single quotes for consistency
      quotes: ['error', 'single'],

      // Disallow unused variables, ignore if prefixed with underscore
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],

      // Restrict certain import patterns
      'no-restricted-imports': [
        'error',
        {
          patterns: ['./*.js'],
          paths: [],
        },
      ],

      // Enforce meaningful and pronounceable variable names
      'id-length': ['error', { min: 2, exceptions: ['i', 'j', 'k'] }],

      // Limit function length to promote single responsibility principle
      'max-lines-per-function': ['error', { max: 50 }],

      // Limit cyclomatic complexity to encourage simpler functions
      complexity: ['error', 5],

      // Enforce consistent function declarations
      'func-style': ['error', 'declaration'],

      // Encourage use of const for variables that aren't reassigned
      'prefer-const': 'error',

      // Enforce blank lines between functions to improve readability
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'function', next: 'function' },
      ],

      // Discourage nested callbacks to improve code readability
      'max-nested-callbacks': ['error', 3],

      // Limit the number of parameters in a function
      'max-params': ['error', 3],

      // Enforce consistent naming conventions
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
        { selector: 'function', format: ['camelCase'] },
        { selector: 'class', format: ['PascalCase'] },
        { selector: 'interface', format: ['PascalCase'], prefix: ['I'] },
      ],

      // New rules from Clean Code principles
      'max-len': ['error', { code: 80 }],
      'no-console': 'warn',
      'no-magic-numbers': ['warn', { ignore: [-1, 0, 1, 2] }],
      'prefer-arrow-callback': 'error',
      'no-var': 'error',
    },
  },
  {
    files: ['**/*.test.ts', '**/*.spec.ts'],
    rules: {
      // Disable import restrictions for test files
      'no-restricted-imports': 'off',

      // Allow longer functions in test files
      'max-lines-per-function': 'off',
    },
  },
]
