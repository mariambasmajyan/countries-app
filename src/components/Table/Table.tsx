import React, { useState, useEffect } from 'react';
import {
  StyledTableCell,
  StyledTableContainer,
  StyledTableHeadCell,
  StyledTableRow,
} from './Table.styles';
import {
  Table as MuiTable,
  TableBody,
  TableRow,
  Paper,
  TablePagination,
  TableHead,
} from '@mui/material';

export type Column<T> = {
  id: keyof T;
  label: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  rows: T[];
  rowsPerPage?: number;
  filter?: string;
};

export const Table = <T,>({ columns, rows, rowsPerPage = 10, filter = '' }: TableProps<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPageState, setRowsPerPageState] = useState(rowsPerPage);
  const [filteredRows, setFilteredRows] = useState(rows);

  useEffect(() => {
    setFilteredRows(
      rows.filter((row) =>
        columns.some((column) =>
          String(row[column.id]).toLowerCase().includes(filter.toLowerCase()),
        ),
      ),
    );

    setPage(0);
  }, [filter, rows, columns]);

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPageState(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = filteredRows.slice(
    page * rowsPerPageState,
    page * rowsPerPageState + rowsPerPageState,
  );

  return (
    <Paper>
      <StyledTableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableHeadCell key={String(column.id)}>{column.label}</StyledTableHeadCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedRows.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                {columns.map((column) => (
                  <StyledTableCell key={String(column.id)}>
                    {String(row[column.id])}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
            {paginatedRows.length === 0 && (
              <TableRow>
                <StyledTableCell colSpan={columns.length} align="center">
                  No data available
                </StyledTableCell>
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </StyledTableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPageState}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
