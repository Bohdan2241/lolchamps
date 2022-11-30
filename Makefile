install:
	npm install

build:
	npx gulp build

lintScripts:
	npx eslint .

lintStyles:
	npx stylelint "**/*.scss"

publish:
	gulp build
	surge ./dist