import { Box, Text } from "@chakra-ui/react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Allroutes } from "./routes/Allroutes";

function App() {
  return (
    <Box margin={"auto"} w={"90%"} border={"2px solid black"}>
      <Text fontWeight={"bold"} fontSize={"30px"} textAlign={"center"}>
        ADMIN DASHBOARD
      </Text>
      <Allroutes />
    </Box>
  );
}

export default App;
