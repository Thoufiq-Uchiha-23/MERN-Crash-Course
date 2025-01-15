import {
  Box,
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  Input,
  Group,
  // Card,
  Button,
} from "@chakra-ui/react";
import {
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTrigger,
  PopoverCancel,
} from "@/components/ui/popover";
import { useRef, useState } from "react";

import { MdDelete, MdEdit } from "react-icons/md";
import { useColorModeValue } from "./ui/color-mode";
import { useProductStore } from "@/store/product";
import { Toaster, toaster } from "@/components/ui/toaster";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
  };
  const handleUpdatedProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: "Product Updated Successfully",
        status: "success",
        isClosable: true,
      });
    }
	};

  const ref = useRef(null);

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Toaster />
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w="full"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={5}>
          <PopoverRoot initialFocusEl={() => ref.current}>
            <PopoverTrigger asChild>
              <MdEdit />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>Update the Product</PopoverHeader>
              <PopoverArrow />
              <PopoverBody>
                <VStack spacing={4}>
                  <Input
                    placeholder="Product Name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                  />
                  <Input
                    placeholder="Price"
                    name="price"
                    type="number"
                    value={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                  />
                  <Input
                    placeholder="Image URL"
                    name="image"
                    value={updatedProduct.image}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                  />
                </VStack>
              </PopoverBody>
              <PopoverFooter>
                <Group>
                  <Button id="update-Button" bg={"skyblue"} mr={3} onClick={() => handleUpdatedProduct(product._id, updatedProduct)}>
                    Update
                  </Button>
                  <PopoverCancel />
                </Group>
              </PopoverFooter>
              <PopoverCloseTrigger />
            </PopoverContent>
          </PopoverRoot>

          <MdDelete onClick={() => handleDeleteProduct(product._id)} />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
