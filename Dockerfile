FROM launcher.gcr.io/google/nodejs
ARG build_env=production

ARG app_name=cryptowise_frontend
ARG app_dir=/opt/app/${app_name}
WORKDIR ${app_dir}
ENV PATH ${app_dir}/node_modules/.bin:$PATH
ENV NODE_ENV=${build_env} TERM=xterm
RUN apt-get update -y \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y -q --no-install-recommends nodejs git build-essential supervisor
COPY . .
EXPOSE 8080
RUN npm install \
    && npm rebuild node-sass \
    && npm run deploy
COPY ./bootstart.sh /
RUN chmod +x /bootstart.sh
ENTRYPOINT ["/bootstart.sh"]
