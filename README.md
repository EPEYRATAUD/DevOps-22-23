# DevOps

## Installation

### Commandes pour installer les différents packets nécessaire aux projets

```
npm init -y
 npm install typescript ts-node @types/node @types/express --save-dev
 npm install express --save-dev
```

## Test

### Commandes pour lancer le serveur web

```
npx tsc 	            // build le programme dans le index.js
node .\build\index.js      // lancer le programme dans le index.js

```

- Développer une **API** qui retourne au format **JSON** les **headers** de la **requête** quand il y une requête HTTP GET sur **/ping**
  ![](https://i.imgur.com/8jNor5q.png)

> On remarque également que le serveur écoute sur le port **8080**

- Réponse vide avec **code 404** si quoi que ça soit d'autre que **GET /ping**
  ![](https://i.imgur.com/UHR4ibU.png)
