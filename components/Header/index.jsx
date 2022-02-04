import { Icon, Select, Stack, Image, Box, Input, InputGroup, Text, InputRightElement, Button } from "@chakra-ui/react";
import { RiGroupFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const Header = ({ onOpen, fullData, userData }) => {
  return (
    <Stack
      as="header"
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ base: "flex-start", md: "center" }}
      padding={"1rem"}
      borderBottom={"1px solid"}
      borderColor={"gray.200"}
    >
      <Link href="/">
        <a>
          <Box>
            <Image src="/logo.png" alt="logo windbnb" width={"100%"} />
          </Box>
        </a>
      </Link>
      <Stack
        transition={".2s ease-in-out"}
        _hover={{ bg: "#e5e5e5" }}
        direction="row"
        spacing={0}
        padding={5}
        borderRadius={"xl"}
        boxShadow={"0px 1px 6px rgba(0, 0, 0, 0.1)"}
        height="3rem"
        alignItems={"center"}
        onClick={() => onOpen()}
      >
        <Input
          type="text"
          _hover={{ cursor: "pointer", bg: "none" }}
          isReadOnly
          value={userData.country === undefined ? "Helsinki, Finland" : userData.country}
          border="none"
          borderRight={"1px solid lightgray"}
          borderRadius={"none"}
        />
        <InputGroup>
          <Input
            color="gray.400"
            border="none"
            type="text"
            _hover={{ cursor: "pointer" }}
            isReadOnly
            value={fullData.adults === undefined ? "Add guests" : `${fullData.adults} adults, ${fullData.kids} kids`}
            placeholder="Add guests"
            borderRight={"1px solid lightgray"}
            borderRadius={"none"}
          />
          <InputRightElement>
            <RiGroupFill />
          </InputRightElement>
        </InputGroup>
        <Button type="submit" bg="none" _hover="">
          <Icon as={FaSearch} color="brand.100" />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
