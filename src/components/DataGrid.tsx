import { DataGrid, GridColDef, GridPaginationModel, GridValidRowModel } from "@mui/x-data-grid";

type DataTableProps<T extends GridValidRowModel> = {
  rows: readonly T[];
  columns: readonly GridColDef<T>[];
  pagination: GridPaginationModel;
  handlePagination: (newPaginationModel: GridPaginationModel) => void;
  dataLoading: boolean;
  totalDataCount?: number;
};

export function DataTable<T extends GridValidRowModel>({
  rows,
  columns,
  pagination,
  handlePagination,
  dataLoading,
  totalDataCount,
}: DataTableProps<T>) {
  return (
    <div style={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={pagination}
        pageSizeOptions={[10]}
        rowCount={totalDataCount || 0}
        paginationMode="server"
        onPaginationModelChange={handlePagination}
        loading={dataLoading}
        rowHeight={50}
      />
    </div>
  );
}
