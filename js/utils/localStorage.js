const LOCAL_STORAGE_KEYS = {
	HISTORY: 'history',
	BOOKMARKS: 'bookmarks',
	FONT_SIZE_PREFERENCE: 'fontPreference',
};

const FONT_SIZE_PREFERENCES = {
	MEDIUM: 'medium',
	LARGE: 'large',
	XLARGE: 'xlarge',
};

const getFontSizePreference = () => {
	return localStorage.getItem(LOCAL_STORAGE_KEYS.FONT_SIZE_PREFERENCE) || FONT_SIZE_PREFERENCES.MEDIUM;
};

const setFontSizePreference = value => {
	localStorage.setItem(LOCAL_STORAGE_KEYS.FONT_SIZE_PREFERENCE, value);
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
	FONT_SIZE_PREFERENCES,
	getFontSizePreference,
	setFontSizePreference,
};