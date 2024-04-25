import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

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
       <form style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              variant="outlined"
              value={query}
              onChange={handleSearch}
              placeholder="Search..."
              sx={{ width: "95%" }}
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
        <div key={index}>{result}</div>
      ))}
    </div>
  );
}