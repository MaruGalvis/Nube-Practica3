# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y yarn.lock
COPY package.json yarn.lock ./

# Instala las dependencias del proyecto
RUN yarn install

# Copia todos los archivos del proyecto
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["yarn", "start:dev"]