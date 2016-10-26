FROM alpine:latest

MAINTAINER Ciarán Curley version: 0.1.0

RUN apk curl git &&
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash &&
    curl -o- -sL https://yarnpkg.com/install.sh | sudo -E bash &&
    git clone https://github.com/DogPawHat/scholarsmith &&
    cd scholarsmith &&
    yarn &&
    yarn test &&
    yarn run start