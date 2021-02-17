FROM node:14.15.5-alpine

RUN mkdir -p /usr/src/nithub
WORKDIR /usr/src/nithub

COPY package*.json ./

RUN npm install

# Necessary files for building the app
COPY public/ public/
COPY src/ src/

CMD ["npm", "start"]