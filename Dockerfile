# Dockerfile para el backend
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto del backend
EXPOSE 4000

# Comando para ejecutar el backend
CMD ["node", "index.js"]
