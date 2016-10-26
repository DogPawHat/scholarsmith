FROM risingstack/alpine:3.3-v4.3.1-3.0.1

MAINTAINER Ciarán Curley version: 0.1.0

RUN apk update && apk add python gcc g++ make
RUN curl -o- -sL https://yarnpkg.com/install.sh | sh && \
    mkdir scholarsmith

COPY ./* scholarsmith

RUN cd scholarsmith && \
    yarn && yarn test


ENTRYPOINT yarn run start
