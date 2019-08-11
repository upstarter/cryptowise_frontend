#!/bin/sh

# FRONTEND
set -ex
export HOME=/app
mkdir -p ${HOME}
cd ${HOME}
NODE_ENV=production npm start
