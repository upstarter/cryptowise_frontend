FROM node:12.10 as build-stage
# FROM envoyproxy/envoy:latest as build-stage
ARG app_dir=/app/cw_web
WORKDIR ${app_dir}
# avoid running yarn install on unchanging dependencies to save time here.
COPY package*.json ./
ENV PATH ${app_dir}/node_modules/.bin:$PATH

RUN yarn cache clean && yarn install
COPY . .
RUN yarn bundle

FROM envoyproxy/envoy:latest as production-stage
RUN apt update -y \
    && apt upgrade -y \
    && apt install -y wget

COPY --from=build-stage /app/cw_web/dist /usr/share/nginx/html
COPY --from=build-stage /app/cw_web/dist /var/www/html
COPY --from=build-stage /app/cw_web/default.conf /etc/nginx/conf.d/
# COPY --from=build-stage /app/cw_web/cors_support /etc/nginx/conf.d
# RUN CHMOD 777 -R /usr/share/nginx/html # fails
EXPOSE 80

COPY ./bootstart.sh /
RUN chmod +x /bootstart.sh
ENTRYPOINT ["/bootstart.sh"]
