FROM node:alpine
WORKDIR /server
COPY package*.json .
RUN npm install -g npm@10.8.1
RUN npm i
CMD [npx prisma generate; npx prisma db push; npm run dev]