FROM mhart/alpine-node:base-7

MAINTAINER Ciarán Curley version: 0.1.0

RUN apk update && \
    mkdir scholarsmith

COPY . scholarsmith/

RUN cd scholarsmith && \
    ./node_modules/.bin/tape -r ts-node/register ./test/*.spec.ts,

EXPOSE 8080
ENTRYPOINT ./node_modules/.bin/webpack-dev-server -d --content-base dist/