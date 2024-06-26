FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN ["npm", "install", "-g","pnpm"]
RUN ["pnpm", "install", "--frozen-lockfile"]
ENTRYPOINT [ "pnpm", "dev" ]