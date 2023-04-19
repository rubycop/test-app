import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CarForm } from "../components/CarForm";
import { DataTable } from "../components/data-table/DataTable";
import { Popup } from "../components/ui";
import { ThemeContext } from "../context";
import { setItem } from "../store/carSlice";
import { useDispatch } from "react-redux";
import { DataTableFilter } from "../components/data-table/DataTableFilter";
import { open } from "../store/modalSlice";

export const CarList = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const isDarkTheme = theme === "dark";

  const handleThemeChange = () => setTheme(isDarkTheme ? "light" : "dark");
  const handleModalOpen = () => {
    dispatch(setItem());
    dispatch(open());
  };

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center">
      <div className="flex-1 w-1/2 mt-14">
        <div className="flex flex-col gap-5 justify-center bg-white p-5 rounded items-center">
          <div className="w-full mb-5 flex flex-row justify-between">
            <Button variant="contained" onClick={handleThemeChange}>
              Change theme
            </Button>
            <DataTableFilter />
          </div>

          <DataTable />

          <Button variant="contained" onClick={handleModalOpen}>
            Add Item
          </Button>
        </div>

        <Popup title="Create Car item">
          <CarForm />
        </Popup>
      </div>
    </div>
  );
};
