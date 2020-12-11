FROM node as build-stage

WORKDIR /app
ADD . .
RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

USER root

RUN sudo apt -y update && \
    sudo apt -y upgrade

RUN curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
RUN sudo apt install -y nodejs

COPY  ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]