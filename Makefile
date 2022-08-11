install:
	npm install

lintScripts:
	npx eslint .

lintStyles:
	npx stylelint "**/*.scss"

publish:
	surge ./dist