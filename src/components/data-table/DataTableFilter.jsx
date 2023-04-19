import { Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterItemsByName } from "../../store/carSlice";

export const DataTableFilter = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const value = e.target.value;

    setQuery(value);
    dispatch(filterItemsByName(value));
  };

  return (
    <Input
      type="text"
      placeholder="filter by name ..."
      onChange={handleFilter}
      value={query}
    />
  );
};
