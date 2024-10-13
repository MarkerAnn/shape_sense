export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    rules: {
      // Enforce no semicolons (as per my Prettier config)
      semi: ['error', 'never'],

      // Use single quotes for consistency
      quotes: ['error', 'single'],

      // Disallow unused variables, ignore if prefixed with underscore
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],

      // Enforce Prettier rules
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
          printWidth: 80, // Enforce max line length
        },
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
  prettierConfig,
]
