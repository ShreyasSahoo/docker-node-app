#Defining the base image
FROM node:18

#Creating a work directory in the container
WORKDIR /src/usr/bin

#Copying files from host to container
COPY . .

#Installing libraries 
RUN npm install

#Exposing port for binding
EXPOSE 3500


CMD [ "node", "server.js" ]

