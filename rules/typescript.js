import tseslint from 'typescript-eslint';

export const typescriptConfig = {
  files: ['**/*.{ts,tsx,mts,cts,vue}'],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
    // @typescript-eslint/ban-tslint-comment: off
    // @typescript-eslint/class-literal-property-style: off (analysis)

    'class-methods-use-this': 'off',
    '@typescript-eslint/class-methods-use-this': 'error',

    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',

    // @typescript-eslint/consistent-return: off (tsconfig noImplicitReturns instead)
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports'}],

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'error',

    // @typescript-eslint/explicit-function-return-type: off
    // @typescript-eslint/explicit-member-accessibility: off
    // @typescript-eslint/explicit-module-boundary-types: off (analysis)
    // @typescript-eslint/init-declarations: off
    // @typescript-eslint/max-params: off
    '@typescript-eslint/member-ordering': ['error', { default: { optionalityOrder: 'required-first' } },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        leadingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      {
        selector: 'function',
        leadingUnderscore: 'allow',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    '@typescript-eslint/no-array-delete': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    // @typescript-eslint/no-deprecated: off

    // automatically checked by the TypeScript compiler
    'no-dupe-class-members': 'off',
    // @typescript-eslint/no-dupe-class-members: off

    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-dynamic-delete': 'off',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // @typescript-eslint/no-empty-interface: off (deprecated -> no-empty-object-type)
    '@typescript-eslint/no-empty-object-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    // @typescript-eslint/no-floating-promises: off (analysis)
    '@typescript-eslint/no-for-in-array': 'error',

    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // @typescript-eslint/no-import-type-side-effects: off
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'warn',

    '@typescript-eslint/no-invalid-void-type': 'error',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    // @typescript-eslint/no-loss-of-precision: off (deprecated)
    // @typescript-eslint/no-magic-numbers: off
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    // @typescript-eslint/no-misused-promises: off (analysis)
    '@typescript-eslint/no-mixed-enums': 'error',
    // @typescript-eslint/no-namespace: off
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    // @typescript-eslint/no-redeclare: off (automatically checked by the TypeScript compiler)
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    // @typescript-eslint/no-restricted-imports: off
    // @typescript-eslint/no-restricted-types: off

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: false }],
    // @typescript-eslint/no-type-alias: off (deprecated -> consistent-type-definitions)
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-template-expression': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    // @typescript-eslint/no-unnecessary-type-parameters: off
    '@typescript-eslint/no-unsafe-argument': 'error',
    // @typescript-eslint/no-unsafe-assignment: off,
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',
    '@typescript-eslint/no-unsafe-function-type': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-unary-minus': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/no-useless-empty-export': 'error',
    // @typescript-eslint/no-var-requires: off (deprecated -> no-require-imports)
    '@typescript-eslint/no-wrapper-object-types': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',

    'no-throw-literal': 'off',
    '@typescript-eslint/only-throw-error': 'error',

    // @typescript-eslint/parameter-properties: off (analysis)
    '@typescript-eslint/prefer-as-const': 'error',

    'prefer-destructuring': 'off',
    '@typescript-eslint/prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-find': 'error',
    // @typescript-eslint/prefer-for-of: off
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    // @typescript-eslint/prefer-namespace-keyword: off
    // @typescript-eslint/prefer-nullish-coalescing: off
    '@typescript-eslint/prefer-optional-chain': 'error',

    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // @typescript-eslint/prefer-readonly: off (analysis)
    // @typescript-eslint/prefer-readonly-parameter-types: off
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    // @typescript-eslint/prefer-regexp-exec: off
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    // @typescript-eslint/prefer-ts-expect-error: off (deprecated -> ban-ts-comment)
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    // @typescript-eslint/require-await: off
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': ['error', {
      allowAny: false,
      allowBoolean: true,
      allowNever: true,
      allowNullish: true,
      allowNumber: true,
      allowRegExp: false,
    }],
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    // @typescript-eslint/sort-type-constituents: off (deprecated)
    // @typescript-eslint/strict-boolean-expressions: off
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/typedef': ['error', {
      parameter: true,
    }],
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'error',
  },
};
