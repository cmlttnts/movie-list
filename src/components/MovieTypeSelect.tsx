import { InputLabel, MenuItem, Select } from "@mui/material";
import { MovieType } from "../types";
import { useState } from "react";

type MovieTypeSelectProps = {
  onSelect: (type: MovieType | "") => void;
};

export function MovieTypeSelect({ onSelect }: MovieTypeSelectProps) {
  const [movieType, setMovieType] = useState<MovieType | "">("");

  return (
    <>
      <InputLabel id="movie-type-select-label">Movie Type</InputLabel>
      <Select
        style={{ minWidth: "200px" }}
        value={movieType}
        labelId="movie-type-select-label"
        id="movie-type-select-input"
        onChange={(e) => {
          setMovieType(e.target.value as MovieType | "");
          onSelect(e.target.value as MovieType | "");
        }}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value="movie">Movie</MenuItem>
        <MenuItem value="series">Series</MenuItem>
        <MenuItem value="episode">Episode</MenuItem>
      </Select>
    </>
  );
}
