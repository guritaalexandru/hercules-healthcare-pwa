import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    const newQuery = event.target.value;
    setQuery(newQuery);

    if (newQuery) {
      // Make a request to the search API
      const res = await fetch(`/api/search?query=${encodeURIComponent(newQuery)}`);
      const newResults = await res.json();
      //console.log("newRes: ", newResults);

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
      <div key={index} style={{ //TODO: pagination to articles, styling
        backgroundColor: '#f8f9fa', 
        width: "90%",
        border: '1px solid #dee2e6', 
        borderRadius: '5px', 
        padding: '10px', 
        margin: '5px auto', 
      }}>
        {result}
      </div>
    ))}
    </div>
  );
}