import { openDb } from "./db";

openDb().exec(`
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL
  );
`);

openDb().exec(`
  CREATE TABLE IF NOT EXISTS secrets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL
  );`);

// insert a dummy secret
openDb().prepare("INSERT INTO secrets (content) VALUES (:content)").run({
  content: "This is a secret message. Do not share this with anyone!",
});

console.log("Database initialized.");
