import Database from 'better-sqlite3';
const db = new Database('hercules.db', { verbose: console.log, });
db.pragma('journal_mode = WAL');

const getAllCollections = () => {
	return db.prepare('SELECT * FROM COLLECTIONS').all();
};

const getCollectionById = id => {
	return db.prepare('SELECT * FROM COLLECTIONS WHERE id = ?').get(id);
};

const getCollectionBySlug = slug => {
	return db.prepare('SELECT * FROM COLLECTIONS WHERE slug = ?').get(slug);
};

const getArticlesByCollection = id => {
	return db.prepare('SELECT * FROM ARTICLES WHERE collection_id = ?').all(id);
};

const getArticlesByCollectionSlug = slug => {
	return db.prepare(`
    SELECT ARTICLES.*
    FROM ARTICLES
    JOIN COLLECTIONS ON ARTICLES.collection_id = COLLECTIONS.id
    WHERE COLLECTIONS.slug = ?
  `).all(slug);
};

const getAllArticles = () => {
	return db.prepare('SELECT * FROM ARTICLES').all();
};

const getArticleById = id => {
	return db.prepare('SELECT * FROM ARTICLES WHERE id = ?').get(id);
};

const getArticleBySlug = slug => {
	return db.prepare('SELECT * FROM ARTICLES WHERE slug = ?').get(slug);
};

export {
	getAllCollections,
	getCollectionById,
	getArticlesByCollection,
	getAllArticles,
	getArticleById,
	getCollectionBySlug,
	getArticleBySlug,
	getArticlesByCollectionSlug,
};