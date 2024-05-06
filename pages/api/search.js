import { getArticleById,} from '@/js/utils/database.js';
import {getIndex,} from '@/js/utils/flexsearch.js';

export default async function handler(req, res) {
	const { query, } = req.query;

	const searchIndex = await getIndex();

	// Use the FlexSearch index to perform a search
	const searchResults = searchIndex.search(query);
	console.log('query: ', query);

	console.log('searchResults: ', searchResults);

	const finalResultsIdsSet = new Set();

	searchResults.forEach(resultObject => {
		const partialResults = resultObject.result;

		partialResults.forEach(resultId => {
			finalResultsIdsSet.add(resultId);
		});
	});

	console.log('finalResultsIdsSet: ', finalResultsIdsSet);
	const finalResultsIdsArray = Array.from(finalResultsIdsSet);
	console.log('finalResultsIdsArray: ', finalResultsIdsArray);

	const newResults = [];
		
	for(let i=0; i < finalResultsIdsArray.length; i++){
		const dbArticle = await getArticleById(finalResultsIdsArray[i]);
		const resultArticle = {
			name: dbArticle.name,
			slug: dbArticle.slug,
		};
		//newResults.name = dbArticle.name;
		//newResults.slug = dbArticle.slug;
		//newResults.id[i] = finalResultsIdsArray[i];
		//newResults.name[i] = await getArticleById(finalResultsIdsArray[i]).name;
		//newResults.slug[i] = await getArticleById(finalResultsIdsArray[i]).slug;
		newResults.push(resultArticle);
	}
	//
	// //console.log(newResults);
	//
	// res.status(200).json( newResults.name );
	// res.status(200).json(results);
	// //res.status(200).toString(results);

	//console.log(newResults);

	res.status(200).json({
		newResults: newResults,
	});
}