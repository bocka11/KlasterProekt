FROM node:13.12.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install react-scripts -g
COPY . ./
CMD ["npm","start"]