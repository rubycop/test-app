import React, { useContext } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteItem, setItem } from "../../store/carSlice";
import { open } from "../../store/modalSlice";

export const DataTableRow = ({ row }) => {
  const dispatch = useDispatch();

  const handleEdit = (item) => {
    dispatch(setItem(item));
    dispatch(open());
  };

  const handleDelete = (item) => {
    dispatch(deleteItem(item.uid));
  };

  return (
    <TableRow key={row.uid}>
      <TableCell>{row.name}</TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell align="right">{row.country}</TableCell>
      <TableCell align="right">
        <IconButton onClick={() => handleEdit(row)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(row)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
