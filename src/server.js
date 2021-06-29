const express = require("express");
const route = require("./route");
const patch = require("path");

const server = express();

server.set("view engine", "ejs");

server.use(express.static("public"));

server.set("views", patch.join(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(5000, () => console.log("Rodando"));
