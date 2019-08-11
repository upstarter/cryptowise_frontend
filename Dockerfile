FROM launcher.gcr.io/google/nodejs
ARG app_name=cryptowise_frontend
ARG npm_subdir=.
ARG build_env=production
ENV NODE_ENV=${build_env} TERM=xterm
WORKDIR /app
RUN apt-get update -y \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y -q --no-install-recommends nodejs
COPY . .
RUN cd ${npm_subdir} \
    && npm install \
    && ./node_modules/webpack/bin/webpack.js --mode production \
