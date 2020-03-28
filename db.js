const sqlite3 = require("sqlite3").verbose(); // com o verbose, o banco passa informações de comportamento no terminal
const db = new sqlite3.Database("./ideas.db"); // outra forma de criar objetos, usando OO

db.serialize(() => {
  // CREATE
  db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      title TEXT,
      category TEXT,
      description TEXT,
      link TEXT
    );
  `);

  // INSERT

  const query = `
  INSERT INTO ideas(
    image,
    title,
    category,
    description,
    link
  ) VALUES (?, ?, ?, ?, ?);
  `;

  const values = [
    "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    "Cursos de Programação",
    "Estudo",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto labore ratione iste quidem ips deserunt, voluptas nemo distinctio totam quia sunt dolores asperiores, in cumque autem dolorem, animi obcaecati repudiandae.",
    "http://udemy.com"
  ];
  // db.run(query, values, function(err) {
  //   if (err) return console.log(err);

  //   console.log(this);
  // });

  // DELETE
  // db.run(`DELETE FROM ideas WHERE id = ?`, [2], function(err) {
  //   if (err) return console.log(err);

  //   console.log("DELETED!", this);
  // });

  // READ
  db.all(`SELECT * FROM ideas`, function(err, rows) {
    if (err) return console.log(err);

    console.log(rows);
  });
});

db.close();
