#!/bin/sh
nginx-debug -g daemon off;
/usr/local/bin/envoy -c /etc/frontend-envoy.yaml --service-cluster frontend --component-log-level "upstream:debug"
