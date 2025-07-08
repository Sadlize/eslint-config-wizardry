export const baseConfig = {
  rules: {
    /* Possible problems */
    'array-callback-return': ['error', { allowImplicit: true }],
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-ex-assign': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-self-assign': ['error', { props: true }],
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    // no-undef: off (to enable this, we need to configure globals)
    'no-unexpected-multiline': 'error',
    // no-unmodified-loop-condition: off
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-unused-private-class-members': 'error',
    'no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }],
    'no-use-before-define': 'error',
    'no-useless-assignment': 'error',
    'no-useless-backreference': 'error',
    'require-atomic-updates': ['error', { 'allowProperties': true }],
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],

    /* Suggestions */
    // accessor-pairs: off
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'error',
    camelcase: ['error', { properties: 'never', ignoreImports: true }],
    // capitalized-comments: off
    'class-methods-use-this': 'error',
    // complexity: off
    'consistent-return': 'error',
    // consistent-this: off
    curly: ['error', 'multi-line'],
    'default-case': ['error', { commentPattern: '^no default$' }],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // func-name-matching: off
    'func-names': 'error',
    'func-style': 'off',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    // id-denylist: off
    // id-length: off
    // id-match: off
    // init-declarations: off
    'logical-assignment-operators': ['error', 'never'],
    'max-classes-per-file': ['error', 1],
    // max-depth: off
    // max-lines: off
    // max-lines-per-function: off
    // max-nested-callbacks: off
    // max-params: off
    // max-statements: off
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],
    'no-alert': 'warn',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'no-continue': 'error',
    'no-delete-var': 'error',
    // no-div-regex: off
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty': 'error',
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],
    'no-empty-static-block': 'error',
    // (eqeqeq instead)
    // no-eq-null: off
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],
    // no-implicit-globals: off
    'no-implied-eval': 'error',
    // no-inline-comments: off
    'no-invalid-this': 'warn',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    // no-magic-numbers: off
    'no-multi-assign': 'error',
    // no-negated-condition: off
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-object-constructor': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'accumulator',
        'ctx',
        'context',
        'req',
        'request',
        'res',
        'response',
        'staticContext', // for ReactRouter context
      ],
      ignorePropertyModificationsForRegex: ["^draft"], // for immer
    }],
    'no-plusplus': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': ['error', {
      restrictedNamedExports: ['default', 'then'],
    }],
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],
    // no-restricted-imports: off
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    // no-ternary: off
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    // no-undefined: off
    // 'no-underscore-dangle': off
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    // no-warning-comments: off
    'no-with': 'error',
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    'prefer-destructuring': ['error', {
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
    'prefer-exponentiation-operator': 'error',
    // arguably, an analysis is needed (ES2018 or newer)
    // prefer-named-capture-group
    'prefer-numeric-literals': 'error',
    // to enable need to target ES2022 or newer
    // prefer-object-has-own
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    // require-await: off
    // require-unicode-regexp: off
    'require-yield': 'error',
    // we use different sorting rules
    // sort-imports: off
    // sort-keys: off
    // sort-vars: off
    strict: ['error', 'never'],
    'symbol-description': 'error',
    'vars-on-top': 'error',
    yoda: 'error',
    'unicode-bom': 'error',
  },
};
