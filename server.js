// usei o express para criar e configurar meu servidor
const express = require("express");
const server = express();

const ideas = [
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    title: "Cursos de Programação",
    category: "Estudo",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore ratione iste quidem ips deserunt, voluptas nemo distinctio totam quia sunt dolores asperiores, in cumque autem dolorem, animi obcaecati repudiandae.",
    url: "http://udemy.com"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
    title: "Exercícios",
    category: "Saúde",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore ratione iste quidem ips deserunt, voluptas nemo distinctio totam quia sunt dolores asperiores, in cumque autem dolorem, animi obcaecati repudiandae.",
    url: "http://udemy.com"
  },
  {
    img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
    title: "Meditação",
    category: "Mentalidade",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore ratione iste quidem ips deserunt, voluptas nemo distinctio totam quia sunt dolores asperiores, in cumque autem dolorem, animi obcaecati repudiandae.",
    url: "http://udemy.com"
  }
];

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
  return res.render("index.html", { ideas });
});

server.get("/ideias", function(req, res) {
  return res.render("ideias.html");
});

// liguei meu servidor na porta 3333
server.listen(3333);
