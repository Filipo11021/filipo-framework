/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['custom', 'plugin:storybook/recommended'],
	parserOptions: {
		project: ['tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
};
