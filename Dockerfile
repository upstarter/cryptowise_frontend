FROM launcher.gcr.io/google/nodejs
ARG build_env=production

ARG app_name=cryptowise_frontend
ARG app_dir=/opt/app/${app_name}
WORKDIR ${app_dir}
ENV PATH ${app_dir}/node_modules/.bin:$PATH
ENV NODE_ENV=${build_env} TERM=xterm
RUN apt-get update -y \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt-get install -y -q --no-install-recommends nodejs git build-essential
COPY . .
EXPOSE 8080
RUN npm install \
    && npm rebuild node-sass \
    && npm run deploy \
    && npm install -g serve
COPY ./bootstart.sh /
RUN chmod +x /bootstart.sh
ENTRYPOINT ["/bootstart.sh"]

# sudo apt-get install gcc g++ make
# ## To install the Yarn package manager, run:
# curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
# echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
# sudo apt-get update && sudo apt-get install yarn
