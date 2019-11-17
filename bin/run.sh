#!/usr/bin/env bash

docker run -it -p "8080:8080" -v "$(pwd):/var/www" -w "/var/www" node:12.6.0-alpine /bin/sh
