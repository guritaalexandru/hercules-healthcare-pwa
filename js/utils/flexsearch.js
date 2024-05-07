import {getAllArticles,} from '@/js/utils/database';
const FlexSearch = require('flexsearch');

let searchIndex;

const getIndex = async () => {
	if (!searchIndex) {
		searchIndex = new FlexSearch.Document({
			tokenize: 'forward',
			cache: true,
			doc: {
				id: 'id',
				field: ['name', 'content'], // Define fields you want to index
			},});

		// Get all articles and add them to the index
		const articles = await getAllArticles();
		articles.forEach(article => searchIndex.add(article.id, article));

		//console.log('Index created');
		return searchIndex;
	}

	//console.log('Index already exists');
	return searchIndex;
};

export {
	getIndex,
};