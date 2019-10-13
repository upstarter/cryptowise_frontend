#!/bin/sh
#service nginx start
/usr/local/bin/envoy -c /etc/frontend-envoy.yaml --service-cluster frontend --component-log-level "upstream:debug"
