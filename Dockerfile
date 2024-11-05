# Etapa base
FROM node:18-alpine as base
WORKDIR /src/app
COPY package.json yarn.lock ./
RUN yarn install

# Etapa de construcción
FROM base as builder
COPY . .
RUN yarn build

# Etapa de producción
FROM node:18-alpine as prod
WORKDIR /src/app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY --from=builder /src/app/dist ./dist
COPY --from=builder /src/app/node_modules ./node_modules
COPY --from=builder /src/app/package.json ./package.json
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["yarn", "start"]