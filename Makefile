install:
	npm install

lint:
	npx eslint .

lintStyles:
	npx stylelint "**/*.scss"

stylesFix:
	npx stylelint "**/*.scss" --fix

publish:
	surge ./src