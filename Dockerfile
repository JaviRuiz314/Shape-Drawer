FROM node:16-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json package-lock.json ./
COPY tsconfig.json ./
RUN npm install

ARG PORT
ENV PORT=${PORT}

COPY . .
RUN npm run build

EXPOSE ${PORT}
CMD [ "npm", "start" ]