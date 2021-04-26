#!/bin/sh
service nginx start -c /etc/nginx/sites-enabled/default
/usr/local/bin/envoy -c /etc/frontend-envoy.yaml --service-cluster frontend --component-log-level  upstream:debug,connection:trace
