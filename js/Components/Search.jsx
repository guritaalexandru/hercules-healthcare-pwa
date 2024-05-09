import React, { useState, } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/link";

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
					sx={{ width: '95%', }}
					InputProps={{
						endAdornment: (
							<IconButton type="submit">
								<SearchIcon />
							</IconButton>
						),
					}}
				/>
			</form>
			{results.map((result, index) => (
				<div
					key={ index }
					style={{ //TODO: styling
						backgroundColor: '#f8f9fa',
						width: '90%',
						border: '1px solid #dee2e6',
						borderRadius: '5px',
						padding: '10px',
						margin: '5px auto',
					}}>
					<Link
						href={"/article/" + result.slug }
						className={"flex-1 flex items-center justify-center"}
					>
						{result.name}
					</Link>		
				</div>
			))}
		</div>
	);
}