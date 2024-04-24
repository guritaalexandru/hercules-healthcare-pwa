import Database from 'better-sqlite3';
const db = new Database('hercules.db', { verbose: console.log });
db.pragma('journal_mode = WAL');

const getAllCollections = () => {
	return db.prepare('SELECT * FROM COLLECTIONS').all();
}

const getCollection = (id) => {
	return db.prepare('SELECT * FROM COLLECTIONS WHERE id = ?').get(id);
}

const getArticlesByCollection = (id) => {
	return db.prepare('SELECT * FROM ARTICLES WHERE collection_id = ?').all(id);
}

const getAllArticles = () => {
	return db.prepare('SELECT * FROM ARTICLES').all();
}

const getArticleById = (id) => {
	return db.prepare('SELECT * FROM ARTICLES WHERE id = ?').get(id);
}

export {
	getAllCollections,
	getCollection,
	getArticlesByCollection,
	getAllArticles,
	getArticleById
};