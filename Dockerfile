FROM node:lts-alpine as build-stage
# FROM envoyproxy/envoy:latest as build-stage
ENV NODE_ENV=production TERM=xterm
ARG app_dir=/app/cw_web
WORKDIR ${app_dir}
# avoid running yarn install on unchanging dependencies to save time here.
COPY package*.json ./
ENV PATH ${app_dir}/node_modules/.bin:$PATH

RUN yarn add -D webpack-cli
RUN yarn add -D webpack-merge
RUN yarn install
COPY . .
RUN yarn run bundle

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/cw_web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
# https://www.envoyproxy.io/learn/ssl
# ADD ./example-com.crt /etc/example-com.crt
# ADD ./example-com.key /etc/example-com.key
# CMD /usr/local/bin/envoy -c /etc/front-envoy.yaml --service-cluster front-proxy
# COPY ./bootstart.sh /
# RUN chmod +x /bootstart.sh
# ENTRYPOINT ["/bootstart.sh"]
