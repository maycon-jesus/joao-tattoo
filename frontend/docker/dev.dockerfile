FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN ["npm", "install", "-g","pnpm"]
RUN ["pnpm", "install"]
ENTRYPOINT [ "pnpm", "dev" ]