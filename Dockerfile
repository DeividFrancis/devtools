FROM node:11-alpine

ARG NODE_ENV=development
ARG PORT=3000

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /app
COPY ./src/package.json /app

RUN npm install

COPY ./src /app
RUN rm -rf node_modules

EXPOSE ${PORT}

CMD [ "npm", "run", "start" ]