import { Alert } from "@mui/material";
import { DataTable } from "./DataGrid";
import { useMemo } from "react";
import { useSearchMoviesByTitleQuery } from "../services/movie";
import { GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { MovieSearchItem } from "../types";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export function MoviesTable({
  handlePagination,
  pagination,
  q,
}: {
  handlePagination: (newPaginationModel: GridPaginationModel) => void;
  q: string;
  pagination: GridPaginationModel;
}) {
  const { data, error, isFetching } = useSearchMoviesByTitleQuery({ title: q, page: pagination.page + 1 });

  const rowsWithId = useMemo(() => {
    if (!data) return [];
    if ("Error" in data) return [];
    return data?.Search?.map((item) => ({ ...item, id: item.imdbID })) || [];
  }, [data]);

  if (error) {
    const castedError = error as unknown as { message: string; data: { Error: string }; status: number };
    return <Alert severity="error">{castedError?.message || castedError?.data?.Error}</Alert>;
  }

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
      renderCell: (param) => {
        return (
          <a href={`https://www.imdb.com/title/${param.row.imdbID}`} target="_blank" rel="noreferrer">
            {param.value}
          </a>
        );
      },
    },
    { field: "Year", headerName: "Year", align: "right", width: 120, headerAlign: "right" },
    {
      field: "imdbID",
      headerName: "imdbID",
      flex: 1,
      renderCell: (param) => {
        return (
          <a
            href={`https://www.imdb.com/title/${param.row.imdbID}`}
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center" }}
          >
            {param.value} <OpenInNewIcon />
          </a>
        );
      },
    },
  ];
  return (
    <>
      {data && "Error" in data ? (
        <Alert severity="error">{data.Error}</Alert>
      ) : (
        <DataTable
          rows={rowsWithId}
          columns={columns}
          pagination={pagination}
          handlePagination={handlePagination}
          dataLoading={isFetching}
          totalDataCount={data?.totalResults ? parseInt(data.totalResults) : undefined}
        />
      )}
    </>
  );
}
