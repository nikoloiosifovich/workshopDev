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
});

db.close();
