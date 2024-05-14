import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { useCallback, useState } from "react";
import { GridPaginationModel } from "@mui/x-data-grid";
import { MovieSearch } from "./components/MovieSearch";
import "./App.scss";
import { useDebouncedCallback } from "./hooks/useDebouncedCallback";
import { MoviesTable } from "./components/MoviesTable";

function App() {
  const [pagination, setPagination] = useState<GridPaginationModel>({ page: 0, pageSize: 10 });
  const [q, setQ] = useState<string>("Pokemon");

  const handleSearch = useCallback((q: string) => {
    setQ(q);
  }, []);

  const { debouncedCallback: debouncedHandler } = useDebouncedCallback({ callback: handleSearch, delay: 700 });

  const handlePagination = (newPaginationModel: GridPaginationModel) => {
    setPagination(newPaginationModel);
  };

  return (
    <>
      <CssBaseline />
      <div>
        <MovieSearch onSearch={debouncedHandler} />
        <MoviesTable handlePagination={handlePagination} q={q} pagination={pagination} />
      </div>
    </>
  );
}

export default App;
