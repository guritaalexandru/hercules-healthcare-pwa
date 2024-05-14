const LOCAL_STORAGE_KEYS = {
	HISTORY: 'history',
	BOOKMARKS: 'bookmarks',
};

const getLocalStorage = key => {
	return JSON.parse(localStorage.getItem(key)) || [];
};

const findInLocalStorage = (key, id) => {
	const current = getLocalStorage(key);
	return current.some(item => item.id === id);
};

const setLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

const addToLocalStorage = (key, value) => {
	const current = getLocalStorage(key);
	setLocalStorage(key, [...current, value]);
};

const removeFromLocalStorage = (key, id) => {
	const current = getLocalStorage(key);
	const updated = current.filter(item => item.id !== id);
	setLocalStorage(key, updated);
};

const clearLocalStorage = key => {
	localStorage.removeItem(key);
};

module.exports = {
	getLocalStorage,
	findInLocalStorage,
	setLocalStorage,
	addToLocalStorage,
	removeFromLocalStorage,
	clearLocalStorage,
	LOCAL_STORAGE_KEYS,
};