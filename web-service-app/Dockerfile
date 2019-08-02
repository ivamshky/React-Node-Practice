FROM node:current-alpine
RUN mkdir /app
WORKDIR /app
COPY /src /app/src
COPY /public /app/public
COPY ["package.json", "package-lock.json","./"]
RUN npm install
RUN npm run build
RUN npm install -g serve
ENTRYPOINT [ "serve","-s","build" ]

