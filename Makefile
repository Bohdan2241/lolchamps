install:
	npm install

lintScripts:
	npx eslint .

lintStyles:
	npx stylelint "**/*.scss"

stylesFix:
	npx stylelint "**/*.scss" --fix

publish:
	surge ./src