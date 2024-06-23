import styled from 'styled-components';
import { TableCell, TableContainer, TableRow } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)`
  && {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
`;

export const StyledTableRow = styled(TableRow)`
  height: 56px;

  &:nth-of-type(even) {
    background-color: #f9f9f9;
  }

  &:last-child td,
  &:last-child th {
    border: 0;
  }

  &:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

export const StyledTableCell = styled(TableCell)`
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  padding: 16px;
  border-spacing: 0 15px;
`;

export const StyledTableHeadCell = styled(TableCell)`
  background-color: #333;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  padding: 16px;
`;
