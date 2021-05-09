FROM node:12.18.3-alpine as angular
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=angular /usr/src/app/dist/teste-pratico-angular /usr/share/nginx/html
EXPOSE 80
