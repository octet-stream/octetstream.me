FROM node:lts
LABEL maintainer="Nick K."

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.10

RUN mkdir -p /usr/src/octetstream.me
WORKDIR /usr/src/octetstream.me

COPY package.json /usr/src/octetstream.me
COPY yarn.lock /usr/src/octetstream.me

RUN yarn install

COPY . /usr/src/octetstream.me

RUN npx next telemetry disable
RUN yarn build

EXPOSE 1337
CMD ["yarn", "start", "-p", "1337"]
