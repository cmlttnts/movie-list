import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { useCallback, useState } from "react";
import { GridPaginationModel } from "@mui/x-data-grid";
import { MovieSearch } from "../components/MovieSearch";
import { useDebouncedCallback } from "../hooks/useDebouncedCallback";
import { MoviesTable } from "../components/MoviesTable";
import "./Home.scss";
import { YearSelect } from "../components/YearSelect";
import { Moment } from "moment";
import { MovieType } from "../types";
import { MovieTypeSelect } from "../components/MovieTypeSelect";

export function HomePage() {
  const [pagination, setPagination] = useState<GridPaginationModel>({ page: 0, pageSize: 10 });
  const [q, setQ] = useState<string>("Pokemon");
  const [year, setYear] = useState<number | null>(null);
  const [movieType, setMovieType] = useState<MovieType | "">("");

  const handleSearch = useCallback((q: string) => {
    setQ(q);
  }, []);

  const handleYearChange = (year: Moment | null) => {
    if (year == null) setYear(null);
    else setYear(year.year());
  };

  const handleMovieTypeChange = (type: MovieType | "") => {
    setMovieType(type);
  };

  const { debouncedCallback: debouncedHandler } = useDebouncedCallback({ callback: handleSearch, delay: 700 });

  const handlePagination = (newPaginationModel: GridPaginationModel) => {
    setPagination(newPaginationModel);
  };

  return (
    <>
      <CssBaseline />
      <div>
        <div className="filters-container">
          <MovieSearch onSearch={debouncedHandler} />
          <YearSelect onSelect={handleYearChange} />
          <MovieTypeSelect onSelect={handleMovieTypeChange} />
        </div>
        <MoviesTable
          handlePagination={handlePagination}
          q={q}
          pagination={pagination}
          year={year}
          movieType={movieType}
        />
      </div>
    </>
  );
}
