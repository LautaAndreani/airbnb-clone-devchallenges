import { useState } from "react";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, Select, Stack, Text } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import stays from "/stays.json";
import Guests from "../Guests/index";

const DropMenu = ({ isOpen, onClose, setUserData, userData, setFullData, fullData, handleFilter, setMock }) => {
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);
  //View guest section
  const [view, setView] = useState(false);
  //Read inputs
  const handleRead = (e) => {
    setUserData({ [e.target.name]: e.target.value });
  };
  //Submit Form
  const handleSubmit = () => {
    setFullData({ userData, kids, adults });
    onClose();
    handleFilter(adults, kids);
    setView(view === false);
  };

  return (
    <>
      <Stack>
        <Drawer onClose={onClose} placement={"top"} isOpen={isOpen} motionPreset="scale" size={"xl"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Select your travel specs 🗺️</DrawerHeader>
            <DrawerBody>
              <Stack
                direction={{ base: "column", lg: "row" }}
                spacing={{ base: 5, lg: 0 }}
                justifyContent={"space-between"}
                borderRadius={"xl"}
                boxShadow={"0px 1px 6px rgba(0, 0, 0, 0.1)"}
                alignItems={"center"}
                padding={3}
              >
                <Stack w={{ base: "100%", lg: "40%" }} bg="brand.backgroundColor" borderRadius={"xl"}>
                  <Text fontWeight={700} padding="2" marginBottom={-3}>
                    Location
                  </Text>
                  <Select _focus={""} isRequired name="country" border="none" width={"100%"} onChange={handleRead} onClick={() => setMock(stays)} value={userData.country}>
                    <option value="Helsinki, Finland">Helsinki, Finland</option>
                    <option value="Oulu, Finland">Oulu, Finland</option>
                    <option value="Turku, Finland">Turku, Finland</option>
                    <option value="Vaasa, Finland">Vaasa, Finland</option>
                  </Select>
                </Stack>
                <Stack direction={"row"} width={{ base: "100%", lg: "40%" }} alignItems={"center"}>
                  <Stack padding={3} bg="brand.backgroundColor" onClick={() => setView(!view)} width={"100%"} borderRadius={"xl"}>
                    <Text fontWeight={700} paddingRight={10}>
                      Guests
                    </Text>
                    <Text display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                      {fullData.adults === undefined ? "Add guests" : `${fullData.adults} adults, ${fullData.kids} kids`} <Icon as={RiArrowDownSLine} />
                    </Text>
                  </Stack>
                </Stack>
                <Button type="submit" w={{ base: "100%", lg: "unset" }} onClick={handleSubmit} bg="brand.100" color="brand.backgroundColor" _hover={{ bg: "red.500" }}>
                  <Icon as={FaSearch} marginRight={3} />
                  Search
                </Button>
              </Stack>
              {/* Guests component */}
              <Stack display={!view ? "none" : "flex"} width={"100%"} direction="row" justifyContent={{ base: "flex-start", lg: "space-around" }} marginTop={5}>
                <Box marginLeft={{ base: "unset", lg: 180 }}>
                  <Guests handleRead={handleRead} adults={adults} setAdults={setAdults} kids={kids} setKids={setKids} />
                </Box>
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={() => onClose()} borderColor="brand.100" color="gray.700">
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Stack>
    </>
  );
};

export default DropMenu;
