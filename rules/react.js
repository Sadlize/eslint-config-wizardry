import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export const reactConfig = {
  files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  plugins: {
    react,
    'react-hooks': reactHooks,
    'jsx-a11y': pluginJsxA11y,
  },
  settings: {
    react: { version: '18.3.1' },
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    'no-useless-assignment': 'off',

    // react/boolean-prop-naming: off
    'react/button-has-type': ['error', {
      button: true,
      submit: true,
      reset: false,
    }],
    'react/checked-requires-onchange-or-readonly': 'error',
    'react/default-props-match-prop-types': ['error', {
      allowRequiredDefaults: false,
    }],
    // react/destructuring-assignment: off,
    // react/display-name: off
    // react/forbid-component-props: off
    // react/forbid-dom-props: off
    // react/forbid-elements: off
    'react/forbid-foreign-prop-types': ['warn', {
      allowInPropTypes: true,
    }],
    'react/forbid-prop-types': ['error', {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    'react/forward-ref-uses-ref': 'error',
    'react/function-component-definition': ['error', {
      namedComponents: ['function-declaration', 'function-expression'],
      unnamedComponents: 'function-expression',
    }],
    'react/hook-use-state': 'error',
    // react/iframe-missing-sandbox: off
    'react/jsx-boolean-value': ['error', 'never'],
    // react/jsx-child-element-spacing: off (prettier)
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never',
    }],
    // react/jsx-curly-newlineL off (prettier)
    'react/jsx-curly-spacing': ['error', 'never', {
      allowMultiline: true,
    }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', {
      extensions: ['.jsx', '.tsx'],
    }],
    // jsx-first-prop-new-line: off
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    // react/jsx-indent: off (prettier)
    // react/jsx-indent-props: off (prettier)
    // react/jsx-key: off
    // react/jsx-max-depth: off
    // react/jsx-max-props-per-line: off (prettier),
    // react/jsx-newline: off (prettier)
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': ['error', {
      ignoreCase: true,
    }],
    'react/jsx-no-leaked-render': ['error', {
      validStrategies: ['ternary', 'coerce'],
    }],
    // react/jsx-no-literals: off
    'react/jsx-no-script-url': ['error', [{
      name: 'Link',
      props: ['to'],
    }]],
    'react/jsx-no-target-blank': ['error', {
      enforceDynamicLinks: 'always',
    }],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    // react/jsx-one-expression-per-line: off (prettier)
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
    }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spread-multi': 'error',
    // react/jsx-props-no-spreading: off
    // react/jsx-sort-default-props (deprecated -> react/sort-default-props)
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandFirst: true,
      ignoreCase: true,
      noSortAlphabetically: true,
      reservedFirst: true,
    }],
    // react/jsx-space-before-closing (deprecated -> react/jsx-tag-spacing)
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // react/jsx-wrap-multilines: off (prettier)
    'react/no-access-state-in-setstate': 'error',
    // react/no-adjacent-inline-elements: off
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    // react/no-deprecated: off
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    // react/no-multi-comp: off
    'react/no-namespace': 'error',
    // react/no-object-type-as-default-prop: off (analysis)
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    // react/no-set-state: off
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    // react/no-unsafe: off
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-class-component-methods': 'error',
    // react/no-unused-prop-types: off
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    // react/prefer-exact-props: off
    // react/prefer-read-only-props: off (analysis)
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    // react/prop-types: off
    // react/react-in-jsx-scope: off
    'react/require-default-props': ['error', { functions: 'defaultArguments' }],
    // react/require-optimization: off
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': ['error', {
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^handle.+$/',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount'
        ],
        rendering: [
          '/^render.+$/',
          'render'
        ],
      },
    }],
    // react/sort-default-props: off
    // react/sort-prop-types: off
    // react/state-in-constructor: off (analysis)
    // react/static-property-placement: off (analysis)
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    /* hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    /* a11y */
    // jsx-a11y/accessible-emoji: off (deprecated)
    'jsx-a11y/alt-text': ['error', {
      elements: ['img'],
      img: ['Image'],
    }],
    // jsx-a11y/anchor-ambiguous-text: off
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],
    'jsx-a11y/aria-unsupported-elements': 'error',
    // jsx-a11y/autocomplete-valid: off
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/control-has-associated-label': ['error', {
      labelAttributes: ['label'],
      controlComponents: [],
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video',
      ],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      depth: 5,
    }],
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/interactive-supports-focus': 'error',
    // jsx-a11y/label-has-associated-control: off
    // jsx-a11y/label-has-for: off (deprecated)
    'jsx-a11y/lang': 'error',
    'jsx-a11y/media-has-caption': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
    'jsx-a11y/no-distracting-elements': ['error', {
      elements: ['marquee', 'blink'],
    }],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': ['error', {
      tr: ['none', 'presentation'],
    }],
    'jsx-a11y/no-noninteractive-element-interactions': ['error', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ]
    }],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': ['error', {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell'],
    }],
    'jsx-a11y/no-noninteractive-tabindex': ['error', {
      tags: [],
      roles: ['tabpanel'],
    }],
    // jsx-a11y/no-onchange: off (deprecated)
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': ['error', {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ]
    }],
    'jsx-a11y/prefer-tag-over-role': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',
  },
};
