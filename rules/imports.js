import importPlugin from 'eslint-plugin-import';
import importSortPlugin from 'eslint-plugin-simple-import-sort';

export const importsConfig = {
  plugins: { import: importPlugin, 'simple-import-sort': importSortPlugin },
  rules: {
    'import/export': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/no-empty-named-blocks': 'error',
    // import/no-extraneous-dependencies
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    // import/no-unused-modules,
    // import/no-amd
    // import/no-commonjs
    // import/no-import-module-exports
    // import/no-nodejs-modules
    // import/unambiguous
    // import/default
    // import/named
    // import/namespace
    // import/no-absolute-path
    'import/no-cycle': 'error',
    // import/no-dynamic-require
    // import/no-internal-modules
    // import/no-relative-packages
    // import/no-relative-parent-imports
    // import/no-restricted-paths
    'import/no-self-import': 'error',
    // import/no-unresolved
    'import/no-useless-path-segments': 'error',
    // import/no-webpack-loader-syntax
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    // import/dynamic-import-chunkname
    // import/exports-last
    // import/extensions
    'import/first': 'error',
    // import/max-dependencies
    // import/newline-after-import
    'import/no-anonymous-default-export': 'error',
    // import/no-default-export
    // no-named-export
    // no-namespace
    'import/no-unassigned-import': ['error', { 'allow': ['**/*.{css,scss}'] }],
    // import/order
    // import/prefer-default-export

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^.+\\.s?css$'], // Style imports
          ['^\\u0000'], // Side effect imports
          [
            '^@?\\w', // External packages
            '^@/', // Project root folder imports
            '^(app|components|configs|constants|context|hooks|modules|pages|requests|store|styles|types|utils|widget|features|entities|shared)', // Internal folders
          ],
          [
            '^\\.\\.(?!/?$)', '^\\.\\./?$', // Parent imports. Put `..` last
            '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$', // Other relative imports. Put same-folder imports and `.` last
            '^.+\\.module.s?css$' // Module css
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
};
