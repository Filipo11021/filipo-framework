/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: ['custom'],
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
};
