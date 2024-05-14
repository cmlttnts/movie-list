import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
import { DataTable } from "./components/DataGrid";
import { useMemo, useState } from "react";
import { GridColDef, GridPaginationModel, GridValidRowModel } from "@mui/x-data-grid";
import { MovieSearch } from "./components/MovieSearch";
import "./App.scss";
import { useSearchMoviesByTitleQuery } from "./services/movie";
import { MovieSearchItem } from "./types";
import { Alert } from "@mui/material";

function App() {
  const [pagination, setPagination] = useState<GridPaginationModel>({ page: 0, pageSize: 10 });
  const [q, setQ] = useState<string>("Pokemon");
  const { data, error, isLoading } = useSearchMoviesByTitleQuery({ title: q, page: pagination.page + 1 });

  const rowsWithId = useMemo(() => {
    if (!data) return [];
    if ("Error" in data) return [];
    return data?.Search?.map((item) => ({ ...item, id: item.imdbID })) || [];
  }, [data]);

  if (data && "Error" in data) {
    return <Alert severity="error">{data.Error}</Alert>;
  }
  if (error) {
    const castedError = error as unknown as { message: string; data: { Error: string }; status: number };
    return <Alert severity="error">{castedError?.message || castedError?.data?.Error}</Alert>;
  }

  const handlePagination = (newPaginationModel: GridPaginationModel) => {
    setPagination(newPaginationModel);
  };

  const handleSearch = (q: string) => {
    setQ(q);
  };

  const columns: readonly GridColDef<MovieSearchItem>[] = [
    {
      field: "id",
      headerName: "#",
      width: 20,
      renderCell: (params) => {
        // pagination as well, so add page*pageSize
        return (pagination.page * pagination.pageSize + params.api.getAllRowIds().indexOf(params.id) + 1).toString();
      },
    },
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
    },
    { field: "Year", headerName: "Year", align: "right", width: 120, headerAlign: "right" },
    { field: "imdbID", headerName: "imdbID", flex: 1 },
  ];

  return (
    <>
      <CssBaseline />
      <div>
        <MovieSearch onSearch={handleSearch} />
        <DataTable
          rows={rowsWithId}
          columns={columns}
          pagination={pagination}
          handlePagination={handlePagination}
          dataLoading={isLoading}
          totalDataCount={data?.totalResults ? parseInt(data.totalResults) : undefined}
        />
      </div>
    </>
  );
}

export default App;
export type A = GridValidRowModel;
