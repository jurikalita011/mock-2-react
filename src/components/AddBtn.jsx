import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/products/action";

const initialState = {
  image: "",
  name: "",
  desc: "",
  gender: "",
  category: "",
};

export const AddBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products, setProducts] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducts((prev) => {
      return { ...prev, [name]: name === "price" ? +value : value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducts(products));
    setProducts(initialState);
  };
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your accounts</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <input
                type="text"
                name="image"
                value={products.image}
                onChange={(e) => handleChange(e)}
                placeholder="Enter image url here"
              />
              <input
                type="text"
                name="name"
                placeholder="Enter name here"
                value={products.name}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                name="desc"
                placeholder="Enter description here"
                value={products.desc}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                name="price"
                value={products.price}
                placeholder="enter price here"
                onChange={(e) => handleChange(e)}
              />
              <select
                name="gender"
                value={products.gender}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {products.gender === "male" ? (
                <select
                  name="category"
                  value={products.category}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Select Category for Male</option>
                  <option value="shirts">Shirts</option>
                  <option value="jeans">Jeans</option>
                  <option value="trousers">Trousers</option>
                  <option value="suits">Suits</option>
                </select>
              ) : (
                <select
                  name="category"
                  value={products.category}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="">Select Category for Female</option>
                  <option value="saree">Saree</option>
                  <option value="kurti">Kurti</option>
                  <option value="lehenga">Lehenga</option>
                  <option value="jackets">Jackets</option>
                </select>
              )}
            </ModalBody>

            <ModalFooter>
              <button colorScheme="blue" mr={3} type="submit">
                Save
              </button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
