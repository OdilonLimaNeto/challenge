FROM node:12-alpine

WORKDIR /usr/app

COPY package.json package-lock.json /usr/app/

RUN npm ci --silent

COPY . .

USER node

EXPOSE 3000
