"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); // Permet l'utilisation de express pour le serveur web.
const PING_LISTEN_PORT = 8080; // Définit le port sur lequel se lance le serveur web
// ACCUEIL //
app.get("/", (req, res) => {
  res.send("This is a test web page!");
});
//REQUETE HEADERS//
app.get("/PING", (req, res) => {
  res.send(req.headers);
});
// ERREUR 404 //
app.all("*", (req, res) => {
  res.status(404).send();
});
app.listen(PING_LISTEN_PORT, () => {
  console.log(
    "The application is listening on port " + PING_LISTEN_PORT + " !"
  );
});
