import express from "express";
import os from "os";

const app = express(); // Permet l'utilisation de express pour le serveur web.
const PING_LISTEN_PORT = 8080; // Définit le port sur lequel se lance le serveur web

// ACCUEIL //
app.get("/", (req, res) => {
  res.send("This is a test web page!");
});
//REQUETE HEADERS//
app.get("/PING", (req, res) => {
  res.send(req.headers);
  console.log(os.hostname());
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
