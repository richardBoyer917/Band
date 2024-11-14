import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const initialRows = [
  { id: 1, name: "Row 1" },
  { id: 2, name: "Row 2" },
  { id: 3, name: "Row 3" },
  { id: 4, name: "Row 4" },
];

export default function MoveableDataTable() {
  const [rows, setRows] = useState(initialRows);

  const moveRow = (fromIndex, toIndex) => {
    if (toIndex >= 0 && toIndex < rows.length) {
      const updatedRows = [...rows];
      const [movedRow] = updatedRows.splice(fromIndex, 1);
      updatedRows.splice(toIndex, 0, movedRow);
      setRows(updatedRows);
    }
  };

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        const rowIndex = rows.findIndex((row) => row.id === params.row.id);

        return (
          <div>
            <Button
              size="small"
              onClick={() => moveRow(rowIndex, rowIndex - 1)}
              disabled={rowIndex === 0}
            >
              Move Up
            </Button>
            <Button
              size="small"
              onClick={() => moveRow(rowIndex, rowIndex + 1)}
              disabled={rowIndex === rows.length - 1}
            >
              Move Down
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
