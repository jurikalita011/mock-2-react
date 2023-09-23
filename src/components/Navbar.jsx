import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggleBtn = () => {
    setToggle(!toggle);
  };
  return (
    <HStack margin={"auto"} w={"40%"} gap={0} marginTop={"25px"}>
      <Link to={"/"}>
        <Button
          margin={"auto"}
          display={"block"}
          borderRadius={"5px 0px 0px 5px"}
          w={"275px"}
          onClick={handleToggleBtn}
          textAlign={"center"}
          color={"white"}
          bg={toggle ? "#6979F8" : "#CDD2FD"}
          _hover={{ bg: toggle ? "##6979F8" : "#CDD2FD" }}
        >
          DASHBOARD
        </Button>
      </Link>

      <Link to={"/stats"}>
        <Button
          margin={"auto"}
          display={"block"}
          w={"275px"}
          onClick={handleToggleBtn}
          textAlign={"center"}
          borderRadius={"0px 5px 5px 0px"}
          color={"white"}
          bg={!toggle ? "#6979F8" : "#CDD2FD"}
          _hover={{ bg: !toggle ? "##6979F8" : "#CDD2FD" }}
        >
          STATS
        </Button>
      </Link>
    </HStack>
  );
};
