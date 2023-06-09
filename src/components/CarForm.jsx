import { useForm } from "react-hook-form";
import { CARS } from "../utils/contants";
import React from "react";
import {
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
  Stack,
  Input,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, editItem } from "../store/carSlice";
import { useSelector } from "react-redux";
import { close } from "../store/modalSlice";
import { setOffset } from "../store/paginationSlice";

export const CarForm = () => {
  const currentItem = useSelector((state) => state.car.currentItem);
  const dispatch = useDispatch();

  const [name, setName] = useState(currentItem?.name);
  const [price, setPrice] = useState(currentItem?.price ?? 0);
  const [country, setCountry] = useState(currentItem?.country);

  const defaultUid = new Date() / 1000;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    if (currentItem)
      dispatch(editItem({ uid: currentItem.uid, name, price, country }));
    else {
      dispatch(addItem({ uid: defaultUid, name, price, country }));
      dispatch(setOffset(0));
    }

    dispatch(close());
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              {...register("name", { required: true })}
              autoFocus
              id="name"
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <FormHelperText>{errors.name && CARS.errors.name}</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Price</FormLabel>
            <Input
              {...register("price", { min: 1 })}
              defaultValue={0}
              type="text"
              placeholder="name"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <FormHelperText>{errors.price && CARS.errors.price}</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input
              {...register("country")}
              id="country"
              type="text"
              placeholder="country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
            />
          </FormControl>

          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </div>
  );
};
