## STAGE 1 Build
FROM node as builder
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json", "./"]
RUN ["npm", "install"]
COPY . .
RUN ["npx", "tsc"]


## STAGE 2 Exécution
FROM builder as executer
WORKDIR /usr/src/app
ENTRYPOINT ["node", "./build/index"]
USER node