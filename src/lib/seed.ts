import Database from 'better-sqlite3';
import {openDb} from './db';

openDb().exec(`
  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL
  );
`);

console.log("Database initialized.");