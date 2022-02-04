import { useState } from "react";
import { nanoid } from "nanoid";
import stays from "/stays.json";
import { Box, Button, Center, Grid, Stack, Text, useDisclosure, Icon } from "@chakra-ui/react";

import DropMenu from "../components/DropMenu";
import Header from "../components/Header";
import StayCard from "../components/StayCard";
import { RiFilter3Fill } from "react-icons/ri";

export default function Home() {
  const [mock, setMock] = useState(stays);
  const [userData, setUserData] = useState({});
  const [fullData, setFullData] = useState({});
  const { onOpen, isOpen, onClose } = useDisclosure();
  //Filter
  const handleFilter = (adults, kids) => {
    const guests = adults + kids;
    const filtersito = mock.filter((location) => location.city === userData.country.split(",", 1).toString() && location.maxGuests >= guests);
    setMock(filtersito);
  };
  //Click reset filter
  const handleClear = () => {
    setMock(stays);
    setUserData({});
    setFullData({});
  };
  return (
    <Box as="main">
      <Header onOpen={onOpen} fullData={fullData} userData={userData} />
      <DropMenu isOpen={isOpen} onClose={onClose} userData={userData} setUserData={setUserData} setFullData={setFullData} fullData={fullData} handleFilter={handleFilter} setMock={setMock} />
      <Stack padding={{ base: 6, lg: 16 }}>
        <Stack direction="row" justifyContent={"space-between"}>
          <Text as="h1" fontWeight={700} fontSize={"24px"} marginBottom={10}>
            Stays in {userData.country === undefined ? "Helsinki" : userData.country}
          </Text>
          <Text as="p" color="brand.200" fontWeight={500}>
            +{mock.length - 1} stays
          </Text>
        </Stack>
        <Button
          _hover={{ bg: "red.500" }}
          size="md"
          width={{ base: "unset", lg: "10rem" }}
          bg="brand.100"
          color="gray.100"
          disabled={fullData.userData === undefined ? "disabled" : null}
          onClick={handleClear}
        >
          Reset filters <Icon as={RiFilter3Fill} />
        </Button>
        {mock.length === 0 && <Center width={"100%"}>Not results found 😔</Center>}
        <Grid templateColumns={{ base: "repeat(1, minmax(200px, 1fr))", lg: "repeat(3, minmax(200px, 1fr))" }} gap={16}>
          {mock.map((stay) => (
            <StayCard key={nanoid()} stay={stay} />
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
