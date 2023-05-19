FROM node:16-alpine
WORKDIR /index
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "run", "dev"]