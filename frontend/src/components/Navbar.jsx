import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaRegPlusSquare } from "react-icons/fa";
import { ColorModeIcon, useColorMode } from "./ui/color-mode";
// import { useProductStore } from "@/store/product";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Container maxW={"100%"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDirection={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          // bgGradient={"linear(to-r, cyan.400, blue.500)"}
          // bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <FaRegPlusSquare />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            <ColorModeIcon />
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
