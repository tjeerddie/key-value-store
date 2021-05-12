module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'airbnb-base',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		parser: 'babel-eslint',
		allowImportExportEverywhere: true,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			arrowFunctions: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'max-len': ['error', { code: 80, tabWidth: 2 }],
		indent: ['error', 'tab'],
		'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
		'object-curly-newline': ['error', {
			ObjectPattern: { multiline: true, minProperties: 5 },
		}],
		'comma-dangle': ['error', 'always-multiline'],
		'no-implicit-coercion': [2, { allow: ['!!'] }],
		'no-tabs': 0,
		'linebreak-style': 0,
		'import/named': 0,
		'import/prefer-default-export': 0,
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
};
