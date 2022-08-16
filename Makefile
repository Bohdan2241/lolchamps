install:
	npm install

lintScripts:
	npx eslint .

lintStyles:
	npx stylelint "**/*.scss"

publish:
	gulp build
	surge ./dist