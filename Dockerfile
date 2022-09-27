FROM node:latest as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# docker build -t nhsoft.chenlh .  
# docker run -d -p 1234:80 nhsoft.chenlh:latest