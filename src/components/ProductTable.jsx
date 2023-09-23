import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/products/action";
import { Box } from "@chakra-ui/react";
import { ProTable } from "./ProTable";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const ProductTable = () => {
  const products = useSelector((store) => store.productReducer.products);
  const dispatch = useDispatch();
  console.log(products, "all");
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Box>
      {products?.map((el) => {
        return (
          <TableContainer key={el.id}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>image</Th>
                  <Th>name</Th>
                  <Th>desc</Th>
                  <Th isNumeric>price</Th>
                  <Th>category</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{el.image}</Td>
                  <Td>{el.name}</Td>
                  <Td>{el.desc}</Td>
                  <Td isNumeric>{el.price}</Td>
                  <Td>{el.category}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        );
      })}
    </Box>
  );
};
