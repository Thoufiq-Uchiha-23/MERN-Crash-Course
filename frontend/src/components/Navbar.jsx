import { Container, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <Container maxW={"100%"} px={4}>
      <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={{
        base: "column",
        sm: "row"
      }}
      >
        <Text
					fontSize={{ base: "22", sm: "28" }}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					<Link to={"/"}>Product Store 🛒</Link>
				</Text>
      </Flex>
    </Container>
  )
}

export default Navbar
