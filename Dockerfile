FROM node:14 AS builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM nginx:alpine

COPY --from=builder /app/public /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]