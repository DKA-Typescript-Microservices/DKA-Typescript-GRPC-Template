REPOSITORY_NAME=yovanggaanandhika/microservices-core-enterprise
TAG_NAME=latest

# build dist folder
build: clean
	yarn run build

# clean Dist Folder
clean:
	rm -rf dist

run-db:
	docker compose -f compose.prod.yml up -d

clear-db:
	docker compose -f compose.prod.yml down -v

# docker command
pull:
	docker pull ${REPOSITORY_NAME}:${TAG_NAME}

publish:
	docker buildx build --progress=plain --platform linux/amd64,linux/386 -t ${REPOSITORY_NAME}:${TAG_NAME} --push .

push-secrets:
	@echo "🚀 Pushing secrets to repo: $(REPO)"
	@cat $(SECRETS_FILE) | while IFS='=' read -r key value; do \
		if [ -n "$$key" ]; then \
			echo "🔐 Setting secret $$key..."; \
			gh secret set "$$key" -b"$$value" --repo "$(REPO)"; \
		fi \
	done
	@echo "✅ All secrets pushed!"
