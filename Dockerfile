FROM node:11-alpine

COPY ./src /app
WORKDIR /app

RUN npm install
RUN npm install nodemon -g

EXPOSE 3000

CMD [ "node", "server.js" ]