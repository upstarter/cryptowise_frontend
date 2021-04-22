#!/bin/sh
service nginx start
/usr/local/bin/envoy -l off -c /etc/frontend-envoy.yaml --service-cluster frontend --component-log-level "upstream:debug,connection:trace"
