FROM node:11-alpine

COPY ./src /app
WORKDIR /app

RUN npm install
EXPOSE 3000

CMD [ "node", "server.js" ]