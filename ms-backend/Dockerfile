FROM node:12.6.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build 

RUN ls -ahls dist

CMD npm run start
