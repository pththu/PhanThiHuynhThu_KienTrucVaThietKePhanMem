FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 2102
CMD ["npm", "start"]