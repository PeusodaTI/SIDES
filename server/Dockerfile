# Use a imagem oficial do Node como base
FROM node:16-alpine

# Definir o diretório de trabalho do container
WORKDIR /server

# Copiar o arquivo package.json para o WORKDIR
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar os arquivos do projeto para o WORKDIR
COPY . .

RUN npm run build

COPY ./src/build .

# Expor a porta 3000
EXPOSE 3333

# Definir o comando padrão para rodar o aplicativo
CMD ["npm", "run", "dev"]