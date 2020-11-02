FROM node:14
LABEL maintainer="Nick K."

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.5

RUN yarn install
RUN yarn build
