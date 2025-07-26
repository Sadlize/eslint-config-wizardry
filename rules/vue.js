import vue from 'eslint-plugin-vue'
import parser from 'vue-eslint-parser'

export const vueConfig = {
  files: ["**/*.vue"],
  plugins: { vue },
  languageOptions: {
    parser,
    parserOptions: {
      extraFileExtensions: ['.vue'],
      parser: '@typescript-eslint/parser',
    },
  },
  processor: vue.processors['.vue'],
  rules: {
    'no-useless-assignment': 'off',

    /* Base Rules (Enabling Correct ESLint Parsing) */
    'vue/comment-directive': ['error', { reportUnusedDisableDirectives: false }],
    'vue/jsx-uses-vars': 'error',

    /* Priority A: Essential (Error Prevention) */
    'vue/multi-word-component-names': 'off',
    'vue/no-arrow-functions-in-watch': 'error',
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-child-content': 'error',
    'vue/no-computed-properties-in-data': 'error',
    'vue/no-custom-modifiers-on-v-model': 'error',
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/no-deprecated-delete-set': 'error',
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error',
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    'vue/no-deprecated-events-api': 'error',
    'vue/no-deprecated-filter': 'error',
    'vue/no-deprecated-functional-template': 'error',
    'vue/no-deprecated-html-element-is': 'error',
    'vue/no-deprecated-inline-template': 'error',
    'vue/no-deprecated-model-definition': 'error',
    'vue/no-deprecated-props-default-this': 'error',
    'vue/no-deprecated-router-link-tag-prop': ['error', {
      components: ['RouterLink', 'NuxtLink'],
    }],
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-deprecated-slot-attribute': 'error',
    'vue/no-deprecated-slot-scope-attribute': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    'vue/no-deprecated-vue-config-keycodes': 'error',
    'vue/no-dupe-keys': ['error', { groups: [] }],
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-lifecycle-after-await': 'error',
    // vue/no-multiple-template-root: off
    'vue/no-mutating-props': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-ref-as-operand': 'error',
    'vue/no-reserved-component-names': ['error', {
      disallowVueBuiltInComponents: true,
      disallowVue3BuiltInComponents: true,
      htmlElementCaseSensitive: true,
    }],
    'vue/no-reserved-keys': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': 'error',
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-useless-template-attributes': 'error',
    'vue/no-v-for-template-key-on-child': 'error',
    // vue/no-v-for-template-key: off (rule for vue 2)
    // vue/no-v-model-argument: off (deprecated -> vue/valid-v-model)
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/no-watch-after-await': 'error',
    'vue/prefer-import-from-vue': 'error',
    'vue/require-component-is': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-render-return': 'error',
    'vue/require-slots-as-functions': 'error',
    'vue/require-toggle-inside-transition': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/return-in-emits-validator': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/valid-attribute-name': 'error',
    'vue/valid-define-emits': 'error',
    'vue/valid-define-options': 'error',
    'vue/valid-define-props': 'error',
    // vue/valid-model-definition: off (Deprecated)
    'vue/valid-next-tick': 'error',
    'vue/valid-template-root': 'error',
    // vue/valid-v-bind-sync (Deprecated -> vue/no-parsing-error)
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-is': 'error',
    'vue/valid-v-memo': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error',

    /* Priority B: Strongly Recommended (Improving Readability) */
    'vue/attribute-hyphenation': ['error', 'never', {
      ignore: [],
      ignoreTags: []
    }],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    // vue/first-attribute-linebreak: off (prettier)
    // vue/html-closing-bracket-newline: off (prettier)
    // vue/html-closing-bracket-spacing: off (prettier)
    'vue/html-end-tags': 'error',
    // vue/html-indent: off (prettier)
    // vue/html-quotes: off (prettier)
    'vue/html-self-closing': 'error',
    // vue/max-attributes-per-line: off (prettier)
    // vue/multiline-html-element-content-newline: off (prettier)
    // vue/mustache-interpolation-spacing: off (prettier)
    // vue/no-multi-spaces: off (prettier)
    // vue/no-spaces-around-equal-signs-in-attribute: off (prettier)
    'vue/no-template-shadow': 'error',
    // vue/one-component-per-file: off
    'vue/prop-name-casing': ['error', 'camelCase', { ignoreProps: [] }],
    'vue/require-default-prop': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/require-prop-types': 'error',
    // vue/singleline-html-element-content-newline: off
    'vue/v-bind-style': ['error', 'shorthand', { sameNameShorthand: 'always' }],
    'vue/v-on-event-hyphenation': ['error', 'never', {
      autofix: true,
      ignore: [],
      ignoreTags: []
    }],
    'vue/v-on-style': ['error', 'shorthand'],
    // vue/v-slot-style: off

    /* Priority C: Recommended (Potentially Dangerous Patterns) */
    'vue/attributes-order': ['error', {
      order: [
        'LIST_RENDERING',
        ['GLOBAL', 'DEFINITION', 'UNIQUE', 'SLOT'],
        'ATTR_SHORTHAND_BOOL',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        ['ATTR_DYNAMIC', 'ATTR_STATIC'],
        'CONTENT',
        'EVENTS',
      ],
      alphabetical: false
    }],
    'vue/block-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
    'vue/no-lone-template': 'error',
    'vue/no-multiple-slot-args': 'error',
    'vue/no-required-prop-with-default': 'error',
    'vue/no-v-html': 'error',
    // vue/order-in-components: off (analysis)
    'vue/this-in-template': 'error',

    /* Uncategorized */
    'vue/block-lang': ['error', {
      script: { lang: 'ts' },
    }],
    // vue/block-tag-newline (prettier)
    'vue/component-api-style': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/custom-event-name-casing': 'error',
    'vue/define-emits-declaration': ['error', 'type-literal'],
    // vue/define-macros-order: off (analysis)
    'vue/define-props-declaration': ['error', 'type-based'],
    // vue/define-props-destructuring: off
    // vue/enforce-style-attribute: off
    'vue/html-button-has-type': ['error', {
      button: true,
      submit: true,
      reset: true
    }],
    // vue/html-comment-content-newline: off (prettier)
    // vue/html-comment-content-spacing: off
    // vue/html-comment-indent: off
    'vue/match-component-file-name': ['error', {
      extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
      shouldMatchCase: false,
    }],
    'vue/match-component-import-name': 'error',
    // vue/max-lines-per-block: off
    // vue/max-props: off
    // vue/max-template-depth: off
    // vue/new-line-between-multi-line-property: off
    // vue/next-tick-style: off (analysis)
    // vue/no-bare-strings-in-template: off
    // vue/no-boolean-default: off
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-import-compiler-macros': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': ['error', {
      presets: ['vue', 'vue-router', 'nuxt'],
      custom: [],
      threshold: 1,
    }],
    'vue/no-ref-object-reactivity-loss': 'error',
    // vue/no-restricted-block: off
    // vue/no-restricted-call-after-await: off (analysis)
    // vue/no-restricted-class: off
    // vue/no-restricted-component-names: off
    // vue/no-restricted-component-options: off
    // vue/no-restricted-custom-event: off
    // vue/no-restricted-html-elements: off
    // vue/no-restricted-props: off
    // vue/no-restricted-static-attribute: off
    // vue/no-restricted-v-bind: off
    // vue/no-restricted-v-on: off
    'vue/no-root-v-if': 'error',
    'vue/no-setup-props-reactivity-loss': 'error',
    // vue/no-static-inline-styles: off
    'vue/no-template-target-blank': ['error', {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
    }],
    'vue/no-this-in-before-route-enter': 'error', // ToDo: check without vue-router
    'vue/no-undef-components': ['error', {
      ignorePatterns: [
        'nuxt(\\-\\w+)+',
        'ClientOnly',
        'DevOnly'
      ],
    }],
    'vue/no-undef-properties': 'error',
    // vue/no-unsupported-features: off
    'vue/no-unused-emit-declarations': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-use-v-else-with-v-for': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    // vue/padding-line-between-tags: off
    // vue/prefer-define-options: off (added in vue 3.3, enable it when the gap with the latest version is greater)
    // vue/prefer-prop-type-boolean-first: off
    // vue/prefer-separate-static-class: off
    'vue/prefer-true-attribute-shorthand': 'error',
    // vue/prefer-use-template-ref: off (added in vue 3.5, enable it when the gap with the latest version is greater)
    'vue/require-default-export': 'error',
    'vue/require-direct-export': ['error', {
      disallowFunctionalComponentFunction: true,
    }],
    'vue/require-emit-validator': 'error',
    // vue/require-explicit-slots: off (defineSlots added in vue 3.3, enable it when the gap with the latest version is greater)
    // vue/require-expose: off (analysis)
    // vue/require-macro-variable-name: off
    'vue/require-name-property': 'error',
    // vue/require-prop-comment: off
    'vue/require-typed-object-prop': 'error',
    'vue/require-typed-ref': 'error',
    // vue/restricted-component-names: off
    // vue/script-indent: off (prettier)
    'vue/slot-name-casing': ['error', 'camelCase'],
    // vue/sort-keys: off
    // vue/static-class-names-order: off
    'vue/v-for-delimiter-style': ['error', 'in'],
    'vue/v-if-else-key': 'error',
    'vue/v-on-handler-style': ['error', ['method', 'inline-function'], {
      ignoreIncludesComment: false,
    }],

    /* Extension Rules */
    // vue/array-bracket-newline: off (prettier)
    // vue/array-bracket-spacing: off (prettier)
    // vue/array-element-newline: off (prettier)
    // vue/arrow-spacing: off (prettier)
    // vue/block-spacing: off (prettier)
    // vue/brace-style: off (prettier)
    'vue/camelcase': ['error', { properties: 'never', ignoreImports: true }],
    // vue/comma-dangle: off (prettier)
    // vue/comma-spacing: off (prettier)
    // vue/comma-style: off (prettier)
    // vue/dot-location: off (prettier)
    'vue/dot-notation': 'error',
    'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],
    // vue/func-call-spacing: off (prettier)
    // vue/key-spacing: off (prettier)
    // vue/keyword-spacing: off (prettier)
    // vue/max-len: off
    // vue/multiline-ternary: off
    'vue/no-console': 'error',
    'vue/no-constant-condition': 'error',
    'vue/no-empty-pattern': 'error',
    // vue/no-extra-parens: off (prettier)
    // vue/no-implicit-coercion: off
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    // vue/no-negated-condition: off
    // vue/no-restricted-syntax: off (analysis)
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    // vue/object-curly-newline: off (prettier)
    // vue/object-curly-spacing: off (prettier)
    // vue/object-property-newline: off (prettier)
    // vue/operator-linebreak: off (prettier)
    'vue/prefer-template': 'error',
    // vue/quote-props: off (prettier)
    // vue/space-in-parens: off (prettier)
    // vue/space-infix-ops: off (prettier)
    // vue/space-unary-ops: off (prettier)
    // vue/template-curly-spacing: off (prettier)
  },
};
