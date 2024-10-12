import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';

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

    // react/boolean-prop-naming
    'react/button-has-type': ['error', {
      button: true,
      submit: true,
      reset: false,
    }],
    'react/checked-requires-onchange-or-readonly': 'error',
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
    // 'react/destructuring-assignment': ['error', 'always'],
    // react/display-name
    // react/forbid-component-props
    // react/forbid-dom-props
    // react/forbid-elements
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
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
    // react/iframe-missing-sandbox
    'react/jsx-boolean-value': ['error', 'never'],
    // react/jsx-child-element-spacing
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    // 'react/jsx-curly-newline': ['error', {
    //   multiline: 'consistent',
    //   singleline: 'consistent',
    // }],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    // jsx-first-prop-new-line
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    // 'react/jsx-indent': ['error', 2],
    // 'react/jsx-indent-props': ['error', 2],
    // react/jsx-key
    // react/jsx-max-depth
    // 'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    // react/jsx-newline
    // react/jsx-no-bind
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    // 'react/jsx-no-leaked-render': ['error', { "validStrategies": ["coerce"] }],
    // react/jsx-no-literals
    'react/jsx-no-script-url': ['error', [{ name: 'Link', props: ['to'] }]],
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    // react/jsx-one-expression-per-line
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spread-multi': 'error',
    // react/jsx-props-no-spreading,
    // react/jsx-sort-default-props (Deprecated -> react/sort-default-props)
    'react/jsx-sort-props': ['error', {
      'callbacksLast': true,
      'shorthandFirst': true,
      'ignoreCase': true,
      'noSortAlphabetically': true,
      'reservedFirst': true
    }],
    // react/jsx-space-before-closing (Deprecated -> react/jsx-tag-spacing)
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    // 'react/jsx-wrap-multilines': ['error', {
    //   declaration: 'parens-new-line',
    //   assignment: 'parens-new-line',
    //   return: 'parens-new-line',
    //   arrow: 'parens-new-line',
    //   condition: 'parens-new-line',
    //   logical: 'parens-new-line',
    //   prop: 'parens-new-line',
    // }],
    // react/no-access-state-in-setstate
    // react/no-adjacent-inline-elements
    'react/no-array-index-key': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-danger-with-children': 'error',
    // react/no-deprecated
    // react/no-did-mount-set-state
    // react/no-did-update-set-state
    // react/no-direct-mutation-state
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    // react/no-is-mounted
    // react/no-multi-comp
    'react/no-namespace': 'error',
    // react/no-object-type-as-default-prop
    // react/no-redundant-should-component-update
    'react/no-render-return-value': 'error',
    // react/no-set-state
    'react/no-string-refs': 'error',
    // react/no-this-in-sfc
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    // react/no-unsafe
    'react/no-unstable-nested-components': 'error',
    // react/no-unused-class-component-methods
    // react/no-unused-prop-types
    // react/no-unused-state
    // react/no-will-update-set-state
    // react/prefer-es6-class
    // react/prefer-exact-props
    // react/prefer-read-only-props
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    // react/prop-types
    // 'react/react-in-jsx-scope': 'error',
    'react/require-default-props': ['error', { 'functions': 'defaultArguments' }],
    // react/require-optimization
    // react/require-render-return
    'react/self-closing-comp': 'error',
    // react/sort-comp
    // react/sort-default-props
    // react/sort-prop-types
    // state-in-constructor
    // react/static-property-placement
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    /* hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    /* a11y */
    // jsx-a11y/accessible-emoji (Deprecated)
    'jsx-a11y/alt-text': ['error', {
      elements: ['img'],
      img: ['Image'],
    }],
    // jsx-a11y/anchor-ambiguous-text
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
    // jsx-a11y/autocomplete-valid
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
    // jsx-a11y/label-has-associated-control
    // jsx-a11y/label-has-for (Deprecated)
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
    // jsx-a11y/no-onchange (Deprecated)
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
