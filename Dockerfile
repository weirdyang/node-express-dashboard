FROM node:10.1-alpine

WORKDIR /app/

ADD ./package.json .

RUN ["npm", "install"]

COPY . .

RUN chown -R node:node /app/

USER node

EXPOSE 3000

CMD [ "npm", "start" ]
