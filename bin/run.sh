#!/usr/bin/env bash

docker run \
  -it \
  -p "8080:8080" \
  -v "$(pwd):/var/www/" \
  -v "$(pwd)/node_modules/:/var/www/node_modules/" \
  -w "/var/www/" \
  node:12.6.0-alpine \
  /bin/sh
