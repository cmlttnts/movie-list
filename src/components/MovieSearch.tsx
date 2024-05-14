import { TextField } from "@mui/material";
import { useState } from "react";
import "./MovieSearch.scss";

type MovieSearchProps = {
  onSearch: (query: string) => void;
};

export function MovieSearch({ onSearch }: MovieSearchProps) {
  const [query, setQuery] = useState("");
  const [warning, setWarning] = useState("");

  return (
    <div className="movie-search">
      <TextField
        value={query}
        id="movie-search-id"
        label="Search"
        onChange={(e) => {
          const newQuery = e.target.value;
          setQuery(newQuery);
          if (!newQuery || newQuery.length < 4) {
            setWarning("Query must be at least 4 characters long");
          } else {
            setWarning("");
            onSearch(newQuery);
          }
        }}
        placeholder="Search for a movie"
        error={!!warning}
        helperText={warning || undefined}
      />
    </div>
  );
}
