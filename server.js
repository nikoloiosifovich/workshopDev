// usei o express para criar e configurar meu servidor
const express = require("express");
const server = express();

// configurar arquivos estáticos (css, scripts, imagnes)
server.use(express.static("public"));

// configuração do nunjuks (template builder. eg. jinja)
const nunjuks = require("nunjucks");
nunjuks.configure("views", {
  express: server,
  noCache: true // apenas em desenvolvimento, em produção deixar como false
});

// criei uma rota /
// e capturo o projeto do cliente para responder
server.get("/", function(req, res) {
  // exemplo de utilização do nunjuks
  const h1 = "OI DO BACKEND";
  return res.render("index.html", { title: h1 });
});

server.get("/ideias", function(req, res) {
  return res.render("ideias.html");
});

// liguei meu servidor na porta 3333
server.listen(3333);
