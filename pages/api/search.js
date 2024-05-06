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

	const newResults = {
		id: new Array(),
		name: new Array(),
	};

	// for(let i=0; i < results.length; i++){
	//   newResults.id[i] = results[i];
	//   newResults.name[i] = getArticleById(results[i]).name;
	//   //newResults.URI =
	// }
	//
	// //console.log(newResults);
	//
	// res.status(200).json( newResults.name );
	// res.status(200).json(results);
	// //res.status(200).toString(results);

	res.status(200).json({
		results: [],
	});
}