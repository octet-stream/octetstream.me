FROM node:14
LABEL maintainer="Nick K."

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.5

RUN mkdir -p /usr/src/octetstream.me
COPY . /usr/src/octetstream.me
WORKDIR /usr/src/octetstream.me

RUN yarn install
RUN NEXT_TELEMETRY_DISABLED=1 yarn build
