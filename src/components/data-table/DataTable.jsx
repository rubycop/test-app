import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { PER_PAGE } from "../../utils/contants";

export const DataTable = () => {
  const carsData = useSelector((state) => state.car.cars);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + PER_PAGE;
  const currentItems = carsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(carsData.length / PER_PAGE);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * PER_PAGE) % carsData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="datatable">
          <DataTableHeader />
          <TableBody>
            {currentItems.map((car) => (
              <DataTableRow key={car.name} row={car} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ReactPaginate
        className="text-black flex gap-5"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
