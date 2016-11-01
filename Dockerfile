FROM mhart/alpine-node:7

MAINTAINER Ciarán Curley version: 0.1.0

RUN mkdir /opt && \
    mkdir /opt/.yarn && \
    mkdir /src && \
    mkdir /src/scholarsmith

ADD https://yarnpkg.com/latest.tar.gz /opt/yarn.tar.gz

WORKDIR /src/scholarsmith

RUN apk update && \
    apk add gcc g++ python make && \
    tar zvxf /opt/yarn.tar.gz -C /opt/.yarn

COPY . .

ENV PATH "$PATH:/opt/.yarn/dist/bin"

RUN yarn install --force && \
    yarn test && \
    yarn build


EXPOSE 8080
ENTRYPOINT ["./node_modules/.bin/webpack-dev-server", "-d", "--host=0.0.0.0", "--content-base", "dist/"]