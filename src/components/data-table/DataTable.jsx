import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";
import React from "react";
import { useSelector } from "react-redux";

export const DataTable = () => {
  const carsData = useSelector((state) => state.car.cars);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="datatable">
        <DataTableHeader />
        <TableBody>
          {carsData.map((car) => (
            <DataTableRow key={car.name} row={car} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
