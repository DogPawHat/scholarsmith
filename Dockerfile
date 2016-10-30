FROM mhart/alpine-node:base-7

MAINTAINER Ciarán Curley version: 0.1.0

RUN mkdir scholarsmith && \
    mkdir .yarn

COPY . scholarsmith/

ADD yarn-v0.16.1.tar.gz .yarn

RUN apk update
    
ENV PATH "$PATH:$HOME/.yarn/dist/bin"

RUN cd scholarsmith && \
    yarn
RUN cd scholarsmith && \
    yarn test && \
    yarn build && \


EXPOSE 8080
ENTRYPOINT ["./scholarsmith/node_modules/.bin/webpack-dev-server", "-d", "--host=0.0.0.0", "--content-base", "dist/"]