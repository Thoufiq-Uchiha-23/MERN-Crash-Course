import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import CreatePage from "./components/pages/CreatePage";
import { Route, Routes } from "react-router-dom";
import { useColorModeValue } from "@/components/ui/color-mode";
// import { useProductStore } from "./store/product";

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
