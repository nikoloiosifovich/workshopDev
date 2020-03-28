// usei o express para criar e configurar meu servidor
const express = require("express");
const server = express();

// configurar arquivos estáticos (css, scripts, imagnes)
server.use(express.static("public"));

// configuração do nunjuks (template builder. eg. jinja)
const nunjuks = require("nunjucks");
nunjuks.configure("views", {
  express: server
});

// criei uma rota /
// e capturo o projeto do cliente para responder
server.get("/", function(req, res) {
  return res.render("index.html");
});

server.get("/ideias", function(req, res) {
  return res.render("ideias.html");
});

// liguei meu servidor na porta 3333
server.listen(3333);
