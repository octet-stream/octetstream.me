FROM node:14

RUN curl -f https://get.pnpm.io/v6.14.js | node - add --global pnpm

RUN mkdir -p /usr/src/octetstream.me/root
WORKDIR /usr/src/octetstream.me/root

COPY package.json /usr/src/octetstream.me/root
COPY pnpm-lock.yaml /usr/src/octetstream.me/root

RUN pnpm install --frozen-lockfile

COPY . /usr/src/octetstream.me/root

RUN pnpm exec next telemetry disable
RUN pnpm run build

EXPOSE 1337
CMD ["pnpm", "run", "start", "--", "-p", "1337"]
