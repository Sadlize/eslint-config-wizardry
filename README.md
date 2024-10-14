# eslint-config-wizardry

> [!Important]
> This package contains a set of rules for the new eslint flat config  (v9+).

## Packages inside
 * **base** - `eslint`
 * **imports** - `eslint-plugin-import` and `eslint-plugin-simple-import-sort`
 * **typescript** - `typescript-eslint` (checks `'**/*.{ts,tsx,mts,cts}'`)
 * **react** - `eslint-plugin-react` and `eslint-plugin-react-hooks` (checks `'**/*.{js,jsx,mjs,cjs,ts,tsx}'`)

## Usage
1. Install the correct versions of each package, which are listed by the command:
```sh
npm i --save-dev eslint typescript eslint-config-wizardry
```
2. Add import to your `eslint.config.js` / [any of available config formats](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-file])
```javascript
// eslint.config.js
import wizardryConfig from 'eslint-config-wizardry';

const config = [
  ...wizardryConfig,
  {
    // your config
  }
];

export default config;
```
3. Add scripts to your package.json (optional)
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
