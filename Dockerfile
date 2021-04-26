FROM node:14.15.5 as build-stage
# FROM envoyproxy/envoy:v1.17.0 as build-stage
ARG app_dir=/app/cw_web
WORKDIR ${app_dir}
# avoid running yarn install on unchanging dependencies to save time here.
COPY package*.json ./
ENV PATH ${app_dir}/node_modules/.bin:$PATH

RUN yarn cache clean && yarn install
COPY . .
RUN yarn bundle

FROM envoyproxy/envoy:v1.17.0 as production-stage
RUN apt update -y \
    && apt upgrade -y \
    && apt install -y wget nginx vim

COPY --from=build-stage /app/cw_web/dist /usr/share/nginx/html
COPY --from=build-stage /app/cw_web/dist /var/www/html
COPY --from=build-stage /app/cw_web/nginx/default.conf /etc/nginx/sites-enabled/default.conf

COPY ./bootstart.sh /
RUN chmod +x /bootstart.sh
ENTRYPOINT ["/bootstart.sh"]
