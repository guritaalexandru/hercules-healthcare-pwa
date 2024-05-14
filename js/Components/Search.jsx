import React, { useState, } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import StackedListItemComponent from '@/js/Components/Parts/StackedListItemComponent.jsx';

export default function Search() {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	const handleSearch = async event => {
		event.preventDefault(); // Prevent the form from refreshing the page
		const newQuery = event.target.value;
		setQuery(newQuery);

		if (newQuery) {
			// Make a request to the search API
			const res = await fetch(`/api/search?query=${encodeURIComponent(newQuery)}`);

			// returns an object containing names and slugs of relevant articles
			const newResultsObj = await res.json(); 
			const newResults = newResultsObj.newResults;

			// Update the state with the new results
			setResults(newResults);

		} else {
			// If the query is empty, clear the results
			setResults([]);
		}
	};

	return (
		<div>
			<form style={{ display: 'flex', justifyContent: 'center', }}>
				<TextField
					variant="outlined"
					value={ query }
					onChange={ handleSearch }
					placeholder="Search..."
					sx={{ width: '100%', }}
					InputProps={{
						endAdornment: (
							<IconButton type="submit">
								<SearchIcon />
							</IconButton>
						),
					}}
				/>
			</form>
			{
				results.length === 0 && query.length > 0 && (
					<p className="text-center text-2xl pt-5">No results found</p>
				)
			}
			{
				results.length !== 0 && query.length && (
					<>
						<h2 className="text-3xl font-bold text-center mt-10">{results.length} results found</h2>
						{results.map((result, index) => (
							<StackedListItemComponent
								key={ index }
								title={ result.name }
								link={ `/article/${result.slug}` }/>
						))}
					</>
				)
			}
		</div>
	);
}