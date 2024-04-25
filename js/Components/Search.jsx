import React, { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();

    // Make a request to the search API
    const res = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
    const newResults = await res.json();

    // Update the state with the new results
    setResults(newResults);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <button type="submit">Search</button>
      {results.map((result, index) => (
        <div key={index}>{result}</div>
      ))}
    </form>
  );
}