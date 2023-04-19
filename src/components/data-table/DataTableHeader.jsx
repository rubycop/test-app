import * as React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

export const DataTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell align="right">Price</TableCell>
      <TableCell align="right">Country</TableCell>
      <TableCell align="right">Actions</TableCell>
    </TableRow>
  </TableHead>
);
