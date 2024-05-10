import { getArticleById,} from '@/js/utils/database.js';
import {getIndex,} from '@/js/utils/flexsearch.js';

export default async function handler(req, res) {
	const { query, } = req.query;

	//creates an index if empty
	const searchIndex = await getIndex();

	// Use the FlexSearch index to perform a search
	// returns an array of ids
	const searchResults = searchIndex.search(query);

	// Create a set containing all unique results' ids 
	const finalResultsIdsSet = new Set();
	searchResults.forEach(resultObject => {
		const partialResults = resultObject.result;

		partialResults.forEach(resultId => {
			finalResultsIdsSet.add(resultId);
		});
	});

	const finalResultsIdsArray = Array.from(finalResultsIdsSet);

	// Make an array containing the name and slug 
	// of the articles found in the search
	const newResults = [];
		
	for(let i=0; i < finalResultsIdsArray.length; i++){
		const dbArticle = await getArticleById(finalResultsIdsArray[i]);
		const resultArticle = {
			name: dbArticle.name,
			slug: dbArticle.slug,
		};
		newResults.push(resultArticle);
	}

	//return json-objects
	res.status(200).json({
		newResults: newResults,
	});
}