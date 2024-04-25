import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery) {
      // Make a request to the search API
      const res = await fetch(`/api/search?query=${encodeURIComponent(newQuery)}`);
      const newResults = await res.json();

      // Update the state with the new results
      setResults(newResults);
    } else {
      // If the query is empty, clear the results
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
      />
      {results.map((result, index) => (
        <div key={index}>{result}</div>
      ))}
    </div>
  );
}