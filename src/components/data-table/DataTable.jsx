import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import { PER_PAGE } from "../../utils/contants";
import { setOffset } from "../../store/paginationSlice";

export const DataTable = () => {
  const carsData = useSelector((state) => state.car.cars);
  const offset = useSelector((state) => state.pagination.offset);
  const dispatch = useDispatch();

  const endOffset = offset + PER_PAGE;
  const currentItems = carsData.slice(offset, endOffset);
  const pageCount = Math.ceil(carsData.length / PER_PAGE);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * PER_PAGE) % carsData.length;
    dispatch(setOffset(newOffset));
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
