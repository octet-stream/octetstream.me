FROM node:lts
LABEL maintainer="Nick K."

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.5

RUN mkdir -p /usr/src/octetstream.me
COPY . /usr/src/octetstream.me
WORKDIR /usr/src/octetstream.me

RUN yarn install
RUN npx next telemetry disable
RUN yarn build

EXPOSE 1337
CMD ["yarn", "start", "-p", "1337"]
