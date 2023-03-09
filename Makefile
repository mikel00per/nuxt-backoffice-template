#!/usr/bin/make

SCRIPT_VERSION=v1.0
SCRIPT_AUTHOR=Antonio Miguel Morillo Chica

HELP_FUN = \
    %help; while(<>){ \
   		push@{$$help{$$2//'options'}},[$$1,$$3] \
    	if/^([\w-_]+)\s*:.*\#\#(?:@(\w+))?\s(.*)$$/ \
	}; \
    print"$$_:\n", map"  $$_->[0]".(" "x(20-length($$_->[0])))."$$_->[1]\n",\
    @{$$help{$$_}},"\n" for keys %help; \

help: ##@Miscellaneous Show this help
	@echo "Usage: make [target] ...\n"
	@perl -e '$(HELP_FUN)' $(MAKEFILE_LIST)
	@echo "Written by $(SCRIPT_AUTHOR), version $(SCRIPT_VERSION)"
	@echo "Please report any bug or error to the author."

run-dev: ##@Container Build and run node container
	docker-compose up -d --build node-dev

shell-dev: ##@Container SHH in container
	docker-compose exec node-dev /bin/bash

destroy: ##@Container Remove all data related with node container
	docker-compose down --rmi local

logs: ##@Container Show logs in container
	docker-compose logs

lint: ##@Code Show linter errors
	docker-compose exec node-dev npm run lint

lint-fix: ##@Code Fix linter errors
	docker-compose exec node-dev npm run lint:fix