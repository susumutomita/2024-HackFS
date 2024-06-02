.PHONY: install
install:
	npm install

.PHONY: setup_husky
setup_husky:
	npm run prepare

.PHONY: build
build:
	npm run build

.PHONY: start_dev
start_dev:
	npm run start:dev

.PHONY: clean
clean:
	npm run clean

.PHONY: gas
gas:
	npm run gas

.PHONY: test
test:
	npm run test:contract

.PHONY: lint
lint:
	npm run lint

.PHONY: lint_text
lint_text:
	npm run lint:text

.PHONY: format
format:
	npm run format

.PHONY: format_check
format_check:
	npm run format:check

.PHONY: before_commit
before_commit: test gas lint_text
