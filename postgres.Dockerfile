FROM yovanggaanandhika/postgresql:15-node
# Maintainer
LABEL maintainer="Yovangga Anandhika <dka.tech.dev@gmail.com>"
# Set for install apt
USER root
# Install proto
RUN apk add --no-cache protobuf-dev
# set again to postgres user
USER postgres
# Copy Source
COPY . .
# set again to postgres root
USER root
# yarn install
RUN yarn install && yarn run build && yarn cache clean && rm -rf /root/.cache/yarn && rm -rf node_modules/.cache
# remove src folder, Remove config json,
RUN rm -rf src javascript-obfuscator.json nest-cli.json tsconfig** .npmrc .yarnrc.yml postgres.Dockerfile mongo.Dockerfile Dockerfile
# set again to postgres user
USER postgres