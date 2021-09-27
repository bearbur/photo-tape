FROM node:14-alpine AS builder

# Create app directory
WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm build

FROM nginx:1.19-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder ./app/build /usr/share/nginx/html
