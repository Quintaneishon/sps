# version oficial de Node de Docker
FROM node:14
# mkdir es el comando para crear carpetas
RUN mkdir -p /usr/src/app
# WORKDIR es para cambiar la ruta donde se estan ejecutando los comandos
WORKDIR /usr/src/app
# se copian las dependencias necesarias
COPY package*.json ./
# se instalan las dependencias de package.json
RUN npm install
# se copia todo el codigo en la carpeta nueva
COPY . .
# el puerto en donde se va a correr el contenedor
EXPOSE 8090
# el comando para ejecutar la API
CMD ["npm","start"]