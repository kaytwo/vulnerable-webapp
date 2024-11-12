import Database from "better-sqlite3";

let dbInstance: Database.Database | null = null;

export function openDb() {
  if (!dbInstance) {
    dbInstance = new Database("./comments.db");
  }
  return dbInstance;
}

export type Comment = {
  id: number;
  content: string;
  author: string;
};