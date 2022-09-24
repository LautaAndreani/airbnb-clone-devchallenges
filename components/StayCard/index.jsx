import { Badge, Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { IoMdBed } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";

const StayCard = ({ stay }) => {
  return (
    <Box>
      <Box borderRadius="xl" overflow={"hidden"} width={"100%"} transition=".3s ease-in-out" _hover={{ transform: "scale(1.02)" }}>
        <Image src={stay.photo} width={100} height={70} layout="responsive" alt="apartment image" objectFit="cover" priority />
      </Box>
      <Stack direction="column" marginTop={5}>
        <Stack direction="row" alignItems="center" justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            {stay.superHost && (
              <Text
                as="h2"
                fontSize={{ base: ".5rem", lg: ".8rem" }}
                fontWeight={700}
                padding={2}
                border="2px solid"
                color={"brand.superHost"}
                borderColor={"brand.superHost"}
                borderRadius={"full"}
              >
                SUPER HOST
              </Text>
            )}
            <Text color="brand.200" fontWeight={500} marginLeft={1}>
              {stay.type}
              {stay.beds && (
                <Badge colorScheme={"red"} as="span" marginLeft={1}>
                  {stay.beds} <Icon as={IoMdBed} fontSize={".9rem"} />
                </Badge>
              )}
              <Badge colorScheme={"red"} as="span" marginLeft={1}>
                {stay.maxGuests} <Icon as={IoPerson} />
              </Badge>
            </Text>
          </Flex>
          <Stack direction={"row"} alignItems="center">
            <Icon as={AiFillStar} color="brand.100" />
            <Text as="p" fontWeight={500}>
              {stay.rating}
            </Text>
          </Stack>
        </Stack>
        <Text as="strong" fontSize={"20px"} paddingTop={2}>
          {stay.title}
        </Text>
      </Stack>
    </Box>
  );
};

export default StayCard;
