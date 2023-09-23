import { Box, Input, Select } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AddBtn } from "../components/AddBtn";
import { ProductTable } from "../components/ProductTable";

export const Dashboard = () => {
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();

  return (
    <Box margin={"50px auto"}>
      <Navbar />

      <AddBtn />
      <ProductTable />
    </Box>
  );
};
