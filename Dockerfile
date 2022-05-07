FROM node 

MAINTAINER emmanuel

WORKDIR /app/

COPY package*.json /app/

RUN npm install

COPY . /app/

EXPOSE 8080

CMD ["npm", "dev"]