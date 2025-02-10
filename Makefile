# Don't output the makefile errors
.IGNORE:
# Don't output the makefile commands being executed
.SILENT:
# Makefile targets don't correspond to actual files
.PHONY: setup build up down login shell psql debug redis-cli

# Default target to bring up a fresh stack
all: setup build up

# Build the microservice base image
setup:
	echo "\n\n***Building microservice base image***\n\n"
	podman build ./shared/microservice -t microservice-build
	podman build -f ./shared/microservice/Dockerfile.dotnet -t microservice-dotnet-build

# Build the stack
build: setup
	podman-compose --parallel 3 build

# Bring up the stack, stopping containers and removing anonymous volumes when stopped using CTRL-C
up: setup
	bash -c "trap 'trap - SIGINT SIGTERM ERR; echo ***Shutting down stack***; podman-compose down; exit 1' SIGINT SIGTERM ERR; podman-compose up"

# Bring up the stack while debugging a service,
# i.e. SERVICE=backend-ts make debug
debug: setup
	echo "\n\n***Starting $$SERVICE in debug mode***\n\n"
	bash -c "trap 'trap - SIGINT SIGTERM ERR; echo ***Shutting down stack***; podman-compose down; exit 1' SIGINT SIGTERM ERR; podman-compose -f docker-compose.yaml -f app/$$SERVICE/docker-compose.debug.yaml up"

# Take down the stack
down:
	podman-compose down

# Login to Dockerhub
login:
	podman login docker.io

# Run psql to connect to local postgres, default password is "postgres"
psql:
	podman run -it --rm --network demo_dapr-net postgres:17-alpine psql -h postgres -U postgres

redis-cli:
	podman run -it --rm --network demo_dapr-net redis:7-alpine redis-cli -h redis

# Run an alpine shell for very basic access to the dapr-net network to use tools like nc and ping
shell:
	podman run -it --rm --network demo_dapr-net alpine:latest

