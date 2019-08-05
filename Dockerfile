# Stage 1 - the build process
FROM launcher.gcr.io/google/nodejs as build-deps
WORKDIR /opt/app
COPY . /opt/app
RUN npm --unsafe-perm install
# RUN npm build

# Stage 2 - the production environment
# FROM launcher.gcr.io/google/nodejs
EXPOSE 8080
RUN npm run deploy
