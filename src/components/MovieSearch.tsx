import { Input } from "@mui/material";
import { useState } from "react";

type MovieSearchProps = {
  onSearch: (query: string) => void;
};

export function MovieSearch({ onSearch }: MovieSearchProps) {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        placeholder="Search for a movie"
      />
    </div>
  );
}
